import JobItem from "./JobItem";

function JobList(props) {
  const handleChangeStatus = (id, currentStatus) => {
    console.log("hizzz");
    if (currentStatus === "complete") {
      props.list[id].status = "incomplete";
    } else {
      props.list[id].status = "complete";
    }

    console.log(...props.list);

    props.setList(() => [...props.list]);
  };

  return (
    <ul>
      {
        // Trong đây là code js
        props.list.map((list, i) => (
          <JobItem
            status={list.status}
            job={list.value}
            key={`Job ${i}`}
            handleChangeStatus={handleChangeStatus(i, list.status)}
          ></JobItem>
        ))
      }
    </ul>
  );
}

export default JobList;
