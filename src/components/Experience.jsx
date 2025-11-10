import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Experience.css'

const Experience = () => {
  const { experience } = portfolioData

  return (
    <section id="experience" className="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="experience-container">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaMapMarkerAlt /> {exp.location}
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt /> {exp.duration}
                  </div>
                </div>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="experience-technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience


