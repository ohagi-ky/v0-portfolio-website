import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export function Profile() {
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
    </section>
  )
}
