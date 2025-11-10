export const portfolioData = {
  personalInfo: {
    name: "Yash Patel",
    title: "Computer Science Student",
    email: "yashspatel0054@gmail.com",
    phone: "+1 724-605-5698",
    location: "San Francisco, CA",
    bio: "BS CS student at San Francisco State University (GPA 3.76). Frontend lead on an AI grading platform and builder of deep-learning and full‑stack projects. Passionate about usable interfaces, data-driven systems, and helping peers succeed.",
    image: "/IMG_9129.jpeg",
    resume: "/Yash Patel resume_25.pdf",
    socialLinks: {
      github: "https://github.com/YashPatel54",
      linkedin: "https://www.linkedin.com/in/yash-patel-a843b4252/",
      email: "mailto:yashspatel0054@gmail.com"
    }
  },
  experience: [
    {
      id: 1,
      title: "Student Leader",
      company: "METRO Academy, San Francisco State University",
      location: "San Francisco, CA",
      duration: "Jan 2024 - Present",
      description: [
        "Lead outreach initiatives to engage and support the student community",
        "Provide academic and personal counseling, connecting students to resources",
        "Support students in navigating coursework and university-related concerns"
      ],
      technologies: ["Mentorship", "Outreach", "Student Services"]
    },
    {
      id: 2,
      title: "Math/Calculus Tutor (SCI 226)",
      company: "CSME, San Francisco State University",
      location: "San Francisco, CA",
      duration: "Jan 2023 - May 2024",
      description: [
        "Instructed SCI 226 (Calculus) students in differentiation, integration, and transcendental functions",
        "Delivered tailored learning strategies that improved assignment grades by ~30% in one semester",
        "Provided individualized tutoring and study plans"
      ],
      technologies: ["Calculus", "Teaching", "Learning Strategies"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "GRADIENT – AI-Based Grading Software",
      description: "Frontend Lead for a responsive UI enabling automated grading; collaborated on backend and model integration to improve evaluation speed and consistency.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["React.js", "JavaScript"],
      github: "",
      live: "",
      featured: true
    },
    {
      id: 2,
      title: "ActionNet – Video Action Classification",
      description: "Deep learning system classifying human activities from video using CNN/LSTM architectures; built preprocessing with OpenCV/MoviePy and evaluated with accuracy & F1-score.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["Python", "TensorFlow", "Keras", "PyTorch", "OpenCV", "MoviePy"],
      github: "",
      live: "",
      featured: true
    },
    {
      id: 3,
      title: "Full Stack Bank Application",
      description: "Banking web app with secure client-server communication, responsive UI, authentication, and scalable data storage.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["React.js", "Java", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: "",
      live: "",
      featured: false
    },
    {
      id: 4,
      title: "Task Management System (YashtmDB)",
      description: "MySQL-backed task/project system with roles; automated workflows via triggers, stored procedures, and functions; optimized queries for scalability and real-time monitoring.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["MySQL", "SQL"],
      github: "",
      live: "",
      featured: false
    }
  ],
  skills: {
    frontend: [
      { name: "React.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "Java", level: 75 },
      { name: "Python", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 }
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Xcode",
      "Postman",
      "Figma",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "MoviePy"
    ]
  },
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science (GPA: 3.76/4.0)",
      school: "San Francisco State University",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      description: "Relevant coursework: Data Structures, Algorithms, Web Software Development, Machine Structures, Software Development, Operating Systems, DBMS, Software Engineering, Deep Learning."
    }
  ]
}
