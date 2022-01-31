import { useEffect, useState } from "react"

const itemLength = 11

const CarouselExport = ()=>{

  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
  },[])

  useEffect(()=>{
    if(mounted){
      let r = document.querySelector(":root")
      r.style.setProperty("--animation_length", "-"+(itemLength*50/2)+"%")
    }
      

  },[mounted])

  return (
    <div className="relative w-[80%] mx-auto h-[60px] rounded-full overflow-hidden">
      <div className={`flex absolute left-0 infinite-scroll`} style={{width:`${itemLength*50}%`}}>
        <div className="flex justify-around w-[50%]">
            <img width={50} alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <img width={50} alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img width={50} alt="tailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <img width={50} alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
            <img width={50} alt="nodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
            <img width={50} alt="flask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
            <img width={50} alt="spring" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
            <img width={50} alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
            <img width={50} alt="mySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <img width={50} alt="postgres" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <img width={50} alt="msSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
        </div>
        <div className="flex justify-around w-[50%]">
            <img width={50} alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <img width={50} alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img width={50} alt="tailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <img width={50} alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
            <img width={50} alt="nodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
            <img width={50} alt="flask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
            <img width={50} alt="spring" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
            <img width={50} alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
            <img width={50} alt="mySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <img width={50} alt="postgres" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <img width={50} alt="msSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
        </div>
      </div>
    </div>
  )
}

export default CarouselExport