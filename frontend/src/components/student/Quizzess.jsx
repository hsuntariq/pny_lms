import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuizzesData, quizReset } from "../../features/quiz/quizSlice";
import Skeleton from "react-loading-skeleton";
const Quizzess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzesData());
    dispatch(quizReset());
  }, []);

  return (
    <>
      <div className=" w-full self-start border border-gray-300 rounded-lg">
        <div className="flex p-2 overflow-hidden items-center gap-5">
          <div className="rounded-lg overflow-hidden">
            <Skeleton width={150} height={100} />
          </div>
          <Skeleton width={500} height={20} count={3} />
        </div>
        <hr className="border-0 h-[1px] bg-gray-300 my-3" />
        <div className="p-5">
          <div className="border border-gray-300 p-5 rounded-lg">
            <div className="flex items-center gap-3 justify-center">
              {[...Array(5)].map((_, index) => (
                <>
                  <Skeleton
                    key={index}
                    width={60}
                    height={60}
                    circle={true}
                    inline={true}
                  />
                  <div className="h-[2px] w-[50px] bg-gray-200"></div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizzess;
