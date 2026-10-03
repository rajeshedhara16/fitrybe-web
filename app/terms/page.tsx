import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use · Fitrybe",
  description: "The rules for using Fitrybe.",
};

export default function Terms() {
  return (
    <div className="page">
      <div className="wrap" style={{ paddingBlock: "clamp(60px, 10vw, 120px)" }}>
        <div className="sec-head">
          <span className="eyebrow">Legal</span>
          <h2>Terms of Use</h2>
          <p className="lede">
            This page is not written yet. App Review expects it to exist and to say that
            objectionable content and abusive behaviour are not allowed, alongside the
            report and block tools already in the app.
          </p>
        </div>
        <p className="muted" style={{ maxWidth: "60ch" }}>
          It also needs the usual ground rules: who may open an account, what happens to an
          account that breaks them, the subscription terms once pricing is settled, and the
          limits of liability for a fitness app that records activity outdoors.
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
