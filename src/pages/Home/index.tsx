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
        <div className="p-4 border-b">
          <Toolbar/>
        </div>
        <div className="flex-grow p-4 bg-white">
        <textarea
            className="w-full h-full bg-transparent resize-none outline-none"
            value={content}
            onChange={handleContentChange}
          />
          </div>
      </div>
    </div>
  );
};

export default Home;
