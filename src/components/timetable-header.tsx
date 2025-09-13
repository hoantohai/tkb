
import { Calendar, Clock, User, GraduationCap } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

export function TimetableHeader() {
  return (
    <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-balance">THỜI KHÓA BIỂU</h1>
            <Badge variant="secondary" className="ml-2">
              Số 1
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Năm học 2025-2026 • Học kỳ 1</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>GVCN: Phạm Hồng Loan</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="text-right">
            <h2 className="text-xl font-semibold text-primary">Lớp 6/10</h2>
            <p className="text-sm text-muted-foreground">THCS Tôn Thất Tùng</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>Thực hiện từ ngày 05 tháng 09 năm 2025</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
