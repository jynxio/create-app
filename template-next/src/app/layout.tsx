import "./reset.css";
import "./index.css";

import type React from "react";
import { baseUrl } from "./sitemap";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Title",
        template: "%s | Title",
    },
    description: "",
    keywords: "website, technology",
    alternates: {
        canonical: new URL(baseUrl).toString(),
    },
    robots: {
        index: true,
        follow: true,
        noarchive: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
            noarchive: true,
        },
    },
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}

export default RootLayout;
