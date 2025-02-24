import { Metadata } from 'next';
import EventsPageContent from '@/components/EventsPageContent';

export const metadata: Metadata = {
    title: 'Events & Workshops | South Yorkshire Mayoral Combined Authority',
    description: 'Discover and register for upcoming skills development events, workshops, and career opportunities across South Yorkshire. Filter by category, location, and audience type.',
    keywords: 'South Yorkshire events, skills workshops, career fairs, training events, professional development, SYMCA events',
    openGraph: {
        title: 'Events & Workshops | South Yorkshire Mayoral Combined Authority',
        description: 'Discover and register for upcoming skills development events, workshops, and career opportunities across South Yorkshire.',
        images: ['/images/og-events.jpg'],
    },
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white">
            <EventsPageContent />
        </main>
    );
} 