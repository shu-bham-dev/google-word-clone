import React, { useState, useRef, useEffect } from 'react';
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
import {
  documentViewOption,
  textFont,
  textOptions,
  zoomOptions
} from 'Utils/data';

const Home = () => {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [zoomValue, setZoomValue] = useState('100%');
  const [textValue, setTextValue] = useState('Normal Text');
  const [fontValue, setFontValue] = useState('Arial');
  const [fontSize, setFontSize] = useState(10);
  const [documentView, setDocumentView] = useState('Editing');
  const toolbarStyle = 'flex border border-0 border-r-2 items-center';

  const handleToolbarClick = (format: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const selectedText = content.substring(selectionStart, selectionEnd);
    let updatedContent = '';

    switch (format) {
      case 'bold':
        updatedContent =
          content.substring(0, selectionStart) +
          `<strong>${selectedText}</strong>` +
          content.substring(selectionEnd);
        break;
      case 'italic':
        updatedContent =
          content.substring(0, selectionStart) +
          `<em>${selectedText}</em>` +
          content.substring(selectionEnd);
        break;
      // Add more formatting options as needed
      default:
        break;
    }

    setContent(updatedContent);
  };

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
          <div className={`${toolbarStyle} mr-4`}>
            <BiUndo className="mr-2" size="1.4em" />
            <BiRedo className="mr-2" size="1.4em" />
            <BiPrinter className="mr-2" size="1.2em" />
            <MdSpellcheck className="mr-2" size="1.2em" />
            <TfiPaintRoller className="mr-2" size="1.2em" />
            <PopoverHeadless options={zoomOptions} placeholder={zoomValue} />
          </div>
          <div className={`${toolbarStyle} mr-4`}>
            <PopoverHeadless options={textOptions} placeholder={textValue} />
          </div>
          <div className={`${toolbarStyle} mr-4`}>
            <PopoverHeadless options={textFont} placeholder={fontValue} />
          </div>
          <div className={`${toolbarStyle} mr-4`}>
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
          <div className={`${toolbarStyle} mr-2`}>
            <BiBold
              className="mr-2 cursor-pointer"
              size="1.2em"
              onClick={() => handleToolbarClick('bold')}
            />
            <BiItalic
              className="mr-2"
              size="1.2em"
              onClick={() => handleToolbarClick('italic')}
            />
            <BiUnderline className="mr-2" size="1.2em" />
            <BiFontColor className="mr-2" size="1.2em" />
            <BiHighlight className="mr-2" size="1.2em" />
          </div>
          <div className={`${toolbarStyle} mr-2`}>
            <FiLink2 className="mr-2" size="1.2em" />
            <MdOutlineAddComment className="mr-2" size="1.2em" />
            <MdOutlineInsertPhoto className="mr-2" size="1.2em" />
          </div>
          <div className={`${toolbarStyle} mr-2`}>
            <BiAlignJustify className="mr-2" size="1.2em" />
            <BiAlignLeft className="mr-2" size="1.2em" />
            <BiAlignMiddle className="mr-2" size="1.2em" />
            <BiAlignRight className="mr-2" size="1.2em" />
            <BiListUl className="mr-2" size="1.2em" />
            <BiListOl className="mr-2" size="1.2em" />
          </div>
          <div className="flex items-center ml-auto mr-24">
            <div className="bg-[#F9FBFD] rounded-full w-20 mr-4">
              <PopoverHeadless
                options={documentViewOption}
                placeholder={documentView}
              />
            </div>
            <BiUpArrow />
          </div>
        </div>
        <div className="flex-grow p-4 bg-white mx-60 my-4">
          <textarea
            className="placeholder:text-gray-600 placeholder:font-medium placeholder:italic w-full h-full bg-transparent resize-none outline-none p-24"
            value={content}
            ref={textareaRef}
            placeholder="Type @ to insert"
            onChange={handleContentChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
