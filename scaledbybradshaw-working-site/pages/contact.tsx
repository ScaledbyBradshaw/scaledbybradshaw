export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f0f', color: 'white', padding: '4rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#FFD700', textAlign: 'center', marginBottom: '3rem' }}>Contact Us</h1>
      <form action="https://formspree.io/f/xldbvkdp" method="POST" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input type="hidden" name="_captcha" value="false" />
        <div style={{ marginBottom: '1rem' }}>
          <label>Name</label>
          <input type="text" name="name" required style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', border: '1px solid #FFD700', color: 'white' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label>
          <input type="email" name="email" required style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', border: '1px solid #FFD700', color: 'white' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Message</label>
          <textarea name="message" rows="5" required style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', border: '1px solid #FFD700', color: 'white' }}></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: '#FFD700', color: 'black', padding: '0.75rem 2rem', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
