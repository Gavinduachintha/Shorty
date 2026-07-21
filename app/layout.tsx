import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shorty",
  description: "Shorty dashboard and landing experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#131316",
              color: "#F4F4F5",
              border: "1px solid #2A2A2E",
              fontSize: "14px",
              fontFamily: "ui-monospace, monospace",
            },
            success: {
              iconTheme: {
                primary: "#8B5CF6",
                secondary: "#131316",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#131316",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
