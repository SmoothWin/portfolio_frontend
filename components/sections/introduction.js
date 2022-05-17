import { useEffect } from "react"
const url = process.env.backend

const Introduction = ({introduction, url})=>{
  const data = introduction?.data[0].attributes
  const images = data?.images.data.map(x=>x.attributes.url)
  useEffect(()=>{
    // console.log(data)
  },[])
  
    return (
      (introduction == null)?null:
        <section id='introductionm' className="mx-auto relative w-full mb-2 flex flex-col items-center justify-around text-black">
          <div className='lg:max-w-[1200px] mx-auto'>
          <h2 className="text-black text-3xl title z-[101] text-center" data-aos="fade-up">{data.hi}</h2>
          <div className="flex items-center relative h-[90px] w-[150px] mx-auto" data-aos="fade-up">
                <div className="text-4xl absolute bottom-[43px] left-[0px] text-blue2 title">{data.firstname}</div>
                <div className="text-3xl absolute bottom-[20px] left-[45px] text-blue title2">{data.lastname}</div>
                <div className='absolute lineaway bg-whitewhite h-[90px] z-[100] bottom-[2px] w-[190px] flex items-center justify-start'>
                  <div className="line w-[25px] h-[100px] bg-blue2 bottom-[0px] left-[200px] bg-line"></div>
                </div>
          </div>
          <div className='flex flex-col mx-auto items-center md:flex-row md:justify-between md:items-start lg:max-w-[1000px] w-[90%] lg:min-w-[770px] md:min-w-[720px]'>
              <div className=' w-[55%] text-justify title mb-[20px] md:mb-[0px] md:mr-[20px] min-w-[300px]'>
                {data.paragraph1}<br/><span className='text-5xl text-blue2'>{data.paragraph2}</span><br/> <span className='text-6xl text-blue'>{data.paragraph3}</span><br/>
                {data.paragraph4}<a href={data.workUrl} target="_blank" rel="noreferrer" className='underline text-black transition ease-in-out duration-300 hover:text-link'>{data.urlText}
                </a>{data.paragraph5}<span className='text-3xl text-blue2'>{data.paragraph6}</span>{data.paragraph7}<span className='text-3xl text-blue2'>{data.paragraph8}</span>{data.paragraph9}
              </div>
              <div className='h-[400px] relative w-[60%] max-w-[390px] min-w-[300px] text-justify' data-aos="fade-left" data-aos-delay="1300">
                <img className='😀 absolute z-[2] w-[170px] sm:w-[200px] top-[20px] left-[20px] sm:top-[0px] sm:left-[0px]' width={200} alt={"Project Crypture World"} src={url+images[3]}/>
                <img className='😀 absolute z-[1] w-[170px] sm:w-[200px] top-[130px] left-[120px]  sm:top-[150px] sm:left-[180px]' width={200} alt={"Project Code Example"} src={url+images[2]}/>
                <img className='😀 absolute z-[1] top-[60px] left-[180px] sm:top-[40px] sm:left-[200px] w-[120px] sm:w-[170px]' width={170} alt={"Project Github Example"} src={url+images[0]}/>
                <img className='😀 absolute z-[0] top-[150px] left-[20px] sm:top-[130px] sm:left-[20px] w-[100px] sm:w-[150px]' width={150} alt={"Project Flask API Example"} src={url+images[1]}/>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center" data-aos="fade-in">
            <span className="mr-3 mb-2 sm:mb-0">Here is my</span> <a href="/cchitanu_cv_english.pdf" download={true} className="title bg-blue text-whitewhite rounded-md p-4 px-5 transition ease-in duration-200 hover:bg-blue2">Curriculum Vitae</a>
          </div>
        </section>
    )
}

export default Introduction