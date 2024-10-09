'use client'

export default function Footer() {

  return (
    <footer className="bg-gray-100 py-16">
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-xs text-muted-foreground text-center">
          © 2023 Vieyra & Farías Vieyra. Todos los derechos reservados.
        </p>
        <nav className="flex justify-center gap-4 mt-4">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </a>
        </nav>
      </div>
    </footer>
  )
}