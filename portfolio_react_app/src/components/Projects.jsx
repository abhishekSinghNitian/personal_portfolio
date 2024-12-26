import React, { useState } from "react";
import project from "./data/projects.json";

function Projects() {
  // State to manage which project's description is expanded
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  // Function to toggle the expanded state for the clicked project
  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <>
      <div className="container projects my-3">
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => {
            // Determine if this project is expanded
            const isExpanded = expandedProjectId === data.key;
            
            return (
              <div
                key={data.key}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-gray-600 text-light min-h-96 mt-14"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-2">
                    <img
                      src={`/assets/${data.imageSrc}`} // Ensure this matches your actual JSON field
                      className="card-img-top w-[250px] h-[200px] border-2 border-solid border-yellow rounded-lg"
                      alt="..."
                      
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title  text-2xl text-black underline-offset-1">{data.title}</h5>
                    <p className="card-text text-balance">
                      {isExpanded
                        ? data.description
                        : `${data.description.substring(0, 100)}...`}
                    </p>
                    <button
                      className="btn btn-info mx-3 my-2"
                      onClick={() => toggleExpand(data.key)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <a href={data.source} className="btn btn-warning my-2">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
