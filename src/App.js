import "./App.css";
import Button from "./components/Button";
import Gifs from "./components/Gifs";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  //state
  const [url, setGifSrc] = useState();

  //function to get a Gif from the api
  const getGif = async () => {
    //apikey
    const apiKey = "T49vkgIn68gSf1nOa9R8RWmbm3IWruUj";
    const url = `api.giphy.com/v1/gifs/random?api_key=${apiKey}`;


    // console.log(url)


    //fetch the Gif data
    const res = await fetch(url);
    console.log(res)


    //get the JSON from the response
    // const data = await res.json();
    console.log(res)
    // console.log("url", data.data.image_url);
    // //update the state with a Gif
    // setGifSrc(data);
  };

  return (
    <div className="App">
      <Header />
      <Button getGifFromApp={getGif} />
      <Gifs />
    </div>
  );
}

export default App;
