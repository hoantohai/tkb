import { cn } from "../lib/utils"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const timetableData = {
  morning: {
    title: "Buổi sáng",
    periods: [
      { time: "Tiết 1", sessions: ["", "", "", "", "", "Giáo dục thể chất (Thể dục) - GV: Nguyễn Hữu Tình"] },
      { time: "Tiết 2", sessions: ["", "", "", "", "", "Giáo dục thể chất (Thể dục) - GV: Nguyễn Hữu Tình"] },
      { time: "Tiết 3", sessions: ["", "", "", "", "", "Tin học - GV TH1"] },
      { time: "Tiết 4", sessions: ["", "", "", "", "", "Tin học - GV TH1"] },
      { time: "Tiết 5", sessions: ["", "", "", "", "", ""] },
    ],
  },
  afternoon: {
    title: "Buổi chiều",
    periods: [
      {
        time: "Tiết 1",
        sessions: [
          "Âm Nhạc - GV: Nguyễn Thị Thu Hiền",
          "Mĩ Thuật - Sầm Thị Thảo",
          "Hoạt động trải nghiệm, hướng nghiệp - GV: Phạm Hồng Loan",
          "AVGT6 - GV AVGT6_2",
          "Văn - Nguyễn Thị Út Quyên",
          "Toán - Phạm Hồng Loan",
        ],
      },
      {
        time: "Tiết 2",
        sessions: [
          "GDCD - Lê Thuỷ Quỳnh",
          "NNgữ - Phan Nguyễn Thuỷ Linh",
          "GDDP - Trần Đăng Khoa",
          "Văn - Nguyễn Thị Út Quyên",
          "CNghệ - Trịnh Tuyết Mai",
          "LSĐL - Bùi Gia Phú",
        ],
      },
      {
        time: "Tiết 3",
        sessions: [
          "NNgữ - Phan Nguyễn Thuỷ Linh",
          "NNgữ - Phan Nguyễn Thuỷ Linh",
          "AVGT6 - GV AVGT6_2",
          "Văn - Nguyễn Thị Út Quyên",
          "KHTN - KHTN 1",
          "KHTN - KHTN 1",
        ],
      },
      {
        time: "Tiết 4",
        sessions: [
          "TNHN - Phạm Hồng Loan",
          "Văn - Nguyễn Thị Út Quyên",
          "Toán - Phạm Hồng Loan",
          "STE6 - Nguyễn Thị Thảo",
          "LSĐL - Bùi Gia Phú",
          "KHTN - KHTN 1",
        ],
      },
      {
        time: "Tiết 5",
        sessions: [
          "TNHN - Phạm Hồng Loan",
          "KHTN - KHTN 1",
          "Toán - Phạm Hồng Loan",
          "Toán - Phạm Hồng Loan",
          "LSĐL - Bùi Gia Phú",
          "KNS - Nguyễn Hồ Gia Hân",
        ],
      },
    ],
  },
}

const days = ["THỨ 2", "THỨ 3", "THỨ 4", "THỨ 5", "THỨ 6", "THỨ 7"]

const subjectColors = {
  Toán: "bg-blue-100 text-blue-800 border-blue-200",
  Văn: "bg-green-100 text-green-800 border-green-200",
  NNgữ: "bg-purple-100 text-purple-800 border-purple-200",
  KHTN: "bg-orange-100 text-orange-800 border-orange-200",
  GDTC: "bg-red-100 text-red-800 border-red-200",
  Nhạc: "bg-pink-100 text-pink-800 border-pink-200",
  GDCD: "bg-yellow-100 text-yellow-800 border-yellow-200",
  TNHN: "bg-teal-100 text-teal-800 border-teal-200",
  AVGT6: "bg-indigo-100 text-indigo-800 border-indigo-200",
  CNghệ: "bg-cyan-100 text-cyan-800 border-cyan-200",
  LSĐL: "bg-emerald-100 text-emerald-800 border-emerald-200",
  GDDP: "bg-lime-100 text-lime-800 border-lime-200",
  MT: "bg-violet-100 text-violet-800 border-violet-200",
  STE6: "bg-rose-100 text-rose-800 border-rose-200",
  Tin: "bg-slate-100 text-slate-800 border-slate-200",
  KNS: "bg-amber-100 text-amber-800 border-amber-200",
}

function getSubjectColor(subject: string) {
  const subjectName = subject.split(" - ")[0]
  return subjectColors[subjectName as keyof typeof subjectColors] || "bg-gray-100 text-gray-800 border-gray-200"
}

function SubjectCell({ subject }: { subject: string }) {
  if (!subject) {
    return <div className="h-16 bg-muted/30 rounded-md border-2 border-dashed border-muted-foreground/20" />
  }

  const [subjectName, teacher] = subject.split(" - ")

  return (
    <div
      className={cn(
        "h-16 p-2 rounded-md border-2 transition-all duration-200 hover:shadow-md hover:scale-105 cursor-pointer",
        getSubjectColor(subject),
      )}
    >
      <div className="text-xs font-semibold text-balance leading-tight">{subjectName}</div>
      {teacher && <div className="text-xs opacity-75 mt-1 text-balance leading-tight">{teacher}</div>}
    </div>
  )
}

export function TimetableGrid() {
  return (
    <div className="space-y-6">
      {/* Morning Session */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          <h3 className="text-lg font-semibold">{timetableData.morning.title}</h3>
          <Badge variant="outline" className="ml-2">
            4 tiết
          </Badge>
        </div>

        <div className="grid grid-cols-7 gap-2">
          <div className="font-medium text-sm text-muted-foreground p-2">Tiết</div>
          {days.map((day) => (
            <div key={day} className="font-medium text-sm text-center p-2 bg-primary/5 rounded-md">
              {day}
            </div>
          ))}

          {timetableData.morning.periods.map((period, periodIndex) => (
            <>
              <div
                key={`morning-${periodIndex}`}
                className="font-medium text-sm p-2 bg-muted/50 rounded-md text-center"
              >
                {period.time}
              </div>
              {period.sessions.map((subject, dayIndex) => (
                <SubjectCell key={`morning-${periodIndex}-${dayIndex}`} subject={subject} />
              ))}
            </>
          ))}
        </div>
      </Card>

      {/* Afternoon Session */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
          <h3 className="text-lg font-semibold">{timetableData.afternoon.title}</h3>
          <Badge variant="outline" className="ml-2">
            5 tiết
          </Badge>
        </div>

        <div className="grid grid-cols-7 gap-2">
          <div className="font-medium text-sm text-muted-foreground p-2">Tiết</div>
          {days.map((day) => (
            <div key={day} className="font-medium text-sm text-center p-2 bg-primary/5 rounded-md">
              {day}
            </div>
          ))}

          {timetableData.afternoon.periods.map((period, periodIndex) => (
            <>
              <div
                key={`afternoon-${periodIndex}`}
                className="font-medium text-sm p-2 bg-muted/50 rounded-md text-center"
              >
                {period.time}
              </div>
              {period.sessions.map((subject, dayIndex) => (
                <SubjectCell key={`afternoon-${periodIndex}-${dayIndex}`} subject={subject} />
              ))}
            </>
          ))}
        </div>
      </Card>
    </div>
  )
}
