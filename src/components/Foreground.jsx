import React, { useRef } from 'react';
import Card from './Card'; // Import the Card component

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Failed", tagColor: "blue" },
    },
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    }
    
  ];

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
