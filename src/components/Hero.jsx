import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import GraphCanvas from "./canvas/Graph.jsx";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-clip-padding`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#685c83]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className='text-[#915EFF]'>Michel</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Front-end Developer. I work with UX, Web <br className="sm:block hidden" /> applications, and data vizualization
            </p>
          </div>

          <div className="flex">
            <motion.div
              variants={slideIn("bottom", "tween", 0.2, 1)}
              className='xl:flex-1 xl:h-auto md:h-[300px] h-[200px] relative place-content-end;'
            >
              <GraphCanvas />
            </motion.div>
          </div>
        </div>
        <div className="ml-8 lg:mg-0 lg:flex lg:flex-row flex-col">
            <p className="mb-4">Access my LinkedIn: <a href="https://www.linkedin.com/in/michel-adelino/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">here</a></p>
            <p className="mb-4">Access my GitHub: <a href="https://github.com/MichMatrix" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">here</a></p>
            <p className="mb-4">Google Cloud profile: <a href="https://g.dev/michel-adelino" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">here</a></p>
          </div>
      </div>



      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
