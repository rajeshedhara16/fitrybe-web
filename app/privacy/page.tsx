import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Fitrybe",
  description: "How Fitrybe handles your data.",
};

export default function Privacy() {
  return (
    <div className="page">
      <div className="wrap" style={{ paddingBlock: "clamp(60px, 10vw, 120px)" }}>
        <div className="sec-head">
          <span className="eyebrow">Legal</span>
          <h2>Privacy Policy</h2>
          <p className="lede">
            This page is not written yet. It has to be live, and say what Fitrybe collects
            and why, before the app can be submitted to the App Store or Play Store.
          </p>
        </div>
        <p className="muted" style={{ maxWidth: "60ch" }}>
          It needs to cover the account itself, workouts and routes, health data read from
          Apple Health or Health Connect, photos, messages, how long any of it is kept, and
          how an account is deleted.
        </p>
        <p style={{ marginTop: 28 }}>
          <Link className="btn ghost" href="/">
            Back to the site
          </Link>
        </p>
      </div>
    </div>
  );
}
