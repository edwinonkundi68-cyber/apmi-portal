import { useState } from 'react'
import resourcesData from '../data/resources'
import ResourceCard from '../components/ResourceCard'

const ResourceLibrary = () => {
  const [resources, setResources] = useState(resourcesData)

  const toggleBookmark = (id) => {
    setResources(resources.map((r) =>
      r.id === id ? { ...r, bookmarked: !r.bookmarked } : r
    ))
  }

  const bookmarked = resources.filter((r) => r.bookmarked)
  const all = resources

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Resource Library</h2>
      <p className="text-gray-500 text-sm mb-6">
        {bookmarked.length} resource{bookmarked.length !== 1 ? 's' : ''} saved
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {all.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  )
}

export default ResourceLibrary