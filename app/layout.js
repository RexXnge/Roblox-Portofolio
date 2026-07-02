import './globals.css';
import ClientScripts from '../components/ClientScripts';

export const metadata = {
  title: 'RexXnge — Roblox Developer & Scripter',
  description:
    'Roblox Studio developer with 3 years of LuaU experience building high-quality experiences: data systems, monetization, and gameplay loops.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientScripts />
        <div className="ambient" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
