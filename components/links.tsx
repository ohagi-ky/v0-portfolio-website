import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, LinkIcon } from "lucide-react"

export function Links() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/ohagi-ky",
      icon: Github,
      description: "ソースコードとプロジェクト",
    },
    {
      name: "Qiita",
      url: "https://qiita.com/OhaGi_",
      icon: ExternalLink,
      description: "技術記事とナレッジ共有",
    },
  ]

  return (
    <section id="links" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-center space-x-3">
        <LinkIcon className="h-8 w-8 text-primary" />
        <h2 className="text-4xl font-bold text-balance">Links</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <link.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
