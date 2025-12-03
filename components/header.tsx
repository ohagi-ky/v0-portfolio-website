import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-2 sm:px-4 md:px-6 max-w-4xl">
        <div className="flex items-center space-x-2">{/* タイトル削除 */}</div>
        <nav className="flex-1 mx-2 sm:mx-4 md:flex-none overflow-x-auto custom-scrollbar">
          <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-10 min-w-max">
            <a
              href="#profile"
              className="text-sm sm:text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Profile
            </a>
            <a
              href="#skills"
              className="text-sm sm:text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Skills
            </a>
            <a
              href="#qualifications"
              className="text-sm sm:text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Qualifications
            </a>
            <a
              href="#projects"
              className="text-sm sm:text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Projects
            </a>
            <a
              href="#links"
              className="text-sm sm:text-base md:text-xl font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Links
            </a>
          </div>
        </nav>
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 bg-transparent"
            asChild
          >
            <a href="https://github.com/ohagi-ky" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 bg-transparent"
            asChild
          >
            <a href="https://qiita.com/OhaGi_" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/qiita-logo.png"
                alt="Qiita"
                width={20}
                height={20}
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
