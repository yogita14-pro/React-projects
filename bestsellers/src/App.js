import React from 'react';
import Template from './components/Template';
import bdata from "./components/bdata";
import picture from "./images/Fire.jpg";
import gitpic from "./images/github.png";
import pyth from "./images/python.png";

function App() {
  return (
    <div className="app" >
      <h1 className="head">
        <span className='web'>WEB SCRAPING</span>
        <br></br>
        <span>AMAZON</span>
        <br></br> 
        <span>TOP 10</span> 
        <br></br>
        <span>BEST
          <br></br>SELLERS</span>
          <br></br>
          <a href=""><img src={gitpic}></img></a>
          <a href="https://github.com/yogita14-pro/PythonProjects/blob/webscraping/bshtml.py"><img src={pyth}></img></a>
        </h1>
      <img src={picture} className='bgimg'></img>
      {bdata.map((val, index)=>{
        return(
          <Template
          name={val.name}
          imgsr={val.imgsr}
          author={val.author}
          rate={val.rate}
          price={val.price}
          link={val.link}
          />
        );
      })}
    </div>
  );
}

export default App;
