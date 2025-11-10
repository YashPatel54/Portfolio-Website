import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          © Copyright 2025 Yash Patel
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer


