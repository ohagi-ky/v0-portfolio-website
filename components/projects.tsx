import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Github, ExternalLink, Users, Bot } from "lucide-react"
import Image from "next/image"

export function Projects() {
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
      icon: Users,
      imageUrl: "/images/komippu.jpg", // 後でアップロード予定
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
      icon: Bot,
      imageUrl: "/images/gemaneko.jpg", // 後でアップロード予定
    },
    {
      title: "OshiSup",
      type: "チーム開発",
      developers: "2人",
      description: "推し活をサポートするWebアプリケーションです。イベント管理や推し活記録の機能を提供します。",
      technologies: ["React", "Vite", "Fire Store"],
      githubUrl: "https://github.com/ohagi-ky/OshiSup",
      qiitaUrl: "https://qiita.com/OhaGi_/items/oshisup-development",
      icon: Users,
      imageUrl: "/images/oshisup.jpg", // 後でアップロード予定
    },
  ]

  const internships = [
    {
      company: "株式会社ベガコーポレーション",
      period: "2024年8月(5日間)",
      role: "プロダクト企画開発",
      description: "Reactを用い実際のシステム改善を企画から実装まで経験し、ユーザー視点での開発姿勢を学んだ。",
    },
    {
      company: "メディアリンク株式会社",
      period: "2024年9月(3日間)",
      role: "プロダクト企画開発",
      description:
        "Java・Gemini APIを用いた音声要約アプリ開発に従事。要件整理から設計・実装までをチームで担当し、生成AIを活用したシステム開発の実践経験を獲得。メンターによるレビューを通じて設計力・実装力を強化。",
    },
  ]

  return (
    <section id="projects" className="space-y-8 scroll-mt-20">
      <div className="flex items-center space-x-3">
        <Briefcase className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold text-balance">Projects & Experience</h2>
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
                    <project.icon className="h-6 w-6 text-primary" />
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
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Qiita
                      </a>
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={`${project.title}のスクリーンショット`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=192&width=400&text=${encodeURIComponent(project.title)}`
                      }}
                    />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
                <p className="text-muted-foreground mb-4 leading-relaxed">{internship.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
