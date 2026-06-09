import localFont from "next/font/local"
import { Quicksand } from "next/font/google"

const roboto = localFont({
    src: "./fonts/Roboto.ttf",
    variable: "--font-roboto",
})

const quicksand = Quicksand({
    variable: "--font-quicksand",
    weight: ["400"],
    subsets: ["latin"],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${roboto.variable} ${quicksand.variable}`}>
                {children}
            </body>
        </html>
    )
}
