"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function Profile() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const sections = [
    {
      id: "motivation",
      title: "エンジニアを目指すきっかけ",
      content:
        "コロナ禍で外出が制限されていた時期、ECサイトをはじめとするインターネットサービスに支えられ、その便利さや仕組みに感動しました。そこから、社会に大きな価値を届けるエンジニアという仕事に強く興味を持ち、目指すようになりました。",
    },
    {
      id: "vision",
      title: "なりたいエンジニア像",
      content:
        "私は、企業のカルチャーを理解・吸収し、その中で自分自身も成長しながらカルチャーを育てていけるエンジニアを目指しています。新卒として入社した直後は、まずは基礎的な技術力や業務知識を身につけ、一人前のエンジニアとして信頼される存在になることを第一の目標としています。そのうえで、チームの一員として周囲と協力しながら、着実に成果を出せるよう取り組んでいきたいと考えています。\n\n中期的には、AIをはじめとする新しい技術を積極的に活用し、業務や開発プロセスの改善に取り組みたいです。効率化や自動化を推進するだけでなく、そこで生まれた余力を新しい挑戦やユーザー体験の向上に投資できるようにし、チームや組織により大きな価値をもたらすことを目指します。\n\n長期的には、現状維持にとどまらず、常に「どうすればもっと良くなるか」を考え続け、変化を恐れず挑戦できる人材になりたいです。企業のカルチャーを大切にしつつ、自らの行動で周囲に良い影響を与え、組織全体が前向きに成長していけるようなエンジニアとしてキャリアを築いていきたいと考えています。",
    },
    {
      id: "strength",
      title: "自分の強み",
      content:
        "私の強みは、チームを俯瞰して物事を捉え、他者の視点を意識しながら行動できることです。開発においては「自分」ではなく「チーム」を主語に考え、個々の成果ではなく全体の成果を重視して取り組んできました。そのために一人で抱え込まず周囲を巻き込みながら課題を解決する姿勢を大切にしています。\n\nまた、設計段階からユーザー視点を取り入れることを心がけており「ユーザーはどう使うか」という観点からチームに働きかけることで、共通のゴールを持った開発につなげることができました。こうした姿勢は、議論を前向きに進めたりチーム全体で効率的に成果を出すことに役立ったと感じています。\n\nこれらの経験から、チームをリードし、仲間と協力しながら成果を最大化できるエンジニアになれると考えています。そのためにまずは一員として積極的に学び、周囲を巻き込みながら価値のある開発に貢献していきたいです。",
    },
    {
      id: "achievement",
      title: "学生時代に頑張ったこと",
      content:
        "学生時代に最も力を入れたのは、チームで開発したアプリ「こみっぷ」の制作です。\n開発の初期段階ではメンバー間で進捗共有やタスクの理解が十分にできておらず、開発の効率が落ちたり、タスクの内容と違うプログラムが作られることがありました。\nそれを解決するためにデイリースクラムの実施を提案し毎日の短いミーティングで進捗報告や課題の共有を行う場を設けました。\nまた、タスクの内容や目的を改めて理解し合う時間も設けることで、メンバー間の認識のズレを減らしてチーム全体の連携を強化しました。\nこの取り組みにより、情報共有が円滑になり、開発のスピードと品質が向上しました。\nこの経験からエンジニアは技術面だけでなく、コミュニケーション能力も重要であると実感し、チームで成果を出す力を身につけることができました。",
    },
    {
      id: "criteria",
      title: "企業を選ぶ軸",
      content:
        "私が企業を選ぶ際の軸は、大きく3つあります。\n1つ目は、ユーザーの視点に立ち、ユーザー体験を大切にしていることです。\nこれまでの開発経験から「ユーザーの声を反映し、体験を磨き続ける姿勢」がサービスの価値を大きく左右すると実感しており、常にユーザー目線で開発が行われる環境を重視しています。\n2つ目は、Mission・Visionに基づき、プロダクトに熱意を持って取り組んでいることです。\n形骸化していない理念のもとで働きたいと考えており、私自身も高い熱量で課題に挑み、同じ志を持つ仲間と共に成長していける環境を求めています。\n3つ目は、新しい技術や業務改善に積極的であることです。\nAIをはじめとする技術を柔軟に取り入れ、効率化や価値向上に前向きな企業で、自分自身も挑戦し続けたいと考えています。\nこれらの軸を尊重する企業で、技術力を高めながら、ユーザーに価値のある体験を届けていきたいと考えています。",
    },
  ]

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
              <p className="text-base text-muted-foreground leading-relaxed">
                情報系学学科で開発全般の知識を学び、web開発に興味を持つ27卒の専門学生です。
                チーム開発やインターンシップを通じて実践的なスキルを身につけ、
                ユーザー体験を重視したWebアプリケーション開発に取り組んでいます。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {sections.map((section) => (
          <Card key={section.id} className="overflow-hidden border-2 border-primary/20">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
            >
              <h3 className="text-xl font-bold text-left">{section.title}</h3>
              {openSection === section.id ? (
                <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
              ) : (
                <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
              )}
            </button>
            {openSection === section.id && (
              <CardContent className="p-6 pt-0 border-t border-border">
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
