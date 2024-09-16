import { useContext } from "react";
import { data } from "../assets/data";
import { qstStateContext } from "../contexts/QuestionsState";

const Header = () => {
  let { questCount, setQuestCount } = useContext(qstStateContext);

  return (
    <div className="flex items-center gap-2 justify-between flex-wrap bg-white rounded p-4 mb-4">
      <h2>
        Category:{" "}
        <span className="text-green-500 font-bold">{data[questCount].cat}</span>
      </h2>
      <h2>
        Questions Count :
        <span className="text-green-500 font-bold">
          {questCount + 1}/{data.length}
        </span>
      </h2>
    </div>
  );
};

export default Header;
