export interface FAQ {
  question: string;
  answer: string;
  category: string;
  links?: {
    text: string;
    url: string;
  }[];
  relatedQuestions?: string[];
}

export const faqs: FAQ[] = [
  {
    question: "What funding is available for adult skills training?",
    answer: "We offer various funding options including Skills Bank funding, adult education budget, and local initiatives. Skills Bank provides flexible funding for businesses to upskill their workforce.",
    category: "funding",
    links: [
      { text: "Skills Bank Funding", url: "/skills-bank" },
      { text: "Adult Skills Funding", url: "/adult-skills-funding" },
      { text: "Explore Funded Training", url: "/funded-training" }
    ],
    relatedQuestions: [
      "What is Skills Bank funding?",
      "Am I eligible for adult skills funding?",
      "What courses are covered by funding?",
      "How do I apply for Skills Bank funding?"
    ]
  },
  {
    question: "What is Skills Bank funding?",
    answer: "Skills Bank is a unique funding programme that helps businesses invest in their workforce. It provides flexible, responsive funding to support business growth through skills training.",
    category: "funding",
    links: [
      { text: "About Skills Bank", url: "/skills-bank" },
      { text: "Apply for Skills Bank", url: "/skills-bank#apply" },
      { text: "Success Stories", url: "/skills-bank#case-studies" }
    ],
    relatedQuestions: [
      "How do I apply for Skills Bank funding?",
      "What training can Skills Bank fund?",
      "How quickly can I access funding?"
    ]
  },
  {
    question: "How do I apply for Skills Bank funding?",
    answer: "To apply for Skills Bank funding, you'll need to complete a growth plan and skills assessment. Our team will guide you through the process and help identify suitable training options.",
    category: "funding",
    links: [
      { text: "Start Application", url: "/skills-bank#apply" },
      { text: "Funding Requirements", url: "/skills-bank#requirements" },
      { text: "Book Consultation", url: "/contact?type=skills-bank" }
    ]
  },
  {
    question: "How do I find apprenticeship opportunities?",
    answer: "You can explore our apprenticeships section to find opportunities in your area. We regularly update our listings with new positions from local employers.",
    category: "apprenticeships",
    links: [
      { text: "Browse Apprenticeships", url: "/apprenticeships" },
      { text: "View Latest Opportunities", url: "/apprenticeships#opportunities" },
      { text: "Apprenticeship Events", url: "/events?category=apprenticeships" }
    ],
    relatedQuestions: [
      "What qualifications do I need for an apprenticeship?",
      "How long do apprenticeships take?",
      "What sectors offer apprenticeships?"
    ]
  },
  {
    question: "What sectors offer apprenticeships?",
    answer: "We offer apprenticeships across various sectors including digital, engineering, healthcare, construction, and business services. Each sector has different levels and specialisations available.",
    category: "apprenticeships",
    links: [
      { text: "Explore Sectors", url: "/apprenticeships#sectors" },
      { text: "Sector Guides", url: "/apprenticeships/sectors" }
    ]
  },
  {
    question: "How can businesses partner with Yorkshire Pathways?",
    answer: "Businesses can partner with us through our business engagement programme. We offer support for apprenticeships, Skills Bank funding, training, and workforce development.",
    category: "business",
    links: [
      { text: "Business Partnerships", url: "/business" },
      { text: "Skills Bank for Business", url: "/skills-bank#business" },
      { text: "Contact Business Team", url: "/contact?type=business" }
    ],
    relatedQuestions: [
      "What support do you offer to businesses?",
      "How can I hire an apprentice?",
      "What funding is available for business training?"
    ]
  },
  {
    question: "What support is available for young people?",
    answer: "We provide career guidance, training opportunities, mentorship programmes, and support with T Levels and traineeships for young people.",
    category: "youth",
    links: [
      { text: "Young People's Hub", url: "/young-people" },
      { text: "Career Resources", url: "/young-people#resources" },
      { text: "Find a Traineeship", url: "/young-people#traineeships" }
    ],
    relatedQuestions: [
      "What are T Levels?",
      "How do I find work experience?",
      "What career guidance do you offer?"
    ]
  },
  {
    question: "How do I find work experience?",
    answer: "We offer various work experience opportunities through our employer network, including short placements, T Level industry placements, and traineeships.",
    category: "youth",
    links: [
      { text: "Work Experience", url: "/young-people#work-experience" },
      { text: "Available Placements", url: "/opportunities#work-experience" },
      { text: "T Level Placements", url: "/t-levels#placements" }
    ]
  },
  {
    question: "How can educators collaborate with Yorkshire Pathways?",
    answer: "Educators can join our network of training providers and access resources for career guidance. We also offer support for T Level delivery and industry placements.",
    category: "education",
    links: [
      { text: "Educators Hub", url: "/educators" },
      { text: "Schools Partnership", url: "/educators/schools" },
      { text: "Training Providers", url: "/educators/training-providers" },
      { text: "T Level Support", url: "/educators#t-levels" }
    ],
    relatedQuestions: [
      "What resources do you offer to schools?",
      "How can we arrange a careers event?",
      "How do we become a training provider?"
    ]
  },
  {
    question: "What qualifications do I need for an apprenticeship?",
    answer: "Requirements vary by apprenticeship level and sector, but most require basic English and Maths qualifications. Higher level apprenticeships may require additional qualifications.",
    category: "apprenticeships",
    links: [
      { text: "Entry Requirements", url: "/apprenticeships#requirements" },
      { text: "Skills Assessment", url: "/apprenticeships#skills-check" },
      { text: "Qualification Levels", url: "/apprenticeships#levels" }
    ]
  },
  {
    question: "What courses are covered by funding?",
    answer: "We offer funding for professional qualifications, digital skills, leadership and management, technical training, and sector-specific programmes through Skills Bank and other initiatives.",
    category: "funding",
    links: [
      { text: "Browse Funded Courses", url: "/funded-training" },
      { text: "Skills Bank Courses", url: "/skills-bank#courses" },
      { text: "Course Directory", url: "/funded-training#courses" }
    ]
  },
  {
    question: "Where can I find information about T Levels?",
    answer: "T Levels are new technical qualifications that combine classroom learning with substantial industry placements. They're equivalent to 3 A Levels and are designed with employers.",
    category: "education",
    links: [
      { text: "T Levels Information", url: "/t-levels" },
      { text: "Available Courses", url: "/t-levels#courses" },
      { text: "Industry Placements", url: "/t-levels#placements" }
    ],
    relatedQuestions: [
      "How do T Levels compare to apprenticeships?",
      "Which employers offer T Level placements?",
      "What subjects are available?"
    ]
  },
  {
    question: "What mental health support is available?",
    answer: "We provide mental health support services for learners, including counselling, wellbeing resources, and access to specialist support partners.",
    category: "support",
    links: [
      { text: "Mental Health Support", url: "/mental-health-support" },
      { text: "Wellbeing Resources", url: "/mental-health-support#resources" },
      { text: "Get Help Now", url: "/mental-health-support#urgent" }
    ],
    relatedQuestions: [
      "How can I access counselling?",
      "What support is available during my course?",
      "Where can I find emergency help?"
    ]
  },
  {
    question: "What support is available for learners with disabilities?",
    answer: "We provide comprehensive support for learners with disabilities, including learning support, accessibility services, and reasonable adjustments for courses and assessments.",
    category: "support",
    links: [
      { text: "Disability Support", url: "/support/disability" },
      { text: "Learning Support", url: "/support/learning" },
      { text: "Accessibility Services", url: "/support/accessibility" }
    ],
    relatedQuestions: [
      "What reasonable adjustments are available?",
      "How do I request learning support?",
      "What equipment is available?"
    ]
  },
  {
    question: "How can training providers work with SYMCA?",
    answer: "Training providers can partner with SYMCA through various programmes including Skills Bank, Adult Skills Funding (ASF), apprenticeship delivery and Skills Bootcamps. We offer opportunities for both new and established providers.",
    category: "training-providers",
    links: [
      { text: "Provider Hub", url: "/educators/training-providers" },
      { text: "Register Interest", url: "/educators/training-providers/register" },
      { text: "Quality Standards", url: "/educators/training-providers/standards" }
    ],
    relatedQuestions: [
      "What funding streams are available for training providers?",
      "How do I become an approved provider?",
      "What are the quality requirements?"
    ]
  },
  {
    question: "What funding streams are available for training providers?",
    answer: "Training providers can partner with SYMCA through various programmes including Skills Bank, Adult Skills Funding (ASF), apprenticeship delivery and Skills Bootcamps. We offer opportunities for both new and established providers.",
    category: "training-providers",
    links: [
      { text: "Funding Opportunities", url: "/educators/training-providers/funding" },
      { text: "ASF Information", url: "/educators/training-providers/asf" },
      { text: "Skills Bank Delivery", url: "/educators/training-providers/skills-bank" }
    ],
    relatedQuestions: [
      "How do I apply for ASF funding?",
      "What is the Multiply Programme?",
      "How can I deliver Skills Bank training?"
    ]
  },
  {
    question: "How do I become an approved provider?",
    answer: "To become an approved provider, you'll need to meet our quality standards, complete our due diligence process, and demonstrate your track record in delivering high-quality training. The process includes financial checks and quality assessments.",
    category: "training-providers",
    links: [
      { text: "Application Process", url: "/educators/training-providers/apply" },
      { text: "Provider Requirements", url: "/educators/training-providers/requirements" },
      { text: "Due Diligence", url: "/educators/training-providers/due-diligence" }
    ],
    relatedQuestions: [
      "What are the quality requirements?",
      "How long does approval take?",
      "What support is available for new providers?"
    ]
  },
  {
    question: "What are the quality requirements?",
    answer: "Our quality requirements include Ofsted rating considerations, financial health checks, delivery track record, qualified staff, and robust quality assurance processes. We also require specific policies and procedures to be in place.",
    category: "training-providers",
    links: [
      { text: "Quality Framework", url: "/educators/training-providers/quality" },
      { text: "Policy Requirements", url: "/educators/training-providers/policies" },
      { text: "Quality Support", url: "/educators/training-providers/support" }
    ]
  },
  {
    question: "How can I deliver Skills Bank training?",
    answer: "To deliver Skills Bank training, you need to be an approved provider and demonstrate sector expertise. You'll need to meet our quality standards and be able to deliver flexible, employer-responsive training.",
    category: "training-providers",
    links: [
      { text: "Skills Bank Provider Guide", url: "/educators/training-providers/skills-bank" },
      { text: "Provider Application", url: "/educators/training-providers/skills-bank/apply" },
      { text: "Delivery Requirements", url: "/educators/training-providers/skills-bank/requirements" }
    ],
    relatedQuestions: [
      "What types of training can I deliver?",
      "How does Skills Bank funding work?",
      "What support do providers receive?"
    ]
  },
  {
    question: "What support do providers receive?",
    answer: "We offer comprehensive support including provider workshops, quality improvement guidance, funding advice, and regular performance reviews. Our provider support team is available to help with queries and development needs.",
    category: "training-providers",
    links: [
      { text: "Provider Support", url: "/educators/training-providers/support" },
      { text: "Development Resources", url: "/educators/training-providers/resources" },
      { text: "Contact Provider Team", url: "/educators/training-providers/contact" }
    ],
    relatedQuestions: [
      "How often are provider reviews?",
      "What training is available for providers?",
      "How can I access provider resources?"
    ]
  },
  {
    question: "What is the Multiply Programme?",
    answer: "Multiply is a government-funded programme to help adults improve their numeracy skills. Providers can deliver various courses and interventions to support adults in developing confidence with numbers.",
    category: "training-providers",
    links: [
      { text: "About Multiply", url: "/educators/training-providers/multiply" },
      { text: "Provider Opportunities", url: "/educators/training-providers/multiply/opportunities" },
      { text: "Delivery Guidelines", url: "/educators/training-providers/multiply/guidelines" }
    ],
    relatedQuestions: [
      "How can I deliver Multiply courses?",
      "What funding is available?",
      "What are the programme requirements?"
    ]
  },
  {
    question: "How does Skills Bank funding work?",
    answer: "Skills Bank funding is employer-led and demand-driven. Providers work with employers to design and deliver training that meets business needs. Funding levels vary based on the training impact and business growth potential.",
    category: "training-providers",
    links: [
      { text: "Funding Model", url: "/educators/training-providers/skills-bank/funding" },
      { text: "Provider Guidance", url: "/educators/training-providers/skills-bank/guidance" },
      { text: "Success Stories", url: "/educators/training-providers/skills-bank/case-studies" }
    ],
    relatedQuestions: [
      "How are funding rates determined?",
      "What is the payment process?",
      "How are outcomes measured?"
    ]
  }
]; 