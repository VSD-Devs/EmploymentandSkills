export type EventCategory = 
    | 'Conference'
    | 'Workshop'
    | 'Fair'
    | 'Networking'
    | 'Training'
    | 'Webinar';

export type EventLocation = 
    | 'Sheffield'
    | 'Doncaster'
    | 'Rotherham'
    | 'Barnsley'
    | 'Online';

export type EventAudience = 
    | 'Businesses'
    | 'Parents'
    | 'Job Seekers'
    | 'Students'
    | 'Training Providers'
    | 'All';

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: EventLocation;
    imageUrl?: string;
    category: EventCategory;
    registrationUrl?: string;
    isOnline: boolean;
    audiences: EventAudience[];
} 