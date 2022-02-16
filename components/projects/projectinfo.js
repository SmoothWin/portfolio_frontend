import { useState, useRef } from "react"

const ProjectInfo = ()=>{
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
                  
                  <div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-right">
                    <h2>My Role</h2>
                    <div className='text-base'>Cillum nisi cupidatat amet laborum ipsum mollit pariatur anim in aliquip ea occaecat nulla duis. Ex esse amet quis enim nulla laborum nulla ullamco eu. Esse dolore consectetur duis dolor pariatur. Velit mollit enim Lorem exercitation pariatur laborum laboris pariatur minim anim laborum Lorem ad labore. Dolor sint sunt exercitation cillum fugiat eu magna. Aliquip fugiat incididunt nisi in deserunt Lorem nulla excepteur.</div>
                  </div>
                  <div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-left">
                    <h2>Project Difficulties</h2>
                    <div className='text-base'>Laboris excepteur est sunt anim aute nulla reprehenderit exercitation consectetur anim. Magna minim nisi nulla officia. Tempor sint dolor nisi irure voluptate nostrud quis sit labore. Elit consequat veniam consectetur tempor commodo sint cupidatat deserunt ullamco cupidatat cupidatat veniam. Ipsum laborum magna et pariatur irure ut in enim cillum. Tempor laborum minim ipsum eu in reprehenderit cillum cupidatat dolor id excepteur aliqua. Ut cupidatat irure nisi reprehenderit non in in esse nulla mollit enim laborum in consequat.</div>
                  </div>
                  <div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-right">
                    <h2>My Solution</h2>
                    <div className='text-base'>Laboris excepteur est sunt anim aute nulla reprehenderit exercitation consectetur anim. Magna minim nisi nulla officia. Tempor sint dolor nisi irure voluptate nostrud quis sit labore. Elit consequat veniam consectetur tempor commodo sint cupidatat deserunt ullamco cupidatat cupidatat veniam. Ipsum laborum magna et pariatur irure ut in enim cillum. Tempor laborum minim ipsum eu in reprehenderit cillum cupidatat dolor id excepteur aliqua. Ut cupidatat irure nisi reprehenderit non in in esse nulla mollit enim laborum in consequat.</div>
                  </div>
                  <div className='md:mx-5 mb-3 max-w-[500px] mx-auto' data-aos="fade-left">
                    <h2>Notable Features</h2>
                    <div className='text-base'>Laboris excepteur est sunt anim aute nulla reprehenderit exercitation consectetur anim. Magna minim nisi nulla officia. Tempor sint dolor nisi irure voluptate nostrud quis sit labore. Elit consequat veniam consectetur tempor commodo sint cupidatat deserunt ullamco cupidatat cupidatat veniam. Ipsum laborum magna et pariatur irure ut in enim cillum. Tempor laborum minim ipsum eu in reprehenderit cillum cupidatat dolor id excepteur aliqua. Ut cupidatat irure nisi reprehenderit non in in esse nulla mollit enim laborum in consequat.</div>
                  </div>
        </div>
        </div>
    )
}

export default ProjectInfo