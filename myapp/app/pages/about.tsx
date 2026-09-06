import React from 'react'

const About = () => {
  return (
    <div className=" relative z-10  video w-full bg-red-  h-[90vh] sm:h-[45vh] md:h-[50vh] lg:h-[90vh] bg-black  justify-center items-center  flex px-"  >


      <video src="/silver.mp4" className='w-32 absolute right-40 top-30 lg:flex hidden' autoPlay loop></video>
        <div className="relative w-[128vh]  px-4 sm:px-15 py-2 flex items-center   
        lg:py-13 lg:rounded-4xl lg:border border-white/10 lg:bg-white/5 lg:backdrop-blur-lg lg:shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-none">
        
 
 
      
  
 
        <span className="block max-w-3xl lg:max-w-6xl mx-auto text- text-white/65 text-base sm:text-lg lg:text-xl font-bold leading-7 sm:leading-9 tracking-tight">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem dicta
  praesentium sint recusandae excepturi aliquam, perferendis soluta sunt similique commodi
  vitae deserunt molestiae quas illum amet? Dicta, illum. Vel nesciunt possimus nobis voluptatem facilis
  id? Reprehenderit rerum magnam voluptatem eum atque rem eveniet, est obcaecati, quo, quod necessitatibus?
  Voluptatem deleniti distinctio hic quam asperiores.
</span>
        </div>
    </div>
  )
}

export default About