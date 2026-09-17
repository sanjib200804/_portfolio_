import { servicesData } from '@/data/services';
import { textShadowStyle, sheerGlassStyle } from './styles';

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: '6rem 0',
      }}
    >
      <div style={{ marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            marginBottom: '0.5rem',
            ...textShadowStyle,
          }}
        >
          {servicesData.title}
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', ...textShadowStyle }}>
          {servicesData.statement}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {servicesData.services.map((svc) => (
          <div
            key={svc.num}
            style={{
              borderRadius: '24px',
              padding: '2.2rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              ...sheerGlassStyle,
            }}
          >
            <span style={{ color: '#ff5500', fontWeight: 800, fontSize: '0.88rem', ...textShadowStyle }}>
              {svc.num}
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, ...textShadowStyle }}>
              {svc.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
