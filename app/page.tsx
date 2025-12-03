import { Header } from "@/components/header"
import { Profile } from "@/components/profile"
import { Skills } from "@/components/skills"
import { Qualifications } from "@/components/qualifications"
import { Projects } from "@/components/projects"
import { Links } from "@/components/links"
import { Hero } from "@/components/hero"
import { PageTopButton } from "@/components/page-top-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Header />
      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 space-y-12 sm:space-y-16 max-w-4xl">
        <Profile />
        <Skills />
        <Qualifications />
        <Projects />
        <Links />
      </main>
      <PageTopButton />
    </div>
  )
}
