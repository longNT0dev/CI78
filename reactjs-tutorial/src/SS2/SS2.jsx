import React, { useState } from "react";
import Footer from "./Footer";
import Input from "./Input";
import JobList from "./JobList";

function SS2() {
  // Khai báo 1 state (thuộc tính của component)
  // Tại sao không khai báo 1 biến thông thường mà lại dùng state ??
  // State giúp reactjs xác định được component nào được cập nhật

  // State đơn giản
  // const [list, setList] = useState(["Ăn", "Ngủ", "Chơi"]);

  // State giúp đánh dấu công việc hoàn thành
  const [list, setList] = useState([
    { id: 0, value: "Ăn", status: "incomplete" },
    { id: 1, value: "Ngủ", status: "complete" },
    { id: 2, value: "Chơi", status: "incomplete" },
  ]);

  // Thêm 1 job mới vào
  const handleAddNewJob = (newJob) => {
    setList((prev) => [
      ...prev,
      { id: prev.length + 1, value: newJob, status: "incomplete" },
    ]);
  };

  // Đổi trạng thái công việc
  const handleToggleStatus = (id) => {
    setList((prevList) =>
      prevList.map((listItem) => {
        if (listItem.id === id) {
          return {
            ...listItem,
            status:
              listItem.status === "incomplete" ? "complete" : "incomplete",
          };
        }

        return listItem;
      })
    );
  };

  // Lấy giá số lượng còn lại chưa làm
  const getLeftJob = () => {
    return list.filter((listItem) => listItem.status === "incomplete").length;
  };

  return (
    <>
      <Input addNewJob={handleAddNewJob}></Input>
      <JobList list={list} toggleStatus={handleToggleStatus}></JobList>
      <Footer leftJob={getLeftJob()}></Footer>
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
