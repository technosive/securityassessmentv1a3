import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cybersecurity Self-Assessment & Report Generator",
  description: "Professional cybersecurity assessment tool for businesses. Evaluate your security posture across multiple frameworks and get actionable recommendations.",
  keywords: ["cybersecurity", "assessment", "ISO 27001", "NCA ECC", "risk management", "compliance"],
  authors: [{ name: "Cybersecurity Assessment Team" }],
  openGraph: {
    title: "Cybersecurity Self-Assessment & Report Generator",
    description: "Professional cybersecurity assessment tool for businesses",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Self-Assessment & Report Generator",
    description: "Professional cybersecurity assessment tool for businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
