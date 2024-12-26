import React, {useEffect,useRef} from "react";
import pdf from "../pdf/2104181_ECE_AbhishekKumarSingh.pdf";
import hero from "./data/hero.json"
import Typed from "typed.js"
function Home() {
  const typedRef = useRef(null);
  useEffect(()=>{
    
    const options = {
      strings:["Welcome to my profile","My Name is Abhishek Kumar","I am a student ECE at NIT Patna","Skills in ReactJS, NodeJS,MongoDB","Coding Enthusiast","Full stack Developer"],
      typeSpeed:100,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current, options)

    return()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
      <div className="container home">
        <div className="left"
        data-aos="fade-up-left"
        data-aos-duration="1000"
        >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">
            Download Resume
          </a>
        </div>
        <div className="right"
        >
          <div className="img"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          >
            <img src={`/assets/${hero.imgSrc}`} alt="heroImage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
