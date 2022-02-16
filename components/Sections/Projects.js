import CarouselExport from "../Carousel"
import ProjectInfo from "../projects/projectinfo"

const Projects = ()=>{
    return(
        <section className="relative w-full mb-2 flex flex-col items-center justify-center text-black bg-whitewhite" style={{boxShadow:"white 0px -10px 50px 10px"}}>
            <div className='w-[100%] max-w-[1200px]'>
            <h2 className="text-black text-6xl title1 mb-2 text-center">Projects</h2>
            {/* introduce hardskills (in progress)*/}
              <CarouselExport/>
              <div className='grid grid-cols-1 gap-4 mt-5'>
                
              <div className='mx-auto w-[90%]'>
                <h2 className="text-blue text-4xl title text-center md:text-left mb-5" data-aos="fade-right">Crypture World</h2>
                <div className='flex flex-col md:flex-row max-w-[1200px] mb-7'>
                  <div className='w-[100%] mx-auto flex flex-col items-center md:mr-3' data-aos="fade-right">
                    <img width={300} alt={"Project Crypture World"} src={"/images/project1.png"}/>
                    <div className='title2 w-[300px] text-base flex justify-around items-end ml-[10px]'>
                      <a target="_blank" rel='noopener noreferrer' className='flex items-end text-blue transition ease-in-out duration-300 hover:text-link' href="https://www.cryptureworld.com"><img style={{width:40}} src={'/images/computer-line.svg'}/>Preview</a> <span className='text-stone-500'>Private Repository</span>
                    </div>
                  </div>
                  <div className='flex flex-col items-center md:items-start' data-aos="fade-left">
                    <p className='text-center md:text-left text-base w-[90%] max-w-[1200px]'>
                      This app is hosted on a <a target="_blank" rel='noopener noreferrer'  className='text-blue transition ease-in-out duration-300 hover:text-link' href="https://aws.amazon.com/amplify">AWS Amplify plan</a> with a CI/CD pipeline activated supporting real time updates when the github repo gets updated
                    </p>
                    <div className='flex justify-between w-[60%] mt-6'>
                      <div className='mr-4'>
                      <h2>
                        Technologies
                      </h2>
                      <ul className='marker:text-blue2 text-base list-disc ml-7'>
                        <li>
                          NextJS
                        </li>
                        <li>
                          ReactJS
                        </li>
                        <li>
                          CSS3
                        </li>
                        <li>
                          HTML5
                        </li>
                        <li>
                          WaxJs
                        </li>
                      </ul>
                      </div>
                      <div>
                      <h2>
                        Libraries
                      </h2>
                      <ul className='marker:text-blue2 text-base list-disc ml-7'>
                        <li>
                          I18Next
                        </li>
                        <li>
                          Scroll-Out
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <ProjectInfo/>
              </div>
              

              
            </div>
            </div>
        </section>
    )
}
export default Projects