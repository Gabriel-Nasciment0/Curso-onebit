import type { Metadata } from "next"
import "../styles/globals.scss"

export const metadata: Metadata = {
    title: "Star Wars Naves - Universo Galáxico",
    description:
        "Conheça e explore as naves icônicas do universo Star Wars. Descubra detalhes sobre X-Wing, TIE Fighter, Millennium Falcon e muito mais!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    )
}
