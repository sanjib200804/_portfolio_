import { whatIBuildData } from '@/data/services';
import { textShadowStyle, sheerGlassStyle } from './styles';

export default function CapabilitiesSection() {
  return (
    <section
      id="what-i-build"
      style={{
        padding: '7rem 0',
      }}
    >
      <div style={{ marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '0.75rem',
            ...textShadowStyle,
          }}
        >
          {whatIBuildData.title}
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', maxWidth: '680px', lineHeight: 1.5, ...textShadowStyle }}>
          {whatIBuildData.statement}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {whatIBuildData.categories.map((cat, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: '24px',
              padding: '2.2rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '160px',
              ...sheerGlassStyle,
            }}
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ff5500', letterSpacing: '0.04em', ...textShadowStyle }}>
              // 0{idx + 1}
            </span>
            <div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem', ...textShadowStyle }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.45, ...textShadowStyle }}>
                {cat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
