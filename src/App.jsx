import React, { useContext, useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { qstStateContext } from "./contexts/QuestionsState";
import { data } from "./assets/data";

export default function App() {
  let [timer, setTimer] = useState(30); // Default timer value
  let [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [show, setShow] = useState(false);
  let { questCount, setQuestCount } = useContext(qstStateContext);
  const [selectedValue, setSelectedValue] = useState(
    data[questCount]?.answer_1 || ""
  );
  let [reviewAnswers, setReviewAnswers] = useState("");

  // Update the selectedValue when the question changes
  useEffect(() => {
    setSelectedValue(data[questCount]?.answer_1 || "");
    const category = data[questCount]?.cat;

    // Set timer based on category
    if (category === "HTML") {
      setTimer(7);
    } else if (category === "CSS") {
      setTimer(15);
    } else {
      setTimer(30);
    }
  }, [questCount]);

  const handleChange = (event) => {
    const labelText = event.target.nextElementSibling.innerText;
    setSelectedValue(labelText);
  };

  const handleSubmit = () => {
    setTimer(30); // Reset timer for the next question
    if (selectedValue === data[questCount]?.right_answer) {
      setCorrectAnsCount((prev) => prev + 1);
    }
    if (questCount < data.length - 1) {
      setQuestCount((prev) => prev + 1);
    } else {
      setShow(true); // Show final results
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const timeDown = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);

      return () => clearInterval(timeDown); // Clear the interval on unmount or when timer changes
    } else if (timer === 0) {
      document.querySelector(".button")?.click(); // Auto-submit when timer hits 0
    }
  }, [timer]);

  return (
    <div className="mx-3 max-w-screen-md bg-gray-100 sm:mx-auto p-4 rounded mt-16 sm:mt-[100px]">
      <Header />
      <Body
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selectedValue={selectedValue}
        correctAnsCount={correctAnsCount}
        show={show}
        reviewAnswers={reviewAnswers}
      />
      <Footer timer={timer} />
    </div>
  );
}
