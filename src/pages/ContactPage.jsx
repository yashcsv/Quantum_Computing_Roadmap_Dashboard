import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Link as LinkIcon, Sparkles, BrainCircuit, Workflow, BriefcaseBusiness } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/ui/SectionLabel';
import Badge from '../components/ui/Badge';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlights = [
  'An end-to-end SMS Spam Classification system deployed as a live web app',
  'A memory-optimized content-based Movie Recommendation Engine',
  'Business-focused analytics dashboards with SQL-driven insights',
  'LLM-powered workflows using LangChain and LangGraph',
];

const lifecycle = ['EDA', 'Feature Engineering', 'Model Training', 'Evaluation', 'Optimization', 'Deployment'];

const skills = [
  'NLP and Text Vectorization (TF-IDF, embeddings)',
  'RAG architectures and LLM orchestration',
  'Cosine similarity and recommendation mathematics',
  'Backend integration with frontend UI',
  'Debugging deployment failures and memory bottlenecks',
  'Git-based production workflows',
];

const ContactPage = () => {
  const navigate = useNavigate();
  const profileImageSrc = `${import.meta.env.BASE_URL}yash-profile.jpg`;
  const fallbackImageSrc = `${import.meta.env.BASE_URL}vite.svg`;

  return (
    <div className="min-h-screen bg-bg-base text-text-primary transition-colors duration-300">
      <div className="noise-overlay" />

      <main className="relative z-10 max-w-content mx-auto px-6 md:px-8 py-12 md:py-16">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-lg border border-border-default px-4 py-2 text-small text-text-secondary hover:text-text-primary hover:bg-bg-surface transition-colors"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
        </motion.div>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="glass rounded-2xl p-6 md:p-8 mb-6"
        >
          <SectionLabel>Contact Us</SectionLabel>
          <h1 className="font-display text-h1 tracking-tighter text-text-primary mb-3">
            YASH SINGH THAKUR
          </h1>
          <p className="text-body text-text-secondary max-w-3xl mb-5">
            I build AI systems that work beyond notebooks. I am an AI/ML-focused undergraduate engineer who designs and deploys
            production-ready machine learning and Generative AI applications, from data preprocessing to model deployment and frontend integration.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="accent" size="md">AI/ML Engineer</Badge>
            <Badge variant="positive" size="md">Generative AI and RAG Systems</Badge>
            <Badge variant="neutral" size="md">ML Deployment</Badge>
            <Badge variant="warning" size="md">Open to Internship</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="glass-elevated rounded-xl p-5 lg:col-span-1">
              <div className="aspect-square rounded-xl overflow-hidden border border-border-default bg-bg-elevated mb-4">
                <img
                  src={profileImageSrc}
                  alt="Yash Singh Thakur profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImageSrc;
                  }}
                />
              </div>
              <p className="text-label text-text-muted uppercase tracking-widest mb-2">Direct Contact</p>
              <div className="space-y-2">
                <a href="mailto:yashsinghthakur69@gmail.com" className="flex items-center gap-2 text-small text-text-secondary hover:text-accent-primary transition-colors">
                  <Mail size={15} /> yashsinghthakur69@gmail.com
                </a>
                <a href="tel:9098216189" className="flex items-center gap-2 text-small text-text-secondary hover:text-accent-primary transition-colors">
                  <Phone size={15} /> 9098216189
                </a>
                <a
                  href="https://www.linkedin.com/in/yash-thakur-ggits/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-small text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <LinkIcon size={15} /> LinkedIn Profile
                </a>
                <a
                  href="https://github.com/yashcsv"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-small text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <LinkIcon size={15} /> GitHub Profile
                </a>
              </div>
            </div>

            <div className="glass-elevated rounded-xl p-5 lg:col-span-2">
              <h2 className="font-display text-h3 text-text-primary mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-accent-primary" /> Project Highlights
              </h2>
              <ul className="space-y-2 mb-5">
                {highlights.map((item) => (
                  <li key={item} className="text-small text-text-secondary flex items-start gap-2">
                    <span className="text-accent-primary mt-0.5">+</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-h3 text-text-primary mb-3 flex items-center gap-2">
                <Workflow size={18} className="text-accent-primary" /> Full ML Lifecycle
              </h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {lifecycle.map((phase) => (
                  <span key={phase} className="text-label px-3 py-1 rounded-full border border-border-default text-text-secondary bg-bg-elevated">
                    {phase}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-h3 text-text-primary mb-3 flex items-center gap-2">
                <BrainCircuit size={18} className="text-accent-primary" /> Technical Comfort Zone
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
                {skills.map((skill) => (
                  <li key={skill} className="text-small text-text-secondary flex items-start gap-2">
                    <span className="text-semantic-neutral mt-0.5">&gt;</span>
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-semantic-warning/35 bg-semantic-warning/10 p-4">
                <p className="text-small text-text-secondary flex items-start gap-2">
                  <BriefcaseBusiness size={16} className="text-semantic-warning shrink-0 mt-0.5" />
                  I am actively seeking AI/ML internships where I can contribute to real-world AI systems, recommendation engines,
                  GenAI pipelines, or scalable ML infrastructure. If you are building intelligent systems at scale, I would love to contribute.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ContactPage;
