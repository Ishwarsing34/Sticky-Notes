import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
  const data = [
    {
      desc: "Project proposal document containing system architecture, API flow, and database schema overview.",
      fileSize: "1.2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Resume PDF updated with MERN stack projects, DSA achievements, and internship experience.",
      fileSize: "420kb",
      close: false,
      tag: { isOpen: true, tagTitle: "View File", tagColor: "blue" },
    },
    {
      desc: "UI design assets exported from Figma including icons, color palette, and layout guidelines.",
      fileSize: "3.6mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Processing", tagColor: "yellow" },
    },
    {
      desc: "Backend API documentation covering authentication, JWT flow, and protected routes.",
      fileSize: "980kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Docs", tagColor: "purple" },
    },
    {
      desc: "Database backup file containing user data, indexed collections, and sample records.",
      fileSize: "5.1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Secure Download", tagColor: "red" },
    },
    {
      desc: "React component library build with reusable buttons, cards, modals, and form inputs.",
      fileSize: "2.4mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Coming Soon", tagColor: "gray" },
    },
  ];

  return (
    <>
      <div ref={ref}
        className="fixed top-0 left-0 w-full h-full z-30 
                    flex flex-wrap items-center justify-center 
                    gap-10 p-10 overflow-y-auto"
      >
        {data.map((item, index) => (
          <Card data={item} key={index} refer={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
