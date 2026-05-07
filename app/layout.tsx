import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Listing SEO Competitor Analyzer",
  description: "Analyze competitor Etsy listings for SEO opportunities. Identify high-performing keywords, pricing strategies, and listing optimizations in your niche."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fc69eb61-0dcd-4100-8f27-dd4433cfac32"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
