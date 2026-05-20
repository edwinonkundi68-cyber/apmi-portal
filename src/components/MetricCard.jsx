const MetricCard = ({ title, value, color }) => {
  return (
    <div className={`rounded-xl p-6 text-white shadow-md ${color}` }>
      <p className="text-sm font-medium uppercase tracking-wide opacity-80">{title}</p>
      <h2 className="text-4xl font-bold mt-2">{value}</h2>
    </div>
  )
}

export default MetricCard