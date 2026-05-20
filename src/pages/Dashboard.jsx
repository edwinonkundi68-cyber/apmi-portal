import MetricCard from '../components/MetricCard'
import AnnouncementFeed from '../components/AnnouncementFeed'

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Executive Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-white p-6 rounded-xl shadow-md">
        <MetricCard title="Active Peace Missions" value="12" color="bg-blue-800" />
        <MetricCard title="Trained Community Leaders" value="284" color="bg-yellow-500" />
        <MetricCard title="Resolution Rate" value="87%" color="bg-green-600" />
      </div>

      <AnnouncementFeed />
    </div>
  )
}

export default Dashboard