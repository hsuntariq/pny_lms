import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CourseModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formFields, setFormFields] = React.useState({
    question: "",
    deadline: "",
    time: "",
    batch_no: "",
    course_name: "",
    max_marks: "",
  });

  // dwestructure
  const { question, deadline, time, batch_no, course_name, max_marks } =
    formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuiz = async () => {
    const response = await axios.post(
      "http://localhost:3001/api/quiz/add-quiz",
      {
        question,
        deadline,
        time,
        batch_no,
        course_name,
        max_marks,
      }
    );

    console.log(response);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ background: "#0CBC87", whiteSpace: "nowrap" }}
      >
        create a course
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className="shadow-xl rounded-md w-[90%] overflow-hidden top-1/2 left-1/2 -translate-1/2 md:w-1/2 lg:1/3 mx-auto absolute z-40 xl:w-1/4">
            <header className="bg-black text-white p-5 ">
              <h3 className="text-4xl capitalize">Add a new quiz</h3>
            </header>
            <div className="p-4 bg-white">
              <label htmlFor="" className="text-gray-400">
                Question
              </label>
              <input
                type="text"
                value={question}
                onChange={handleChange}
                name="question"
                className="w-full p-3 my-1 rounded-md outline-0 border border-gray-300"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-1 ">
                <div className="">
                  <label htmlFor="" className="text-gray-400">
                    Deadline
                  </label>
                  <input
                    value={deadline}
                    onChange={handleChange}
                    name="deadline"
                    type="date"
                    className="w-full p-3 my-1 rounded-md outline-0 border border-gray-300"
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="text-gray-400">
                    Time
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={handleChange}
                    name="time"
                    className="w-full p-3 my-1 rounded-md outline-0 border border-gray-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-1 ">
                <div className="">
                  <label htmlFor="" className="text-gray-400">
                    Batch number
                  </label>
                  <input
                    type="number"
                    value={batch_no}
                    onChange={handleChange}
                    name="batch_no"
                    className="w-full p-3 my-1 rounded-md outline-0 border border-gray-300"
                    placeholder="e.g. 17"
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="text-gray-400">
                    Course Name
                  </label>
                  <input
                    type="text"
                    value={course_name}
                    onChange={handleChange}
                    name="course_name"
                    placeholder="e.g. Web Development"
                    className="w-full p-3 my-1 rounded-md outline-0 border border-gray-300"
                  />
                </div>
              </div>
              <label htmlFor="" className="text-gray-400">
                Max Marks
              </label>
              <TextField
                className="w-full my-4"
                label="Max Marks"
                value={max_marks}
                onChange={handleChange}
                name="max_marks"
                select
                placeholder="Max Marks"
              >
                <MenuItem selected disabled>
                  Select Marks
                </MenuItem>
                <MenuItem value={5}>5</MenuItem>
                onChange={handleChange}
                <MenuItem value={10}>10</MenuItem>
                onChange={handleChange}
                <MenuItem value={15}>15</MenuItem>
                onChange={handleChange}
                <MenuItem value={20}>20</MenuItem>
                onChange={handleChange}
              </TextField>

              <Button
                onClick={handleQuiz}
                variant="contained"
                className="bg-green-500 my-3"
                sx={{
                  margin: "1rem 0",
                  display: "block",
                  marginLeft: "auto",
                  background: "#0CBC87",
                }}
              >
                Add Quiz
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
