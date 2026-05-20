const ResourceCard = ({ resource, onBookmark }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full 
            ${resource.type === 'PDF' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
            {resource.type}
          </span>
          <span className="text-xs text-gray-400">{resource.category}</span>
        </div>
        <h3 className="text-sm font-bold text-blue-900 mb-2">{resource.title}</h3>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => onBookmark(resource.id)}
          className={`text-xs font-semibold px-3 py-1 rounded-full border transition duration-200
            ${resource.bookmarked
              ? 'bg-yellow-400 text-white border-yellow-400'
              : 'border-gray-300 text-gray-500 hover:border-yellow-400 hover:text-yellow-500'}`}>
          {resource.bookmarked ? '★ Saved' : '☆ Save'}
        </button>
        <button className="text-xs text-blue-800 font-medium hover:underline">
          Open 
        </button>
      </div>
    </div>
  )
}

export default ResourceCard