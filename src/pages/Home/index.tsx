import React from 'react';
import Toolbar from './components/Toolbar';
import TextEditor from './components/TextEditor';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col flex-grow">
        <div className="px-4 py-2 border-b">
          <Toolbar />
        </div>
        <TextEditor />
      </div>
    </div>
  );
};

export default Home;
