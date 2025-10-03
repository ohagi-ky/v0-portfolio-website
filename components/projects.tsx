"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Github, Users, Bot, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Projects() {
  const [isComipDetailOpen, setIsComipDetailOpen] = useState(false)

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
      iconImage: "/images/comip-icon.png",
      imageUrl: "/images/comip-screen.png",
      imageUrl2: "/images/comip-screen2.png",
      details: {
        background:
          "コミックマーケットでは広大な会場で目的のサークルを見つけるのが困難という課題がありました。既存の地図アプリでは会場内の詳細な配置図を扱えず、紙の地図では検索や共有が不便でした。この問題を解決するため、デジタル地図上でサークル位置を管理・共有できるアプリを開発しました。",
        techReason:
          "Kotlinは型安全性が高く、Androidアプリ開発の公式言語として推奨されているため採用しました。Jetpack Composeは宣言的UIにより開発効率が高く、地図表示などの複雑なUIを直感的に実装できる点が魅力でした。また、チームメンバーがAndroid開発に興味を持っていたことも決め手となりました。",
        result:
          "5人のチームで約3ヶ月かけて開発し、地図の追加・閲覧・検索機能を実装しました。ユーザーは自分の地図を作成し、サークル位置をマーキングして友人と共有できるようになりました。実際のコミケ参加者からも「会場で迷わなくなった」との好評を得ました。",
        improvement:
          "現在はオフライン機能が不十分なため、会場の通信環境が悪い場合に使いづらい点が課題です。今後はローカルデータベースを活用したオフライン対応や、リアルタイムでの位置共有機能の追加を検討しています。また、UIのアクセシビリティ向上も改善点として挙げられます。",
      },
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
      imageUrl: "/images/gemaneko.jpg",
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
      imageUrl: "/images/oshisup.jpg",
    },
  ]

  const internships = [
    {
      company: "株式会社ベガコーポレーション",
      period: "2024年8月(5日間)",
      role: "プロダクト企画開発",
      description: "本インターンには実務に直結する課題解決型のインターンを通じて自分の力を試したいと思い参加を決めました。私はチーム開発の経験はありましたが、事業会社のエンジニアとして「実際の利用現場の声をもとに課題を見つけ、改善につなげる」プロセスに興味を持っていました。本インターンでは、LOWYAの実店舗で実際に使用されているシステムを題材に、現場スタッフの方々から実際の店舗の現状についてヒアリングを行い、そこから課題を抽出して改善を提案・プロトタイプとして形にすることに挑戦しました。開発工程では、利用者である顧客の行動やニーズを整理し、ユーザーストーリーを意識した機能追加を検討しました。単にシステムを動かすのではなく、「誰が・どのような場面で・どんな価値を得られるか」という視点を明確に持つことを心がけました。また、Reactを用いて短期間でも形になるプロトタイプを作成しました。既に知識があったフレームワークではありますが、短い期間の制約の中で素早く実装し、チームメンバーと意見を擦り合わせながら改善を重ねることで、学んできた技術を現実的なシステム開発に応用する力を養うことができました。また、チームでの議論を通じて、自分一人の視点では気付けなかったアイデアや解決策に触れ、協働の重要性を再認識しました。短い期間で成果を出すには、一人で作業を抱え込むのではなくメンバー間で積極的に進捗や課題を共有し、補い合う姿勢が不可欠であることを実感しました。実際に異なる得意分野を持つメンバーとのやりとりを通じて、設計やUIの工夫や開発効率化のための工夫などを互いに取り入れることができ、アウトプットの質を高めることができました。最終日の成果発表では、エンジニア社員だけでなく、実際にそのシステムを利用するビジネス職の社員の方々からもフィードバックをいただきました。開発した内容に対して現場目線からの感想や期待の声を直接伺うことができ、顧客視点でシステムを設計・改善することの重要性を改めて実感しました。技術的な完成度だけでなく、利用する人がどう感じ、どのように業務に活かすかを意識することが、エンジニアに求められる大切な姿勢だと学びました。このインターンを通じて得られた学びは、単なるプログラミング技術の向上にとどまりませんでした。ユーザーストーリーを重視して課題を整理する力、短期間で成果物を形にする実行力、チームで意見を交わし協働する姿勢、そして顧客視点を取り入れて開発する重要性を体感しました。これらの経験は、今後エンジニアとして成長していくうえで欠かせない財産になると感じています",
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
              {project.title === "こみっぷ" ? (
                <>
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
                          <project.icon className="h-6 w-6 text-primary" />
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
                      <div className="md:w-1/2 flex gap-3">
                        <div className="relative w-1/2 h-80 rounded-lg overflow-hidden bg-muted border-2 border-border">
                          <Image
                            src={project.imageUrl2 || "/placeholder.svg"}
                            alt={`${project.title}のスクリーンショット2`}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              e.currentTarget.src = `/placeholder.svg?height=320&width=200&text=${encodeURIComponent(project.title)}`
                            }}
                          />
                        </div>
                        <div className="relative w-1/2 h-80 rounded-lg overflow-hidden bg-muted border-2 border-border">
                          <Image
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={`${project.title}のスクリーンショット1`}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              e.currentTarget.src = `/placeholder.svg?height=320&width=200&text=${encodeURIComponent(project.title)}`
                            }}
                          />
                        </div>
                      </div>
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

                    {project.details && (
                      <div className="mt-6 border-t pt-4">
                        <Button
                          variant="default"
                          size="lg"
                          className="w-full flex items-center justify-between bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/30 hover:border-primary transition-all"
                          onClick={() => setIsComipDetailOpen(!isComipDetailOpen)}
                        >
                          <span className="font-bold text-base">📖 プロジェクト詳細を見る</span>
                          {isComipDetailOpen ? (
                            <ChevronUp className="h-6 w-6 font-bold" />
                          ) : (
                            <ChevronDown className="h-6 w-6 font-bold" />
                          )}
                        </Button>

                        {isComipDetailOpen && (
                          <div className="mt-4 space-y-4 animate-in slide-in-from-top-2">
                            <div>
                              <h4 className="font-semibold text-primary mb-2">制作背景</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.details.background}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">技術選定理由</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.details.techReason}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">結果</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.details.result}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">改善点</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.details.improvement}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </>
              ) : (
                <>
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
                          <project.icon className="h-6 w-6 text-primary" />
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
                    <div className="mb-4">
                      <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted border-2 border-border">
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={`${project.title}のスクリーンショット`}
                          fill
                          className="object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=256&width=400&text=${encodeURIComponent(project.title)}`
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
                </>
              )}
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
