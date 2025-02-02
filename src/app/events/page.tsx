import { Metadata } from 'next';
import EventsPageContent from '@/components/EventsPageContent';

export const metadata: Metadata = {
    title: 'Events & Workshops | South Yorkshire Skills Accelerator',
    description: 'Discover and register for upcoming skills development events, workshops, and career opportunities across South Yorkshire. Filter by category, location, and audience type.',
    keywords: 'South Yorkshire events, skills workshops, career fairs, training events, professional development',
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <EventsPageContent />
        </main>
    );
} 