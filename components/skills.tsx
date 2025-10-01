import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiJava,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiSpring,
  SiGit,
  SiGithub,
  SiFirebase,
  SiGooglecloud,
  SiFigma,
  SiDiscord,
  SiAndroid,
} from "react-icons/si"
import type { JSX } from "react"

const TechIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, { icon: JSX.Element; color: string }> = {
    JavaScript: { icon: <SiJavascript className="w-8 h-8" />, color: "#F7DF1E" },
    TypeScript: { icon: <SiTypescript className="w-8 h-8" />, color: "#3178C6" },
    Python: { icon: <SiPython className="w-8 h-8" />, color: "#3776AB" },
    Java: { icon: <SiJava className="w-8 h-8" />, color: "#007396" },
    "HTML/CSS": {
      icon: (
        <div className="relative w-8 h-8">
          <SiHtml5 className="w-8 h-8 absolute" style={{ color: "#E34F26" }} />
          <SiCss3 className="w-4 h-4 absolute bottom-0 right-0" style={{ color: "#1572B6" }} />
        </div>
      ),
      color: "#E34F26",
    },
    SQL: { icon: <SiMysql className="w-8 h-8" />, color: "#4479A1" },
    React: { icon: <SiReact className="w-8 h-8" />, color: "#61DAFB" },
    "Jetpack Compose": { icon: <SiAndroid className="w-8 h-8" />, color: "#3DDC84" },
    "discord.py": { icon: <SiDiscord className="w-8 h-8" />, color: "#5865F2" },
    "Node.js": { icon: <SiNodedotjs className="w-8 h-8" />, color: "#339933" },
    "tailwind.css": { icon: <SiTailwindcss className="w-8 h-8" />, color: "#06B6D4" },
    "Spring Boot": { icon: <SiSpring className="w-8 h-8" />, color: "#6DB33F" },
    Git: { icon: <SiGit className="w-8 h-8" />, color: "#F05032" },
    Github: { icon: <SiGithub className="w-8 h-8" />, color: "#181717" },
    Firebase: { icon: <SiFirebase className="w-8 h-8" />, color: "#FFCA28" },
    GCP: { icon: <SiGooglecloud className="w-8 h-8" />, color: "#4285F4" },
    Figma: { icon: <SiFigma className="w-8 h-8" />, color: "#F24E1E" },
  }

  const tech = iconMap[name] || {
    icon: <Code className="w-8 h-8" />,
    color: "currentColor",
  }

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border-2 border-primary/20 hover:border-primary transition-all hover:scale-105">
      <div style={{ color: tech.color }}>{tech.icon}</div>
      <span className="text-xs text-center font-mono text-foreground/90">{name}</span>
    </div>
  )
}

export function Skills() {
  const programmingLanguages = ["JavaScript", "TypeScript", "Python", "Java", "HTML/CSS", "SQL"]
  const frameworks = ["React", "Jetpack Compose", "discord.py", "Node.js", "tailwind.css", "Spring Boot"]
  const tools = ["Git", "Github", "Firebase", "GCP", "Figma"]

  return (
    <section id="skills" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-center space-x-3">
        <Code className="h-8 w-8 text-primary" />
        <h2 className="text-4xl font-bold text-balance">Skills</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-primary">
              <Code className="h-5 w-5" />
              <span className="font-mono">プログラミング言語</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {programmingLanguages.map((lang) => (
                <TechIcon key={lang} name={lang} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-secondary">
              <Code className="h-5 w-5" />
              <span className="font-mono">フレームワーク</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {frameworks.map((framework) => (
                <TechIcon key={framework} name={framework} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-accent">
              <Code className="h-5 w-5" />
              <span className="font-mono">ツール・技術</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <TechIcon key={tool} name={tool} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
