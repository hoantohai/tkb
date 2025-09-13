
import { BookOpen, Users, Clock, TrendingUp } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const stats = [
  {
    title: "Tổng số môn học",
    value: "12",
    description: "môn học trong tuần",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    title: "Số tiết/tuần",
    value: "35",
    description: "tiết học mỗi tuần",
    icon: Clock,
    color: "text-green-600",
  },
  {
    title: "Giáo viên",
    value: "15",
    description: "giáo viên tham gia",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Hiệu suất",
    value: "98%",
    description: "tỷ lệ hoàn thành",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

const subjects = [
  { name: "Toán", periods: 6, color: "bg-blue-500" },
  { name: "Văn", periods: 5, color: "bg-green-500" },
  { name: "Ngoại ngữ", periods: 4, color: "bg-purple-500" },
  { name: "KHTN", periods: 4, color: "bg-orange-500" },
  { name: "GDTC", periods: 3, color: "bg-red-500" },
  { name: "Khác", periods: 13, color: "bg-gray-500" },
]

export function TimetableStats() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-lg bg-muted/50", stat.color)}>
                <stat.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Subject Distribution */}
      <Card className="p-4">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Phân bố môn học
        </h4>
        <div className="space-y-3">
          {subjects.map((subject) => (
            <div key={subject.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-full", subject.color)} />
                <span className="text-sm font-medium">{subject.name}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {subject.periods} tiết
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-4">
        <h4 className="font-semibold mb-4">Thao tác nhanh</h4>
        <div className="space-y-2">
          <button className="w-full text-left p-2 text-sm hover:bg-muted/50 rounded-md transition-colors">
            📊 Xem báo cáo chi tiết
          </button>
          <button className="w-full text-left p-2 text-sm hover:bg-muted/50 rounded-md transition-colors">
            📝 Chỉnh sửa thời khóa biểu
          </button>
          <button className="w-full text-left p-2 text-sm hover:bg-muted/50 rounded-md transition-colors">
            📤 Xuất file PDF
          </button>
          <button className="w-full text-left p-2 text-sm hover:bg-muted/50 rounded-md transition-colors">
            🔔 Cài đặt thông báo
          </button>
        </div>
      </Card>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
