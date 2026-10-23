export const profile = {
  name: 'Masinga PL',
  role: 'Software Developer · Data Science & AI',
  tagline:
    'I build reliable Java and Python software, turn messy data into clear insights, and bring AI tools into everyday workflows.',
  email: 'hello@masingapl.dev',
  location: 'South Africa',
  availability: 'Open to junior roles, internships and freelance projects',
  cvPath: '/cv/Masinga-PL-CV.pdf',
  cvFileName: 'Masinga-PL-CV.pdf',
}

export const languages = [
  { name: 'Java', detail: 'OOP · Multithreading · Concurrency', level: 85 },
  { name: 'Python', detail: 'Pandas · EDA · ML workflows', level: 80 },
  { name: 'SQL', detail: 'Querying & data preparation', level: 60 },
  { name: 'Prompt Engineering', detail: 'Structured prompting for AI tools', level: 85 },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Java (OOP)', 'Java Multithreading / Concurrency', 'Python'],
  },
  {
    title: 'Data Science & Analytics',
    items: [
      'Pandas',
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning & Preprocessing',
      'ML Classification Workflows',
      'Model Evaluation',
    ],
  },
  {
    title: 'Tools & Environments',
    items: ['NetBeans IDE', 'Git / Version Control', 'Productivity & AI Tools', 'Prompt Engineering'],
  },
  {
    title: 'Additional Skills',
    items: [
      'Systems Programming',
      'Mobile Game Dev Pipelines',
      'Google Play Deployment',
      'Customer Interaction',
      'Stock Control',
      'Computer Literacy',
    ],
  },
]

export const services = [
  {
    title: 'Software Development',
    description:
      'Object-oriented Java applications with clean architecture, plus concurrent and multithreaded systems built to stay responsive.',
  },
  {
    title: 'Data Analysis',
    description:
      'Cleaning, preprocessing and exploring datasets with Pandas to surface patterns and answer real business questions.',
  },
  {
    title: 'Machine Learning',
    description:
      'End-to-end classification workflows — from feature preparation to honest model evaluation.',
  },
  {
    title: 'AI-Assisted Workflows',
    description:
      'Applying prompt engineering and responsible AI practices to speed up research, writing and development.',
  },
]

export const projects = [
  {
    title: 'Concurrent Task Scheduler',
    description:
      'A Java application that distributes work across a thread pool, using synchronization primitives to keep shared state safe.',
    tags: ['Java', 'Multithreading', 'NetBeans'],
  },
  {
    title: 'Exploratory Data Analysis Report',
    description:
      'A Pandas notebook that cleans a raw dataset, handles missing values and visualises key trends to guide decisions.',
    tags: ['Python', 'Pandas', 'EDA'],
  },
  {
    title: 'ML Classification Pipeline',
    description:
      'A reproducible classification workflow with preprocessing, model training and evaluation using accuracy, precision and recall.',
    tags: ['Python', 'Machine Learning', 'Model Evaluation'],
  },
  {
    title: 'Mobile Game Release Pipeline',
    description:
      'Prepared builds, store assets and release steps for publishing a mobile game through Google Play.',
    tags: ['Mobile', 'Google Play', 'Git'],
  },
]

export const experience = [
  {
    title: 'MWR CyberSec Virtual Internship',
    status: 'Completed · 16-Week Programme',
    description:
      'Gained practical exposure to cybersecurity concepts and technical security workflows over a four-month virtual curriculum.',
  },
  {
    title: 'CAPACITI AI Skills Acceleration Programme',
    status: 'Participant',
    description:
      'Developed applied competencies in artificial intelligence tools and digital career readiness.',
  },
  {
    title: 'Google AI Essentials Specialization',
    status: 'Completed',
    description:
      'Covered foundational AI concepts, prompt engineering, responsible AI usage, and workflow optimization.',
  },
]

export const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

export type TabId = (typeof tabs)[number]['id']
