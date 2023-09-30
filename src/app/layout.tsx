import type { Metadata } from "next"
import { Kumbh_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbh",
  preload: true,
})

export const metadata: Metadata = {
  title: "Sneakers | Frontend Mentor Challenge",
  description: 'A FrontendMentor Challenge: E-Commerce Product Page "Sneakers"',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          kumbhSans.className,
          "relative min-h-screen selection:bg-accent-primary selection:text-accent-secondary",
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
