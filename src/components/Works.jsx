import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from './hoc'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.8, 1)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-3xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] cursor-pointer'>
          <img
            src={image}
            alt={name}
            className='w-full h-full rounded-2xl object-cover'
          />
          <div
            onClick={() => window.open(project_link, '_blank')}
            className='absolute inset-0 flex justify-end m-3 card-img_hover'
          >
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github'
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] select-none'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[15px] select-none'>
            {description}
          </p>
        </div>{' '}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`tag-${tag.name}`}
              className={`${tag.color} text-[14px] select-none`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Things I've built so far</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='flex w-full'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          variants={fadeIn('', '', 0.2, 1)}
        >
          Over the course of my studies I'm trying to take on challenging
          projects to cement my newly acquired skills. You can find the
          completed projects below. Please tap the screenshot to try the project
          out or the GitHub logo to see the code on GitHub.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, i) => (
          <ProjectCard i={i} {...project} key={`project-${i}`} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')
