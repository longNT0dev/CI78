import { useEffect, useState } from "react";


export const useCallAPI = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (data === undefined) {
    return [];
  }
  return data;
};