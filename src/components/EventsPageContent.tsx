'use client';

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Calendar, MapPin, Clock, Filter, Grid, List, Plus, Tag, Users, Building2, Search, ArrowRight, Globe } from 'lucide-react'
import EventFilters from './EventFilters'
import { sampleEvents, eventAudiences } from '@/data/events';
import { format, parseISO } from 'date-fns';
import { EventCategory, EventLocation, EventAudience } from '@/types/event';
import Newsletter from './Newsletter';
import Breadcrumbs from '@/components/Breadcrumbs';

// Define color classes for consistent styling
const colorClasses = {
  indigo: {
    button: 'border-indigo-600 bg-indigo-50/90',
    icon: 'bg-indigo-100 text-indigo-700',
    link: 'bg-indigo-700 hover:bg-indigo-600',
    badge: 'bg-indigo-50 text-indigo-700',
    gradient: 'from-indigo-50 to-white',
    nav: 'hover:bg-indigo-50/80',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
    highlight: 'bg-indigo-600'
  },
  emerald: {
    button: 'border-emerald-600 bg-emerald-50/90',
    icon: 'bg-emerald-100 text-emerald-700',
    link: 'bg-emerald-700 hover:bg-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white',
    nav: 'hover:bg-emerald-50/80'
  }
};

