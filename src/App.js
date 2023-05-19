import React,{useState} from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import ImageRender from "./components/ImageRender";
function App() {
  const [imgSrc,setImgSrc] = useState('');
  async   function fetchDataHandler(searchData){
    // const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=mMq52NVzj1uOSUGemgnMEOrwaaMr5IDayj4vkgvZ')
    // const response = await fetch('https://images-api.nasa.gov/search?q=earth')
    // final call
    // https://images-api.nasa.gov/search?q=earth&media_type=image

    const query =  searchData.toLowerCase();
    const queryString = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;

    const response = await fetch(queryString)
    // console.log(response);
    const data = await response.json();
    // console.log(data.collection.items);
    const items = data.collection.items;
    // console.log(items[0].links[0].href);
    const source = items[0].links[0].href;
    setImgSrc(source);
}
  return (
      <div>
        <Header/>
        <Input onGetInputData={fetchDataHandler}/>
        <ImageRender source = {imgSrc} />
      </div>
  );
}

export default App;
