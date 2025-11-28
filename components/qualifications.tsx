import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

export function Qualifications() {
  const qualifications = [
    {
      name: "基本情報技術者試験",
      date: "2023年10月",
      organization: "IPA（情報処理推進機構）",
    },
    {
      name: "MOS PowerPoint",
      date: "2023年9月",
      organization: "Microsoft",
    },
    {
      name: "Linux Essential",
      date: "2023年12月",
      organization: "LPI",
    },
    {
      name: "応用情報技術者試験",
      date: "2024年7月",
      organization: "IPA（情報処理推進機構）",
    },
  ]

  return (
    <section id="qualifications" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-center space-x-3">
        <Award className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold text-balance font-[family-name:var(--font-press-start)]">Qualifications</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {qualifications.map((qual, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-primary hover:shadow-lg transition-all bg-gradient-to-r from-primary/5 to-transparent"
          >
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg leading-tight">{qual.name}</h3>
                  <Award className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                </div>
                {qual.score && <p className="text-primary font-medium">{qual.score}</p>}
                <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{qual.date}</span>
                  <span>•</span>
                  <span>{qual.organization}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
