import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import './Skills.css'

const Skills = () => {
  const { skills } = portfolioData

  const SkillBar = ({ name, level }) => {
    return (
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">{name}</span>
          <span className="skill-percentage">{level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div
            className="skill-progress"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skills-category-title">Frontend</h3>
            <div className="skills-list">
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skills-category-title">Backend</h3>
            <div className="skills-list">
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="skills-category-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {skills.tools.map((tool) => (
              <motion.div
                key={tool}
                className="tool-item"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills


