import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.scss"
export const metadata: Metadata = {
    title: "Criado por: nextJs",
    description: "Exemplo de layout e page usando nextJs",
}
const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["400", "700"],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={montserrat.variable}>{children}</body>
        </html>
    )
}
