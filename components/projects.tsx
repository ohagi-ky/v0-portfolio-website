"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Projects() {
  const [expandedInternships, setExpandedInternships] = useState<Record<number, boolean>>({})

  const projects = [
    {
      title: "こみっぷ",
      type: "チーム開発",
      developers: "5人",
      description:
        "アンドロイドスタジオで作成したアンドロイドアプリです。コミックマーケットでの使用を想定した地図追加・閲覧アプリです。",
      technologies: ["Kotlin", "Android Studio", "Jetpack Compose"],
      githubUrl: "https://github.com/TYTTNTeam/ComikeApp",
      qiitaUrl: "https://qiita.com/OhaGi_/items/94a6503033b1d91bb405",
      iconImage: "/images/comip-icon.png",
      imageUrl: "/images/comip-screen.png",
      imageUrl2: "/images/comip-screen2.png",
    },
    {
      title: "gemaneko",
      type: "個人開発",
      developers: "1人",
      description:
        "Discordのゲーム参加管理用Bot gemaneko(ゲマネコ) です。コマンドを使ってゲームの登録・参加・管理ができます。",
      technologies: ["Python", "discord.py", "Google Cloud", "Cloud Engine"],
      githubUrl: "https://github.com/ohagi-ky/gemaneko",
      qiitaUrl: "https://qiita.com/OhaGi_/items/f3ca0c144aca495344a7",
      iconImage: "/images/gemaneko-icon.png",
      imageUrl: "/images/gemaneko-screen1.png",
      imageUrl2: "/images/gemaneko-screen2.png",
    },
    {
      title: "OshiSup",
      type: "チーム開発",
      developers: "2人",
      description: "推し活をサポートするWebアプリケーションです。イベント管理や推し活記録の機能を提供します。",
      technologies: ["React", "Vite", "Fire Store"],
      githubUrl: "https://github.com/ohagi-ky/OshiSup",
      qiitaUrl: "https://qiita.com/OhaGi_/items/oshisup-development",
      imageUrl: "/images/oshisup.jpg",
      imageUrl2: "/images/oshisup-screen.png",
      imageUrl3: "/images/oshisup-screen2.jpg",
    },
  ]

  const internships = [
    {
      company: "株式会社ベガコーポレーション",
      period: "2024年8月(5日間)",
      role: "プロダクト企画開発",
      shortDescription: "Reactを用い実際のシステム改善を企画から実装まで経験",
      fullDescription:
        "Reactを用い実際のシステム改善を企画から実装まで経験し、ユーザー視点での開発姿勢を学んだ。チームでの協働開発を通じて、コードレビューやアジャイル開発の実践的なスキルを習得。実際のプロダクトに触れることで、ビジネス要件を技術的に実現する力を養った。",
    },
    {
      company: "メディアリンク株式会社",
      period: "2024年9月(3日間)",
      role: "プロダクト企画開発",
      shortDescription: "Java・Gemini APIを用いた音声要約アプリ開発に従事",
      fullDescription:
        "Java・Gemini APIを用いた音声要約アプリ開発に従事。要件整理から設計・実装までをチームで担当し、生成AIを活用したシステム開発の実践経験を獲得。メンターによるレビューを通じて設計力・実装力を強化。特にAPI連携やエラーハンドリングの重要性を学び、実務レベルのコーディング規約やテスト手法についても理解を深めた。",
    },
  ]

  const toggleInternship = (index: number) => {
    setExpandedInternships((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section id="projects" className="space-y-8 scroll-mt-20">
      <div className="flex items-center justify-center space-x-3">
        <Briefcase className="h-8 w-8 text-primary" />
        <h2 className="text-4xl font-bold text-balance">Projects & Experience</h2>
      </div>

      {/* プロジェクト */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">開発プロジェクト</h3>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {project.iconImage ? (
                      <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                          src={project.iconImage || "/placeholder.svg"}
                          alt={`${project.title} icon`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <Briefcase className="h-6 w-6 text-primary" />
                    )}
                    <span>{project.title}</span>
                    <Badge variant="outline">{project.type}</Badge>
                    <Badge variant="outline">{`開発人数:${project.developers}`}</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.qiitaUrl} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/qiita-logo.png"
                          alt="Qiita"
                          width={16}
                          height={16}
                          className="h-4 w-4 mr-2"
                        />
                        Qiita
                      </a>
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  {project.imageUrl3 ? (
                    <div className="md:w-1/2 flex gap-3">
                      <a
                        href={project.imageUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-1/2 h-80 rounded-lg overflow-hidden bg-muted border-2 border-border hover:border-primary transition-colors cursor-pointer"
                      >
                        <Image
                          src={project.imageUrl2 || "/placeholder.svg"}
                          alt={`${project.title}のスクリーンショット1`}
                          fill
                          className="object-contain"
                        />
                      </a>
                      <a
                        href={project.imageUrl3}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-1/2 h-80 rounded-lg overflow-hidden bg-muted border-2 border-border hover:border-primary transition-colors cursor-pointer"
                      >
                        <Image
                          src={project.imageUrl3 || "/placeholder.svg"}
                          alt={`${project.title}のスクリーンショット2`}
                          fill
                          className="object-contain"
                        />
                      </a>
                    </div>
                  ) : project.imageUrl2 ? (
                    <div className="md:w-1/2 flex gap-3">
                      <a
                        href={project.imageUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-1/2 h-80 rounded-lg overflow-hidden bg-muted border-2 border-border hover:border-primary transition-colors cursor-pointer"
                      >
                        <Image
                          src={project.imageUrl2 || "/placeholder.svg"}
                          alt={`${project.title}のスクリーンショット2`}
                          fill
                          className="object-contain"
                        />
                      </a>
                      <a
                        href={project.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-1/2 h-80 rounded-lg overflow-hidden bg-muted border-2 border-border hover:border-primary transition-colors cursor-pointer"
                      >
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={`${project.title}のスクリーンショット1`}
                          fill
                          className="object-contain"
                        />
                      </a>
                    </div>
                  ) : (
                    <div className="md:w-1/2">
                      <a
                        href={project.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full h-80 rounded-lg overflow-hidden bg-muted border-2 border-border hover:border-primary transition-colors cursor-pointer block"
                      >
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={`${project.title}のスクリーンショット`}
                          fill
                          className="object-contain"
                        />
                      </a>
                    </div>
                  )}
                  <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">使用技術</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-base px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base"
                    asChild
                  >
                    <a href={project.qiitaUrl} target="_blank" rel="noopener noreferrer">
                      <Image src="/images/qiita-logo.png" alt="Qiita" width={20} height={20} className="h-5 w-5 mr-2" />
                      Qiitaで詳細を見る
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-4 text-center">
          上記に加えて、専門学校での授業でチーム開発を数回経験しました。
        </p>
      </div>

      {/* インターンシップ */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">インターンシップ経験</h3>
        <div className="grid gap-6">
          {internships.map((internship, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <div>
                    <div>{internship.company}</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      {internship.role} • {internship.period}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="cursor-pointer group"
                  onClick={() => toggleInternship(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleInternship(index)
                    }
                  }}
                >
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {expandedInternships[index] ? internship.fullDescription : internship.shortDescription}
                    <span className="ml-2 text-primary font-semibold">
                      {expandedInternships[index] ? "▲ 閉じる" : "▼ 続きを読む"}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