export default function EventsPageContent() {
    const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
    const [selectedLocation, setSelectedLocation] = useState<EventLocation | 'all'>('all');
    const [selectedAudience, setSelectedAudience] = useState<EventAudience | 'all'>('all');
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEvents = sampleEvents
        .filter(event => {
            const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
            const matchesLocation = selectedLocation === 'all' || event.location === selectedLocation;
            const matchesAudience = selectedAudience === 'all' || 
                event.audiences.includes(selectedAudience as EventAudience) || 
                event.audiences.includes('All');
            const matchesSearch = searchTerm === '' || 
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesLocation && matchesAudience && matchesSearch;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Get upcoming events (next 30 days)
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);
    
    const upcomingEvents = filteredEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= thirtyDaysFromNow;
    });

    // Handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            {/* Breadcrumbs at the very top of the page */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Events', href: '/events' },
                    ]} />
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative bg-[#0e1b3d] py-32 flex items-center min-h-[600px]">
                <div className="absolute inset-0">
                    <Image
                        src="/images/events-hero.jpg"
                        alt="Networking and career events in South Yorkshire"
                        fill
                        className="object-cover object-center brightness-75"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b3d]/90 via-[#0e1b3d]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0e1b3d]/70 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#ffffff05_50%,transparent_100%)] opacity-70" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 text-indigo-300 mb-6">
                            <div className="p-2 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Events & Workshops<br className="hidden sm:block" /> in South Yorkshire
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
                            Connect with opportunities, develop your skills, and network with professionals at our events and workshops across the region.
                        </p>

                        {/* Enhanced Search & Filter */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <input
                                        type="text"
                                        placeholder="Search events..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white px-5 py-4 text-lg font-medium focus:border-indigo-400 focus:ring-indigo-400 placeholder-white/60 pr-12"
                                        aria-label="Search events"
                                    />
                                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white/70" />
                                </div>
                                <select
                                    value={selectedAudience}
                                    onChange={(e) => setSelectedAudience(e.target.value as EventAudience | 'all')}
                                    className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white px-5 py-4 text-lg font-medium focus:border-indigo-400 focus:ring-indigo-400 cursor-pointer hover:border-white/30 transition-colors appearance-none sm:w-auto"
                                    aria-label="Filter events by audience"
                                >
                                    <option value="all" className="text-gray-900">All audiences</option>
                                    {eventAudiences
                                        .filter(audience => audience !== 'All')
                                        .map((audience) => (
                                            <option key={audience} value={audience} className="text-gray-900">
                                                For {audience}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className="mt-8 flex flex-wrap justify-center gap-5">
                                <a
                                    href="#events-list"
                                    className="inline-flex items-center px-8 py-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    Browse All Events
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </a>
                                <Link
                                    href="/events/add"
                                    className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    Submit an Event
                                    <Plus className="ml-3 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Civic emblem */}
                <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                    <Building2 className="h-5 w-5 text-indigo-300" />
                    <span className="text-sm font-medium text-white">Official SYMCA Initiative</span>
                </div>
            </div>

            {/* Quick Stats Section */}
            <div className="bg-gradient-to-b from-indigo-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-indigo-700" />
                                </div>
                                <p className="text-lg text-indigo-700 font-medium">Total Events</p>
                            </div>
                            <p className="text-4xl font-bold text-gray-900">{filteredEvents.length}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <Globe className="h-6 w-6 text-emerald-700" />
                                </div>
                                <p className="text-lg text-emerald-700 font-medium">Online Events</p>
                            </div>
                            <p className="text-4xl font-bold text-gray-900">
                                {filteredEvents.filter(e => e.isOnline).length}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-indigo-700" />
                                </div>
                                <p className="text-lg text-indigo-700 font-medium">This Month</p>
                            </div>
                            <p className="text-4xl font-bold text-gray-900">
                                {filteredEvents.filter(e => new Date(e.date).getMonth() === new Date().getMonth()).length}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-emerald-700" />
                                </div>
                                <p className="text-lg text-emerald-700 font-medium">Locations</p>
                            </div>
                            <p className="text-4xl font-bold text-gray-900">
                                {new Set(filteredEvents.map(e => e.location)).size}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div id="events-list" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
                {/* Controls and Filters */}
                <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 mb-12 overflow-hidden">
                    {/* Top Controls */}
                    <div className="border-b border-indigo-100 p-6 bg-gradient-to-r from-indigo-50/50 to-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <Filter className="h-6 w-6 text-indigo-600" />
                                Filter Events
                            </h2>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                                    className="px-5 py-3 text-indigo-700 hover:text-indigo-800 border border-indigo-200 hover:border-indigo-300 rounded-xl flex items-center gap-2 bg-white transition-colors text-base font-medium"
                                    aria-label={`Switch to ${view === 'grid' ? 'list' : 'grid'} view`}
                                >
                                    {view === 'grid' ? (
                                        <>
                                            <List className="h-5 w-5" />
                                            <span>List View</span>
                                        </>
                                    ) : (
                                        <>
                                            <Grid className="h-5 w-5" />
                                            <span>Grid View</span>
                                        </>
                                    )}
                                </button>
                                <Link
                                    href="/events/add"
                                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center gap-2 font-medium transition-colors text-base"
                                >
                                    <Plus className="h-5 w-5" />
                                    <span>Add Event</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Filters Section */}
                    <div className="p-8">
                        <EventFilters
                            selectedCategory={selectedCategory}
                            selectedLocation={selectedLocation}
                            selectedAudience={selectedAudience}
                            onCategoryChange={setSelectedCategory}
                            onLocationChange={setSelectedLocation}
                            onAudienceChange={setSelectedAudience}
                        />
                    </div>
                </div>

                {/* Results Summary */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
                        <p className="text-lg text-indigo-700">
                            Showing <span className="font-medium">{filteredEvents.length}</span> events
                            {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}
                        </p>
                    </div>
                    {filteredEvents.length > 0 && (
                        <div className="bg-indigo-50 px-6 py-3 rounded-xl border border-indigo-100">
                            <p className="text-base text-indigo-700 font-medium">
                                Next event: <span className="font-bold">
                                    {format(parseISO(filteredEvents[0].date), 'do MMMM yyyy')}
                                </span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Events List */}
                {filteredEvents.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-2xl border border-indigo-100 shadow-md">
                        <div className="w-20 h-20 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                            <Calendar className="h-10 w-10 text-indigo-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No events found</h3>
                        <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
                            We couldn't find any events matching your criteria. Try adjusting your filters.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSelectedLocation('all');
                                setSelectedAudience('all');
                                setSearchTerm('');
                            }}
                            className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors text-lg font-medium inline-flex items-center gap-2"
                        >
                            Clear all filters
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                ) : (
                    <div className={view === 'grid' 
                        ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3" 
                        : "space-y-8"
                    }>
                        {filteredEvents.map((event) => (
                            <article 
                                key={event.id}
                                className={`bg-white border border-indigo-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                                    view === 'list' ? 'flex flex-col md:flex-row' : ''
                                }`}
                            >
                                {view === 'list' && (
                                    <div className="md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-indigo-100">
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            <span className="inline-flex items-center px-4 py-2 rounded-xl text-base font-medium bg-indigo-100 text-indigo-800">
                                                <Tag className="h-5 w-5 mr-2" />
                                                {event.category}
                                            </span>
                                            {event.isOnline && (
                                                <span className="inline-flex items-center px-4 py-2 rounded-xl text-base font-medium bg-emerald-100 text-emerald-800">
                                                    <Globe className="h-5 w-5 mr-2" />
                                                    Online
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                            {event.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 line-clamp-3">
                                            {event.description}
                                        </p>
                                    </div>
                                )}
                                
                                <div className={view === 'list' ? 'md:w-2/3 p-8' : 'p-8'}>
                                    {view === 'grid' && (
                                        <>
                                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                                <span className="inline-flex items-center px-4 py-2 rounded-xl text-base font-medium bg-indigo-100 text-indigo-800">
                                                    <Tag className="h-5 w-5 mr-2" />
                                                    {event.category}
                                                </span>
                                                {event.isOnline && (
                                                    <span className="inline-flex items-center px-4 py-2 rounded-xl text-base font-medium bg-emerald-100 text-emerald-800">
                                                        <Globe className="h-5 w-5 mr-2" />
                                                        Online
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                                {event.title}
                                            </h2>
                                            <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                                                {event.description}
                                            </p>
                                        </>
                                    )}
                                    
                                    <div className="space-y-4 text-gray-700 mb-6">
                                        <p className="flex items-center gap-3 text-lg">
                                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                                <Calendar className="h-5 w-5 text-indigo-600" />
                                            </div>
                                            <span>{format(new Date(event.date), 'do MMMM yyyy')}</span>
                                        </p>
                                        <p className="flex items-center gap-3 text-lg">
                                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                                <Clock className="h-5 w-5 text-indigo-600" />
                                            </div>
                                            <span>{event.time}</span>
                                        </p>
                                        <p className="flex items-center gap-3 text-lg">
                                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="h-5 w-5 text-indigo-600" />
                                            </div>
                                            <span>{event.location}</span>
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {event.audiences.map(audience => (
                                            <span 
                                                key={audience}
                                                className="inline-flex items-center px-4 py-2 text-base font-medium bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-100"
                                            >
                                                <Users className="h-5 w-5 mr-2" />
                                                For {audience}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <a
                                        href={event.registrationUrl}
                                        className="block w-full text-center px-6 py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors text-lg"
                                        aria-label={`Register for ${event.title}`}
                                    >
                                        Register Now
                                        <ChevronRight className="ml-2 h-5 w-5 inline-block" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Back to top button */}
                {filteredEvents.length > 3 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl hover:bg-indigo-100 transition-colors text-base font-medium border border-indigo-100"
                        >
                            Back to top
                            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
} 