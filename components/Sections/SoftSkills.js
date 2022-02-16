const SoftSkills = ()=>{
    return (
        <section className="relative w-full mb-10 flex flex-col items-center justify-center text-black w-full">
            <div className='lg:max-w-[1200px] mx-auto'>
            <h2 className="text-black text-xl title2 ml-5" data-aos="fade-in" data-aos-offset="300">How I work</h2>
            <h2 className="text-black text-6xl title1 ml-5" data-aos="fade-left" data-aos-offset="300">Soft Skills</h2>
            {/* introduce softskill */}
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 mt-5'>
              <div id="gridItem" className='mx-auto w-[90%] text-xl' data-aos="fade-right" data-aos-offset="300">
                <h2 className="text-black text-3xl title font-bold">Analytical Skills</h2>
                <div>
                  <span className='font-bold'>Find ideas.</span> Since designing the logic of a website can be approached in many ways, there are many strategies that are beneficial in delivering a feature. But not all ideas are fit for the product the customer wants. It is my responsibility to analyse solutions and find what is best for the client.
                </div>
              </div>
              <div id="gridItem" className='mx-auto w-[90%] text-xl' data-aos="fade-left" data-aos-offset="300">
                <h2 className="text-black text-3xl title font-bold">Time Management</h2>
                <div>
                  <span className='font-bold'>Plan ahead.</span> In conceptualizing project roadmaps, I plan out the development process and construct specific deadlines. Since in the end it is on the customer&apos;s best interest to have a completed product and I always aim to deliver.
                </div>
              </div>
              {/* Last item will contain the  sm:col-span-2 sm:w-[50%]  so it'll be when (list.length % 2 == 0 && iteration == list.length - 1) */}
              <div id="gridItem" className='mx-auto w-[90%] text-xl sm:col-span-2 sm:w-[50%]' data-aos="fade-up" data-aos-offset="300">
                <h2 className="text-black text-3xl title font-bold">Creative Problem Solving</h2>
                <div>
                  <span className='font-bold'>Most beneficial solution.</span> Before finalizing a solution, I think if solutions to a problem are long term and fit the interests of the client. Solving these problems in a creative manner allows me to deliver implementations that exceeds client expectations.  
                </div>

              </div>

              
            </div>
            </div>
        </section>
    )
}

export default SoftSkills