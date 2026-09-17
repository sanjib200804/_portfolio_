'use client';

import { profileData } from '@/data/profile';
import { textShadowStyle } from './styles';

const navItems = [
  { id: 'stack', label: 'Stack' },
  { id: 'what-i-build', label: 'Capabilities' },
  { id: 'projects', label: 'Projects' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] sm:w-[calc(100%-4rem)] max-w-[1240px] z-[100] flex items-center justify-between py-3 px-6 rounded-full"
      style={{
        background: 'rgba(10, 10, 14, 0.12)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Brand Logo & Glow Dot */}
      <a
        href="#hero"
        style={{
          fontSize: '1.15rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          ...textShadowStyle,
        }}
      >
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#ff5500',
            boxShadow: '0 0 12px #ff5500',
          }}
        />
        <span>{profileData.name}</span>
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.85)',
              transition: 'color 0.2s ease',
              ...textShadowStyle,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5500')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Connect Button */}
      <a
        href="#contact"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.65rem',
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '0.45rem 0.55rem 0.45rem 1.25rem',
          borderRadius: '9999px',
          fontWeight: 700,
          fontSize: '0.85rem',
          boxShadow: '0 4px 16px rgba(255, 255, 255, 0.2)',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <span>Let&apos;s Connect</span>
        <span
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#ff5500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '0.85rem',
          }}
        >
          →
        </span>
      </a>
    </header>
  );
}
