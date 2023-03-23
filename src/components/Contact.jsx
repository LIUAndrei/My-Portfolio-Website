import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { slideIn } from '../utils/motion'

//  template_is0c0n6

// service_p3wti2e

// FTH7tZCau6c18c9l4

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_p3wti2e',
        'template_is0c0n6',
        {
          from_name: form.name,
          to_name: 'Portfolio Website',
          from_email: form.email,
          to_email: 'box@aliubinski.us',
          message: form.message,
        },
        'FTH7tZCau6c18c9l4'
      )
      .then(
        () => {
          setLoading(false)
          alert(
            'Thank you for your message. I will get back to you within 24 hours. Meanwhile you can write me via Telegram @alxdrvnsk'
          )
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert(
            'An error occurred while sending the email. Please try again later.'
          )
        }
      )
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <motion.div
        variants={slideIn('left', 'tween', 0.4, 2)}
        className=' flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch with me</p>
        <h3 className={styles.sectionHeadText}>Contacts.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='8'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message here'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '
            />
          </label>
          <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.4, 2)}
        className='xl:flex-1 xl:h-auto m:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
