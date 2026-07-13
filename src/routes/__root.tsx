import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppFloat } from "@/components/site/WhatsAppButton";
import { Preloader } from "@/components/site/Preloader";
import { ScrollReset } from "@/components/site/ScrollReset";
import { AosInit } from "@/components/site/AosInit";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { LOGOS } from "@/lib/brand";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elfurat Spices",
  url: "https://elfuratspices.com",
  logo: "https://elfuratspices.com/assets/Multicolor%203x1%20Logo.webp",
  description:
    "Global exporter of premium Indian spices, aromatics, nuts and pantry staples to 40+ countries.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "RZ-3285 Third Floor, Gali No-37, Tughlakabad Extn, Kalkaji",
    addressLocality: "South Delhi",
    addressRegion: "Delhi",
    postalCode: "110019",
    addressCountry: "IN",
  },
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+91-78382-63460",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi"],
  }],
  sameAs: [] as string[],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Elfurat Spices",
  url: "https://elfuratspices.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://elfuratspices.com/products?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-clove">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-clove">Page not found</h2>
        <p className="mt-2 text-sm text-clove/60">
          This aromatic trail doesn't lead anywhere. Let's get you back home.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="btn-magnetic inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-clove">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-clove/60">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-magnetic inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-clove/15 bg-white px-5 py-2.5 text-sm font-semibold text-clove"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elfurat Spices - Premium Indian Spices, Globally Exported" },
      {
        name: "description",
        content:
          "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale.",
      },
      { name: "author", content: "Elfurat Spices" },
      { name: "theme-color", content: "#BF6040" },
      { property: "og:title", content: "Elfurat Spices - Premium Indian Spices, Globally Exported" },
      {
        property: "og:description",
        content:
          "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elfuratspices.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Elfurat Spices - Premium Indian Spices, Globally Exported" },
      { name: "twitter:description", content: "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/7a330b53-5aac-4538-8968-df746bc4d792" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/7a330b53-5aac-4538-8968-df746bc4d792" },
    ],
    links: [
      { rel: "icon", href: "/assets/Multicolor%20Icon.webp" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
      />
      <SmoothScroll />
      <AosInit />
      <Preloader />
      <BackToTop />
      <ScrollReset />
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </QueryClientProvider>
  );
}

