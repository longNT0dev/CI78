import Input from "./Input.jsx";
import JobList from "./JobList.jsx";
import Footer from "./Footer.jsx";

function App() {
  const lists = ["Ăn", "Ngủ", "Chơi"];
  return (
    <div className="App">
      <Input></Input>
      <JobList list={lists}></JobList>
      <Footer list={lists}></Footer>
    </div>
  );
}

export default App;


// prop drilling
// prop là 1 giá trị read-only
// global css reactjs