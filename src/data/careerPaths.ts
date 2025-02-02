import { CareerPath } from './careerQuizData'

export const careerPaths: { [key: string]: CareerPath } = {
  'tech': {
    title: 'Technology',
    description: 'Build the future with digital solutions and innovations',
    traits: ['analytical', 'problem-solving', 'technical'],
    careers: [
      {
        title: 'Software Developer',
        description: 'Create applications and systems that power modern businesses',
        salary: '£25,000 - £65,000',
        demand: 'Very High',
        progression: {
          entry: 'Junior Developer',
          mid: 'Senior Developer',
          senior: 'Lead Developer'
        },
        localOpportunities: {
          employers: ['Sky Betting & Gaming', 'NHS Digital'],
          courses: [
            {
              provider: 'University of Leeds',
              location: 'Leeds',
              type: 'Computer Science BSc'
            }
          ]
        }
      }
    ]
  },
  'creative': {
    title: 'Creative Industries',
    description: 'Express ideas through digital and traditional media',
    traits: ['creative', 'innovative', 'artistic'],
    careers: [
      {
        title: 'Digital Designer',
        description: 'Create engaging visual content for digital platforms',
        salary: '£22,000 - £45,000',
        demand: 'High',
        progression: {
          entry: 'Junior Designer',
          mid: 'Senior Designer',
          senior: 'Creative Director'
        },
        localOpportunities: {
          employers: ['Channel 4', 'BBC'],
          courses: [
            {
              provider: 'Leeds Arts University',
              location: 'Leeds',
              type: 'Digital Design BA'
            }
          ]
        }
      }
    ]
  },
  'healthcare': {
    title: 'Healthcare',
    description: 'Make a difference in people\'s lives through healthcare',
    traits: ['caring', 'detail-oriented', 'responsible'],
    careers: [
      {
        title: 'Healthcare Assistant',
        description: 'Support healthcare professionals in providing patient care',
        salary: '£20,000 - £28,000',
        demand: 'Very High',
        progression: {
          entry: 'Healthcare Assistant',
          mid: 'Senior Healthcare Assistant',
          senior: 'Team Leader'
        },
        localOpportunities: {
          employers: ['NHS Yorkshire', 'Local Care Homes'],
          courses: [
            {
              provider: 'Leeds City College',
              location: 'Leeds',
              type: 'Health and Social Care BTEC'
            }
          ]
        }
      }
    ]
  },
  'business': {
    title: 'Business & Management',
    description: 'Lead teams and drive organisational success',
    traits: ['leadership', 'strategic', 'analytical'],
    careers: [
      {
        title: 'Business Development Manager',
        description: 'Grow business through strategic partnerships and sales',
        salary: '£30,000 - £60,000',
        demand: 'High',
        progression: {
          entry: 'Business Development Executive',
          mid: 'Senior Business Development Manager',
          senior: 'Head of Business Development'
        },
        localOpportunities: {
          employers: ['PwC', 'KPMG'],
          courses: [
            {
              provider: 'University of Bradford',
              location: 'Bradford',
              type: 'Business Management BA'
            }
          ]
        }
      }
    ]
  },
  'trades': {
    title: 'Skilled Trades',
    description: 'Build and maintain the infrastructure of tomorrow',
    traits: ['practical', 'detail-oriented', 'problem-solving'],
    careers: [
      {
        title: 'Electrician',
        description: 'Install and maintain electrical systems in buildings',
        salary: '£25,000 - £40,000',
        demand: 'High',
        progression: {
          entry: 'Apprentice Electrician',
          mid: 'Qualified Electrician',
          senior: 'Master Electrician'
        },
        localOpportunities: {
          employers: ['Yorkshire Housing', 'Local Contractors'],
          courses: [
            {
              provider: 'Leeds College of Building',
              location: 'Leeds',
              type: 'Electrical Installation Level 3'
            }
          ]
        }
      }
    ]
  },
  'education': {
    title: 'Education',
    description: 'Shape the future through teaching and training',
    traits: ['patient', 'communicative', 'organised'],
    careers: [
      {
        title: 'Teaching Assistant',
        description: 'Support teachers and help students learn effectively',
        salary: '£18,000 - £25,000',
        demand: 'Steady',
        progression: {
          entry: 'Teaching Assistant',
          mid: 'Higher Level Teaching Assistant',
          senior: 'Senior Teaching Assistant'
        },
        localOpportunities: {
          employers: ['Local Schools', 'Academy Trusts'],
          courses: [
            {
              provider: 'Sheffield Hallam University',
              location: 'Sheffield',
              type: 'Education Studies BA'
            }
          ]
        }
      }
    ]
  }
} 