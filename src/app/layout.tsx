import { cn } from "@/utils"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Kumbh_Sans } from "next/font/google"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbh",
  preload: true,
})

export const metadata: Metadata = {
  title: "Sneakers",
  description: 'A FrontendMentor Challenege: E-Commerce Product Page "Sneakers"',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(kumbhSans.className, "min-h-screen antialiased")}>{children}</body>
    </html>
  )
}
