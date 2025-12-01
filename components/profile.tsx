"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Profile() {
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  return (
    <section id="profile" className="space-y-8 scroll-mt-20">
      <div className="flex items-center justify-center space-x-3">
        <User className="h-8 w-8 text-primary" />
        <h2 className="text-4xl font-bold text-balance font-[family-name:var(--font-press-start)]">Profile</h2>
      </div>

      <Card>
        <CardContent className="p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
                <div className="text-xl text-muted-foreground">
                  <p>名古屋工学院専門学校</p>
                  <p>情報総合学科</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                情報系学学科で開発全般の知識を学び、web開発に興味を持つ27卒の専門学生です。
                チーム開発やインターンシップを通じて実践的なスキルを身につけ、
                ユーザー体験を重視したWebアプリケーション開発に取り組んでいます。
              </p>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <Button
              onClick={() => setIsDetailOpen(!isDetailOpen)}
              variant="default"
              size="lg"
              className="w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base"
            >
              {isDetailOpen ? "プロフィール詳細を閉じる" : "プロフィール詳細を見る"}
              {isDetailOpen ? <ChevronUp className="h-5 w-5 ml-2" /> : <ChevronDown className="h-5 w-5 ml-2" />}
            </Button>

            {isDetailOpen && (
              <div className="mt-6 space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
                {/* エンジニアを目指すきっかけ */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">
                    エンジニアを目指すきっかけ
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed pl-3">
                    コロナ禍で外出が制限されていた時期、ECサイトをはじめとするインターネットサービスに支えられ、その便利さや仕組みに感動しました。そこから、社会に大きな価値を届けるエンジニアという仕事に強く興味を持ち、目指すようになりました。
                  </p>
                </div>

                {/* なりたいエンジニア像 */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">
                    なりたいエンジニア像
                  </h4>
                  <div className="text-base text-muted-foreground leading-relaxed pl-3 space-y-3">
                    <p>
                      企業のカルチャーを吸収し、自らも醸成できるエンジニアを目指しています。
                      入社後は企業カルチャーを深く理解し、チームの一員として信頼を獲得することを短期的目標としています。
                    </p>
                    <p>
                      さらに中期的には、自身のキャリアパスとして自身の強みを活かせるマネジメントの立場を目指し、組織の価値観や文化をメンバーへ浸透させ、前向きな変化を生むカルチャーを創る側になることを目標にしています。
                    </p>
                    <p>
                      長期的には、AI活用や業務改善、ドキュメント整備などを通じて組織の強度を高め、変化に強いチームづくりに貢献できるエンジニアを目指します。現状維持ではなく、常により良い方向へ変化し続けられるカルチャーを仲間と共に創り出していきたいです。
                    </p>
                  </div>
                </div>

                {/* 自分の強み */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">自分の強み</h4>
                  <div className="text-base text-muted-foreground leading-relaxed pl-3 space-y-3">
                    <p>
                      私の強みは、チーム全体を俯瞰し、他者の視点を踏まえて物事を整理・共有できる力です。開発において私は、常に「チームとして成果を最大化すること」を意識して行動してきました。特に、課題やタスクを整理し、目的や背景をメンバーと共有しながら進めることで、認識のずれを防ぎ、プロジェクトの推進に貢献してきました。
                    </p>
                    <p>
                      また、ユーザー視点を重視する姿勢も強みです。設計段階から「ユーザーがどう使うか」「どんな体験になるか」を議論に持ち込むことで、チーム全体が共通のゴールを持って開発を進められる状態をつくってきました。
                    </p>
                    <p>
                      こうした強みは、チーム内のコミュニケーションを円滑にし、関係者を巻き込みながら課題解決に取り組む際に大きく役立っています。将来的には、この強みを活かし、方向性を示しながらチームを支えられるマネジメントにも挑戦したいと考えています。
                    </p>
                  </div>
                </div>

                {/* 学生時代に頑張ったこと */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">
                    学生時代に頑張ったこと
                  </h4>
                  <div className="text-base text-muted-foreground leading-relaxed pl-3 space-y-3">
                    <p>
                      学生時代に最も力を入れたのは、4人チームで取り組んだアプリ「こみっぷ」の開発です。開発初期は、メンバー間で進捗共有が不十分で、タスクの認識違いや作業の重複が発生し、開発効率が低下していました。
                    </p>
                    <p>
                      そこで私は、状況の改善が必要だと感じ、デイリースクラムの導入を提案しました。毎日5分〜10分の短いミーティングを設け、進捗や課題を共有し、タスクの目的や背景を全員で再確認する運用を開始しました。また、タスクの内容を整理し、目的と期限を明確化したドキュメントを作成することで、認識のズレを防ぐ仕組みを整えました。
                    </p>
                    <p>
                      その結果、チーム内のコミュニケーションが大きく改善され、認識の統一が進んだことで開発のスピードと品質が向上しました。アプリは無事完成し、実際にコミックマーケットに参加するユーザーに使ってもらうことができました。
                    </p>
                    <p>
                      この経験から、エンジニアに必要なのは技術力だけでなく、メンバーを巻き込み、チーム全体で成果を最大化する力だと実感しました。今後の開発や社会人としての仕事においても、この経験を活かしていきたいと考えています。
                    </p>
                  </div>
                </div>

                {/* 企業を選ぶ軸 */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">企業を選ぶ軸</h4>
                  <div className="text-base text-muted-foreground leading-relaxed pl-3 space-y-3">
                    <p>私が企業を選ぶ際の軸は、大きく3つあります。</p>
                    <p>
                      <strong>1つ目は、ユーザー体験を大切にしている企業であることです。</strong>
                      これまでの開発経験を通じて、機能そのものよりも「ユーザーがどのように体験するか」を重視した開発が最も価値を生むと実感しました。特にインターンに参加した際、ユーザー視点でのフィードバックをいただき、ユーザー体験を磨いていく開発の奥深さと面白さを強く感じました。そのため、ユーザーの声を反映し続けられる企業で働きたいと考えています。
                    </p>
                    <p>
                      <strong>
                        2つ目は、Mission・Visionに基づいてプロダクトに熱量を持って取り組める環境であることです。
                      </strong>
                      過去の開発経験で、プロダクトに対する熱量の差がコミュニケーションのズレや作業遅延を生む場面を経験しました。プロダクトへの想いが共通しているチームでは、議論が活発になり、アウトプットの質とスピードが大きく変わります。そのため私は、理念やカルチャーが形骸化しておらず、言葉と行動が一致し、チーム全員が同じ方向を向ける環境を重視しています。
                    </p>
                    <p>
                      <strong>3つ目は、変化を恐れず改善に挑戦できる企業であることです。</strong>
                      私はAI活用を含む業務改善に取り組み、現状に満足せず「どうすればもっと良くなるか」を考え続ける姿勢を大切にしています。挑戦や改善を歓迎する文化の中で、自らも前向きな変化を起こせるエンジニアとして成長したいと考えています。
                    </p>
                    <p>
                      これらの軸を満たす企業で、ユーザーに価値ある体験を届けるプロダクトづくりに関わりながら、自身も組織の力になりたいと考えています。
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
