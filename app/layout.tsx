import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Righteous } from "next/font/google";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

// Import Righteous font
const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: {
    default: "Nova Bundler",
    template: `%s - Nova Bundler`,
  },
  description: "Supercharge token launches with NovaBundler — the fast, seamless multi-chain bundler and volume bot for developers and crypto enthusiasts.",
  icons: {
    icon: "/logo.avif",
    apple: "/logo.avif",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "black" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-black font-sans antialiased",
          fontSans.variable,
          righteous.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-between py-6 px-6 border-t border-gray-800">
              <div>
                <p className="text-default-500 text-sm">Copyright © 2024 Nova Bundler</p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="#" className="text-default-500 hover:text-white text-sm">
                  Terms & Conditions
                </Link>
                <div className="flex items-center gap-4">
                  <Link 
                    href="https://t.me/NovaBundler" 
                    aria-label="Telegram Channel" 
                    className="text-default-500 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.39.81-.59 3.17-1.38 5.29-2.29 6.38-2.73 3.03-1.22 3.66-1.43 4.08-1.44.09 0 .29.02.42.19.11.13.13.31.15.44-.01.05-.01.1-.02.13z" />
                    </svg>
                  </Link>
                  <Link 
                    href="https://t.me/NovaBundlerBot?start=start" 
                    aria-label="Telegram Bot" 
                    className="text-default-500 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
