import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiVsco } from 'react-icons/si';

function App() {
  //grad date
  const [days, setDays] = React.useState(0);
  const deadline = "June, 23, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  }

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  //
  var hour = new Date().getHours();


  return (
    <body style={ hour < 8 ? { backgroundColor: "black" } : { backgroundColor: "white" }}>
      <div className="App" >
        <div className='nav'>
          <p className='qkr'>qkr
            <p className='dot'>.</p>
          </p>
        </div>

        { hour < 8 ? 

        <div className='things'>
          <h1 className='title'>
            SEOJIN PARK
          </h1>
          <p className='content'>
            I’m Seojin, I usually go by Jin. 
            I'm a Seoul-born <a className='links' href= "https://wgss.ca">high school</a> Computer Programmer. 
            I graduate in {days < 10 ? "0" + days : days} {days === 0 ? "day" : "days"}. 
          </p>
          <p className='content'>
            I’m fascinated by computer science, especially AIs. 
            I haven’t been making projects, 
            but I’ll be making coding projects, 
            so keep your eyes on my <a className='links' href="https://github.com/val-hir">GitHub</a>. 
          </p>
          <p className='content'>
            When studying and coding, I like listening to music, 
            so check out my <a className='links' href= "https://music.youtube.com/playlist?list=LRYRVbiSvyFMD7ONsG74KmSG-6ptYc2C0_JFI&feature=share">playlist</a>. 
            Also, I love talking to people; my MBTI starts with an E, 
            so contact me when the background is bright!
          </p>


          <div>
            <a className='contacts' href="https://www.instagram.com/qkr.jin/"><AiOutlineInstagram size={30}/></a>
            <a className='contacts' href="https://vsco.co/-jinpark-/gallery"><SiVsco size={30}/></a>
            <a className='contacts' href="https://github.com/val-hir"><AiFillGithub size={30}/></a>
            <a className='contacts' href="https://www.linkedin.com/in/--jinpark--/"><AiFillLinkedin size={30}/></a>
          </div>
        </div> 
        :
        
        <div className='things1'>
          <h1 className='title'>
            SEOJIN PARK
          </h1>
          <p className='content'>
            I’m Seojin, I usually go by Jin. 
            I'm a Seoul-born <a className='links1' href= "https://wgss.ca">high school</a> Computer Porgrammer. 
            I graduate in {days < 10 ? "0" + days : days} {days === 0 ? "day" : "days"}. 
          </p>
          <p className='content'>
            I’m fascinated by computer science, especially AIs. 
            I haven’t been making projects, 
            but I’ll be making coding projects, 
            so keep your eyes on my <a className='links1' href="https://github.com/val-hir">GitHub</a>. 
          </p>
          <p className='content'>
            When studying and coding, I like listening to music, 
            so check out my <a className='links1' href= "https://music.youtube.com/playlist?list=LRYRVbiSvyFMD7ONsG74KmSG-6ptYc2C0_JFI&feature=share">playlist</a>. 
            Also, I love talking to people; my MBTI starts with an E, 
            so contact me when the background is bright!
          </p>


          <div>
            <a className='contacts1' href="https://www.instagram.com/qkr.jin/"><AiOutlineInstagram size={30}/></a>
            <a className='contacts1' href="https://vsco.co/-jinpark-/gallery"><SiVsco size={30}/></a>
            <a className='contacts1' href="https://github.com/val-hir"><AiFillGithub size={30}/></a>
            <a className='contacts1' href="https://www.linkedin.com/in/--jinpark--/"><AiFillLinkedin size={30}/></a>
          </div>
        </div>

        }

      </div>
    </body>
  );
}

export default App;
