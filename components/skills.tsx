import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layers, Wrench } from "lucide-react"

export function Skills() {
  const programmingLanguages = ["JavaScript", "TypeScript", "Python", "Java", "HTML/CSS", "SQL"]

  const frameworks = ["React","Jetpack Compose", "discord.py", "Node.js","tailwind.css", "Spring Boot"]

  const tools = ["Git","Github","Firebase", "GCP","Figma"]

  return (
    <section id="skills" className="space-y-6">
      <div className="flex items-center space-x-3">
        <Code className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold text-balance">Skills</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <span>プログラミング言語</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Layers className="h-5 w-5 text-primary" />
              <span>フレームワーク</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <Badge key={framework} variant="secondary">
                  {framework}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wrench className="h-5 w-5 text-primary" />
              <span>ツール・技術</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
