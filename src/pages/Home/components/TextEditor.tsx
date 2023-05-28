import React, { useCallback } from 'react';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';

const TextEditor = () => {
  const TOOLBAR_OPTIONS = [
    ['blockquote', 'code-block'],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    ['image', 'blockquote', 'code-block'],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean']
  ];

  const wrapperRef = useCallback((wrapper: HTMLDivElement | null) => {
    if (wrapper === null) return;
    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    const toolbar = document.getElementsByClassName('ql-toolbar');
    console.log(toolbar);
    wrapper.append(editor);
    new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } });
  }, []);

  return (
    <>
      <div className="flex relative">
        <div className="flex flex-col">
          <div className="container h-full w-full" ref={wrapperRef}></div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
