export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} — Richard Moura.</p>
        <p>
          <a href="https://github.com/Richard-Moura?tab=repositories" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/richard-dean-moura/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}

