export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Etsy SEO Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Outrank Competitors on{" "}
          <span className="text-[#58a6ff]">Etsy</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Scan any Etsy shop, uncover high-performing keywords, decode pricing strategies, and get actionable SEO recommendations — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-200"
        >
          Start Analyzing — $12/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for free trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Keyword Extraction", desc: "NLP-powered analysis of top-ranking listing titles and tags." },
            { icon: "💰", title: "Pricing Intelligence", desc: "Benchmark your prices against best-sellers in your niche." },
            { icon: "📈", title: "SEO Recommendations", desc: "Actionable tips to improve your listing visibility instantly." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-3">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$12</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited competitor shop scans",
              "Keyword & tag gap analysis",
              "Pricing benchmarks & trends",
              "SEO score for each listing",
              "Export reports as CSV",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the competitor analysis work?",
              a: "Enter any Etsy shop URL and our engine fetches listing data, extracts keywords using NLP, and benchmarks pricing — delivering a full SEO report in seconds."
            },
            {
              q: "Do I need an Etsy account to use this?",
              a: "No. You only need a subscription to our tool. We handle all data collection on your behalf without requiring access to your Etsy credentials."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel with one click from your billing portal. You keep access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Etsy SEO Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
