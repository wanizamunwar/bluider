export default function NotFound() {
  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '20px' }}>
      <div>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>404</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Page not found.</p>
        <a href="/" className="btn btn-primary">Go Home</a>
      </div>
    </main>
  );
}
