import { ContactPageClient } from "@/components/contact/contact-page-client";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Call — Webuc",
  description:
    "Book a strategy call with the Webuc team. Tell us about your brand and we will build a custom roadmap to scale your digital presence.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <ContactPageClient />
      <FooterSection />
    </main>
  );
}
