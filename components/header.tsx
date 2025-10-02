import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { SiQiita } from "react-icons/si"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-4xl">
        <div className="flex items-center space-x-2">{/* タイトル削除 */}</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#profile" className="text-lg font-medium hover:text-primary transition-colors">
            Profile
          </a>
          <a href="#skills" className="text-lg font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#qualifications" className="text-lg font-medium hover:text-primary transition-colors">
            Qualifications
          </a>
          <a href="#projects" className="text-lg font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#links" className="text-lg font-medium hover:text-primary transition-colors">
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
              <SiQiita className="h-4 w-4" style={{ color: "#55C500" }} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
