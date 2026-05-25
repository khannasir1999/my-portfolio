import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { chainlink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectsIamCurrentlyWorkingOn } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isMobile,
}) => {
  const cardClassName =
    "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full";

  const content = (
    <>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        {source_code_link && source_code_link !== "#" && (
          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={chainlink}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        )}
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {(tags ?? []).map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </>
  );

  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.min(index * 0.25, 1), 0.75)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      className='w-full sm:w-[360px]'
    >
      {isMobile ? (
        <div className={cardClassName}>{content}</div>
      ) : (
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={cardClassName}
        >
          {content}
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        live links and live demos in it. It reflects my ability to solve complex
        problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className='mt-20 mb-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            isMobile={isMobile}
            {...project}
          />
        ))}
      </div>

      <motion.div
        variants={textVariant()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className={`${styles.sectionHeadText}`}>
          Projects I'm currently working on.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projectsIamCurrentlyWorkingOn.map((project, index) => (
          <ProjectCard
            key={`current-project-${index}`}
            index={index}
            isMobile={isMobile}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
