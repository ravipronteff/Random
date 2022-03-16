import "./styles.css";
import React from "react";
import Axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import VideoRecorder from 'react-video-recorder'

import "react-h5-audio-player/lib/styles.css";
import { useAudioRecorder } from "@sarafhbk/react-audio-recorder";
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
    <VideoRecorder
    onRecordingComplete={videoBlob => {
      // Do something with the video...
      console.log('videoBlob', videoBlob)
    }}
  />
  //   <div className="App">
  //     {/* {data?.map((item) => (
  //       <>
  //         <img src={item.img} alt="adsf" />
  //         <p>{item.title}</p>
  //         <p>{item.movie}</p>
  //         <p>{item.singer}</p>
  //         <AudioPlayer
  //           autoPlay={false}
  //           src={item?.song}
  //           onPlay={(e) => console.log("onPlay")}
  //           // other props here
  //         />
  //       </>
  //     ))} */}
  //     <div>
  //       <audio controls src={audioResult} />
  //       <p>
  //         Status : <b>{status}</b>
  //       </p>
  //       <p>
  //         Error Message : <b>{errorMessage}</b>
  //       </p>
  //       <div>
  //         <p>{new Date(timer * 1000).toISOString().substr(11, 8)}</p>
  //         <div>
  //           <button onClick={startRecording}>Start</button>
  //           <button onClick={stopRecording}>Stop</button>
  //           <button onClick={pauseRecording}>Pause</button>
  //           <button onClick={resumeRecording}>Resume</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  
  );
}
