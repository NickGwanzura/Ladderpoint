export const site = {
  name: 'Ladder Point', tagline: 'From Ideas to Impact. From Impact to Influence.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};
export const services = [
  { slug: 'storytelling', name: 'Storytelling', short: 'Stories that make the complex clear. And the important impossible to ignore.', description: 'At the heart of every meaningful connection is a story. We find the human truth in complex ideas and shape it into a narrative people understand, remember and act on.', help: 'From the first interview to the final edit, we bring strategy and craft together across words, photographs, film and digital platforms.', deliverables: ['Strategic narrative development', 'Digital communications strategy', 'Content planning', 'Copywriting', 'Scripting', 'Interviews', 'Photography', 'Videography', 'Editing', 'Animation', 'Social media content', 'Distribution and media engagement'] },
  { slug: 'strategic-communications', name: 'Strategic Communications and Advisory', short: 'A clear direction. A coherent voice. Communication with a purpose.', description: 'Communication works best when it begins with organizational goals. We connect what you want to achieve with what your audiences need to hear.', help: 'We help you define your positioning, align your messages and build a practical path from strategy to execution.', deliverables: ['Communications strategy', 'Strategic positioning', 'Executive messaging', 'Communications advisory'] },
  { slug: 'development-communications', name: 'Development Communications', short: 'Make the work visible. Make the impact understood.', description: 'Development work changes lives. Its stories should make that change understandable without losing the complexity or humanity behind it.', help: 'We translate technical work into accessible narratives and visibility campaigns that connect programs with the people who matter.', deliverables: ['Program communications strategy', 'Impact stories', 'Visibility campaigns', 'Social media toolkits'] },
  { slug: 'stakeholder-engagement', name: 'Stakeholder Engagement and Advocacy', short: 'Connect people, build understanding and move ideas forward.', description: 'Influence begins with understanding the people around an issue. Meaningful engagement gives those relationships direction.', help: 'We shape messages and engagement approaches around the stakeholders, communities and decision-makers you need to reach.', deliverables: ['Stakeholder engagement planning', 'Advocacy messaging', 'Campaign narratives', 'Media engagement plans'] },
  { slug: 'reputation-crisis', name: 'Reputation, Risk and Crisis Communications', short: 'Clarity and confidence when the stakes are highest.', description: 'Trust needs careful stewardship, especially under pressure. Clear communication helps organizations respond with purpose.', help: 'We help prepare communications approaches, clarify messages and support responses to sensitive or fast-moving situations.', deliverables: ['Crisis communications planning', 'Response messaging', 'Reputation advisory', 'Spokesperson preparation'] },
  { slug: 'ai-innovation', name: 'AI, Innovation and Communications', short: 'New possibilities. Human judgment. Better communication.', description: 'Technology opens up new ways to create and connect. Its value comes from applying it thoughtfully to real communications challenges.', help: 'We explore how AI and digital approaches can support your strategy, content and communications workflows while keeping people at the center.', deliverables: ['AI communications advisory', 'Digital strategy', 'Content workflow guidance', 'Innovation workshops'] },
  { slug: 'training', name: 'Training', short: 'Build the confidence and capability to tell your own story.', description: 'Strong communications capability belongs inside an organization. Training gives people the tools to communicate with clarity.', help: 'We combine practical communications training, coaching and advisory support around your team’s context.', deliverables: ['Communications training', 'Storytelling workshops', 'Team coaching', 'Individual advisory support'] },
];
export const packages = [
  { name: 'Impact Accelerator', audience: 'For development programs and projects', items: ['Communications strategy', 'Storytelling package with 5 to 10 stories', 'Social media toolkit', 'Media engagement plan', 'Visibility campaign'] },
  { name: 'Small Business Growth', audience: 'For startups and social enterprises', items: ['Brand refresh or rebrand', 'Communications strategy', 'Social media strategy', 'Media outreach kit'] },
  { name: 'Enterprise Innovator', audience: 'For large organizations and private sector clients', items: ['Strategic narrative development', 'Executive messaging', 'Video production', 'Website strategy', 'Thought leadership campaign'] },
  { name: 'Comms Partner', audience: 'An ongoing monthly retainer for one-person communications teams', items: ['Communications strategy advisory', 'Social media campaigns', 'Media outreach', 'Storytelling', 'Surge support', 'Training', 'Coaching'] },
  { name: 'ContextLab', audience: 'Tailored communications support for your context', items: ['Communications strategy', 'Storytelling', 'Crisis communications', 'National campaigns', 'Major program visibility'] },
];
export const stats = [
  { value: '$300M+', label: 'In communications leadership', detail: 'Communications leadership for a development portfolio exceeding $300 million annually.' },
  { value: '1M+', label: 'People reached through campaigns', detail: 'Integrated campaigns reaching more than one million people.' },
  { value: '100K+', label: 'Digital community built', detail: 'Growing a Facebook community from approximately 2,000 to more than 100,000 followers.' },
  { value: '2M+', label: 'Annual impressions', detail: 'More than two million annual impressions.' },
  { value: '18+', label: 'Years of experience', detail: 'Experience connecting strategic communications, creativity and impact.' },
  { value: 'Beyond borders', label: 'Global reach across borders', detail: 'Support extending into Zambia through radio engagement, strategic storytelling and communications training.' },
];
export const leadershipTeam = [
  {
    slug: 'diana', name: 'Diana', role: 'Co-Founder | AI and Innovation Lead', monogram: 'd.', image: '/images/diana-portrait.png',
    paragraphs: [
      'Diana is Co-Founder and AI and Innovation Lead at Ladder Point, where she brings together artificial intelligence, automation, data and strategic problem-solving to help organizations turn ideas into practical, scalable solutions.',
      'An AI Engineer and Process Control and Automation Engineer, Diana has expertise in AI-driven optimisation, predictive modelling, machine learning analytics, DCS, PLC and SCADA systems. Her work focuses on applying technology to real-world organizational and operational challenges, improving efficiency, strengthening decision-making and helping teams make better use of data.',
      'At Ladder Point, Diana leads the integration of AI and emerging technologies across the firm’s advisory and creative work. She supports the development of AI-enabled tools, dashboards, analytics and intelligent systems that translate complex information into accessible insights and practical solutions. Her approach prioritizes technology that is useful, maintainable and responsive to the needs of the people who ultimately use it.',
      'Diana is particularly interested in the intersection of AI, communications and organizational transformation, including how automation, predictive analytics and real-time data can strengthen strategy, measure outcomes and support more informed decision-making.',
      'Her engineering mindset complements Ladder Point’s creative philosophy: start with the challenge, imagine what is possible, and build a solution that works.',
    ],
  },
  {
    slug: 'fulton', name: 'Fulton', role: 'Co-Founder | AI, Innovation and Skills Development Expert', monogram: 'f.',
    paragraphs: [
      'Fulton is an AI, innovation and skills development expert working with Ladder Point at the intersection of technology, workforce transformation, organizational performance and African market expansion. With a background spanning engineering, skills development, operations management, project execution and business expansion, Fulton brings a practical understanding of how organizations can translate innovation into systems, capabilities and measurable results.',
      'At Ladder Point, Fulton contributes to the firm’s work in AI and innovation, capacity strengthening, training, organizational transformation and market expansion. He brings particular insight into how emerging technologies must be accompanied by the skills, systems and people required to use them effectively.',
      'He is passionate about building sustainable talent pipelines and developing solutions that equip African organizations and workforces for a rapidly changing technological and economic environment.',
    ],
  },
  {
    slug: 'dione', name: 'Dione', role: 'Co-Founder | Marketing & Business Development Lead', monogram: 'di.', image: '/images/dione-portrait.png',
    paragraphs: [
      'Dione is Co-Founder and Marketing and Business Development Lead at Ladder Point, where she helps transform ideas into brands, opportunities, partnerships and experiences that connect with people. With a degree in International Business Management and specialization in Marketing and Human Resources, Dione brings a multidisciplinary perspective spanning marketing, business development, people operations, organizational transformation and customer engagement.',
      'Her early work with a Zimbabwean business included supporting brand development and strengthening customer satisfaction. She has particular experience in social media and video-focused content and understands how organizations can use engaging digital storytelling to build visibility and stronger relationships with their audiences.',
      'Her international experience includes working with AIESEC Berlin, where she supported the Outgoing Global Talent programme before progressing into a marketing leadership role. At Ladder Point, Dione supports business development, marketing strategy, brand positioning, client engagement and partnership development. She brings a people-centered perspective to the firm’s work, connecting market insights, creativity and organizational needs to identify opportunities and shape solutions.',
    ],
  },
];
export const categories = ['Strategic Communications', 'Storytelling', 'Development Communications', 'Digital Strategy', 'AI and Innovation', 'Reputation and Crisis', 'Training'];
export type Insight = { slug: string; title: string; category: string; excerpt: string; publishedAt: string };
// Add reviewed articles here, or replace this adapter with an MDX/CMS content source.
export const insights: Insight[] = [];
