interface SearchItem {
  title: string
  description: string
  url: string
  category: string
  keywords: string[]
}

// This is our search database - you can expand this with more content
const searchData: SearchItem[] = [
  {
    title: "Young People's Guide",
    description: "Discover opportunities, training, and career paths for young people in Yorkshire.",
    url: "/young-people",
    category: "Young People",
    keywords: ["youth", "careers", "training", "education", "apprenticeships", "young"]
  },
  {
    title: "Adult Skills Development",
    description: "Explore skills development opportunities and career changes for adults.",
    url: "/adult-skills",
    category: "Adult Skills",
    keywords: ["adult", "skills", "training", "career change", "professional development"]
  },
  {
    title: "Business Services",
    description: "Support and resources for businesses looking to develop their workforce.",
    url: "/business",
    category: "Businesses",
    keywords: ["business", "workforce", "training", "development", "employer"]
  },
  {
    title: "Educators Hub",
    description: "Resources and guidance for education professionals.",
    url: "/educators",
    category: "Educators",
    keywords: ["education", "teaching", "schools", "colleges", "training providers"]
  },
  {
    title: "Parents Guide",
    description: "Information and resources to help parents support their children's career choices.",
    url: "/parents",
    category: "Parents",
    keywords: ["parents", "guidance", "support", "career advice", "education"]
  }
]

export const performSearch = (query: string) => {
  const searchTerms = query.toLowerCase().split(' ')
  
  return searchData
    .filter(item => {
      const searchableText = [
        item.title,
        item.description,
        ...item.keywords
      ].join(' ').toLowerCase()
      
      return searchTerms.some(term => 
        searchableText.includes(term) && term.length > 2
      )
    })
    .map(({ keywords, ...rest }) => rest) // Remove keywords from results
} 