import axios from "axios";
import React from "react";
export const useFetch = (url) => {
  const [response, setResponse] = React.useState(null);
  React.useEffect(() => {
    fetch(url);
    //eslint-disable-next-line
  }, []);
  const fetch = async () => {
    const res = await axios.get(url);
    const json = await res.json();
    setResponse(json);
  };
  return response;
};
