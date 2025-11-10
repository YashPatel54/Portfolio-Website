import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Hero.css'

const Hero = () => {
  const { personalInfo } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const socialIcons = [
    { icon: FaGithub, link: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, link: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, link: personalInfo.socialLinks.email, label: 'Email' }
  ]

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.div>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href={personalInfo.resume} download className="btn btn-primary">
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {socialIcons.map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="image-wrapper">
            <img src={personalInfo.image} alt={personalInfo.name} />
            <div className="image-border"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="mouse"></div>
      </motion.div>
    </section>
  )
}

export default Hero


