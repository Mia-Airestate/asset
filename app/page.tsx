export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Asset Repository</h1>
      <p>Welcome to the asset repository.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Video Files</h2>
        <ul>
          <li>
            <a 
              href="https://github.com/Mia-Airestate/asset/blob/main/devdifferent.mov"
              target="_blank"
              rel="noopener noreferrer"
            >
              devdifferent.mov
            </a>
          </li>
          <li>alex.mov</li>
          <li>mitrust.mov</li>
          <li>tf.mov</li>
        </ul>
      </div>
    </main>
  )
}

