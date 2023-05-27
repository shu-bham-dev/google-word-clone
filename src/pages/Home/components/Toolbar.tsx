import React from 'react';
import { FcDocument } from 'react-icons/fc';
const Toolbar = () => {
  return (
    <div className="flex">
      <FcDocument size="3em" />
      <div className="flex flex-col">
        <div className="text-xl">Untitled Document</div>
        <div className="flex">
          <div>S</div>
          <div>A</div>
          <div>R</div>
          <div>P</div>
        </div>
      </div>
      <div className="flex">
        <div>History</div>
        <div>Chat</div>
        <div>Share</div>
      </div>
      <div></div>
    </div>
  );
};

export default Toolbar;
