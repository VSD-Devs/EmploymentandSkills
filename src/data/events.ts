import { Event, EventCategory, EventLocation, EventAudience } from '../types/event';

export const eventCategories: EventCategory[] = [
    'Conference',
    'Workshop',
    'Fair',
    'Networking',
    'Training',
    'Webinar'
];

export const eventLocations: EventLocation[] = [
    'Sheffield',
    'Doncaster',
    'Rotherham',
    'Barnsley',
    'Online'
];

export const eventAudiences: EventAudience[] = [
    'Businesses',
    'Parents',
    'Job Seekers',
    'Students',
    'Training Providers',
    'All'
];

export const sampleEvents: Event[] = [
    {
        id: '1',
        title: 'South Yorkshire Skills Summit',
        description: 'Join us for a comprehensive discussion about the future of skills development in South Yorkshire.',
        date: '2024-05-15',
        time: '09:00',
        location: 'Sheffield',
        category: 'Conference',
        registrationUrl: '#',
        isOnline: false,
        audiences: ['Businesses', 'Training Providers']
    },
    {
        id: '2',
        title: 'Digital Skills Workshop',
        description: 'Learn essential digital skills needed for the modern workplace.',
        date: '2024-05-20',
        time: '14:00',
        location: 'Online',
        category: 'Workshop',
        registrationUrl: '#',
        isOnline: true,
        audiences: ['Job Seekers', 'Students']
    },
    {
        id: '3',
        title: 'Careers Fair 2024',
        description: 'Connect with local employers and discover career opportunities in South Yorkshire.',
        date: '2024-06-01',
        time: '10:00',
        location: 'Doncaster',
        category: 'Fair',
        registrationUrl: '#',
        isOnline: false,
        audiences: ['Job Seekers', 'Students', 'Parents']
    },
    {
        id: '4',
        title: 'Business Networking Evening',
        description: 'Network with local business leaders and industry experts.',
        date: '2024-06-15',
        time: '18:00',
        location: 'Rotherham',
        category: 'Networking',
        registrationUrl: '#',
        isOnline: false,
        audiences: ['Businesses']
    },
    {
        id: '5',
        title: 'Future of Work Webinar',
        description: 'Explore how technology is shaping the future of work in South Yorkshire.',
        date: '2024-06-20',
        time: '11:00',
        location: 'Online',
        category: 'Webinar',
        registrationUrl: '#',
        isOnline: true,
        audiences: ['All']
    }
]; 