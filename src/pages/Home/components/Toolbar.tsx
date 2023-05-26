import React from 'react'

const Toolbar = () => {
  return (
    <div>
        <div className="flex items-center space-x-4">
            <button className="bg-white hover:bg-gray-100 px-3 py-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.707 3.293a1 1 0 0 0-1.414 0L1 5.586V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.586l-2.293-2.293a1 1 0 0 0-1.414 0L10 7.586l-4.293-4.293a1 1 0 0 0-1.414 0z"
                />
              </svg>
            </button>
            <button className="bg-white hover:bg-gray-100 px-3 py-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.707 3.293a1 1 0 0 0-1.414 0L1 5.586V17a2 2 0 0 0 2 2h2v-2H3V6h12v11H9v2h2a2 2 0 0 0 2-2V5.586l-2.293-2.293a1 1 0 0 0-1.414 0L10 7.586l-4.293-4.293a1 1 0 0 0-1.414 0z"
                />
              </svg>
            </button>
            <button className="bg-white hover:bg-gray-100 px-3 py-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1.514.858L10 13.716l6.486 2.142A1 1 0 0 0 18 15V5a1 1 0 0 0-1.486-.874L10 7.284l-6.514-2.158A1 1 0 0 0 2 5V15a1 1 0 0 0 1.514.858L10 12.284l6.486 2.142A1 1 0 0 0 18 14V5a1 1 0 0 0-1-1V3a1 1 0 0 0-1.514-.858L10 5.716 3.514 3.574A1 1 0 0 0 3 4v1z"
                />
              </svg>
            </button>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Share</button>
          </div>
    </div>
  )
}

export default Toolbar