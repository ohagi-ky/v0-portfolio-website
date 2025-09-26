import { Header } from "@/components/header"
import { Profile } from "@/components/profile"
import { Skills } from "@/components/skills"
import { Qualifications } from "@/components/qualifications"
import { Projects } from "@/components/projects"
import { Links } from "@/components/links"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16 max-w-4xl">
        <Profile />
        <Skills />
        <Qualifications />
        <Projects />
        <Links />
      </main>
    </div>
  )
}
