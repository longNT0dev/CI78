import React, { useState } from "react";
import Footer from "./Footer";
import Input from "./Input";
import JobList from "./JobList";

function SS2() {
  // Khai báo 1 state (thuộc tính của component)
  // Tại sao không khai báo 1 biến thông thường mà lại dùng state ??
  // State giúp reactjs xác định được component nào được cập nhật
  const [list, setList] = useState(["Ăn", "Ngủ", "Chơi"]);

  const handleAddNewJob = () => {
    // console.log("Trước khi cập nhật", list);
    // const cloneList = [...list]
    // cloneList.push("Đi học")
    // setList(() => cloneList);

    setList((prev) => [...prev, "Đi học"]); // prefer
    //Cập nhật object Object.assign
  };

  console.log("Sau khi cập nhật", list);

  return (
    <>
      <Input setList={setList}></Input>
      <JobList list={list}></JobList>
      <Footer list={list}></Footer>
      <button onClick={handleAddNewJob}>Add new job</button>
    </>
  );
}

export default SS2;

// state, event

// hook: Nó là các hàm được xây dựng sẵn

// 1 số hook cơ bản được học trong khóa này:
/*
useState,useEffect => *** Quan tâm nhất
useCallback, ,
useMemo, 
useReducer
*/
