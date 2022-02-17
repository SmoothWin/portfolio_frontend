import ProjectInfo from "./Projectinfo"

const Project = ({project, url})=>{
    // console.log(project.technologies.technologies)
    return(
        <div className='mx-auto w-[90%]'>
                <h2 className="text-blue text-4xl title text-center md:text-left mb-5" data-aos="fade-right">{project.projectTitle}</h2>
                <div className='flex flex-col md:flex-row max-w-[1200px] mb-7'>
                  <div className='w-[100%] mx-auto flex flex-col items-center md:mr-3' data-aos="fade-right">
                    <img width={300} alt={"Project Crypture World"} src={url+project.projectImage.data[0].attributes.url}/>
                    <div className='title2 w-[300px] text-base flex justify-around items-end ml-[10px]'>
                      <a target="_blank" rel='noopener noreferrer' className='flex items-end text-blue transition ease-in-out duration-300 hover:text-link' href={project.demoUrl}><img style={{width:40}} src={'/images/computer-line.svg'}/>Preview</a> {(project.repository)?
                      <a target="_blank" rel='noopener noreferrer' className='text-blue transition ease-in-out duration-300 hover:text-link' href={project.repository}>
                          Repository</a>:<span className='text-stone-500'>Private Repository</span>}
                    </div>
                  </div>
                  <div className='flex flex-col items-center md:items-start' data-aos="fade-left">
                    <p className='text-center md:text-left text-base w-[90%] max-w-[1200px]'>
                      {project.hostingLocation}
                      <a target="_blank" rel="noopener noreferrer"  className="text-blue transition ease-in-out duration-300 hover:text-link" href={project.hostingHelpLink}>{project.hostingName}</a>
                      {project.hostingLocation2}
                    </p>
                    <div className='flex justify-between w-[60%] mt-6'>
                      <div className='mr-4'>
                      <h2>
                        Technologies
                      </h2>
                      <ul className='marker:text-blue2 text-base list-disc ml-7'>
                          {project.technologies.technologies.map(x=>
                                    <li>
                                        {x}
                                    </li>
                          )}
                      </ul>
                      </div>
                      <div>
                      <h2>
                        Libraries
                      </h2>
                      <ul className='marker:text-blue2 text-base list-disc ml-7'>
                      {project.technologies.libraries.map(x=>
                                    <li>
                                        {x}
                                    </li>
                          )}
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <ProjectInfo project={project}/>
              </div>
    )
}

export default Project