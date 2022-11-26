import { useState } from "react";

function Input({ addNewJob }) {
  const [newJob, setNewJob] = useState("");

  const handleChange = (event) => {
    // Xử lí sự kiện thay đổi giá trị trong ô input
    // console.log(event.target.value);

    setNewJob(event.target.value);
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
      <button onClick={() => addNewJob(newJob)}>Thêm công việc mới</button>
    </>
  );
}

export default Input;

// Viết 1 hàm xử lí, khi người dùng bấm enter
// sẽ lấy giá trị trong ô input thêm vào job list
