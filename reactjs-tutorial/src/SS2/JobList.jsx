import JobItem from "./JobItem";

function JobList({ list, toggleStatus }) {
  // Kết hợp state trong component cha + state trong component con -> Thì mới xử  lí được 1 vấn đề gì đó

  return (
    <ul>
      {list.map((listItem, i) => (
        <JobItem
          key={"job" + i}
          todo={listItem}
          toggleStatus={toggleStatus}
        ></JobItem>
      ))}
    </ul>
  );
}

export default JobList;
