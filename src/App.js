import "./App.css";
import Button from "./components/Button";
import Gifs from "./components/Gifs";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  //state
  const [gifSrc, setGifSrc] = useState(null);

  //function to get a Gif from the api
  const getGif = async () => {
    //apikey
    const apiKey = "T49vkgIn68gSf1nOa9R8RWmbm3IWruUj";
    const gifSrc = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;


    // console.log(url)


    //fetch the Gif data
    const res = await fetch(gifSrc);
    console.log(res)


    //get the JSON from the response
    const data = await res.json();
    const gif = data.data.images.fixed_height.url
   
    //update the state with a Gif
    setGifSrc(gif);
  };
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Header />
      <Button getGif={getGif} />
      <Gifs gifSrc={gifSrc} />
    </div>
  );
}

export default App;
