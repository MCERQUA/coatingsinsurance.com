"use client";

import { Phone, CheckCircle } from "lucide-react";
import CoatingsQuoteForm from "@/components/quote/CoatingsQuoteForm";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-forest-green pt-24 pb-16">
          <div className="container-xl">
            <FadeIn>
              <h1 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-4">
                Get a {SITE.name} Quote
              </h1>
              <p className="font-body text-white/80 text-lg max-w-xl">
                Tell us about your operation and we&apos;ll prepare a competitive quote — same-day turnaround.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="section-pad bg-warm-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <FadeIn>
                  <div className="bg-white rounded-2xl border border-border p-8">
                    <h2 className="font-heading text-2xl text-bark font-bold mb-6">
                      {SITE.name} Quote Request
                    </h2>
                    <CoatingsQuoteForm />
                  </div>
                </FadeIn>
              </div>

              <aside className="space-y-5">
                <FadeIn direction="left">
                  <div className="bg-forest-green rounded-2xl p-7">
                    <h3 className="font-heading text-lg text-white font-bold mb-3">Prefer to Call?</h3>
                    <p className="font-body text-white/70 text-sm mb-4">
                      Our specialists are ready to quote you now.
                    </p>
                    <a href={SITE.phoneHref} className="flex items-center gap-2 text-ember-orange font-body font-bold">
                      <Phone className="w-4 h-4" />{SITE.phone}
                    </a>
                    <p className="font-body text-white/50 text-xs mt-2">{SITE.hours}</p>
                  </div>
                </FadeIn>
                <FadeIn direction="left" delay={0.05}>
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-body text-xs font-bold uppercase tracking-widest text-muted mb-4">
                      Why Choose Us
                    </h3>
                    {[
                      "Licensed in All 50 States",
                      "Same-Day Quote Turnaround",
                      "Niche Insurance Specialists",
                      "A.M. Best A+ Rated Carriers",
                      "Same-Day Certificates",
                      "Competitive Pricing",
                    ].map((i) => (
                      <div key={i} className="flex items-center gap-2 mb-2.5">
                        <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0" />
                        <span className="font-body text-sm text-bark">{i}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
