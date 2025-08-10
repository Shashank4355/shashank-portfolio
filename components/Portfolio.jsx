'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const resume = {
  name: "Shashank Shekhar Pandey",
  role: "Data Scientist & Analyst",
  email: "shashank.pandey0411@gmail.com",
  phone: "+91 9118684998",
  github: "https://github.com/Shashank4355",
  linkedin: "https://www.linkedin.com/in/your-linkedin",
  summary:
    "Data Scientist focused on AI/ML, NLP, Generative AI, and analytics-driven automation. Experienced building predictive models, dashboards, LLM-integrated workflows, and production-ready pipelines to enable faster business decisions.",
  experience: [
    {
      company: "Bridging Healthcare Technology",
      role: "Data Scientist / Analyst",
      date: "July 2024 – Present",
      location: "Mohali, Punjab",
      bullets: [
        "Led optimization and analytics for 7+ products, identifying key business needs through large-scale data analysis.",
        "Developed AI/ML-based automation workflows, including LLM-driven solutions, to improve business efficiency.",
        "Built dashboards using Power BI and Python to visualize trends and identify process improvements.",
        "Worked cross-functionally to prioritize insights, automate reporting, and enable faster decision-making.",
      ],
    },
    {
      company: "V.EDU’s Private Limited",
      role: "Data Scientist",
      date: "Jan 2022 – Mar 2024",
      location: "Mumbai, Maharashtra",
      bullets: [
        "Designed and implemented relational data models to support structured reporting.",
        "Built and optimized predictive models for campaign performance and customer behaviour forecasting.",
        "Applied NLP, LLM techniques, and Gen AI to analyze unstructured text data, automating insights.",
        "Utilized Python, SQL, Snowflake, and statistical methods to uncover business trends and boost campaign efficiency by 10%.",
      ],
    },
  ],
  projects: [
    {
      name: "Sentiment Analysis using Python",
      desc: "NLP pipeline with text cleaning, feature engineering, Hugging Face Transformers integration, and ML models. Improved accuracy & F1 by iterative tuning.",
      link: "https://github.com/Shashank4355/Sentiment-Analysis-using-Python",
      tech: ["Python", "NLP", "Hugging Face"],
    },
    {
      name: "Sales Insights Power BI",
      desc: "ETL -> MySQL/Snowflake -> Visualizations in Power BI to expose business KPIs for stakeholders.",
      link: "https://github.com/Shashank4355/Sales-Insights-Power-BI",
      tech: ["Power BI", "MySQL", "Snowflake", "ETL"],
    },
    {
      name: "Data Warehouse Modernization",
      desc: "Migration of an on-prem data warehouse to AWS Redshift & Snowflake with governance and security enforcement.",
      link: "https://github.com/Shashank4355/Data-Warehouse-Modernization",
      tech: ["AWS Redshift", "Snowflake", "Python", "SQL"],
    },
  ],
  education: {
    degree: "B.E. Computer Science (Hons) - Big Data Analytics",
    school: "Chandigarh University",
    date: "May 2024",
    coursework: [
      "Data Structures & Algorithms (C++)",
      "Probability & Statistics in CS (Python)",
      "Linear Algebra (Python)",
      "Big Data Analytics",
      "Machine Learning",
    ],
  },
  achievements: [
    "Published IEEE research paper (Greenhouse analysis cross-country)",
    "Top performer in soft-skills training among 300 students",
  ],
  skills: {
  tools: [
  "Python",
  "R",
  "SQL",
  "Machine Learning",
  "Deep Learning (TensorFlow, PyTorch)",
  "Data Visualization (Tableau, Power BI, Looker)",
  "Big Data (Spark, Hadoop)",
  "Cloud Platforms (AWS, Azure, GCP)",
  "LLM & Generative AI",
  "Agentic AI Agents",
  "Model Deployment (Docker, FastAPI)",
  "NLP & Computer Vision",
  "Feature Engineering",
  "Statistical Analysis",
  "Data Wrangling & Cleaning"
],

  libs: [
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Hugging Face Transformers",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly"
  ],
  concepts: [
    "Machine Learning (Regression, Classification, Clustering)",
    "Deep Learning (CNN, RNN, Transformers)",
    "Data Wrangling & Cleaning",
    "Data Preprocessing & Feature Engineering",
    "Statistical Analysis",
    "Experiment Design & A/B Testing",
    "Model Deployment (Docker, Flask, FastAPI)",
    "Data Structures & Algorithms",
    "Cloud Services (AWS SageMaker, Azure ML, GCP AI Platform)",
    "NLP and Computer Vision",
    "Business Intelligence Tools",
    "Reporting & Dashboard Creation",
    "Software Engineering Best Practices (Version Control, Testing)",
    "Strong Analytical & Communication Skills",
    "Data Storytelling"
  ]
}
};

