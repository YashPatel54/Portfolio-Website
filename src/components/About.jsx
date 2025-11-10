import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import './About.css'

const About = () => {
  const { personalInfo } = portfolioData

  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-content">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personalInfo.bio}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm passionate about creating elegant solutions to complex problems and continuously
              learning new technologies. When I'm not coding, you can find me exploring new
              frameworks, contributing to open-source projects, or sharing knowledge with the
              developer community.
            </motion.p>
            <motion.div
              className="about-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="info-item">
                <strong>Email:</strong> {personalInfo.email}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {personalInfo.location}
              </div>
              <div className="info-item">
                <strong>Phone:</strong> {personalInfo.phone}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About


