import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.scss"

const inter = localFont({
    src: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
    variable: "--font-inter",
    weight: "400 700",
})

const playfair = localFont({
    src: "./fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
    variable: "--font-playfair",
    weight: "100 400 700",
})

export const metadata: Metadata = {
    title: "Next.js 13.4 - Aula06",
    description: "aula06 do curso de Next.js 13.4 da One Bit Code",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable}`}>
                {children}
            </body>
        </html>
    )
}
