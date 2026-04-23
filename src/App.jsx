import React from 'react'

function App() {
  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '60px' }}>
      <header style={{ borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>VELA · SYSTEMS</h1>
      </header>
      
      <main style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1', marginBottom: '30px' }}>
          Modern Infrastructure for Global Scale.
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '40px', lineHeight: '1.6' }}>
          Vela specializes in high-availability cloud architecture, leveraging Google Cloud's 
          Global Edge Network to deliver millisecond latency for your users, anywhere in the world.
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ padding: '10px 20px', border: '1px solid #fff', borderRadius: '4px' }}>View GCP Case Study</div>
          <div style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#000', borderRadius: '4px', fontWeight: 'bold' }}>Contact Us</div>
        </div>
      </main>
    </div>
  )
}

export default App