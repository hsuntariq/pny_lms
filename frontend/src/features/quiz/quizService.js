import axios from "axios";
const base_url = "http://localhost:3001/api/quiz";

export const addQuiz = async (quizData) => {
  const response = await axios.post(`${base_url}/add-quiz`, quizData);
  return response.data;
};
