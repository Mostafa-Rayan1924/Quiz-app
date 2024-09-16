import { useContext } from "react";
import { data } from "../assets/data";
import { qstStateContext } from "../contexts/QuestionsState";
const Footer = ({ timer, show }) => {
  let { questCount, setQuestCount } = useContext(qstStateContext);

  return (
    <div className="bg-white rounded p-4 mt-4 flex items-center gap-2 justify-center  sm:justify-between flex-wrap">
      {show ? (
        <p className="text-center w-full text-red-500 font-bold text-2xl">
          GAME OVER
        </p>
      ) : (
        <>
          <div className="flex items-center justify-center flex-wrap gap-1">
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
          <div>Time: 00:{timer}</div>
        </>
      )}
    </div>
  );
};

export default Footer;
