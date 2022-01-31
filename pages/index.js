import Head from 'next/head'
import Image from 'next/image'

//custom components
import Sidebar from "../components/sidebar/Sidebar"
import CarouselExport from '../components/Carousel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christian's Portfolio
          
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true}/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;300;500&display=swap" rel="stylesheet"/>
      </Head>

      <main className="flex flex-col wrapper">
        {/* <Sidebar/> */}
        <div className='w-[100%] md:min-w-[760px]'>
        <section id='introductionm' className="lg:max-w-[1000px] mx-auto relative w-full mb-2 flex flex-col items-center justify-around text-black">
          <div className='lg:max-w-[1000px] mx-auto'>
          <h2 className="text-black text-3xl title z-[101] text-center">Hi, my name is</h2>
          <div className="flex items-center relative h-[90px] w-[150px] mx-auto">
                <div className="text-4xl absolute bottom-[43px] left-[0px] text-blue2 title">Christian</div>
                <div className="text-3xl absolute bottom-[20px] left-[45px] text-blue title2">Chitanu</div>
                <div className='absolute lineaway bg-whitewhite h-[90px] z-[100] bottom-[2px] w-[190px] flex items-center justify-start'>
                  <div className="line w-[25px] h-[100px] bg-blue2 bottom-[0px] left-[200px] bg-line"></div>
                </div>
          </div>
          <div className='flex flex-col mx-auto items-center md:flex-row md:justify-between md:items-start lg:max-w-[1000px] w-[80%] lg:min-w-[770px] md:min-w-[720px]'>
            <div className='w-[40%] max-w-[390px] min-w-[320px] text-justify title mb-[20px] md:mb-[0px]'>
              I am currently a <br/><span className='text-2xl text-blue2'>Fullstack</span><br/> <span className='text-4xl text-blue'>Web Developer</span> <br/>
              working at <a href="https://www.cryptureworld.com/" target="_blank" rel="noreferrer" rel="noopener" className='underline text-black transition ease-in-out duration-300 hover:text-link'>Crypture World Inc.</a> assisting in the development of <span className='text-xl text-blue2'>frontend</span> and <span className='text-xl text-blue2'>backend</span> services.
            </div>
            <div className='h-[400px] relative w-[60%] max-w-[390px] min-w-[300px] text-justify' >
              <img className='😀 absolute z-[2] top-[0px] left-[0px]' width={200} alt={"Project Crypture World"} src={"/images/project1.png"}/>
              <img className='😀 absolute z-[1] top-[150px] left-[180px] blur-[0.1px]' width={200} alt={"Project Code Example"} src={"/images/project2.png"}/>
              <img className='😀 absolute z-[1] top-[40px] left-[200px] blur-[0.2px]' width={170} alt={"Project Github Example"} src={"/images/project3.png"}/>
              <img className='😀 absolute z-[0] top-[130px] left-[20px] blur-[0.8px]' width={150} alt={"Project Flask API Example"} src={"/images/project4.png"}/>
            </div>
          </div>
          <div>

          </div>
          </div>
        </section>
        <section className="relative w-full mb-10 flex flex-col items-center justify-center text-black w-full">
            <div className='lg:max-w-[1000px] mx-auto'>
            <h2 className="text-black text-sm title2 ml-5">How I work</h2>
            <h2 className="text-black text-4xl title1 ml-5">Soft Skills</h2>
            {/* introduce softskill */}
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5'>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Autonomous</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>
              </div>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Time Management</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>
              </div>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Project Planning</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>

              </div>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Creative Problem Solving</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>

              </div>

              
            </div>
            </div>
        </section>
        <section className="relative w-full mb-2 flex flex-col items-center justify-center text-black w-full">
            <div className='w-[100%] max-w-[1000px]'>
            <h2 className="text-black text-4xl title1 mb-2 text-center">Hard Skills</h2>
            {/* introduce hardskills (in progress)*/}
              <CarouselExport/>
              <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5'>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Autonomous</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>
              </div>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Time Management</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>
              </div>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Project Planning</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>

              </div>
              <div className='mx-auto w-[90%]'>
                <h2 className="text-black text-xl title">Creative Problem Solving</h2>
                <div>Irure elit excepteur nisi ex. Ad voluptate est ex pariatur duis veniam proident laborum reprehenderit cupidatat pariatur est exercitation. Sit laborum incididunt proident ullamco.</div>

              </div>

              
            </div>
            </div>
        </section>
        {/* 
          //introduction
          //experience
          //skills
          //projects
          //contact
        */}
        </div>
      </main>
    </div>
  )
}
