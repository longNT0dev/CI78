import { useState } from "react";

function Input({ handleChangeListJob }) {
  const [newJob, setNewJob] = useState("");
  // console.log("hello", newJob);

  const handleChange = (event) => {
    // Xử lí sự kiện thay đổi giá trị trong ô input
    // console.log(event.target.value);

    setNewJob(event.target.value);
  };

  const createNewJob = () => {
    // console.log("Create new", newJob);
    handleChangeListJob((prev) => [...prev, newJob]);

    setNewJob("");
  };

  const handleKeydown = (event) => {
    console.log(event);
    // Xử lí sự kiện thay đổi giá trị trong ô input

    // Thêm mới 1 job vào bằng cách sử dụng handleKeydown
  };
  return (
    <>
      <input
        type="text"
        value={newJob}
        placeholder="Enter your task here"
        onChange={(e) => handleChange(e)}
        // onKeyDown={(e) => handleKeydown(e)}
      />
      <button onClick={createNewJob}>dfdfdf</button>
    </>
  );
}

export default Input;

// Viết 1 hàm xử lí, khi người dùng bấm enter
// sẽ lấy giá trị trong ô input thêm vào job list
