import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Contact.css'

const Contact = () => {
  const { personalInfo } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(''), 3000)
  }

  const contactInfo = [
    { icon: FaEnvelope, text: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: FaPhone, text: personalInfo.phone, link: `tel:${personalInfo.phone}` },
    { icon: FaMapMarkerAlt, text: personalInfo.location, link: '#' }
  ]

  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-detail-item"
                  >
                    <Icon />
                    <span>{info.text}</span>
                  </a>
                )
              })}
            </div>
            <div className="social-links">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {status === 'success' && (
              <motion.div
                className="form-status success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact


