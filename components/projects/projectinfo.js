import { useState, useRef } from "react"

const ProjectInfo = ({project})=>{
    const [on, setOn] = useState(false)
    const element = useRef()

    
    return(
        <div className="relative">
            <div className={`transition-all w-full text-center duration-300 ease-in-out cursor-pointer z-10 hover:text-blue2 text-black ${(on)?"d-hide-delay":"d-show-delay"}`} onClick={()=>{
            setOn(!on)
            if(!on){
                setTimeout(()=>{
                    element.current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                },200)
            }
            }}>Click For More Info</div>
        <div ref={element} className={`relative cursor-pointer grid grid-cols-1 md:grid-cols-2 md:mx-0 max-w-[1200px] overflow-hidden ${(on)?"d-show":"d-hide"}`}
        onClick={()=>{
            setOn(!on)
            if(!on){
                setTimeout(()=>{
                    element.current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                },200)
            }
            }}
            >
                  
                  {project.myRole &&<div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-right">
                    <h2>My Role</h2>
                    <div className='text-base'>{project.myRole}</div>
                  </div>}
                  {project.projectDifficulties &&<div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-left">
                    <h2>Project Difficulties</h2>
                    <div className='text-base'>
                      {project.projectDifficulties}
                    </div>
                  </div>}
                  {project.mySolution &&<div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-right">
                    <h2>My Solution</h2>
                    <div className='text-base'>
                      {project.mySolution}
                    </div>
                  </div>}
                  {project.notableFeatures &&<div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-left">
                    <h2>Notable Features</h2>
                    <div className='text-base'>
                      <ul className="marker:text-blue2 text-base list-disc ml-5 sm:ml-7">
                        {project.notableFeatures.features.map((x,i)=>
                          <li key={i}>
                            {x}
                          </li>
                          )}
                      </ul>
                    </div>
                  </div>}
        </div>
        </div>
    )
}

export default ProjectInfo