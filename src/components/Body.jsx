import { useContext, useEffect, useRef, useState } from "react";
import { data } from "../assets/data";
import { qstStateContext } from "../contexts/QuestionsState";

const Body = ({
  correctAnsCount,
  selectedValue,
  show,
  reviewAnswers,
  handleChange,
  handleSubmit,
}) => {
  let { questCount, setQuestCount } = useContext(qstStateContext);
  let sendData = () => {
    handleSubmit();
  };
  return (
    <div>
      {!show ? (
        <>
          <div className="bg-white rounded p-4 mb-4">
            <h1 className="text-2xl title sm:text-3xl font-bold mb-3">
              {data[questCount]?.title}
            </h1>
            <form className="bg-gray-100 divide-y-2 rounded p-4">
              <div className="flex items-center gap-2 py-2">
                <input
                  value="option1"
                  checked={selectedValue === data[questCount]?.answer_1}
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  id="ans1"
                  className="accent-main"
                />
                <label
                  className={`${
                    selectedValue === data[questCount]?.answer_1
                      ? "text-main"
                      : "text-gray-600"
                  }`}
                  htmlFor="ans1">
                  {data[questCount].answer_1}
                </label>
              </div>
              <div className="flex items-center gap-2 py-2">
                <input
                  value="option2"
                  checked={selectedValue === data[questCount]?.answer_2}
                  onChange={(e) => handleChange(e)}
                  id="ans2"
                  type="radio"
                  className="accent-main"
                />
                <label
                  className={`${
                    selectedValue === data[questCount]?.answer_2
                      ? "text-main"
                      : "text-gray-600"
                  }`}
                  htmlFor="ans2">
                  {data[questCount].answer_2}
                </label>
              </div>
              <div className="flex items-center gap-2 py-2">
                <input
                  id="ans3"
                  value="option3"
                  checked={selectedValue === data[questCount]?.answer_3}
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  className="accent-main"
                />
                <label
                  className={`${
                    selectedValue === data[questCount]?.answer_3
                      ? "text-main"
                      : "text-gray-600"
                  }`}
                  htmlFor="ans3">
                  {data[questCount].answer_3}
                </label>
              </div>
              <div className="flex items-center gap-2 py-2">
                <input
                  value="option4"
                  checked={selectedValue === data[questCount]?.answer_4}
                  onChange={(e) => handleChange(e)}
                  id="ans4"
                  type="radio"
                  className="accent-main"
                />
                <label
                  className={`${
                    selectedValue === data[questCount]?.answer_4
                      ? "text-main"
                      : "text-gray-600"
                  }`}
                  htmlFor="ans4">
                  {data[questCount]?.answer_4}
                </label>
              </div>
            </form>
          </div>
          <button
            onClick={sendData}
            className="w-full button rounded bg-main text-white py-2 font-bold">
            Submit Answer
          </button>
        </>
      ) : (
        <div className="text-center space-y-2">
          <div className="flex items-center w-full justify-center font-bold text-2xl gap-2">
            <span>
              Your Correct Answers is: {correctAnsCount}/ {data.length}
            </span>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-main px-6 py-2 text-white rounded-lg">
            Train Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
