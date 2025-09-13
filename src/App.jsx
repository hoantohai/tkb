import './App.css'
import { TimetableHeader } from "./components/timetable-header"
import { TimetableGrid } from "./components/timetable-grid"
import { TimetableStats } from "./components/timetable-stats"

function App() {

  return (
    <>
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <TimetableHeader />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4">
            <TimetableGrid />
          </div>
          {/* <div className="lg:col-span-1">
            <TimetableStats />
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
