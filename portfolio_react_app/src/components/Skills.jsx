import React from 'react'
import skills from "./data/skills.json"
function Skills() {
  return (
    <>
        <div className="container skills">
            <div className="items">
            {skills.map((data)=>{
                return (
                    <>
                        <div className="item flex flex-col justify-center items-center " key = {data.id}
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                            <img src={`/assets/${data.imgsrc}`}  alt="skillImg" />
                            <h3>{data.title}</h3>
                        </div>
                    </>
                )
            })}
            </div>  
        </div>
    </>
  )
}

export default Skills
