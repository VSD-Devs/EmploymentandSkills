interface SearchItem {
  title: string
  description: string
  url: string
  category: string
  keywords: string[]
  priority?: number // Add priority to rank important results higher
}

// This is our search database - expanded with more specific content
const searchData: SearchItem[] = [
  {
    title: "Young People's Guide",
    description: "Discover opportunities, training, and career paths for young people in Yorkshire.",
    url: "/young-people",
    category: "Young People",
    keywords: ["youth", "careers", "training", "education", "apprenticeships", "young"],
    priority: 10
  },
  {
    title: "T-Levels for Students",
    description: "Learn about T-Level qualifications and how they can help your career.",
    url: "/t-levels-for-students",
    category: "Young People",
    keywords: ["t-levels", "technical", "qualifications", "students", "career", "education"]
  },
  {
    title: "University Options",
    description: "Explore university pathways and higher education opportunities.",
    url: "/university",
    category: "Young People",
    keywords: ["university", "higher education", "degree", "student", "undergraduate"]
  },
  {
    title: "Skills Training for Young People",
    description: "Discover training opportunities to build valuable skills for your future.",
    url: "/skills-training",
    category: "Young People",
    keywords: ["skills", "training", "youth", "development", "courses", "young people"]
  },
  {
    title: "Career Planning for Young People",
    description: "Get help planning your future career path with practical advice and resources.",
    url: "/plan-your-career",
    category: "Young People",
    keywords: ["career", "planning", "future", "advice", "guidance", "path"]
  },
  {
    title: "Adult Skills Development",
    description: "Explore skills development opportunities and career changes for adults.",
    url: "/adult-skills",
    category: "Adult Skills",
    keywords: ["adult", "skills", "training", "career change", "professional development"],
    priority: 10
  },
  {
    title: "Employment Support",
    description: "Get support with finding employment and developing your career.",
    url: "/employment-support",
    category: "Adult Skills",
    keywords: ["employment", "jobs", "career", "support", "work", "hiring"]
  },
  {
    title: "Funded Training for Adults",
    description: "Discover funded training opportunities to develop your professional skills.",
    url: "/funded-training-for-adults",
    category: "Adult Skills",
    keywords: ["funded", "free", "training", "courses", "adult learning", "professional"]
  },
  {
    title: "Adult Apprenticeships",
    description: "Learn about apprenticeship opportunities for adult career changers.",
    url: "/apprenticeships",
    category: "Adult Skills",
    keywords: ["apprenticeships", "adult", "career change", "earn and learn", "skills"]
  },
  {
    title: "Business Services",
    description: "Support and resources for businesses looking to develop their workforce.",
    url: "/business",
    category: "Businesses",
    keywords: ["business", "workforce", "training", "development", "employer"],
    priority: 10
  },
  {
    title: "Funding & Training for Businesses",
    description: "Access funding and training opportunities to grow your business.",
    url: "/funded-training",
    category: "Businesses",
    keywords: ["funding", "grants", "business", "training", "development", "financial support"]
  },
  {
    title: "Start-up Support",
    description: "Resources and guidance for new and emerging businesses.",
    url: "/startup-support",
    category: "Businesses",
    keywords: ["startup", "new business", "entrepreneur", "launch", "beginning", "start"]
  },
  {
    title: "Recruitment Support",
    description: "Find and develop talent for your business with our recruitment services.",
    url: "/recruitment-support",
    category: "Businesses",
    keywords: ["recruitment", "hiring", "talent", "employees", "staff", "workforce"]
  },
  {
    title: "Business Growth Services",
    description: "Services and support to help established businesses scale and grow.",
    url: "/business-support",
    category: "Businesses",
    keywords: ["growth", "scale", "expand", "business", "development", "strategy"]
  },
  {
    title: "Educators Hub",
    description: "Resources and guidance for education professionals.",
    url: "/educators",
    category: "Educators",
    keywords: ["education", "teaching", "schools", "colleges", "training providers"],
    priority: 10
  },
  {
    title: "Resources for Schools",
    description: "Support materials and resources for primary and secondary schools.",
    url: "/educators/schools",
    category: "Educators",
    keywords: ["schools", "teachers", "education", "classroom", "teaching", "resources"]
  },
  {
    title: "College & Training Provider Resources",
    description: "Resources for colleges and training providers to deliver skills training.",
    url: "/educators/training-providers",
    category: "Educators",
    keywords: ["college", "training provider", "further education", "skills", "teaching"]
  },
  {
    title: "Parents Guide",
    description: "Information and resources to help parents support their children's career choices.",
    url: "/parents",
    category: "Parents",
    keywords: ["parents", "guidance", "support", "career advice", "education"],
    priority: 10
  },
  {
    title: "Events Calendar",
    description: "Upcoming events, workshops, and information sessions across Yorkshire.",
    url: "/events",
    category: "Events",
    keywords: ["events", "calendar", "workshops", "sessions", "networking", "conferences"],
    priority: 5
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for support and information.",
    url: "/contact",
    category: "Contact",
    keywords: ["contact", "email", "phone", "support", "help", "information"],
    priority: 5
  }
]

// Enhanced search algorithm with better relevance scoring
export const performSearch = (query: string) => {
  if (!query || query.trim().length < 2) return []
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/)
  
  return searchData
    .map(item => {
      const searchableText = [
        item.title,
        item.description,
        ...item.keywords
      ].join(' ').toLowerCase()
      
      // Calculate relevance score
      let score = 0
      let matched = false
      
      // Exact matches get higher scores
      if (searchableText.includes(query.toLowerCase())) {
        score += 10
        matched = true
      }
      
      // Score each search term match
      searchTerms.forEach(term => {
        if (term.length > 1) {
          if (searchableText.includes(term)) {
            score += 3
            matched = true
            
            // Title matches are more important
            if (item.title.toLowerCase().includes(term)) {
              score += 5
            }
            
            // Keyword exact matches are valuable
            if (item.keywords.some(k => k.toLowerCase() === term)) {
              score += 4
            }
          }
        }
      })
      
      // Add priority boost
      if (item.priority) {
        score += item.priority
      }
      
      return {
        ...item,
        score,
        matched
      }
    })
    .filter(item => item.matched) // Only include items that matched something
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .slice(0, 7) // Limit to top 7 results
    .map(({ keywords, score, matched, priority, ...rest }) => rest) // Remove internal properties from results
} 