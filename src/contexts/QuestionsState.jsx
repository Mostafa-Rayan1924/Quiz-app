import { createContext, useState } from "react";

export let qstStateContext = createContext();

const QuestionsState = ({ children }) => {
  let [questCount, setQuestCount] = useState(0);

  return (
    <qstStateContext.Provider value={{ questCount, setQuestCount }}>
      {children}
    </qstStateContext.Provider>
  );
};

export default QuestionsState;
