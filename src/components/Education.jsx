import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Education.css'

const Education = () => {
  const { education } = portfolioData

  return (
    <section id="education" className="education">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-school">{edu.school}</h4>
                <div className="education-meta">
                  <span className="meta-item">
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                  <span className="meta-item">
                    <FaCalendarAlt /> {edu.duration}
                  </span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education


