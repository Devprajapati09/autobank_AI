import { Link } from "react-router-dom";
import {
  Sparkles, PieChart, ReceiptText, Landmark, FileCheck2, BadgePercent, LifeBuoy,
} from "lucide-react";

const FEATURES = [
  { icon: PieChart, tone: "navy", title: "Budgets that build themselves", body: "AutoBank AI learns your income and spending, then sets category budgets you can actually stick to." },
  { icon: ReceiptText, tone: "amber", title: "Bills, paid on time", body: "It tracks due dates and asks before paying — you're always one tap from approving or declining." },
  { icon: Landmark, tone: "green", title: "The right loan, compared honestly", body: "Real EMI math and an affordability score, so you know what you can take on before you apply." },
  { icon: FileCheck2, tone: "brick", title: "KYC & documents, verified online", body: "Upload once. We check it, flag issues, and keep your verification status current." },
  { icon: BadgePercent, tone: "navy", title: "Government schemes you qualify for", body: "Matched to your profile — from pension schemes to MSME credit — with a plain-English eligibility score." },
  { icon: LifeBuoy, tone: "brick", title: "Smart Survival Mode", body: "If income drops, it protects your essentials and savings automatically, and plans your recovery." },
];

export default function LandingPage() {
  return (
    <div>
      <nav className="landing-nav">
        <div className="sidebar-brand" style={{ padding: 0 }}>
          <div className="mark">AB</div>
          <div className="name" style={{ color: "var(--ink)" }}>AutoBank <span>AI</span></div>
        </div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#survival">Survival Mode</a>
          <a href="#schemes">Schemes</a>
        </div>
        <div className="row gap-12">
          <Link to="/login" className="btn btn-ghost btn-sm">Log in</Link>
          <Link to="/register" className="btn btn-primary btn-sm">Get started</Link>
        </div>
      </nav>

      <section className="landing-hero">
        <div>
          <span className="eyebrow">Your money, handled</span>
          <h1>Banking that <em>thinks ahead</em>, not just tracks behind.</h1>
          <p className="lede">
            AutoBank AI learns your income, bills, loans, and goals after KYC, then budgets, pays,
            saves, and finds you the right loan or scheme — asking before it ever acts on your behalf.
          </p>
          <div className="cta-row">
            <Link to="/register" className="btn btn-accent">Start your financial profile</Link>
            <Link to="/login" className="btn btn-ghost">I already have an account</Link>
          </div>
        </div>

        <div className="ledger-panel">
          <span className="tag">This month, so far</span>
          <div className="row row-between">
            <span style={{ color: "#c3c9e6", fontSize: 13 }}>Balance</span>
            <span className="mono" style={{ fontWeight: 600 }}>₹2,14,300</span>
          </div>
          <div className="row row-between">
            <span style={{ color: "#c3c9e6", fontSize: 13 }}>Savings rate</span>
            <span className="mono" style={{ fontWeight: 600, color: "#8ee0bd" }}>20%</span>
          </div>
          <div className="row row-between">
            <span style={{ color: "#c3c9e6", fontSize: 13 }}>Bills on autopay</span>
            <span className="mono" style={{ fontWeight: 600 }}>3 of 5</span>
          </div>
          <div className="row row-between">
            <span style={{ color: "#c3c9e6", fontSize: 13 }}>AI recommendation</span>
            <span className="mono" style={{ fontWeight: 600, color: "var(--marigold)" }}>Switch loan → save ₹8.4K</span>
          </div>
        </div>
      </section>

      <div className="landing-strip">
        <div className="item"><div className="num">2.1L+</div><div className="lbl">Customers onboarded</div></div>
        <div className="item"><div className="num">₹340cr</div><div className="lbl">Bills paid on time</div></div>
        <div className="item"><div className="num">96%</div><div className="lbl">KYC completed in one sitting</div></div>
        <div className="item"><div className="num">4.7/5</div><div className="lbl">Average trust rating</div></div>
      </div>

      <section className="landing-features" id="features">
        <div className="head">
          <span className="eyebrow"><Sparkles size={12} style={{ verticalAlign: -2, marginRight: 4 }} />Everything, in one place</span>
          <h2>One assistant for every money decision.</h2>
        </div>
        <div className="grid grid-3">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className={`icon-wrap stat-icon ${f.tone}`}><f.icon size={19} /></div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-survival" id="survival">
        <div>
          <span className="tag" style={{ color: "#f3c2ba" }}>Smart Survival Mode</span>
          <h2>Lost your income? We don't panic — we plan.</h2>
          <p>
            The moment your income drops, essentials get protected, discretionary spending pauses,
            and you get a clear recovery plan — checked and adjusted as things change.
          </p>
        </div>
        <div className="card" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)" }}>
          <p style={{ color: "#fff", fontSize: 13.5, lineHeight: 1.6 }}>
            "Your savings will last <strong>4.2 months</strong> at essential-only spending.
            I've paused 3 subscriptions and rebalanced ₹6,200/month toward your emergency fund."
          </p>
        </div>
      </section>

      <section className="landing-cta" id="schemes">
        <span className="eyebrow">Ready when you are</span>
        <h2>Complete KYC once. Let AutoBank AI handle the rest.</h2>
        <Link to="/register" className="btn btn-primary">Create your account</Link>
      </section>

      <footer className="landing-footer">
        <span>© {new Date().getFullYear()} AutoBank AI — a concept banking experience.</span>
        <span>Built for salaried workers, students & first-time loan applicants.</span>
      </footer>
    </div>
  );
}
