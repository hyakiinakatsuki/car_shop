import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata = {
    title: "汽车中心",
    description: "寻找最好的车",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
