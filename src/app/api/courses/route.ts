import { NextResponse } from 'next/server';
import { parse } from 'csv-parse/sync';
import { promises as fs } from 'fs';
import path from 'path';
import { Course, matchCourseToPathways } from '@/lib/utils';

function getCourseCategory(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('digital') || titleLower.includes('it') || titleLower.includes('cyber')) {
    return 'Digital & IT';
  }
  if (titleLower.includes('health') || titleLower.includes('care')) {
    return 'Health & Social Care';
  }
  if (titleLower.includes('business') || titleLower.includes('management')) {
    return 'Business & Management';
  }
  if (titleLower.includes('construction') || titleLower.includes('engineering')) {
    return 'Construction & Engineering';
  }
  if (titleLower.includes('english') || titleLower.includes('maths')) {
    return 'Essential Skills';
  }
  if (titleLower.includes('employability') || titleLower.includes('career')) {
    return 'Employability';
  }
  
  return 'Other Courses';
}

function getCourseLevel(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('level 1')) return 'Level 1';
  if (titleLower.includes('level 2')) return 'Level 2';
  if (titleLower.includes('level 3')) return 'Level 3';
  if (titleLower.includes('entry')) return 'Entry Level';
  if (titleLower.includes('diploma')) return 'Diploma';
  if (titleLower.includes('certificate')) return 'Certificate';
  if (titleLower.includes('award')) return 'Award';
  
  return 'Other';
}

export async function GET() {
  try {
    const csvFilePath = path.join(process.cwd(), 'public/images/ASF provision.csv');
    const csvData = await fs.readFile(csvFilePath, 'utf-8');
    const rows = parse(csvData, {
      columns: true,
      skip_empty_lines: true
    });

    const courses: Course[] = rows.map((row: {
      'Learning aim title': string;
      'Provider name': string;
      'Funding model': string;
      'Learning aim reference': string;
    }) => {
      const title = row['Learning aim title']?.trim() || '';
      const provider = row['Provider name']?.trim() || '';
      const fundingModel = row['Funding model']?.trim() || '';
      const reference = row['Learning aim reference']?.trim() || '';

      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      const category = getCourseCategory(title);
      
      // Create the base course object
      const course: Course = {
        id: reference || `course-${Math.random().toString(36).substr(2, 9)}`,
        title,
        provider,
        fundingModel,
        slug,
        type: category,
        category,
        level: getCourseLevel(title),
        description: `${title} offered by ${provider}`,
        location: 'South Yorkshire',
        duration: 'Flexible',
        startDate: 'Flexible start dates',
        deliveryMethod: 'Flexible',
        fundingInfo: `This course is ${fundingModel}`,
        whatYoullLearn: ['Course specific skills and knowledge'],
        careerOpportunities: ['Various opportunities in ' + category],
        qualifications: [title],
        sectors: [category],
        fundingType: 'Fully Funded'
      };

      // Match course to pathways
      course.pathways = matchCourseToPathways(course);

      return course;
    });

    return NextResponse.json(courses.filter(course => course.title && course.provider));
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
} 