import Link from "next/link";
import type { CSSProperties } from "react";
import SiteEffects from "./site-effects";

/** A tick, used wherever a list states something the app actually does. */
function Tick() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="ambience" aria-hidden="true" />
      <canvas id="scene" aria-hidden="true" />

      <div className="progress" aria-hidden="true">
        <span id="progressBar" />
      </div>

      <div className="page">
        <header className="topbar" id="topbar">
          <div className="wrap topbar-inner">
            <a className="brand" href="#top">
              <span className="brand-mark" aria-hidden="true" />
              Fitrybe
            </a>
            <nav className="navlinks" aria-label="Sections">
              <a href="#tour">Tour</a>
              <a href="#trybes">Trybes</a>
              <a href="#progress">Progress</a>
              <a href="#devices">Devices</a>
              <a href="#safety">Privacy</a>
              <a href="#faq">FAQ</a>
            </nav>
            <div className="unit-toggle" role="group" aria-label="Distance units">
              <button type="button" id="unit-km" aria-pressed="true">
                km
              </button>
              <button type="button" id="unit-mi" aria-pressed="false">
                mi
              </button>
            </div>
          </div>
        </header>

        <main id="top">
          {/* ── Hero ───────────────────────────────────────── */}
          <section className="hero">
            <div className="wrap hero-inner">
              <span className="chip">
                <span className="pulse" aria-hidden="true" />
                In development · iOS and Android
              </span>
              <h1>
                Train together, <span className="shine">wherever</span> you are.
              </h1>
              <div className="hero-sub">
                <p className="lede">
                  Fitrybe records your run, ride or walk, then puts it where your people
                  are: a club with a weekly goal, a live session you can join from another
                  city, a feed only your Trybe sees.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#tour">
                    Take the tour
                  </a>
                  <a className="btn ghost" href="#devices">
                    Works with your watch
                  </a>
                </div>
              </div>

              <div className="hero-metrics">
                <div className="metric">
                  <span className="v" data-count="34">
                    34
                  </span>
                  <span className="k">activity types</span>
                </div>
                <div className="metric">
                  <span className="v" data-count="7">
                    7
                  </span>
                  <span className="k">badge categories</span>
                </div>
                <div className="metric">
                  <span className="v">Live</span>
                  <span className="k">group sessions</span>
                </div>
                <div className="metric">
                  <span className="v">0</span>
                  <span className="k">ads, ever</span>
                </div>
              </div>

              <span className="scroll-cue">
                <i aria-hidden="true" />
                Scroll
              </span>
            </div>
          </section>

          {/* ── Marquee ────────────────────────────────────── */}
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track" id="marquee" />
          </div>

          {/* ── Pinned tour ────────────────────────────────── */}
          <section id="tour">
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">The tour</span>
                <h2>Four screens, one habit</h2>
                <p className="lede">
                  Record it, share it with the people who care, watch the week fill in.
                  Scroll and the phone follows.
                </p>
              </div>

              <div className="showcase-grid">
                <div className="steps">
                  <article className="step is-active" data-screen="record">
                    <span className="step-index">01 / RECORD</span>
                    <h3>Press start. Everything else is automatic.</h3>
                    <p>
                      Pace, distance, climb and calories update as you move, and the route
                      is kept with the workout. Thirty-four activities are built in, from a
                      commute ride to a paddleboard or a wheelchair session.
                    </p>
                    <div className="step-marks">
                      <span className="mark">GPS trace</span>
                      <span className="mark">Live pace</span>
                      <span className="mark">Route kept</span>
                    </div>
                  </article>

                  <article className="step" data-screen="feed">
                    <span className="step-index">02 / SHARE</span>
                    <h3>A feed without strangers in it.</h3>
                    <p>
                      Post to everyone, or only to a Trybe, where it never leaves the group.
                      Photos, comments and kudos, with hide, report and block on every post
                      that is not yours.
                    </p>
                    <div className="step-marks">
                      <span className="mark">Per-post audience</span>
                      <span className="mark">Trybe-only posts</span>
                      <span className="mark">Real moderation</span>
                    </div>
                  </article>

                  <article className="step" data-screen="trybe">
                    <span className="step-index">03 / TRYBE</span>
                    <h3>A club that runs itself.</h3>
                    <p>
                      Set one weekly distance for the whole group and every member’s
                      workouts count toward it. Captains schedule events, members RSVP, the
                      leaderboard reorders itself.
                    </p>
                    <div className="step-marks">
                      <span className="mark">Weekly goal</span>
                      <span className="mark">Week · month · all time</span>
                      <span className="mark">Events and RSVP</span>
                    </div>
                  </article>

                  <article className="step" data-screen="progress">
                    <span className="step-index">04 / PROGRESS</span>
                    <h3>Two years of proof.</h3>
                    <p>
                      A heatmap shaded by how long you trained, a calendar that darkens as a
                      day gets busier, streaks that survive a rest day, and badges across
                      seven categories.
                    </p>
                    <div className="step-marks">
                      <span className="mark">Year and month views</span>
                      <span className="mark">Streaks</span>
                      <span className="mark">Personal bests</span>
                    </div>
                  </article>
                </div>

                <div className="phone-rail">
                  <div className="phone" id="phone">
                    <div className="phone-screen">
                      <div className="notch" aria-hidden="true" />
                      <div className="statusbar" aria-hidden="true">
                        <span>9:41</span>
                        <span>5G ▮</span>
                      </div>

                      {/* Record */}
                      <div className="screen" id="screen-record" data-active="true">
                        <div className="s-top">
                          <div>
                            <div className="s-title">Recording</div>
                            <div className="s-sub">Outdoor run · GPS locked</div>
                          </div>
                          <span className="p-tag live">Live</span>
                        </div>
                        <div className="p-card" style={{ textAlign: "center" }}>
                          <div className="s-sub">Moving time</div>
                          <div className="rec-timer">32:08</div>
                          <svg
                            className="route-mini"
                            viewBox="0 0 280 96"
                            role="img"
                            aria-label="Route traced so far"
                          >
                            <path
                              className="trace"
                              d="M14 78 C 44 44, 66 86, 96 56 C 126 26, 142 70, 172 52 C 202 34, 220 68, 266 30"
                            />
                          </svg>
                        </div>
                        <div className="rec-grid">
                          <div className="rec-cell">
                            <div className="k">Distance</div>
                            <div className="v">
                              <span className="dist" data-km="6.1">
                                6.1
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </div>
                          </div>
                          <div className="rec-cell">
                            <div className="k">Pace</div>
                            <div className="v">
                              <span className="pace" data-sec-per-km="316">
                                5:16
                              </span>
                            </div>
                          </div>
                          <div className="rec-cell">
                            <div className="k">Climb</div>
                            <div className="v">86 m</div>
                          </div>
                          <div className="rec-cell">
                            <div className="k">Calories</div>
                            <div className="v">381</div>
                          </div>
                        </div>
                        <div className="rec-btn">Finish and share</div>
                      </div>

                      {/* Feed */}
                      <div className="screen" id="screen-feed" data-active="false">
                        <div className="s-top">
                          <div className="s-title">Feed</div>
                          <div className="s-sub">Today</div>
                        </div>
                        <div className="p-card">
                          <div className="p-row">
                            <span className="avatar" aria-hidden="true" />
                            <div>
                              <div className="p-name">Priya Raman</div>
                              <div className="p-meta">2h ago · In Sunrise Runners</div>
                            </div>
                          </div>
                          <p className="p-cap">
                            Beat the heat with a 6am loop. Legs finally feel fresh again.
                          </p>
                          <div className="p-shot" aria-hidden="true" />
                          <div className="p-stats">
                            <span>
                              <i className="dot-ember" aria-hidden="true" />
                              <span className="dist" data-km="8.2">
                                8.2
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </span>
                            <span>
                              <span className="pace" data-sec-per-km="342">
                                5:42
                              </span>{" "}
                              <span className="u-pace">/km</span>
                            </span>
                            <span>412 kcal</span>
                          </div>
                        </div>
                        <div className="p-card">
                          <div className="p-row">
                            <span className="avatar b" aria-hidden="true" />
                            <div>
                              <div className="p-name">Marcus Hale</div>
                              <div className="p-meta">Yesterday · Everyone</div>
                            </div>
                          </div>
                          <p className="p-cap">
                            First ride since the ankle. Slow, but back on the bike.
                          </p>
                        </div>
                      </div>

                      {/* Trybe */}
                      <div className="screen" id="screen-trybe" data-active="false">
                        <div className="s-top">
                          <div>
                            <div className="s-title">Sunrise Runners</div>
                            <div className="s-sub">42 members · Public</div>
                          </div>
                          <span className="p-tag">Captain</span>
                        </div>
                        <div className="p-card">
                          <div className="p-row" style={{ justifyContent: "space-between" }}>
                            <div className="s-sub">Weekly goal</div>
                            <div className="p-name">
                              <span className="dist" data-km="62">
                                62
                              </span>{" "}
                              /{" "}
                              <span className="dist" data-km="100">
                                100
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </div>
                          </div>
                          <div className="goal-bar">
                            <span
                              className="goal-fill"
                              style={{ "--w": "62%" } as CSSProperties}
                            />
                          </div>
                          <div className="s-sub" style={{ marginTop: 8 }}>
                            <span className="dist" data-km="38">
                              38
                            </span>{" "}
                            <span className="u-dist">km</span> to go · resets Monday
                          </div>
                        </div>
                        <div className="p-card">
                          <div className="s-sub" style={{ marginBottom: 2 }}>
                            This week
                          </div>
                          <div className="lb-row">
                            <span className="lb-rank">1</span>
                            <span className="lb-name">Priya R.</span>
                            <span className="lb-val">
                              <span className="dist" data-km="24.1">
                                24.1
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </span>
                          </div>
                          <div className="lb-row me">
                            <span className="lb-rank">2</span>
                            <span className="lb-name">You</span>
                            <span className="lb-val">
                              <span className="dist" data-km="18.6">
                                18.6
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </span>
                          </div>
                          <div className="lb-row">
                            <span className="lb-rank">3</span>
                            <span className="lb-name">Marcus H.</span>
                            <span className="lb-val">
                              <span className="dist" data-km="12.3">
                                12.3
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </span>
                          </div>
                          <div className="lb-row">
                            <span className="lb-rank">4</span>
                            <span className="lb-name">Dani O.</span>
                            <span className="lb-val">
                              <span className="dist" data-km="7">
                                7.0
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </span>
                          </div>
                        </div>
                        <div
                          className="p-card"
                          style={{ display: "flex", alignItems: "center", gap: 10 }}
                        >
                          <span className="avatar c" aria-hidden="true" />
                          <div style={{ flex: 1 }}>
                            <div className="p-name">Sunday long run</div>
                            <div className="p-meta">Tomorrow 7:00 AM · 6 going</div>
                          </div>
                          <span className="p-tag">Going</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="screen" id="screen-progress" data-active="false">
                        <div className="s-top">
                          <div className="s-title">Consistency</div>
                          <div className="s-sub">Last year</div>
                        </div>
                        <div className="p-card">
                          <div className="s-sub">148 active days</div>
                          <div className="heat" id="heat" aria-hidden="true" />
                        </div>
                        <div className="rec-grid">
                          <div className="rec-cell">
                            <div className="k">Streak</div>
                            <div className="v">11 days</div>
                          </div>
                          <div className="rec-cell">
                            <div className="k">This week</div>
                            <div className="v">
                              <span className="dist" data-km="18.6">
                                18.6
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </div>
                          </div>
                          <div className="rec-cell">
                            <div className="k">Longest</div>
                            <div className="v">
                              <span className="dist" data-km="21.1">
                                21.1
                              </span>{" "}
                              <span className="u-dist">km</span>
                            </div>
                          </div>
                          <div className="rec-cell">
                            <div className="k">Badges</div>
                            <div className="v">23</div>
                          </div>
                        </div>
                      </div>

                      <div className="tabbar" aria-hidden="true">
                        <i className="on" />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <p className="caption">Interface recreated for the web. Sample data.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Trybes ─────────────────────────────────────── */}
          <section id="trybes">
            <div className="wrap split">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Trybes</span>
                <h2>Everyone’s kilometres, one bar.</h2>
                <p className="lede">
                  A Trybe is a group with a goal. Public ones anyone can join, private ones
                  need an invite, and what happens inside stays with the members.
                </p>
                <ul className="tick" style={{ marginTop: 10 }}>
                  <li>
                    <Tick />
                    <span>
                      <b>Creators and captains.</b> Captains edit the Trybe, schedule events
                      and remove members. Only the creator can delete it.
                    </span>
                  </li>
                  <li>
                    <Tick />
                    <span>
                      <b>Its own feed and chat.</b> A post shared into a Trybe appears for
                      members only, on the Trybe and in their feed.
                    </span>
                  </li>
                  <li>
                    <Tick />
                    <span>
                      <b>Hidden workouts stay hidden.</b> Someone who hides their training
                      simply is not counted on the board.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="glass board" id="board">
                <div className="s-top" style={{ marginBottom: 4 }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>
                      This week
                    </div>
                    <div className="display" style={{ fontSize: 22 }}>
                      Sunrise Runners
                    </div>
                  </div>
                  <span className="p-tag">42 members</span>
                </div>
                <div className="board-row">
                  <span className="rk">1</span>
                  <span className="nm">Priya Raman</span>
                  <span className="vl">
                    <span className="dist" data-km="24.1">
                      24.1
                    </span>{" "}
                    <span className="u-dist">km</span>
                  </span>
                </div>
                <div className="board-bar">
                  <span style={{ "--w": "100%" } as CSSProperties} />
                </div>
                <div className="board-row">
                  <span className="rk">2</span>
                  <span className="nm">You</span>
                  <span className="vl">
                    <span className="dist" data-km="18.6">
                      18.6
                    </span>{" "}
                    <span className="u-dist">km</span>
                  </span>
                </div>
                <div className="board-bar">
                  <span style={{ "--w": "77%" } as CSSProperties} />
                </div>
                <div className="board-row">
                  <span className="rk">3</span>
                  <span className="nm">Marcus Hale</span>
                  <span className="vl">
                    <span className="dist" data-km="12.3">
                      12.3
                    </span>{" "}
                    <span className="u-dist">km</span>
                  </span>
                </div>
                <div className="board-bar">
                  <span style={{ "--w": "51%" } as CSSProperties} />
                </div>
                <div className="board-row">
                  <span className="rk">4</span>
                  <span className="nm">Dani Okafor</span>
                  <span className="vl">
                    <span className="dist" data-km="7">
                      7.0
                    </span>{" "}
                    <span className="u-dist">km</span>
                  </span>
                </div>
                <div className="board-bar">
                  <span style={{ "--w": "29%" } as CSSProperties} />
                </div>
                <p className="caption" style={{ textAlign: "left", marginTop: 6 }}>
                  Sample data.
                </p>
              </div>
            </div>
          </section>

          {/* ── Cliques ────────────────────────────────────── */}
          <section id="cliques">
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">Cliques</span>
                <h2>A session that starts at once, in four cities.</h2>
                <p className="lede">
                  Everyone taps ready, everyone starts together, and each person’s distance
                  moves on the others’ screens while they run.
                </p>
              </div>
              <div className="cards">
                <article className="glass card">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
                    </svg>
                  </span>
                  <h3>Live positions</h3>
                  <p>
                    Locations stream between participants for the length of the session,
                    then stop. Nothing is followed outside a workout.
                  </p>
                </article>
                <article className="glass card">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9.5" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
                    </svg>
                  </span>
                  <h3>Invite by name</h3>
                  <p>
                    Anyone you follow gets a notification that opens straight into the
                    lobby, with a ready check before the start.
                  </p>
                </article>
                <article className="glass card">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20V10" />
                      <path d="M18 20V4" />
                      <path d="M6 20v-4" />
                    </svg>
                  </span>
                  <h3>It all counts</h3>
                  <p>
                    A Clique workout lands in your history, your streak and your Trybe’s
                    weekly total like any other session.
                  </p>
                </article>
                <article className="glass card">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <h3>Talk through it</h3>
                  <p>
                    Every Clique and Trybe carries its own thread, with replies and photos,
                    kept to the people in it.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ── Progress ───────────────────────────────────── */}
          <section id="progress">
            <div className="wrap split">
              <div className="glass card" style={{ padding: 28 }}>
                <span className="eyebrow">Consistency</span>
                <div
                  className="display"
                  style={{ fontSize: "clamp(28px,4vw,42px)", margin: "12px 0 4px" }}
                >
                  148 active days
                </div>
                <p className="muted" style={{ fontSize: 14 }}>
                  Shaded by how long you trained. Darker is longer.
                </p>
                <div
                  className="heat"
                  id="heatBig"
                  style={{ gridTemplateColumns: "repeat(26, 1fr)", marginTop: 18 }}
                  aria-hidden="true"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 14,
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--faint)",
                  }}
                >
                  <span>OCT</span>
                  <span>JAN</span>
                  <span>APR</span>
                  <span>JUL</span>
                  <span>SEP</span>
                </div>
              </div>

              <div className="sec-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Progress</span>
                <h2>Proof that you kept going.</h2>
                <p className="lede">
                  Two years of history, drawn two ways, with the goals you set rather than
                  ones picked for you.
                </p>
                <ul className="tick" style={{ marginTop: 10 }}>
                  <li>
                    <Tick />
                    <span>
                      <b>Calendar by count.</b> One session is a light tint, two to four
                      darker, five or more solid.
                    </span>
                  </li>
                  <li>
                    <Tick />
                    <span>
                      <b>Seven badge categories</b>, from distance and consistency to
                      exploration and performance.
                    </span>
                  </li>
                  <li>
                    <Tick />
                    <span>
                      <b>Kilometres or miles</b>, one switch on your account that follows
                      you to a new phone.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Devices ────────────────────────────────────── */}
          <section id="devices">
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">Apps and devices</span>
                <h2>Your watch is already compatible.</h2>
                <p className="lede">
                  Connect Apple Health or Health Connect once and the workouts your watch
                  records arrive on their own. Every brand writes into one of those two
                  stores through its own app, so there is no list to pick from.
                </p>
                <div className="brand-row">
                  <span className="brand-pill">Apple Watch</span>
                  <span className="brand-pill">Garmin</span>
                  <span className="brand-pill">Fitbit</span>
                  <span className="brand-pill">Whoop</span>
                  <span className="brand-pill">Polar</span>
                  <span className="brand-pill">Samsung</span>
                  <span className="brand-pill">Oura</span>
                  <span className="brand-pill">Wear OS</span>
                </div>
              </div>

              <div className="cards">
                <article className="glass card">
                  <h3>Workouts, not step counts</h3>
                  <p>
                    Each session arrives with its activity, time, distance and calories.
                    Everyday step totals stay out of your history.
                  </p>
                </article>
                <article className="glass card">
                  <h3>Never counted twice</h3>
                  <p>
                    A run you recorded in Fitrybe is not added again when your watch writes
                    the same session to the health store.
                  </p>
                </article>
                <article className="glass card">
                  <h3>Filed on the right day</h3>
                  <p>
                    A Saturday session synced on Monday still counts for Saturday in your
                    calendar, streak and Trybe goal.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ── Safety ─────────────────────────────────────── */}
          <section id="safety">
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">Privacy and safety</span>
                <h2>You decide who sees you move.</h2>
                <p className="lede">
                  Visibility is checked every time somebody tries to read something, not
                  stamped on when you post. Hide your workouts and your whole history goes
                  with them; switch it back and everything returns exactly as it was.
                </p>
              </div>
              <div className="cards">
                <article className="glass card">
                  <h3>Workout visibility</h3>
                  <p>
                    One switch hides every workout you have logged, older ones included,
                    from profiles and leaderboards.
                  </p>
                </article>
                <article className="glass card">
                  <h3>Audience per post</h3>
                  <p>
                    Everyone, or your Trybes only. A post shared into a Trybe never leaves
                    it.
                  </p>
                </article>
                <article className="glass card">
                  <h3>Blocking both ways</h3>
                  <p>
                    Posts, comments, profiles, search, follows, messages and notifications
                    all stop at once. They are not told.
                  </p>
                </article>
                <article className="glass card">
                  <h3>Reports that reach a person</h3>
                  <p>
                    Report a post in two taps. It is hidden from you immediately and sent
                    for review.
                  </p>
                </article>
                <article className="glass card">
                  <h3>Being found</h3>
                  <p>
                    Turn off discovery and you stay out of search and suggestions, without
                    hiding from people you know.
                  </p>
                </article>
                <article className="glass card">
                  <h3>Leaving properly</h3>
                  <p>
                    Delete your account in the app. Posts, workouts, messages and
                    memberships go with it.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ── FAQ ────────────────────────────────────────── */}
          <section id="faq">
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">FAQ</span>
                <h2>Questions worth answering</h2>
              </div>
              <div className="faq">
                <details open>
                  <summary>Can I get it yet?</summary>
                  <div className="faq-body">
                    Not quite. Fitrybe is in development and going through App Store and
                    Play Store review before general release. Nothing here is a store
                    listing.
                  </div>
                </details>
                <details>
                  <summary>What does it cost?</summary>
                  <div className="faq-body">
                    Recording, Trybes, Cliques, the feed and your whole history are the app.
                    A Pro plan is planned as a monthly or annual subscription with a 14-day
                    trial, and pricing is not settled. There are no ads.
                  </div>
                </details>
                <details>
                  <summary>What is the difference between a Trybe and a Clique?</summary>
                  <div className="faq-body">
                    A Trybe is a club that lasts: members, a weekly goal, leaderboards,
                    events and a chat. A Clique is one live session that starts, runs and
                    finishes, with everyone’s progress visible to each other while it does.
                  </div>
                </details>
                <details>
                  <summary>Does it drain my battery?</summary>
                  <div className="faq-body">
                    A GPS session uses the same location hardware as any tracker, and only
                    while a session is running. Outside a workout the app does not follow
                    you, and a Clique streams positions only for the length of that session.
                  </div>
                </details>
                <details>
                  <summary>Can I keep my workouts private but still join a club?</summary>
                  <div className="faq-body">
                    Yes. Hide your workouts and you still belong to your Trybes, post, chat
                    and RSVP to events. Your distance is simply not counted on the
                    leaderboard.
                  </div>
                </details>
                <details>
                  <summary>What happens to my data if I leave?</summary>
                  <div className="faq-body">
                    Deleting your account removes it along with your posts, workouts,
                    comments, messages and memberships. Accounts created with Apple are
                    revoked with Apple at the same time.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* ── Closing ────────────────────────────────────── */}
          <section>
            <div className="wrap closing">
              <span className="eyebrow">Coming soon</span>
              <h2>
                Bring your <span className="shine">people</span>.
              </h2>
              <p className="lede" style={{ marginInline: "auto" }}>
                Fitrybe launches on iOS and Android. No ads, no selling your training to
                anyone.
              </p>
              <a className="btn" href="#top">
                Back to the top
              </a>
            </div>
          </section>
        </main>

        <footer>
          <div className="wrap foot">
            <div>
              <a className="brand" href="#top" style={{ marginBottom: 10 }}>
                <span className="brand-mark" aria-hidden="true" />
                Fitrybe
              </a>
              <p className="muted" style={{ fontSize: 14, maxWidth: "40ch" }}>
                Train together, wherever you are. In development for iOS and Android.
              </p>
            </div>
            <nav className="foot-links" aria-label="Footer">
              <a href="#tour">Tour</a>
              <a href="#trybes">Trybes</a>
              <a href="#devices">Devices</a>
              <a href="#safety">Privacy</a>
              <a href="#faq">FAQ</a>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </nav>
          </div>
        </footer>
      </div>

      <SiteEffects />
    </>
  );
}
