# Website Specification

## 1. Project Overview
### 1.1 Purpose
To provide a comprehensive platform for employment and skills development in South Yorkshire, connecting individuals with training opportunities, career pathways, and support services.

### 1.2 Target Audience
- Primary: Job seekers, students, and career changers in South Yorkshire
- Secondary: Employers, educators, and training providers

## 2. Technical Requirements
### 2.1 Framework
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS for styling

### 2.2 Hosting
- Vercel platform
- Automatic deployments
- Continuous integration

### 2.3 CMS Integration
- Kentico Xperience (future integration)
- Content modelling for dynamic pages

## 3. User Flow & Core Pages

### 3.1 Home Page
The central hub and starting point for all users, providing:
- Quick access to main sections
- Latest opportunities and updates
- Clear navigation to key services
- Featured content and calls-to-action

#### Primary Navigation Paths:
1. **For Adults** → Adult Skills Page
   - Career change support
   - Training opportunities
   - Employment guidance
   - Funding information

2. **For Young People** → Young People Page
   - Apprenticeship information
   - University pathways
   - Career starter resources
   - Skills development

3. **For Businesses** → Business Support Page
   - Recruitment services
   - Funded training programs
   - Workforce development
   - Startup resources

4. **For Parents** → Parents Page
   - Career guidance for children
   - Education options
   - Apprenticeship information
   - Support resources

5. **Events** → Events Calendar
   - Career fairs
   - Workshops
   - Networking opportunities
   - Training sessions

#### Secondary Navigation Paths:
- **Courses** → Course Directory
- **Apprenticeships** → Apprenticeship Listings
- **Our Region** → Local Economy Information
- **Contact** → Support Channels

### 3.2 Adult Skills Page
Focused on adult learners and career changers:
- Career pathways
- Funding information
- Training opportunities
- Employment support
- Integrated newsletter
- Career quiz

### 3.3 Young People Page
Dedicated to school leavers and young adults:
- Apprenticeship information
- University pathways
- Career starter resources
- Interactive elements
- Newsletter integration
- Career quiz

### 3.4 Business Support Page
Resources for employers and businesses:
- Recruitment services
- Funded training programs
- Workforce development
- Startup resources
- Contact options

### 3.5 Parents Page
Guidance for parents supporting their children:
- Career guidance resources
- Education options
- Apprenticeship information
- Support networks
- FAQ section

### 3.6 Events Page
Calendar of career-related events:
- Career fairs
- Workshops
- Networking events
- Training sessions
- Registration system
- Event reminders

## 4. Page Purposes
### 4.1 Core Pages
- **Home**: The central hub providing quick access to key services, latest opportunities, and important updates
- **Courses**: Comprehensive listing of available training courses with filters and search functionality
- **Apprenticeships**: Information and listings for apprenticeship opportunities across various sectors
- **Educators**: Resources and support for educational institutions and training providers
- **Employment Support**: Guidance and services for job seekers, including CV help and interview preparation

### 4.2 Career Pathways
- **Pathways**: Overview of different career sectors in South Yorkshire
  - **Digital & Technology**: Information about tech careers, required skills, and local opportunities
  - **Manufacturing**: Details about manufacturing roles, training, and career progression
  - **Construction**: Resources for construction careers and apprenticeships
  - **Education**: Information about careers in teaching and educational support
  - **Financial Services**: Overview of banking, insurance, and fintech careers
  - **Public Services**: Guidance on careers in local government and public sector

### 4.3 Target Groups
- **Young People**: Dedicated resources for school leavers and young adults
- **Adult Skills**: Support for adult learners and career changers
  - **Adult Skills Funding**: Information about financial support for adult education
  - **Skills Bank**: Resource for identifying and developing key skills
- **Parents**: Guidance for parents supporting their children's career choices

### 4.4 Business Support
- **Business**: Resources for employers and businesses
  - **Recruitment Support**: Services to help businesses find and hire talent
  - **Funded Training**: Information about government-funded training programs
  - **Startup Support**: Resources for new businesses and entrepreneurs

