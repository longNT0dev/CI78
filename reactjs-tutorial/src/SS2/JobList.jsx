import JobItem from "./JobItem";

function JobList(props) {

  return (
    <ul>
      {/* props */}
      {/* <JobItem job="Review lesson" something="Một thứ gì đó" smt1={true} smt2="smt2" smt3="smt3" ></JobItem> */}

      {/* Render List  */}

      {
        // Trong đây là code js
        props.list.map((list, i) => (
          <JobItem job={list} key={`Job ${i}`}></JobItem>
        ))
      }
    </ul>
  );
}

export default JobList;
