import React from 'react';
import { FcDocument } from 'react-icons/fc';
import { FaHistory } from 'react-icons/fa';
import { TbLock } from 'react-icons/tb';
import { BsChatRightText } from 'react-icons/bs';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import PopoverHeadless from 'components/HeadlessDropDown';
const Toolbar = () => {
  const options = [
    { name: 'New', href: '#' },
    { name: 'Open', href: '#' },
    { name: 'Make a copy', href: '#' },
    { name: 'Download', href: '#' }
  ];
  return (
    <div className="flex">
      <FcDocument size="3em" />
      <div className="flex flex-col ml-4">
        <div className="text-lg font-normal text-gray-700">
          Untitled Document
        </div>
        <div className="flex">
          <PopoverHeadless options={options} placeholder="File" />
          <PopoverHeadless options={options} placeholder="Edit" />
          <PopoverHeadless options={options} placeholder="View" />
          <PopoverHeadless options={options} placeholder="Format" />
          <PopoverHeadless options={options} placeholder="Tools" />
          <PopoverHeadless options={options} placeholder="Extension" />
          <PopoverHeadless options={options} placeholder="Help" />
        </div>
      </div>
      <div className="flex ml-auto items-center">
        <FaHistory size="1.3em" className="mr-6 cursor-pointer" />
        <BsChatRightText size="1.3em" className="mr-6 cursor-pointer" />
        <HiOutlineVideoCamera size="1.8em" className="mr-6 cursor-pointer" />
        <div className='rounded-full cursor-pointer bg-blue-300 flex h-4 p-4 items-center mr-10'>
          <TbLock size="1.2em" className="mr-2" />
          <div className="text-sm">Share</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Toolbar;
