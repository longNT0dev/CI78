import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  LANGUAGE_CONTEXT,
} from "./LanguageContextProvider";
import { useIntl } from "react-intl";

const COLOR_INDICATOR = {
  "-1": "black",
  0: "red",
  1: "green",
};

function SS3() {
  const [paragraph, setParagraph] = useState("Lorem ipsum dolor");
  const [checkWord, setCheckWord] = useState(
    new Array(paragraph.length).fill(-1)
  );

  const { setLang } = useContext(LANGUAGE_CONTEXT);

  const intl = useIntl();

  const handleCheckWord = (event) => {
    // if(event.target.value == ' ') {
    //   console.log("Đây là dấu cách")
    // }

    let currentInput = event.target.value;

    //Reset các giá trị lớn hơn event.target.length về -1
    let cloneCheckWord = [...checkWord];
    for (let i = currentInput.length; i < paragraph.length; i++) {
      cloneCheckWord[i] = -1;
    }

    setCheckWord(cloneCheckWord);
    // Lấy giá trị event.target.value so sánh với paragraph
    // Nếu bằng = 1
    // Nếu không bằng = 0

    for (let i in currentInput) {
      setCheckWord((prev) =>
        prev.map((word, j) =>
          i == j ? (paragraph[i] == currentInput[i] ? 1 : 0) : word
        )
      );
    }

    // if (paragraph[i] == currentInput[i]) {

    // } else {
    //   setCheckWord((prev) =>
    //     prev.map((word, j) => {
    //       if (i == j) {
    //         return 0;
    //       }
    //       return word;
    //     })
    //   );
    // }
    // }
  };

  return (
    <>
      <textarea cols="30" rows="10" onChange={handleCheckWord}></textarea>
      <p>
        h1
        {paragraph.split("").map((word, i) => (
          <span
            style={{
              color: `${COLOR_INDICATOR[checkWord[i]]}`,
            }}
          >
            {word}
          </span>
        ))}
      </p>
      <button onClick={() => setLang('en')}>Tiếng Anh</button>
      <button onClick={() => setLang('vi')}>Tiếng Việt</button>
      <button>{intl.formatMessage({ id: "start" })}</button>
      <span>{intl.formatMessage({ id: "isValidPassw" })}</span>
      {/* Tạo thêm các component khác và sử dụng context thử  */}
    </>
  );

  // const [color, setColor] = useState("");

  // const paragraph =
  //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse odit nobis vitae ab porro, mollitia, praesentium veniam sequi impedit asperiores excepturi eveniet soluta quis, voluptate ea? Excepturi officia hic eveniet.";

  // const handleCheckWord = (e) => {
  //   let text = e.target.value;
  //   let flag = true;

  //   for (let i = 0; i < text.length; i++) {
  //     if (!(paragraph[i] === text[i])) {
  //       flag = false;
  //     }
  //   }

  //   if (flag && text[text.length - 1] === paragraph[text.length - 1]) {
  //     setColor("green");
  //   } else {
  //     setColor("red");
  //   }
  // };

  // return (
  //   <>
  //     <p>{paragraph}</p>
  //     <textarea
  //       cols="30"
  //       rows="10"
  //       onChange={handleCheckWord}
  //       style={{ color: color }}
  //     ></textarea>
  //   </>
  // );
}

// abcd -> xanh nếu nhập đúng hết
// -> đỏ nếu như nhập sai 1 giá trị

export default SS3;
