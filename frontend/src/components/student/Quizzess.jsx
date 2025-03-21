import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzesData, quizReset } from "../../features/quiz/quizSlice";
import Skeleton from "react-loading-skeleton";
import SkeletonQuiz from "./loading/SkeletonQuiz";
import moment from "moment";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";

const Quizzess = () => {
  const [selected, setSelected] = useState(0);
  const [startNumber, setStartNumber] = useState(0);
  const [endNumber, setEndNumber] = useState(5);
  const dispatch = useDispatch();

  const { quiz, quizSuccess, quizError, quizMessage, quizLoading } =
    useSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(getQuizzesData());
    dispatch(quizReset());
  }, []);

  const handleForward = () => {
  
    // stop if the end number is equals to or greater than the  quizzes length

    if(endNumber >= quiz.length) return

    setStartNumber(startNumber+5)
    setSelected(startNumber+5)
    setEndNumber(endNumber + 5)


  };
  const handleBackward = () => {
  
    // stop if the end number is equals to or greater than the  quizzes length

    if(startNumber <= 0) return

    setSelected(startNumber - 5);

    setStartNumber(startNumber-5)
    setEndNumber(endNumber - 5)


  };

  return (
    <>
      <div className=" w-full self-start border border-gray-300 rounded-lg">
        {quizLoading ? (
          <SkeletonQuiz />
        ) : (
          <>
            <div className="flex p-2 overflow-hidden items-center gap-5">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn-1.webcatalog.io/catalog/poki-brain-quiz-3d/poki-brain-quiz-3d-icon-filled-256.png?v=1714778866113"
                  className="h-[100px] object-contain border border-gray-200 w-[150px]"
                  alt=""
                />
              </div>
              <div className="w-full">
                <h3 className="md:text-3xl text-2xl font-semibold">
                  {quiz[selected]?.question}
                </h3>
              </div>
            </div>
            <hr className="border-0 h-[1px] bg-gray-300 my-3" />
            <div className="p-5">
              <div className="border border-gray-300 p-5 rounded-lg">
                <div className="flex   items-center gap-3 justify-center">
                  {quiz?.slice(startNumber, endNumber)?.map((item, index) => (
                    <>
                      <div
                        onClick={() => setSelected(startNumber + index)}
                        className={`h-[60px] cursor-pointer shrink-0 w-[60px] rounded-full ${
                          selected == startNumber + index
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                        }  flex justify-center items-center`}
                      >
                        {startNumber + index + 1}
                        {/* 5 + 0 + 1 */}
                        {/* 5 + 1 + 1 */}
                      </div>
                      <div className="h-[2px] w-[50px] bg-gray-200"></div>
                    </>
                  ))}
                </div>
                <div className="my-5 w-full">
                  <h5 className="font-semibold flex gap-5 justify-between text-end text-red-500">
                    <h5 className="text-gray-800">
                      {quiz[selected]?.course_name}
                    </h5>
                    <div className="flex gap-2">
                      Due {moment(quiz[selected]?.deadline).fromNow()}
                      <span className="text-blue-500">
                        {quiz[selected]?.time}
                      </span>
                    </div>
                  </h5>
                </div>
                <div className="my-5 w-full">
                  <h4 className="text-xl">
                    Max Marks:{" "}
                    <span className="text-green-600 font-semibold">
                      {quiz[selected]?.max_marks}
                    </span>{" "}
                    marks
                  </h4>
                </div>
                <div className="flex justify-end">
                  <IoCaretBackSharp
                    onClick={handleBackward}
                    cursor={"pointer"}
                    className="text-purple-600"
                    size={20}
                  />
                  <IoCaretForwardSharp
                    onClick={handleForward}
                    cursor={"pointer"}
                    className="text-purple-600"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quizzess;
