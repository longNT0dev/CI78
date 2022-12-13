import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCallAPI } from "./useCallAPI";

/* Server -> response : {
    data: []
}
*/
const DetailUser = () => {
  const data = useCallAPI(`https://reqres.in/api/users/1`);

  return (
    <div>
      <img src={data?.avatar} />
      <h2>{data?.email}</h2>
      <h2>
        {data?.first_name} {data?.last_name}
      </h2>
    </div>
  );
};

export default DetailUser;
