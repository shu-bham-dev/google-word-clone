import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';

const Home = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (e:any) => {
    setContent(e.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col flex-grow">
        <div className="px-4 py-2 border-b bg-[#EDF2FA]">
          <Toolbar/>
        </div>
        <div className="flex-grow p-4 bg-white mx-32 my-4">
        <textarea
            className="placeholder:text-gray-600 placeholder:font-medium placeholder:italic w-full h-full bg-transparent resize-none outline-none p-24"
            value={content}
            placeholder="Type @ to insert"
            onChange={handleContentChange}
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
