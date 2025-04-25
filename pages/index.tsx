import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
    }}>
  <div style={{ width: '100%', maxWidth: '320px', marginBottom: '1rem' }}>
    <Image 
      src="/maestrea-logo.png" 
      alt="Logo Maestrea" 
      layout="responsive"
      width={320}
      height={0}
    />
  </div>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#222',
        marginBottom: '1rem'
      }}>
        ¡Muy pronto en línea!
      </h1>
      
      <p style={{
        fontSize: '1.25rem',
        color: '#555',
        maxWidth: '500px',
        lineHeight: '1.6'
      }}>
        Estamos preparando una experiencia pensada para <strong>maestrear mejor</strong>. 
        ¡Espéralo pronto!
      </p>
    </main>
  );
}