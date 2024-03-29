"use client";
import { useEffect, useState } from "react";
import Header from "@/app/ui/quiz/Header";
import { QuizButton } from "@/app/ui/global/Buttons";
import Image from "next/image";
import ProgressBar from "@/app/ui/quiz/ProgressBar";

export default function Page({ params }) {
  const [subjectData, setSubjectData] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [message, setMessage] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const iconStyle = {
    backgroundColor:
      subjectData?.title === "HTML"
        ? "#FFF1E9"
        : subjectData?.title === "CSS"
        ? "#E0FDEF"
        : subjectData?.title === "Javascript"
        ? "#EBF0FF"
        : "#F6E7FF",
    padding: "8px",
    borderRadius: "8px",
  };

  useEffect(() => {
    const fetchSubjectData = async () => {
      try {
        const res = await fetch(
          `/api/getsubjectdata?subject=${encodeURIComponent(params.subject)}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch subject data");
        }
        const data = await res.json();
        setSubjectData(data);
      } catch (error) {
        console.error("Error fetching subject data:", error);
      }
    };

    fetchSubjectData();
  }, [params.subject]);

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setMessage("Please select an answer");
      return;
    } else {
      setMessage(null);
      const correctAnswer = subjectData.questions[currentStep].answer;
      setIsCorrect(selectedAnswer === correctAnswer);

      if (selectedAnswer === correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentStep < subjectData.questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const handleSeeResult = () => {
    setIsFinished(true);
  };
  return (
    <main className="flex flex-col gap-[85px] max-w-[1160px] m-auto">
      <Header icon={subjectData?.icon} title={subjectData?.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="md:max-w-[460px] flex flex-col">
          {isFinished ? (
            <>
              <h1 className="heading-l">
                Quiz completed<br></br>
                <span className="font-bold">You scored...</span>
              </h1>
            </>
          ) : (
            <>
              <span className="text-body-s italic text-grey-navy dark:text-light-bluish">
                Question {currentStep + 1} of {subjectData?.questions.length}
              </span>
              <h1 class="heading-m mt-7">
                {subjectData?.questions[currentStep].question}
              </h1>
              <ProgressBar
                currentStep={currentStep + 1}
                totalSteps={subjectData?.questions.length}
              />
            </>
          )}
        </div>
        <ul className="flex flex-col gap-3 sm:gap-6">
          {isFinished ? (
            <li className="flex flex-col items-center justify-center gap-2 shadow-btn dark:shadow-none bg-white dark:bg-navy min-h-[380px] rounded-3xl p-8">
              <div className="flex items-center mb-10 gap-6">
                <Image
                  src={subjectData?.icon}
                  alt="Subject"
                  width={56}
                  height={56}
                  style={iconStyle}
                />
                <p className="heading-s">{subjectData?.title}</p>
              </div>

              <p className="flex flex-col items-center gap-6">
                <span className="display">{score}</span>
                <span className="text-grey-navy dark:text-light-bluish">
                  out of {subjectData?.questions.length}
                </span>
              </p>
            </li>
          ) : (
            <>
              {subjectData?.questions[currentStep].options?.map(
                (option, index) => (
                  <li key={index}>
                    <QuizButton
                      index={String.fromCharCode(65 + index)}
                      title={option}
                      onClick={() => setSelectedAnswer(option)}
                      color={
                        isCorrect !== null
                          ? isCorrect
                            ? "green"
                            : "red"
                          : "default"
                      }
                      selected={selectedAnswer === option}
                      disabled={isCorrect !== null}
                      correctAnswer={subjectData.questions[currentStep].answer}
                    />
                  </li>
                )
              )}
            </>
          )}
          <li>
            {isCorrect === null ? (
              <button
                className="min-h-[56px] rounded-xl sm:rounded-3xl p-3 sm:py-[32px] sm:px-[32px] flex items-center  justify-center bg-purple heading-s text-white w-full hover:bg-[#D394FA] transition-colors duration-300 ease-in-out"
                type="button"
                onClick={handleSubmit}>
                Submit Answer
              </button>
            ) : currentStep === 9 && !isFinished ? (
              <button
                type="button"
                onClick={handleSeeResult}
                className="min-h-[56px] rounded-xl sm:rounded-3xl p-3 sm:py-[32px] sm:px-[32px] flex items-center  justify-center bg-purple heading-s text-white w-full">
                See the Result
              </button>
            ) : isFinished ? (
              <button
                type="button"
                onClick={() => (window.location.href = `/`)}
                className="min-h-[56px] rounded-xl sm:rounded-3xl p-3 sm:py-[32px] sm:px-[32px] flex items-center  justify-center bg-purple heading-s text-white w-full">
                Play Again
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={currentStep === subjectData?.questions.length - 1}
                className="min-h-[56px] rounded-xl sm:rounded-3xl p-3 sm:py-[32px] sm:px-[32px] flex items-center  justify-center bg-purple heading-s text-white w-full">
                Next Question
              </button>
            )}
          </li>
          {message !== null && (
            <li className="flex items-center justify-center gap-2">
              <Image
                src="/images/icon-error.svg"
                alt="incorrect"
                width={30}
                height={30}
              />
              <p className="text-red dark:text-light-grey text-body-m">
                {message}
              </p>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}
