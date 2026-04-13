import { motion } from 'framer-motion';
import { Mail, Phone, Link, BrainCircuit, BriefcaseBusiness, Workflow, Sparkles } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardEntrance = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlights = [
  'End-to-end SMS Spam Classification deployed as a live web app',
  'Memory-optimized content-based Movie Recommendation Engine',
  'Business analytics dashboards powered by SQL-driven insights',
  'LLM-powered workflows using LangChain and LangGraph',
];

const lifecycle = [
  'EDA',
  'Feature Engineering',
  'Model Training',
  'Evaluation',
  'Optimization',
  'Deployment',
];

const skills = [
  'NLP and Text Vectorization (TF-IDF, embeddings)',
  'RAG architectures and LLM orchestration',
  'Cosine similarity and recommendation mathematics',
  'Backend integration with frontend UI',
  'Debugging deployment failures and memory bottlenecks',
  'Git-based production workflows',
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-surface">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            LET US BUILD INTELLIGENT SYSTEMS
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mb-8">
            I build AI systems that work beyond notebooks. I am Yash Singh Thakur, an AI/ML-focused undergraduate engineer
            who designs and deploys production-ready ML and Generative AI applications from data preprocessing to model
            deployment and frontend integration.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            <Badge variant="accent" size="md">
              AI/ML Engineer
            </Badge>
            <Badge variant="positive" size="md">
              Generative AI and RAG Systems
            </Badge>
            <Badge variant="neutral" size="md">
              NLP
            </Badge>
            <Badge variant="warning" size="md">
              Open to Internship
            </Badge>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={cardEntrance} className="glass rounded-xl p-6 lg:col-span-2">
            <h3 className="font-display text-h3 text-text-primary mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-accent-primary" />
              IMPACT HIGHLIGHTS
            </h3>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="text-small text-text-secondary flex items-start gap-2">
                  <span className="text-accent-primary mt-0.5 shrink-0">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={cardEntrance} className="glass rounded-xl p-6">
            <h3 className="font-display text-h3 text-text-primary mb-4 flex items-center gap-2">
              <BriefcaseBusiness size={18} className="text-accent-primary" />
              CONTACT INFO
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:yashsinghthakur69@gmail.com"
                className="flex items-center gap-2 text-small text-text-secondary hover:text-accent-primary transition-colors"
              >
                <Mail size={16} />
                yashsinghthakur69@gmail.com
              </a>
              <a
                href="tel:9098216189"
                className="flex items-center gap-2 text-small text-text-secondary hover:text-accent-primary transition-colors"
              >
                <Phone size={16} />
                9098216189
              </a>
              <a
                href="https://www.linkedin.com/in/yash-thakur-ggits/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-small text-text-secondary hover:text-accent-primary transition-colors"
              >
                <Link size={16} />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={cardEntrance} className="glass rounded-xl p-6">
            <h3 className="font-display text-h3 text-text-primary mb-4 flex items-center gap-2">
              <Workflow size={18} className="text-accent-primary" />
              FULL ML LIFECYCLE
            </h3>
            <div className="flex flex-wrap gap-2">
              {lifecycle.map((phase) => (
                <span
                  key={phase}
                  className="text-label px-3 py-1 rounded-full border border-border-default text-text-secondary bg-bg-elevated"
                >
                  {phase}
                </span>
              ))}
            </div>
            <p className="text-small text-text-secondary mt-4">
              What differentiates me: I do not just train models. I debug them, optimize them, deploy them, and integrate
              them into usable systems.
            </p>
          </motion.div>

          <motion.div variants={cardEntrance} className="glass rounded-xl p-6">
            <h3 className="font-display text-h3 text-text-primary mb-4 flex items-center gap-2">
              <BrainCircuit size={18} className="text-accent-primary" />
              TECHNICAL DEPTH
            </h3>
            <ul className="space-y-2 mb-4">
              {skills.map((skill) => (
                <li key={skill} className="text-small text-text-secondary flex items-start gap-2">
                  <span className="text-semantic-neutral mt-0.5 shrink-0">&gt;</span>
                  {skill}
                </li>
              ))}
            </ul>
            <p className="text-small text-text-secondary">
              I am actively seeking AI/ML internships where I can contribute to real-world AI systems, recommendation engines,
              GenAI pipelines, or scalable ML infrastructure. If you are building intelligent systems at scale, I would love to contribute.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
