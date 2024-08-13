import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
type PropType = { children: React.ReactNode };
export default function RootLayout({children}: Readonly<PropType>) {
    return (
        <html lang="en">
        <body className={styles.bodyMovie}>
        <HeaderComponent/>
        {children}
        </body>
        </html>
    );
}
