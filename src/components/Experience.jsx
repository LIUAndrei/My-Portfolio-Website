import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from './hoc'
import { textVariant } from '../utils/motion'

import React from 'react'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            className='w-[60%] h-[60%] object-contain'
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      date={experience.date}
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, i) => (
          <li
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            key={`experience-point-${i}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What have I accomplished so far</p>
        <h2 className={styles.sectionHeadText}>Work experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
