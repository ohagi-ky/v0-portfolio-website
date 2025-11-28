import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 max-w-4xl">
        <div className="flex items-center space-x-2">{/* タイトル削除 */}</div>
        <nav className="flex-1 mx-4 md:flex-none overflow-x-auto custom-scrollbar">
          <div className="flex items-center space-x-6 md:space-x-10 min-w-max">
            <a
              href="#profile"
              className="text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Profile
            </a>
            <a
              href="#skills"
              className="text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Skills
            </a>
            <a
              href="#qualifications"
              className="text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Qualifications
            </a>
            <a
              href="#projects"
              className="text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Projects
            </a>
            <a
              href="#links"
              className="text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Links
            </a>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="default" asChild>
            <a href="https://github.com/ohagi-ky" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="default" asChild>
            <a href="https://qiita.com/OhaGi_" target="_blank" rel="noopener noreferrer">
              <Image src="/images/qiita-logo.png" alt="Qiita" width={20} height={20} className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
