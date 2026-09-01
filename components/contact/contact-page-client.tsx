"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  "Ecommerce Systems",
  "Custom Automations",
  "Web Architecture",
  "Social Strategy",
  "Full Digital Ecosystem",
];

export function ContactPageClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const payload = {
        access_key: "63bf4265-33af-4e7c-bdb7-643fc5a20dbf",
        name: form.name,
        email: form.email,
        company: form.company,
        services: selectedServices.join(", ") || "Not specified",
        message: form.message,
        subject: `New Strategy Call Request — ${form.name}`,
        from_name: "Webuc Contact Form",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Grid background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-foreground/10"
              style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-foreground/10"
              style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-16 h-16 text-foreground" strokeWidth={1} />
          </div>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Message received
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
            We will be in
            <br />
            <span className="text-muted-foreground">touch soon.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Our team reviews every submission personally. Expect to hear from us within one business day with a tailored response to your brief.
          </p>
          <a href="/">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group inline-flex items-center gap-2"
            >
              Back to home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-32 lg:pt-40 pb-24 lg:pb-32"
    >
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ─── Left Column ───────────────────────────────────────── */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-8 h-px bg-foreground/30" />
              Strategy Call
            </span>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8">
              Let us build
              <br />
              <span className="text-muted-foreground">something great.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-md">
              Tell us about your brand. We will review your brief personally and come back with a clear roadmap, honest timeline, and exact investment required.
            </p>

            {/* Trust signals */}
            <div className="space-y-5 mb-12">
              {[
                { label: "Response time", value: "Within 1 business day" },
                { label: "Call duration", value: "30 minute strategy session" },
                { label: "No commitment", value: "Zero pressure, zero obligation" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 pb-5 border-b border-foreground/10 last:border-0"
                >
                  <span className="text-sm font-mono text-muted-foreground w-36 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "99%", label: "Client retention" },
                { num: "2x", label: "Avg. ROI" },
                { num: "40+", label: "Workflows automated" },
              ].map((stat) => (
                <div key={stat.label} className="border border-foreground/10 p-5">
                  <div className="text-3xl font-display mb-1">{stat.num}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Column (Form) ────────────────────────────────── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-muted-foreground uppercase tracking-widest"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Aram S."
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-foreground/15 hover:border-foreground/30 focus:border-foreground px-4 py-3.5 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-muted-foreground uppercase tracking-widest"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@brand.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border border-foreground/15 hover:border-foreground/30 focus:border-foreground px-4 py-3.5 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-xs font-mono text-muted-foreground uppercase tracking-widest"
                >
                  Brand / Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Beatles Pub"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-transparent border border-foreground/15 hover:border-foreground/30 focus:border-foreground px-4 py-3.5 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Services */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Services You Need
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 text-sm border transition-all duration-300 ${
                        selectedServices.includes(service)
                          ? "bg-foreground text-background border-foreground"
                          : "border-foreground/15 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>


              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-muted-foreground uppercase tracking-widest"
                >
                  Tell Us About Your Brand
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Briefly describe your business, your current digital situation, and what you are looking to achieve..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border border-foreground/15 hover:border-foreground/30 focus:border-foreground px-4 py-3.5 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="w-full bg-foreground hover:bg-foreground/90 text-background h-14 text-base rounded-none group inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Book My Strategy Call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-xs font-mono text-muted-foreground text-center">
                No spam. No commitment. We read every single submission personally.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
