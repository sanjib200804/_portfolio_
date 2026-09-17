import { profileData } from '@/data/profile';
import { socialLinks } from '@/data/social';
import { textShadowStyle } from './styles';

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: '8rem 0 12rem 0',
      }}
    >
      <div
        style={{
          borderRadius: '44px',
          padding: '5rem 3rem',
          textAlign: 'center',
          maxWidth: '860px',
          margin: '0 auto',
          background: 'rgba(12, 12, 16, 0.16)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 85, 0, 0.35)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 5.8vw, 4.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: '1.35rem',
            textShadow: '0 4px 28px rgba(0,0,0,0.9)',
          }}
        >
          {profileData.contact.title}
        </h2>
        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '640px',
            margin: '0 auto 2.8rem auto',
            ...textShadowStyle,
          }}
        >
          {profileData.contact.statement}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <a
            href={socialLinks.email}
            style={{
              backgroundColor: '#ff5500',
              color: '#ffffff',
              padding: '0.8rem 2.4rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.03em',
              boxShadow: '0 8px 30px rgba(255,85,0,0.5)',
              transition: 'transform 0.2s ease',
            }}
          >
            EMAIL ME
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              color: '#ffffff',
              padding: '0.8rem 2.4rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              transition: 'background-color 0.2s ease',
              ...textShadowStyle,
            }}
          >
            LINKEDIN ↗
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              color: '#ffffff',
              padding: '0.8rem 2.4rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              transition: 'background-color 0.2s ease',
              ...textShadowStyle,
            }}
          >
            GITHUB ↗
          </a>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.92rem',
            color: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <span style={{ color: '#ff5500' }}>✉</span>
          <a
            href={socialLinks.email}
            style={{
              color: '#ffffff',
              fontWeight: 600,
              textDecoration: 'none',
              ...textShadowStyle,
            }}
          >
            {socialLinks.rawEmail}
          </a>
        </div>

        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.88rem',
            color: 'rgba(255, 255, 255, 0.65)',
            ...textShadowStyle,
          }}
        >
          © {new Date().getFullYear()} {profileData.name} • {profileData.title}
        </div>
      </div>
    </section>
  );
}
