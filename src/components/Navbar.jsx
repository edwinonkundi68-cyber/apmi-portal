import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const links = [
    { path: '/', label: 'Dashboard' },
    { path: '/initiatives', label: 'Initiatives' },
    { path: '/report', label: 'Report' },
    { path: '/resources', label: 'Resources' },
  ]

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-yellow-400 font-bold text-xl">APMI Portal</h1>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`text-sm font-medium hover:text-yellow-400 transition duration-200 ${
                location.pathname === link.path ? 'text-yellow-400 underline' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar