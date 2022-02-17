import { useEffect } from "react"


const SoftSkills = ({softskills})=>{
  useEffect(()=>{

  },[])
    return (
        <section className="relative w-full mb-10 flex flex-col items-center justify-center text-black w-full">
            <div className='lg:max-w-[1200px] mx-auto'>
            <h2 className="text-black text-xl title2 ml-5" data-aos="fade-in" data-aos-offset="300">How I work</h2>
            <h2 className="text-black text-6xl title1 ml-5" data-aos="fade-left" data-aos-offset="300">Soft Skills</h2>
            {/* introduce softskill */}
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 mt-5'>
              {softskills.data.map((x,i)=>{
                
                if((i+1) % 2 == 0){
                  return (
                    <div id="gridItem" className='mx-auto w-[90%] text-xl' data-aos="fade-left" data-aos-offset="300">
                      <h2 className="text-black text-3xl title font-bold">{x.attributes.title}</h2>
                      <div>
                        <span className='font-bold'>{x.attributes.subdescription} </span>{x.attributes.description}
                      </div>
                    </div>
                  )
                }
                if(i+1 == softskills.data.length && (i+1)%1 == 0)
                return (
                  <div id="gridItem" className='mx-auto w-[90%] text-xl sm:col-span-2 sm:w-[50%]' data-aos="fade-up" data-aos-offset="300">
                    <h2 className="text-black text-3xl title font-bold">{x.attributes.title}</h2>
                    <div>
                      <span className='font-bold'>{x.attributes.subdescription} </span>{x.attributes.description}
                    </div>
                  </div>
                )
                else{
                return (
                  <div id="gridItem" className='mx-auto w-[90%] text-xl' data-aos="fade-right" data-aos-offset="300">
                    <h2 className="text-black text-3xl title font-bold">{x.attributes.title}</h2>
                    <div>
                      <span className='font-bold'>{x.attributes.subdescription} </span>{x.attributes.description}
                    </div>
                  </div>
                )
                }
            })}
              
            </div>
            </div>
        </section>
    )
}

export default SoftSkills