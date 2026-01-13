import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data,refer }) => {
  const tagColorMap = {
    green: "bg-green-600",
    blue: "bg-blue-600",
    red: "bg-red-600",
    yellow: "bg-yellow-500",
    purple: "bg-purple-600",
    gray: "bg-gray-600",
  };

  return (
    <>
      <motion.div whileDrag={{scale:1.2}}
        drag dragConstraints={refer} dragElastic={0.2}
        className="relative w-60 h-80 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
      >
        <FaRegFileAlt />

        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

        <div className="absolute bottom-0 w-full h-10 left-0 mb-9">
          <div className="flex items-center py-1 px-8 justify-between">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
        </div>

        {/* FIXED BLUE BAR */}
        {data.tag.isOpen && (
          <div className="tag absolute bottom-0 left-0 w-full bg-sky-200">
            <div
              className={`tag w-full py-2 text-center rounded-b-[50px]  ${
                tagColorMap[data.tag.tagColor]
              }`}
            >
              <h3 className="text-sm font-semibold text-black">
                {data.tag.tagTitle}
              </h3>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Card;
