import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingAuditCta } from "@/components/layout/FloatingAuditCta";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brand-surge.com"),
  title: "Brand Surge | B2B LinkedIn Outbound & Pipeline Systems",
  description:
    "Brand Surge builds done-for-you LinkedIn outbound systems for B2B service companies. Stop relying on referrals. Book qualified sales conversations consistently.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brand-surge.com",
    siteName: "Brand Surge",
    title: "Brand Surge | B2B LinkedIn Outbound & Pipeline Systems",
    description:
      "Done-for-you LinkedIn outbound systems for B2B service companies. Consistent pipeline. Not luck.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo-icon.png", type: "image/png", sizes: "any" }],
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <FloatingAuditCta />
        <Footer />
      </body>
    </html>
  );
}
