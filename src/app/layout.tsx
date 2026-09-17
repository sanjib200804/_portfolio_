import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cinematic Scroll Animation',
  description: 'Smooth scroll-driven frame animation in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
