import SS2 from "./SS2/SS2";
import LanguageContextProvider from "./SS3/LanguageContextProvider";
import SS3 from "./SS3/SS3";

function App() {
  return (
    <LanguageContextProvider>
      <div className="App">
        {/* <SS2></SS2> */}
        <SS3></SS3>
      </div>
    </LanguageContextProvider>
  );
}

export default App;

// prop drilling
// prop là 1 giá trị read-only
// global css reactjs
