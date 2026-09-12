// ---------------------------------------------------------------------------
// Central content file. All real, verified information about Md. Shahariar
// Nahin lives here so components stay presentational and content stays easy
// to update in one place.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Md. Shahariar Nahin",
  title: "Full-Stack Developer | Python, Django & React",
  email: "nahinshahariar27@gmail.com",
  github: "https://github.com/nahinsha",
  linkedin: "https://linkedin.com/in/md-shahariar-nahin-a5b147301",
};

export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;
export const MAILTO_URL = `mailto:${profile.email}`;
export const RESUME_URL = "/resume.pdf";
export const PROFILE_IMAGE_URL = "/profile.jpg";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    label: "Focus",
    value: "Backend & Full-Stack Development",
  },
  {
    label: "Primary Stack",
    value: "Python • Django • React • MySQL",
  },
  {
    label: "Interests",
    value: "Web Applications • REST APIs • Software Engineering",
  },
];

export const aboutParagraphs = [
  "I am a Computer Science & Engineering graduate focused on backend and full-stack web development, with hands-on experience in Python, Django, React, JavaScript, SQL, and REST APIs.",
  "Alongside software development, I have experience in academic research and publications, particularly in machine learning and technology-focused research.",
  "I enjoy building practical applications, understanding real-world software systems, solving problems, and continuously improving my technical skills through development projects and research.",
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST Framework", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "JWT Authentication"],
  },
];

export const projects = [
  {
    id: "hospital-management-system",
    name: "Hospital Management System",
    featured: true,
    description:
      "A full-stack Hospital Management System built with Django REST Framework on the backend and React.js on the frontend, covering the core operational workflow of a hospital.",
    stack: ["Django REST Framework", "React.js", "MySQL", "JWT", "Axios"],
    features: [
      "JWT authentication",
      "Role-based access",
      "Doctor management",
      "Patient management",
      "Appointment management",
      "Prescription management",
      "Medicine management",
      "Billing",
      "REST API integration",
      "React frontend",
      "MySQL database",
    ],
    github: null,
    live: null,
  },
  {
    id: "ecommerce-web-application",
    name: "E-Commerce Web Application",
    featured: false,
    description:
      "An e-commerce web application covering product, category, customer, cart, and order management, built with Django and MySQL.",
    stack: ["Django", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "Product management",
      "Category management",
      "Customer management",
      "Shopping cart",
      "Order management",
      "CRUD functionality",
      "MySQL database integration",
      "User-related features",
    ],
    github: null,
    live: null,
  },
];

export const academicProject = {
  label: "Academic Research Project",
  name: "Heart Disease Prediction Using Machine Learning",
  description:
    "Built machine learning models to predict heart disease risk using clinical datasets, comparing multiple algorithms to evaluate predictive performance.",
  points: [
    "Multiple machine learning algorithms",
    "Model comparison",
    "Accuracy evaluation",
    "Precision",
    "Recall",
    "Confusion matrix",
  ],
  note: "Academic / research exercise — not a production medical application.",
};

export const experience = [
  {
    role: "Teaching Assistant",
    org: "Presidency University",
    period: "October 2024 – May 2025",
    type: "Academic",
    points: [
      "Assisted faculty in academic activities and course coordination.",
      "Supported students with academic and departmental activities.",
      "Assisted with research-related tasks under Prof. Dr. Hakikur Rahman.",
      "Supported academic events and departmental activities.",
      "Managed website content, documentation, and information updates.",
    ],
  },
];

export const publications = [
  {
    title:
      "A Comparative Analysis of Machine Learning Algorithms for Predicting Student Academic Performance",
    authors: "Shahariar, N. & Jui, J. A.",
    venue: "Journal of Data Analytics and Intelligence",
    detail: "Volume 2, Issue 1, January 2026",
    description:
      "A comparative analysis of machine learning algorithms — Logistic Regression, Decision Tree, Random Forest, and Support Vector Machine — for predicting student academic performance.",
    url: "https://journal.tekigate.com/jdai/archive/v2i1/a5.html",
  },
  {
    title:
      "Empowering Aging Communities: The Role of AI-Driven Assistive Technologies in Fostering Independent Living",
    authors: "Jui, J. A. & Shahariar, N. (2025)",
    venue:
      'Proceedings of the XIII International Scientific Conference "Care of the Elderly in Contemporary Society"',
    detail: "Volume II, pages 326–341 · European University Brčko District, Bosnia and Herzegovina",
    description:
      "A study on the role of AI-driven assistive technologies in supporting independent living for aging communities.",
    url: "https://eubd.edu.ba/MNS/TOM%20II%20B512.pdf",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science & Engineering",
    institution: "Presidency University",
    period: "2021 – 2025",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chattogram Cantonment Public College",
    period: "2019",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Government Muslim High School, Chattogram",
    period: "2017",
  },
];

export const leadership = [
  {
    role: "Joint Secretary",
    org: "Presidency University Social Services Club",
    period: "2024 – 2025",
  },
];
