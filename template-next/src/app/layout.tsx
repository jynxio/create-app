import './reset.css';

import type { Metadata } from 'next';
import type React from 'react';

const baseUrl = 'https://www.your-domain.com';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Next.js Boilerplate',
        template: '%s | Next.js Boilerplate',
    },
    description: '',
    keywords: 'website, technology',
    alternates: {
        canonical: new URL(baseUrl).toString(),
    },
    robots: {
        index: true,
        follow: true,
        noarchive: true,
        googleBot: {
            'index': true,
            'follow': true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'noarchive': true,
        },
    },
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}

export default RootLayout;
