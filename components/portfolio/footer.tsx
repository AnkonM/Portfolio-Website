export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            Designed & Built by Ankon Mukherjee
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
