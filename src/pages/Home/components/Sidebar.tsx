import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Google Docs</h1>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M13 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5zm2-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4zm2-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M13 13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4zm2-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2z"
                  />
                </svg>
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 0 0-1 1v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a1 1 0 0 0-1-1zm0 2h4v8h-4V5zM7 5h2v2H7V5zm0 4h2v2H7V9zm0 4h2v2H7v-2zm4-8h2v2h-2V5zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"
                  />
                </svg>
                Sheets
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6zm3 3h4v1h-4V8zm0 2h4v1h-4V10zm0 2h4v1h-4v-1zm0 2h2v1H9v-1z"
                  />
                </svg>
                Slides
              </a>
            </li>
            {/* Add more links to other Google apps here */}
          </ul>
        </nav>
    </div>
  )
}

export default Sidebar