import { useEffect, useState } from "react"


const CarouselExport = ({hardskillCarousel})=>{

  const [mounted, setMounted] = useState(false)
  const devIcons = hardskillCarousel.data[0].attributes.devIcons

  useEffect(()=>{
    setMounted(true)
  },[])

  useEffect(()=>{
    if(mounted){
      let r = document.querySelector(":root")
      r.style.setProperty("--animation_length", "-"+(Object.entries(devIcons).length*50/2)+"%")
    }
      

  },[mounted])

  return (
    <div className="relative w-[80%] mx-auto h-[60px] rounded-full overflow-hidden" data-aos="fade-bottom" data-aos-offset="300">
      <div className={`flex absolute left-0 infinite-scroll`} style={{width:`${Object.entries(devIcons).length*50}%`}}>
        <div className="flex justify-around w-[50%]">
          {Object.entries(devIcons).map(x=>
            <img key={x[0]} width={50} alt={x[0]} src={x[1]} />
            )
          }
        </div>
        <div className="flex justify-around w-[50%]">
        {Object.entries(devIcons).map(x=>
            <img key={x[0]} width={50} alt={x[0]} src={x[1]} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CarouselExport