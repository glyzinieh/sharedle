import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sharedle",
    description: "A parody of Wordle.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
