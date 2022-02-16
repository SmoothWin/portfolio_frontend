const Introduction = ()=>{
    return (
        <section id='introductionm' className="mx-auto relative w-full mb-2 flex flex-col items-center justify-around text-black">
          <div className='lg:max-w-[1200px] mx-auto'>
          <h2 className="text-black text-3xl title z-[101] text-center" data-aos="fade-up">Hi, my name is</h2>
          <div className="flex items-center relative h-[90px] w-[150px] mx-auto" data-aos="fade-up">
                <div className="text-4xl absolute bottom-[43px] left-[0px] text-blue2 title">Christian</div>
                <div className="text-3xl absolute bottom-[20px] left-[45px] text-blue title2">Chitanu</div>
                <div className='absolute lineaway bg-whitewhite h-[90px] z-[100] bottom-[2px] w-[190px] flex items-center justify-start'>
                  <div className="line w-[25px] h-[100px] bg-blue2 bottom-[0px] left-[200px] bg-line"></div>
                </div>
          </div>
          <div className='flex flex-col mx-auto items-center md:flex-row md:justify-between md:items-start lg:max-w-[1000px] w-[90%] lg:min-w-[770px] md:min-w-[720px]'>
            <div className=' w-[55%] text-justify title mb-[20px] md:mb-[0px] md:mr-[20px] min-w-[300px]'>
              I am currently a <br/><span className='text-5xl text-blue2'>Fullstack</span><br/> <span className='text-6xl text-blue'>Web Developer</span><br/>
              working at <a href="https://www.cryptureworld.com/" target="_blank" rel="noreferrer" className='underline text-black transition ease-in-out duration-300 hover:text-link'>Crypture World Inc.
              </a> assisting in the development of <span className='text-3xl text-blue2'>frontend</span> and <span className='text-3xl text-blue2'>backend</span> services.
            </div>
            <div className='h-[400px] relative w-[60%] max-w-[390px] min-w-[300px] text-justify' data-aos="fade-left" data-aos-delay="1300">
              <img className='😀 absolute z-[2] w-[170px] sm:w-[200px] top-[20px] left-[20px] sm:top-[0px] sm:left-[0px]' width={200} alt={"Project Crypture World"} src={"/images/project1.png"}/>
              <img className='😀 absolute z-[1] blur-[0.1px] w-[170px] sm:w-[200px] top-[130px] left-[120px]  sm:top-[150px] sm:left-[180px]' width={200} alt={"Project Code Example"} src={"/images/project2.png"}/>
              <img className='😀 absolute z-[1] top-[60px] left-[180px] sm:top-[40px] sm:left-[200px] blur-[0.2px] w-[120px] sm:w-[170px]' width={170} alt={"Project Github Example"} src={"/images/project3.png"}/>
              <img className='😀 absolute z-[0] top-[150px] left-[20px] sm:top-[130px] sm:left-[20px] blur-[0.8px] w-[100px] sm:w-[150px]' width={150} alt={"Project Flask API Example"} src={"/images/project4.png"}/>
            </div>
          </div>
          </div>
        </section>
    )
}

export default Introduction