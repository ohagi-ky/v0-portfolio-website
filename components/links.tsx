import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"
import { LinkIcon } from "lucide-react"
import Image from "next/image"

export function Links() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/ohagi-ky",
      icon: "github",
      description: "ソースコードとプロジェクト",
    },
    {
      name: "Qiita",
      url: "https://qiita.com/OhaGi_",
      icon: "qiita",
      description: "技術記事とナレッジ共有",
    },
  ]

  return (
    <section id="links" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-center space-x-3">
        <LinkIcon className="h-8 w-8 text-primary" />
        <h2 className="text-4xl md:text-5xl text-primary animate-pulse-slow">Links</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-all hover:scale-110"
          >
            <Card className="hover:shadow-xl hover:shadow-primary/30 transition-all cursor-pointer h-full border-4 border-primary/20 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  {link.icon === "github" ? (
                    <Github className="h-12 w-12 text-primary flex-shrink-0" />
                  ) : (
                    <Image
                      src="/images/qiita-logo.png"
                      alt="Qiita"
                      width={48}
                      height={48}
                      className="h-12 w-12 flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-2xl md:text-3xl">{link.name}</h3>
                    <p className="text-base md:text-lg text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
