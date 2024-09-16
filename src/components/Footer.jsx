import { useContext } from "react";
import { data } from "../assets/data";
import { qstStateContext } from "../contexts/QuestionsState";
const Footer = ({ timer }) => {
  let { questCount, setQuestCount } = useContext(qstStateContext);

  return (
    <div className="bg-white rounded p-4 mt-4 flex items-center justify-between flex-wrap">
      <div className="flex items-center gap-1">
        {data.map((item, index) => {
          return (
            <span
              key={index}
              className={`${
                questCount >= index ? "border border-main" : "bg-main"
              }  w-4 h-4 rounded-full`}></span>
          );
        })}
      </div>
      <div>00:{timer}</div>
    </div>
  );
};

export default Footer;
