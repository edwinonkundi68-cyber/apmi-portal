const announcements = [
  { id: 1, date: "May 15, 2025", message: "New peace dialogue scheduled in Ngong Hills this Friday." },
  { id: 2, date: "May 10, 2025", message: "APMI Leadership graduation ceremony — 42 new certified leaders." },
  { id: 3, date: "May 3, 2025", message: "Kajiado youth mentorship program now accepting applications." },
]

const AnnouncementFeed = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold text-blue-900 mb-4">Latest Announcements</h3>
      <ul className="space-y-4">
        {announcements.map((item) => (
          <li key={item.id} className="border-l-4 border-yellow-400 pl-4">
            <p className="text-xs text-gray-400">{item.date}</p>
            <p className="text-sm text-gray-700 mt-1">{item.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnnouncementFeed