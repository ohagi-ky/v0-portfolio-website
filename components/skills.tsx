import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"
import type { JSX } from "react"

const TechIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, JSX.Element> = {
    JavaScript: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 18.5c0 1.5 1 2 2.5 2s2.5-.5 2.5-2v-7h-2v7c0 .5-.2.7-.5.7s-.5-.2-.5-.7v-7h-2v7z" fill="#000" />
        <path d="M14.5 18.5c0 1.5 1 2 2.5 2 1.2 0 2-.4 2.5-1l-1-1c-.3.3-.7.5-1.5.5s-1-.3-1-1v-6.5h-2v7z" fill="#000" />
      </svg>
    ),
    TypeScript: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M13 7h-2v10h2V7zM17 11h-2v6h2v-6z" fill="#fff" />
        <path d="M7 9h4v2H9v6H7V9z" fill="#fff" />
      </svg>
    ),
    Python: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.5 2 7 3.5 7 6v2h5v1H6c-1.5 0-3 1-3 3.5v3c0 2.5 1.5 3.5 3 3.5h2v-3c0-1.5 1-3 3-3h5c1.5 0 2.5-1 2.5-2.5V6c0-2.5-1.5-4-4.5-4h-2zm-1 2.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
          fill="#3776AB"
        />
        <path
          d="M12 22c3.5 0 5-1.5 5-4v-2h-5v-1h6c1.5 0 3-1 3-3.5v-3c0-2.5-1.5-3.5-3-3.5h-2v3c0 1.5-1 3-3 3H8c-1.5 0-2.5 1-2.5 2.5V18c0 2.5 1.5 4 4.5 4h2zm1-2.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          fill="#FFD43B"
        />
      </svg>
    ),
    Java: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M9 18c-1 .5-2 .5-3 0 1-.5 2-.5 3 0zM16 17c-2 1-4 1-6 0 2-1 4-1 6 0z" fill="#EA2D2E" />
        <path
          d="M8 14s-1 1 1 1c3 0 5 0 8-1 0 0 1 1-1 1-4 1-6 1-8 0zM9 11s-1 1 1 1c2 0 4 0 6-1 0 0 1 1-1 1-3 1-5 1-6 0z"
          fill="#0074BD"
        />
        <path d="M14 8c1-1 0-2-1-2-2 0-3 1-3 2s1 2 2 2c1 0 2-1 2-2z" fill="#EA2D2E" />
      </svg>
    ),
    "HTML/CSS": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4z" fill="#E34F26" />
        <path d="M12 4v15l5-1.5 1-13.5H12z" fill="#EF652A" />
        <path d="M8 8h8v2H9l.5 2H16v2H9.5l.5 2h6l-.5 3-3.5 1-3.5-1-.5-2h2l.2 1 2.3.5 2.3-.5.2-1.5H8L7 8z" fill="#fff" />
      </svg>
    ),
    SQL: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path d="M7 8h10v2H7V8zM7 11h10v2H7v-2zM7 14h7v2H7v-2z" fill="#fff" />
      </svg>
    ),
    React: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
    "Jetpack Compose": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#4285F4" />
        <path d="M8 8l4 4-4 4M12 12l4-4v8l-4-4z" fill="#fff" />
      </svg>
    ),
    "discord.py": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#5865F2" />
        <path d="M9 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" fill="#fff" />
        <path d="M15 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" fill="#fff" />
        <path
          d="M17 6c-1-.5-2-1-3-1l-.5 1c-1-.2-2-.2-3 0L10 5c-1 0-2 .5-3 1-2 3-3 6-3 9 1.5 1.5 3.5 2 5 2 0 0 .5-.5 1-1-1-.5-1.5-1-2-1.5l.5-.5c2 1 4 1 6 0l.5.5c-.5.5-1 1-2 1.5.5.5 1 1 1 1 1.5 0 3.5-.5 5-2 0-3-1-6-3-9z"
          fill="#fff"
        />
      </svg>
    ),
    "Node.js": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#339933" />
        <path d="M12 7v10M7 9.5l5 2.5 5-2.5" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    "tailwind.css": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 6c-2 0-3.3.7-4 2 1-.7 2.2-1 3.5-.5.8.2 1.3.7 2 1.5 1 1 2.2 2 4.5 2 2 0 3.3-.7 4-2-1 .7-2.2 1-3.5.5-.8-.2-1.3-.7-2-1.5-1-1-2.2-2-4.5-2zM8 12c-2 0-3.3.7-4 2 1-.7 2.2-1 3.5-.5.8.2 1.3.7 2 1.5 1 1 2.2 2 4.5 2 2 0 3.3-.7 4-2-1 .7-2.2 1-3.5.5-.8-.2-1.3-.7-2-1.5-1-1-2.2-2-4.5-2z"
          fill="#06B6D4"
        />
      </svg>
    ),
    "Spring Boot": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#6DB33F" />
        <path
          d="M8 8c2 0 3 1 4 2 1-1 2-2 4-2 3 0 4 2 4 4s-1 4-4 4c-2 0-3-1-4-2-1 1-2 2-4 2-3 0-4-2-4-4s1-4 4-4z"
          fill="#fff"
        />
      </svg>
    ),
    Git: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M21.5 11.5l-9-9c-.5-.5-1.5-.5-2 0l-9 9c-.5.5-.5 1.5 0 2l9 9c.5.5 1.5.5 2 0l9-9c.5-.5.5-1.5 0-2z"
          fill="#F05032"
        />
        <path d="M12 8l-2 2 2 2 2-2-2-2zM10 10l-2 2 2 2 2-2-2-2z" fill="#fff" />
      </svg>
    ),
    Github: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#181717" />
        <path
          d="M12 6c-3.3 0-6 2.7-6 6 0 2.7 1.7 4.9 4.2 5.7.3 0 .4-.1.4-.3v-1c-1.7.4-2-.8-2-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.6 0 1 .6 1 .6.6 1 1.5.7 1.8.5 0-.4.2-.7.4-.9-1.4-.1-2.9-.7-2.9-3.2 0-.7.3-1.3.7-1.8-.1-.2-.3-.9.1-1.8 0 0 .6-.2 1.8.7.5-.1 1.1-.2 1.6-.2s1.1.1 1.6.2c1.2-.9 1.8-.7 1.8-.7.4.9.2 1.6.1 1.8.4.5.7 1.1.7 1.8 0 2.5-1.5 3.1-2.9 3.2.2.2.4.6.4 1.2v1.8c0 .2.1.3.4.3 2.5-.8 4.2-3 4.2-5.7 0-3.3-2.7-6-6-6z"
          fill="#fff"
        />
      </svg>
    ),
    Firebase: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M5 16l3-10 2 4 4-8 5 14H5z" fill="#FFA611" />
        <path d="M5 16l3-10 2 4-2 6H5z" fill="#F57C00" />
        <path d="M14 6l-4 10h9l-5-10z" fill="#FFCA28" />
      </svg>
    ),
    GCP: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 4l6 3.5v7L12 18l-6-3.5v-7L12 4z" fill="#4285F4" />
        <path d="M12 4l6 3.5-6 3.5-6-3.5L12 4z" fill="#669DF6" />
        <path d="M6 11v3.5L12 18v-7L6 11z" fill="#AECBFA" />
      </svg>
    ),
    Figma: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="15" cy="9" r="3" fill="#1ABCFE" />
        <circle cx="15" cy="15" r="3" fill="#0ACF83" />
        <circle cx="9" cy="15" r="3" fill="#FF7262" />
        <circle cx="9" cy="9" r="3" fill="#F24E1E" />
        <circle cx="9" cy="9" r="3" fill="#A259FF" />
      </svg>
    ),
  }

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border-2 border-primary/20 hover:border-primary transition-all hover:scale-105">
      {icons[name] || (
        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
          <Code className="w-5 h-5 text-primary" />
        </div>
      )}
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
                <TechIcon key={lang} name={lang} color="primary" />
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
                <TechIcon key={framework} name={framework} color="secondary" />
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
                <TechIcon key={tool} name={tool} color="accent" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
