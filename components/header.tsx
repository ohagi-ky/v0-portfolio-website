import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary/30 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg shadow-primary/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-4xl">
        <div className="flex items-center space-x-2">{/* タイトル削除 */}</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#profile"
            className="text-xl font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
          >
            Profile
          </a>
          <a
            href="#skills"
            className="text-xl font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
          >
            Skills
          </a>
          <a
            href="#qualifications"
            className="text-xl font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
          >
            Qualifications
          </a>
          <a
            href="#projects"
            className="text-xl font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
          >
            Projects
          </a>
          <a
            href="#links"
            className="text-xl font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
          >
            Links
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/ohagi-ky" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://qiita.com/OhaGi_" target="_blank" rel="noopener noreferrer">
              <Image src="/images/qiita-logo.png" alt="Qiita" width={16} height={16} className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