### 4.5 Additional Pages
- **Our Region**: Information about the local economy and labour market
- **Events**: Calendar of career fairs, workshops, and networking events
- **Contact**: Multiple channels for users to get in touch with support services
- **Course Directory**: Comprehensive database of all available courses with advanced search

## 5. Design Guidelines
### 5.1 Colours
- Primary: #1A73E8 (accessible blue)
- Secondary: #34A853 (accessible green)
- Background: #F3F4F6 (light grey)
- Text: #1F2937 (dark grey)

### 5.2 Typography
- Heading: Inter Bold
- Body: Inter Regular
- Line height: 1.5
- Font sizes: 16px base, responsive scaling

### 5.3 Layout
- 12-column grid system
- Max-width: 1440px
- Mobile-first responsive design
- Consistent padding and margins

## 6. Content Requirements
### 6.1 Content Types
- Career Pathway Pages
  - Role descriptions
  - Salary ranges
  - Career progression
  - Required qualifications
- Training Opportunities
  - Courses
  - Apprenticeships
  - Skills Bootcamps
- Support Services
  - Employment support
  - Mental health support
  - Recruitment support

### 6.2 Content Structure
Each role page includes:
- Title and description
- Salary ranges (entry, experienced, senior)
- Career pathways (university, apprenticeship)
- Required skills
- Day-to-day activities
- Work environment
- Future prospects

## 7. Functionality
### 7.1 Search
- Full-text search across all content
- Filters by:
  - Location
  - Sector
  - Job type
  - Salary range
- Autocomplete suggestions

### 7.2 User Features
- Career quiz
- Event registration
- Course directory
- Contact forms
- Newsletter subscription

## 8. SEO & Accessibility
### 8.1 SEO
- XML sitemap (already implemented)
- Meta tags for all pages
- Structured data for:
  - Courses
  - Events
  - Job postings
- Canonical URLs
- OpenGraph tags for social sharing

### 8.2 Accessibility
- WCAG 2.1 AA compliance
- Skip to main content link
- ARIA labels for navigation
- High contrast colour scheme
- Accessible forms and buttons

## 9. Testing
### 9.1 Browser Compatibility
- Chrome (latest 3 versions)
- Firefox (latest 3 versions)
- Safari (latest 3 versions)
- Edge (latest 3 versions)

### 9.2 Device Testing
- Mobile (320px - 480px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

### 9.3 Performance
- Lighthouse score target: 90+
- Page load time: <2s
- Largest Contentful Paint: <1.5s
- Cumulative Layout Shift: <0.1

## 10. Maintenance
### 10.1 Content Updates
- Daily updates for time-sensitive content
- Weekly reviews for key pages
- Monthly audits for all content

### 10.2 Monitoring
- Uptime monitoring
- Error tracking
- Performance monitoring
- Security scanning

## 11. Key Components
### 11.1 AdultSkills Component
- Purpose: Provides information and resources for adult learners
- Features:
  - Career pathways for adults
  - Funding information
  - Training opportunities
  - Employment support
  - Integrated newsletter
  - Career quiz modal
- Visual elements:
  - Hero section with call-to-action
  - Card-based navigation
  - Image support
  - Responsive design

### 11.2 YoungPeople Component
- Purpose: Guides young people through career and education options
- Features:
  - Apprenticeship information
  - University pathways
  - Career starter resources
  - Interactive elements
  - Newsletter integration
  - Career quiz modal
- Visual elements:
  - Colour-coded sections
  - Icon-based navigation
  - Responsive grid layout
  - Mobile-first design

### 11.3 FundedTrainingPage Component
- Purpose: Helps users understand and access funded training opportunities
- Features:
  - Eligibility checker
  - Step-by-step guidance
  - Funding calculator
  - Contact options
  - Resource library
- Visual elements:
  - Progress indicators
  - Interactive forms
  - Result display
  - Responsive layout
  - Accessible design 