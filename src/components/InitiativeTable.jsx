import { useState } from 'react'
import initiatives from '../data/initiatives'
import Badge from './Badge'

const InitiativeTable = () => {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [regionFilter, setRegionFilter] = useState('All')

  const filtered = initiatives.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || item.status === statusFilter
    const matchRegion = regionFilter === 'All' || item.region === regionFilter
    return matchSearch && matchStatus && matchRegion
  })

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search initiatives..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-800"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
        >
          <option>All</option>
          <option>Planning</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
        >
          <option>All</option>
          <option>Ngong</option>
          <option>Kajiado</option>
          <option>Nairobi</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Region</th>
              <th className="px-4 py-3">Leader</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-blue-900">{item.title}</td>
                  <td className="px-4 py-3 text-gray-600">{item.region}</td>
                  <td className="px-4 py-3 text-gray-600">{item.leader}</td>
                  <td className="px-4 py-3 text-gray-600">{item.date}</td>
                  <td className="px-4 py-3"><Badge status={item.status} /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">No initiatives found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InitiativeTable