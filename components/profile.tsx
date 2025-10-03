"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function Profile() {
  const [showFullInternship, setShowFullInternship] = useState(false)

  const shortDescription = "情報系学学科で開発全般の知識を学び、web開発に興味を持つ27卒の専門学生です。"

  const fullInternshipText = `チーム開発やインターンシップを通じて実践的なスキルを身につけ、ユーザー体験を重視したWebアプリケーション開発に取り組んでいます。

インターンシップでは、実際の開発現場でReactとNext.jsを使用したWebアプリケーションの開発に携わりました。要件定義から設計、実装、テストまでの一連の開発プロセスを経験し、アジャイル開発手法やGitを使用したチーム開発のワークフローを学びました。

特に印象的だったのは、ユーザーフィードバックを基にした機能改善のプロセスです。実際のユーザーの声を聞きながら、UIの改善やパフォーマンスの最適化に取り組み、ユーザー満足度の向上に貢献することができました。この経験を通じて、技術力だけでなく、ユーザー視点での開発の重要性を深く理解することができました。

また、先輩エンジニアからのコードレビューを通じて、保守性の高いコードの書き方や、効率的なデバッグ手法など、実践的なスキルを多く学ぶことができました。これらの経験は、今後のエンジニアとしてのキャリアにおいて大きな財産となっています。`

  return (
    <section id="profile" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-center space-x-3">
        <User className="h-8 w-8 text-primary" />
        <h2 className="text-4xl font-bold text-balance">Profile</h2>
      </div>

      <Card>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img src="/profile.jpg" alt="Kouen Yoshimura" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold flex items-center space-x-3">
                  <span>嘉村 虹縁</span>
                  <span className="text-muted-foreground text-lg font-normal">(Kouen Yoshimura)</span>
                </h3>
                <div className="text-lg text-muted-foreground">
                  <p>名古屋工学院専門学校</p>
                  <p>情報総合学科</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">{shortDescription}</p>
                {showFullInternship && (
                  <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {fullInternshipText}
                  </p>
                )}
                <button
                  onClick={() => setShowFullInternship(!showFullInternship)}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <span>{showFullInternship ? "閉じる" : "インターンシップ経験を読む"}</span>
                  {showFullInternship ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
