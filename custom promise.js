import "./styles.css";
import React from "react";
import Axios from "axios";
export default function App() {
  const [data, setDate] = React.useState([]);
  React.useEffect(async () => {
    let data = await callApi();
    setDate(data);
    // console.log(data, "data");
  }, []);
  const callApi = () => {
    let data = new Promise((resolve, reject) => {
      Axios.get(
        "https://raw.githubusercontent.com/teluguskillhub/Telugu-Skillhub-Music-API/main/api.json"
      )
        .then((resp) => resolve(resp.data))
        .catch((err) => reject(err));
    });
    return data;
  };
  return (
    <div className="App">
      {data?.map((item) => (
        <>
          <img src={item.img} alt="adsf" />
          <p>{item.title}</p>
          <p>{item.movie}</p>
          <p>{item.singer}</p>
        </>
      ))}
    </div>
  );
}
