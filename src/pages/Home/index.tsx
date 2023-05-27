import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import {
  BiUndo,
  BiRedo,
  BiPrinter,
  BiMinus,
  BiPlus,
  BiBold,
  BiItalic,
  BiUnderline,
  BiFontColor,
  BiHighlight,
  BiAlignJustify,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiListUl,
  BiListOl,
  BiUpArrow
} from 'react-icons/bi';
import {
  MdSpellcheck,
  MdOutlineAddComment,
  MdOutlineInsertPhoto
} from 'react-icons/md';
import { FiLink2 } from 'react-icons/fi';
import { TfiPaintRoller } from 'react-icons/tfi';
import PopoverHeadless from 'components/HeadlessDropDown';

const Home = () => {
  const [content, setContent] = useState('');
  const [zoomValue, setZoomValue] = useState('100%');
  const [textValue, setTextValue] = useState('Normal Text');
  const [fontValue, setFontValue] = useState('Arial');
  const [fontSize, setFontSize] = useState(10);
  const zoomOptions = [
    { name: '100%', href: '#' },
    { name: '50%', href: '#' },
    { name: '75%', href: '#' },
    { name: '90%', href: '#' },
    { name: '100%', href: '#' },
    { name: '125%', href: '#' },
    { name: '150%', href: '#' }
  ];
  const textOptions = [
    {
      name: 'Normal text',
      href: '#'
    },
    {
      name: 'Title',
      href: '#'
    },
    {
      name: 'Heading 1',
      href: '#'
    },
    {
      name: 'Heading 2',
      href: '#'
    },
    {
      name: 'Heading 3',
      href: '#'
    }
  ];
  const textFont = [
    {
      name: 'Arial',
      href: '#'
    },
    {
      name: 'Impact',
      href: '#'
    },
    {
      name: 'Comic Sans MS',
      href: '#'
    },
    {
      name: 'Generic Sans',
      href: '#'
    },
    {
      name: 'Lobster',
      href: '#'
    }
  ];

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col flex-grow">
        <div className="px-4 py-2 border-b">
          <Toolbar />
        </div>
        <div className="flex bg-[#EDF2FA] rounded-full p-1.5 mx-6 items-center">
          <div className="flex border border-0 border-r-2 mr-4 items-center">
            <BiUndo className="mr-2" size="1.4em" />
            <BiRedo className="mr-2" size="1.4em" />
            <BiPrinter className="mr-2" size="1.2em" />
            <MdSpellcheck className="mr-2" size="1.2em" />
            <TfiPaintRoller className="mr-2" size="1.2em" />
            <PopoverHeadless options={zoomOptions} placeholder={zoomValue} />
          </div>
          <div className="border border-0 border-r-2 mr-4 items-center">
            <PopoverHeadless options={textOptions} placeholder={textValue} />
          </div>
          <div className="border border-0 border-r-2 mr-4 items-center">
            <PopoverHeadless options={textFont} placeholder={fontValue} />
          </div>
          <div className="flex border border-0 border-r-2 mr-4 items-center">
            <BiMinus
              onClick={() => setFontSize(fontSize - 1)}
              size="1.2em"
              className="cursor-pointer mr-2"
            />
            <div className="mr-2">{fontSize}</div>
            <BiPlus
              size="1.2em"
              className="cursor-pointer mr-2"
              onClick={() => setFontSize(fontSize + 1)}
            />
          </div>
          <div className="flex border border-0 border-r-2 mr-2 items-center">
            <BiBold className="mr-2" size="1.2em" />
            <BiItalic className="mr-2" size="1.2em" />
            <BiUnderline className="mr-2" size="1.2em" />
            <BiFontColor className="mr-2" size="1.2em" />
            <BiHighlight className="mr-2" size="1.2em" />
          </div>
          <div className="flex border border-0 border-r-2 mr-2 items-center">
            <FiLink2 className="mr-2" size="1.2em" />
            <MdOutlineAddComment className="mr-2" size="1.2em" />
            <MdOutlineInsertPhoto className="mr-2" size="1.2em" />
          </div>
          <div className="flex border border-0 border-r-2 mr-2 items-center">
            <BiAlignJustify className="mr-2" size="1.2em" />
            <BiAlignLeft className="mr-2" size="1.2em" />
            <BiAlignMiddle className="mr-2" size="1.2em" />
            <BiAlignRight className="mr-2" size="1.2em" />
            <BiListUl className="mr-2" size="1.2em" />
            <BiListOl className="mr-2" size="1.2em" />
          </div>
          <BiUpArrow />
        </div>
        <div className="flex-grow p-4 bg-white mx-60 my-4">
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