function IconExternal() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3H21V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path d="M21 3L10 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path d="M21 21H3V3H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  );
}

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-10 ${className}`}> {/* reduced from py-30 */}
    <div className="container mx-auto px-6 lg:px-20">{children}</div>
  </section>
);


export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
  // Load saved preference or default to dark mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
    setDark(false);
  } else {
    document.documentElement.classList.add("dark");
    setDark(true);
  }
  setMounted(true);
}, []);

const toggleDark = () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setDark(false);
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setDark(true);
  }
};


  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between py-6">
          <div className="text-lg font-semibold">{resume.name}</div>
          <div className="flex items-center gap-4">
            <button onClick={toggleDark}
              className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm">
              {dark ? "Dark" : "Light"}
            </button>
            <a href={resume.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>
            <a href={resume.linkedin} target="_blank" rel="noreferrer" className="text-sm underline">LinkedIn</a>
            <a href={`mailto:${resume.email}`} className="text-sm underline">Email</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <Section id="home">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{resume.name}</h1>
              <p className="text-xl text-indigo-300 mb-6">{resume.role}</p>
              <p className="max-w-xl leading-relaxed text-gray-300 mb-6">{resume.summary}</p>
              <div className="flex gap-4">
                <a href={resume.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md font-medium">
                  View GitHub <IconExternal />
                </a>
                <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-md">Email</a>
              </div>
            </motion.div>

            <motion.div className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-tr from-gray-800/40 to-gray-700/30"
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-col gap-4">
                <div className="text-sm text-gray-400">Contact</div>
                <div className="text-lg font-medium">{resume.email}</div>
                <div className="text-lg font-medium">{resume.phone}</div>
                <hr className="my-4 border-gray-800" />
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div>India</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Top Skills</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resume.skills.tools.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded bg-gray-800/60">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* About */}
        <Section id="about">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-300 max-w-2xl leading-relaxed">{resume.summary} I specialize in creating reproducible data pipelines, predictive models, LLM-based apps, and dashboards that help stakeholders make informed decisions. My work spans ML model development, NLP applications, ETL & data modeling, and visual analytics.</p>
          </motion.div>
        </Section>

        {/* Experience */}
        <Section id="experience">
          <h2 className="text-2xl font-semibold mb-8">Experience</h2>
          <div className="space-y-8">
            {resume.experience.map((exp) => (
              <motion.article key={exp.company} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl border border-gray-800 bg-gray-800/20">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-semibold">{exp.role}</div>
                    <div className="text-sm text-gray-400">{exp.company} • {exp.location}</div>
                  </div>
                  <div className="text-sm text-indigo-300">{exp.date}</div>
                </div>
                <ul className="mt-4 list-disc ml-5 text-gray-300 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resume.projects.map((p) => (
              <motion.a key={p.name} href={p.link} target="_blank" rel="noreferrer"
                className="p-6 rounded-2xl border border-gray-800 bg-gray-800/10 hover:scale-[1.01] transition-transform"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-400">{p.tech.join(" • ")}</div>
                </div>
                <p className="mt-3 text-gray-300">{p.desc}</p>
                <div className="mt-4 text-sm text-indigo-300 flex items-center gap-2">View on GitHub <IconExternal /></div>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* Education & Skills */}
        <Section id="education">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="p-6 rounded-2xl border border-gray-800 bg-gray-800/10">
                <div className="font-semibold">{resume.education.degree}</div>
                <div className="text-sm text-gray-400">{resume.education.school} • {resume.education.date}</div>
                <ul className="mt-4 list-disc ml-5 text-gray-300 space-y-2">
                  {resume.education.coursework.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="p-6 rounded-2xl border border-gray-800 bg-gray-800/10 space-y-4">
                <div>
                  <div className="text-sm text-gray-400">Languages & Tools</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resume.skills.tools.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded bg-gray-800/60">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Frameworks & Libraries</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resume.skills.libs.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded bg-gray-800/60">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Concepts</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resume.skills.concepts.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded bg-gray-800/60">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Achievements */}
        <Section id="achievements">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-800/10">
              <ul className="list-disc ml-5 space-y-2 text-gray-300">
                {resume.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-800/10">
              <p className="mb-4">If you'd like to connect about opportunities or collaborations, reach out via:</p>
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <a href={`mailto:${resume.email}`} className="px-4 py-3 rounded-md bg-indigo-600 inline-block">{resume.email}</a>
                <a href={resume.github} target="_blank" rel="noreferrer" className="px-4 py-3 rounded-md border inline-block">GitHub</a>
                <a href={resume.linkedin} target="_blank" rel="noreferrer" className="px-4 py-3 rounded-md border inline-block">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </Section>
      </main>

      <footer className="border-t border-gray-800 mt-12">
        <div className="container mx-auto px-6 lg:px-20 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} {resume.name}. Built with React & Tailwind.
        </div>
      </footer>
    </div>
  );
}
