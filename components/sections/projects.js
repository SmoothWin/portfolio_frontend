import { useEffect } from "react"
import CarouselExport from "../carousel"
import Project from "../projects/component/project"

const Projects = ({projects,hardskillCarousel, url})=>{
  useEffect(()=>{
    // console.log(projects.data)
  },[])
    return(
      projects==null?null:
        <section className="relative w-full mb-2 flex flex-col items-center justify-center text-black bg-whitewhite" style={{boxShadow:"white 0px -10px 50px 10px"}}>
            <div className='w-[100%] max-w-[1200px]'>
            <h2 className="text-black text-6xl title1 mb-2 text-center">Projects</h2>
            {/* introduce hardskills (in progress)*/}
              <CarouselExport hardskillCarousel={hardskillCarousel}/>
              <div className='grid grid-cols-1 gap-4 mt-5'>
                {projects.data.map((x,i)=>
                <Project key={i} url={url} project={x.attributes}/>
                )}
              </div>
            </div>
        </section>
    )
}
export default Projects