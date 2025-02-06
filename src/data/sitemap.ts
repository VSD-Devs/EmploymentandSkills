interface SitemapItem {
  title: string;
  path: string;
  description?: string;
  children?: SitemapItem[];
}

export const sitemap: SitemapItem[] = [
  {
    title: "Home",
    path: "/",
    description: "South Yorkshire Skills Hub - Career pathways and training opportunities",
  },
  {
    title: "Career Pathways",
    path: "/pathways",
    description: "Explore different career sectors in South Yorkshire",
    children: [
      {
        title: "Digital & Technology",
        path: "/pathways/digital-tech",
        description: "Careers in software, data, and digital transformation"
      },
      {
        title: "Manufacturing",
        path: "/pathways/manufacturing",
        description: "Advanced manufacturing and engineering careers"
      },
      {
        title: "Construction",
        path: "/pathways/construction",
        description: "Construction and infrastructure opportunities"
      },
      {
        title: "Education",
        path: "/pathways/education",
        description: "Careers in education and training"
      },
      {
        title: "Financial Services",
        path: "/pathways/financial-services",
        description: "Banking, insurance, and fintech careers"
      },
      {
        title: "Public Services",
        path: "/pathways/public-services",
        description: "Careers in local government and public sector"
      }
    ]
  },
  {
    title: "For Young People",
    path: "/young-people",
    description: "Opportunities and guidance for young people",
    children: [
      {
        title: "Apprenticeships",
        path: "/apprenticeships",
        description: "Find and apply for apprenticeships"
      }
    ]
  },
  {
    title: "Adult Skills",
    path: "/adult-skills",
    description: "Training and development for adults",
    children: [
      {
        title: "Adult Skills Funding",
        path: "/adult-skills-funding",
        description: "Available funding for adult education"
      },
      {
        title: "Skills Bank",
        path: "/skills-bank",
        description: "Business-focused skills development"
      }
    ]
  },
  {
    title: "For Businesses",
    path: "/business",
    description: "Support and resources for employers",
    children: [
      {
        title: "Recruitment Support",
        path: "/recruitment-support",
        description: "Help with hiring and workforce development"
      },
      {
        title: "Funded Training",
        path: "/funded-training",
        description: "Access funding for staff training"
      }
    ]
  },
  {
    title: "For Educators",
    path: "/educators",
    description: "Resources for education professionals",
    children: [
      {
        title: "Training Providers",
        path: "/educators/training-providers",
        description: "Information for training organisations"
      }
    ]
  },
  {
    title: "For Parents",
    path: "/parents",
    description: "Guide your child's career journey"
  },
  {
    title: "Our Region",
    path: "/our-region",
    description: "About South Yorkshire's economy and opportunities"
  },
  {
    title: "Events",
    path: "/events",
    description: "Career fairs and skills workshops"
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Get in touch with the Skills Hub team"
  }
];

export default sitemap; 