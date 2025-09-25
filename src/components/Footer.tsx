export default function Footer() {
  return (
    <footer className="border-t border-z-silver/30 mt-24 py-8">
      <div className="container-standard flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-z-ink/80">
        <p>© {new Date().getFullYear()} Zuit Up. All rights reserved.</p>
        <nav className="flex items-center gap-5">
          <a href="#privacy" className="hover:text-z-navy">Privacy</a>
          <a href="#terms" className="hover:text-z-navy">Terms</a>
          <a href="#contact" className="hover:text-z-navy">Contact</a>
        </nav>
      </div>
    </footer>
  );
}


