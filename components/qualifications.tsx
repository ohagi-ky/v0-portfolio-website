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
      <div className="flex items-center justify-center space-x-3 px-4">
        <Award className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-balance font-[family-name:var(--font-press-start)] break-words">
          Qualifications
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {qualifications.map((qual, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-primary hover:shadow-lg transition-all bg-gradient-to-r from-primary/5 to-transparent"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-tight break-words flex-1">
                    {qual.name}
                  </h3>
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                </div>
                {qual.score && <p className="text-sm sm:text-base text-primary font-medium">{qual.score}</p>}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{qual.date}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <span className="w-full sm:w-auto">{qual.organization}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
