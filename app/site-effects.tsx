"use client";

import { useEffect } from "react";
import * as THREE from "three";

const KM_PER_MILE = 1.60934;

const ACTIVITIES = [
  "Running", "Walking", "Cycling", "Hiking", "Open Water Swimming", "Kayaking",
  "Paddleboarding", "Roller Skating", "Skateboarding", "Dog Walking", "Wheelchair Activity",
  "Gym Workout", "Rock Climbing", "Skiing", "Snowboarding", "Football", "Basketball", "Tennis",
  "Badminton", "Cricket", "Rugby", "Boxing", "Martial Arts", "Yoga", "Calisthenics", "Golf",
  "Disc Golf", "Frisbee", "Canoeing", "Rowing", "Commute Ride", "Nature Walk", "Volleyball",
  "Scooter Riding",
];

/**
 * Everything the page does once it is in a browser: the unit switch, the
 * pinned phone tour, the reveals, and the WebGL layer behind it all.
 *
 * Kept in one place so the page itself stays markup, and so every listener,
 * observer and animation frame is torn down together.
 */
export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // ── Units: one switch flips every figure on the page ──
    let imperial = false;
    const kmButton = document.getElementById("unit-km");
    const miButton = document.getElementById("unit-mi");

    const renderUnits = () => {
      document.querySelectorAll<HTMLElement>(".dist").forEach((el) => {
        const km = parseFloat(el.dataset.km ?? "");
        if (Number.isNaN(km)) return;
        const value = imperial ? km / KM_PER_MILE : km;
        el.textContent = value >= 100 ? String(Math.round(value)) : value.toFixed(1);
      });
      document.querySelectorAll<HTMLElement>(".pace").forEach((el) => {
        const perKm = parseFloat(el.dataset.secPerKm ?? "");
        if (Number.isNaN(perKm)) return;
        const secs = Math.round(imperial ? perKm * KM_PER_MILE : perKm);
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        el.textContent = `${m}:${s < 10 ? "0" : ""}${s}`;
      });
      document.querySelectorAll<HTMLElement>(".u-dist").forEach((el) => {
        el.textContent = imperial ? "mi" : "km";
      });
      document.querySelectorAll<HTMLElement>(".u-pace").forEach((el) => {
        el.textContent = imperial ? "/mi" : "/km";
      });
      kmButton?.setAttribute("aria-pressed", String(!imperial));
      miButton?.setAttribute("aria-pressed", String(imperial));
    };

    const setUnits = (next: boolean) => {
      imperial = next;
      renderUnits();
      try {
        localStorage.setItem("fitrybe-units", next ? "imperial" : "metric");
      } catch {
        // A private window refuses storage; the choice just will not persist.
      }
    };

    const onKm = () => setUnits(false);
    const onMi = () => setUnits(true);
    kmButton?.addEventListener("click", onKm);
    miButton?.addEventListener("click", onMi);
    cleanups.push(() => {
      kmButton?.removeEventListener("click", onKm);
      miButton?.removeEventListener("click", onMi);
    });

    try {
      imperial = localStorage.getItem("fitrybe-units") === "imperial";
    } catch {
      imperial = false;
    }
    renderUnits();

    // ── Marquee of the activities the app supports ──
    const track = document.getElementById("marquee");
    if (track) {
      const row = ACTIVITIES.map((a) => `<span>${a}</span>`).join("");
      track.innerHTML = row + row;
    }

    // ── Heatmaps, from a fixed pattern so every visit matches ──
    const paintHeat = (el: HTMLElement | null, count: number) => {
      if (!el) return;
      let seed = 11;
      let cells = "";
      for (let i = 0; i < count; i++) {
        seed = (seed * 1103515245 + 12345) % 2147483648;
        const r = seed / 2147483648;
        const level = r > 0.84 ? 4 : r > 0.67 ? 3 : r > 0.47 ? 2 : r > 0.27 ? 1 : 0;
        cells += `<i data-l="${level}"></i>`;
      }
      el.innerHTML = cells;
    };
    paintHeat(document.getElementById("heat"), 133);
    paintHeat(document.getElementById("heatBig"), 182);

    // ── Pinned tour: the phone follows the copy ──
    const steps = Array.from(document.querySelectorAll<HTMLElement>(".step"));
    const phone = document.getElementById("phone");
    const showScreen = (name: string | undefined) => {
      document.querySelectorAll<HTMLElement>(".screen").forEach((s) => {
        s.setAttribute("data-active", String(s.id === `screen-${name}`));
      });
    };

    if (steps.length && "IntersectionObserver" in window) {
      const stepObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            steps.forEach((s) => s.classList.toggle("is-active", s === target));
            showScreen(target.dataset.screen);
            if (phone && !reduce) {
              // A small turn each time the screen changes, so the device feels
              // handled rather than pasted onto the page.
              const i = steps.indexOf(target);
              phone.style.setProperty("--ry", `${-13 + i * 5}deg`);
              phone.style.setProperty("--rx", `${4 - i * 1.4}deg`);
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      steps.forEach((s) => stepObserver.observe(s));
      cleanups.push(() => stepObserver.disconnect());
    }

    // ── Counters ──
    const counterFrames: number[] = [];
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const target = parseInt(el.dataset.count ?? "", 10);
      if (Number.isNaN(target) || reduce) return;
      let start: number | null = null;
      const tick = (now: number) => {
        if (start === null) start = now;
        const t = Math.min((now - start) / 1100, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) counterFrames.push(requestAnimationFrame(tick));
      };
      counterFrames.push(requestAnimationFrame(tick));
    });
    cleanups.push(() => counterFrames.forEach((id) => cancelAnimationFrame(id)));

    // ── Reveal below the fold, from a visible resting state ──
    if (!reduce && "IntersectionObserver" in window) {
      const below: HTMLElement[] = [];
      document
        .querySelectorAll<HTMLElement>(".sec-head, .card, .board, details, .brand-pill, .tick li")
        .forEach((el) => {
          if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
            el.classList.add("will-reveal");
            below.push(el);
          }
        });
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("will-reveal");
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px" },
      );
      below.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    }

    // ── Leaderboard bars fill when the card is reached ──
    const board = document.getElementById("board");
    if (board) {
      if ("IntersectionObserver" in window) {
        const boardObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              board.classList.add("is-seen");
              boardObserver.unobserve(board);
            });
          },
          { rootMargin: "0px 0px -20% 0px" },
        );
        boardObserver.observe(board);
        cleanups.push(() => boardObserver.disconnect());
      } else {
        board.classList.add("is-seen");
      }
    }

    // ── Cursor spotlight on glass cards ──
    if (window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll<HTMLElement>(".glass").forEach((card) => {
        const move = (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          card.style.setProperty("--my", `${e.clientY - rect.top}px`);
        };
        card.addEventListener("pointermove", move);
        cleanups.push(() => card.removeEventListener("pointermove", move));
      });
    }

    // ── Top bar and scroll progress ──
    const topbar = document.getElementById("topbar");
    const bar = document.getElementById("progressBar");
    const onScroll = () => {
      const y = window.scrollY;
      topbar?.classList.toggle("is-stuck", y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // ── The 3D layer: activity rings that become a dumbbell ──
    const canvas = document.getElementById("scene") as HTMLCanvasElement | null;
    if (canvas) {
      let renderer: THREE.WebGLRenderer | null = null;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      } catch {
        renderer = null; // No WebGL: the ambient gradients carry the page alone.
      }

      if (renderer) {
        const gl = renderer;
        gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        gl.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          42,
          window.innerWidth / window.innerHeight,
          0.1,
          100,
        );
        camera.position.set(0, 0, 13);

        scene.add(new THREE.AmbientLight(0xffffff, 0.55));
        const key = new THREE.DirectionalLight(0xffffff, 1.1);
        key.position.set(4, 6, 8);
        scene.add(key);
        const ember = new THREE.PointLight(0xff5a1f, 2.4, 40);
        ember.position.set(-6, 3, 6);
        scene.add(ember);
        const mint = new THREE.PointLight(0x37e0a8, 1.1, 36);
        mint.position.set(7, -4, 4);
        scene.add(mint);

        const material = (color: number, roughness: number, metalness: number) =>
          new THREE.MeshStandardMaterial({
            color,
            roughness,
            metalness,
            transparent: true,
            opacity: 1,
          });

        // Three activity rings, the shape every athlete already reads as a day
        // of training closed out.
        const rings = new THREE.Group();
        (
          [
            { r: 3.0, t: 0.34, c: 0xff5a1f },
            { r: 2.25, t: 0.3, c: 0xff8a4c },
            { r: 1.5, t: 0.26, c: 0x37e0a8 },
          ] as const
        ).forEach((spec, i) => {
          const mesh = new THREE.Mesh(
            new THREE.TorusGeometry(spec.r, spec.t, 22, 96, Math.PI * (i === 2 ? 1.35 : 1.7)),
            material(spec.c, 0.28, 0.65),
          );
          mesh.rotation.z = i * 0.7;
          rings.add(mesh);
        });
        rings.position.set(4.6, 0.4, 0);
        scene.add(rings);

        // A dumbbell, built from primitives rather than a downloaded model so
        // the page ships nothing extra.
        const bell = new THREE.Group();
        const steel = material(0xcfd6de, 0.32, 0.9);
        const grip = material(0x23262d, 0.55, 0.5);
        const barMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 5.6, 28), grip);
        barMesh.rotation.z = Math.PI / 2;
        bell.add(barMesh);
        [-1, 1].forEach((side) => {
          (
            [
              [2.1, 0.62, 0.85],
              [2.65, 0.52, 0.62],
            ] as const
          ).forEach((p) => {
            const plate = new THREE.Mesh(
              new THREE.CylinderGeometry(p[2], p[2], p[1], 36),
              steel,
            );
            plate.rotation.z = Math.PI / 2;
            plate.position.x = side * p[0];
            bell.add(plate);
          });
        });
        bell.position.set(4.4, 0, 0);
        bell.scale.setScalar(0.9);
        bell.visible = false;
        scene.add(bell);

        const pointer = { x: 0, y: 0 };
        const onPointer = (e: PointerEvent) => {
          pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
          pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        window.addEventListener("pointermove", onPointer, { passive: true });

        const layout = () => {
          const w = window.innerWidth;
          const narrow = w < 940;
          // On a phone the objects sit behind the copy, smaller and centred.
          rings.position.set(narrow ? 0 : 4.6, narrow ? 1.2 : 0.4, narrow ? -4 : 0);
          bell.position.set(narrow ? 0 : 4.4, narrow ? 0.4 : 0, narrow ? -4 : 0);
          rings.scale.setScalar(narrow ? 0.72 : 1);
          bell.scale.setScalar(narrow ? 0.66 : 0.9);
          camera.aspect = w / window.innerHeight;
          camera.updateProjectionMatrix();
          gl.setSize(w, window.innerHeight);
        };
        layout();

        let devicesTop = Number.MAX_SAFE_INTEGER;
        const measure = () => {
          const el = document.getElementById("devices");
          devicesTop = el ? el.getBoundingClientRect().top + window.scrollY : Number.MAX_SAFE_INTEGER;
        };
        measure();

        const onResize = () => {
          layout();
          measure();
        };
        window.addEventListener("resize", onResize);

        const clock = new THREE.Clock();
        let fade = 0; // 0 rings, 1 dumbbell
        let frameId = 0;

        const frame = () => {
          const dt = Math.min(clock.getDelta(), 0.05);
          const y = window.scrollY;

          // Past the devices section the rings hand over to the dumbbell.
          const want = y > devicesTop - window.innerHeight * 0.6 ? 1 : 0;
          fade += (want - fade) * Math.min(dt * 3.2, 1);

          rings.visible = fade < 0.985;
          bell.visible = fade > 0.015;
          rings.children.forEach((m) => {
            ((m as THREE.Mesh).material as THREE.MeshStandardMaterial).opacity = 1 - fade;
          });
          bell.children.forEach((m) => {
            ((m as THREE.Mesh).material as THREE.MeshStandardMaterial).opacity = fade;
          });

          const scroll = y * 0.0012;
          rings.rotation.y += dt * 0.22;
          rings.rotation.x = -0.35 + pointer.y * 0.12 + scroll * 0.3;
          rings.children.forEach((m, i) => {
            m.rotation.z += dt * (0.1 + i * 0.07);
          });

          bell.rotation.y = scroll * 1.4 + pointer.x * 0.25;
          bell.rotation.x = -0.25 + pointer.y * 0.14;
          bell.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.08;

          camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
          camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.04;
          camera.lookAt(scene.position);

          gl.render(scene, camera);
          frameId = requestAnimationFrame(frame);
        };

        canvas.classList.add("ready");
        if (reduce) {
          rings.rotation.x = -0.3;
          gl.render(scene, camera);
        } else {
          frameId = requestAnimationFrame(frame);
        }

        cleanups.push(() => {
          cancelAnimationFrame(frameId);
          window.removeEventListener("pointermove", onPointer);
          window.removeEventListener("resize", onResize);
          scene.traverse((obj) => {
            const mesh = obj as THREE.Mesh;
            if (mesh.geometry) mesh.geometry.dispose();
            const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
            if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
            else mat?.dispose();
          });
          gl.dispose();
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
