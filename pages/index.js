import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import Aos from 'aos'

//custom components
import Sidebar from "../components/sidebar/sidebar"

import Introduction from '../components/sections/introduction'
import SoftSkills from '../components/sections/softSkills'
import Projects from '../components/sections/projects'
import Footer from '../components/sections/footer'
import axios from 'axios'

export default function Home({softskillsData, introductionData, hardskillCarouselData, projectsData, urlData}) {
  useEffect(()=>{
    Aos.init({
      easing:'ease-in-out',
      once:true,
      offset:50,
      duration:1500,
      disable:window.innerWidth < 768,
    })
  }, [])


  return (
    <div>
      <Head>
        <title>Christian&apos;s Portfolio
          
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;300;500&display=swap" rel="stylesheet"/>
      </Head>

      <main className="flex flex-col wrapper text-xl sm:text-2xl">
        {/* <Sidebar/> */}
        <div className='w-[100%] md:min-w-[760px]'>
        <Introduction url={urlData} introduction={introductionData}/>
        <SoftSkills url={urlData} softskills={softskillsData}/>
        <Projects url={urlData} projects={projectsData} hardskillCarousel={hardskillCarouselData}/>
        {/* 
          //introduction
          //experience
          //skills
          //projects
          //contact
        */}
        </div>

      </main>
      <Footer/>
    </div>
  )
}

export const getStaticProps = async (context) => {
  try{
  const response = await axios.get(`${process.env.BACKEND}/api/softskills`,{headers:{Authorization: `bearer ${process.env.APIKEY}`}})
  const response2 = await axios.get(`${process.env.BACKEND}/api/introductions?populate=*`,{headers:{Authorization: `bearer ${process.env.APIKEY}`}})
  const response3 = await axios.get(`${process.env.BACKEND}/api/hardskill-carousels`,{headers:{Authorization: `bearer ${process.env.APIKEY}`}})
  const response4 = await axios.get(`${process.env.BACKEND}/api/projects?populate=*`,{headers:{Authorization: `bearer ${process.env.APIKEY}`}})
  const backendUrl = process.env.BACKEND
  return {
        props: {
            introductionData:response2.data,
            softskillsData: response.data,
            hardskillCarouselData: response3.data,
            projectsData: response4.data,
            urlData:backendUrl
        }
    }
  }catch(e){
    console.log(e)
    return {props:{
      introductionData:null,
      softskillsData: null,
      hardskillCarouselData: null,
      projectsData: null,
      urlData:""
    }}
  }

}