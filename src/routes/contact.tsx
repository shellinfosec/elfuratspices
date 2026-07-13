import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND, HERO_IMAGES, waUrl } from "@/lib/brand";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Elfurat Spices - Delhi, India" },
      { name: "description", content: "Reach the Elfurat Spices team in New Delhi. Phone, email, WhatsApp and headquarters address for B2B, export and retail inquiries." },
      { property: "og:title", content: "Contact Elfurat Spices" },
      { property: "og:description", content: "Delhi HQ · Global exporter of premium Indian spices." },
      { property: "og:image", content: HERO_IMAGES.facility1 },
    ],
  }),
  component: Contact,
});

function Contact() {
  const mapQuery = encodeURIComponent(BRAND.address);
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 overflow-hidden">
        <div className="pattern-dots absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">Get in touch</span>
            <h1 className="mt-4 h-fluid-hero font-display font-bold max-w-4xl">
              Let's start a <span className="text-spice-gradient italic">conversation.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-clove/70 leading-relaxed">
              Sales, sampling, private label, or partnership - reach the Elfurat
              team directly. Average response time: under 4 business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Phone, label: "Call us",
              lines: BRAND.phones.map((p) => ({ text: p, href: `tel:${p.replace(/\s/g, "")}` })),
            },
            {
              icon: Mail, label: "Email us",
              lines: BRAND.emails.map((e) => ({ text: e, href: `mailto:${e}` })),
            },
            {
              icon: MessageCircle, label: "WhatsApp",
              lines: [{ text: "Chat with sales", href: waUrl("Hello Elfurat Spices, I'd like to get in touch.") }],
            },
          ].map((card) => (
            <Reveal key={card.label}>
              <div className="card-lift rounded-3xl bg-surface p-8 shadow-float h-full">
                <div className="h-12 w-12 rounded-2xl bg-terracotta/10 text-terracotta grid place-items-center">
                  <card.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-clove/50">{card.label}</div>
                <div className="mt-2 space-y-1">
                  {card.lines.map((l) => (
                    <a key={l.text} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="block font-display text-lg font-semibold text-clove hover:text-terracotta ease-elfurat transition duration-500 break-all">
                      {l.text}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl bg-clove text-white p-8 shadow-float h-full">
              <MapPin className="h-8 w-8 text-saffron" />
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-saffron">Headquarters</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">Elfurat Spices, New Delhi</h3>
              <p className="mt-4 text-white/80 leading-relaxed">{BRAND.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-clove ease-elfurat transition duration-500"
              >
                Open in Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-float h-[420px]">
              <iframe
                title="Elfurat Spices HQ"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
