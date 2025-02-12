'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Calendar } from 'lucide-react'
import EventFilters from './EventFilters'
import { useState } from 'react';
import { sampleEvents, eventAudiences } from '@/data/events';
import { format, parseISO } from 'date-fns';
import { EventCategory, EventLocation, EventAudience } from '@/types/event';
import Newsletter from './Newsletter';

export default function EventsPageContent() {
    const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
    const [selectedLocation, setSelectedLocation] = useState<EventLocation | 'all'>('all');
    const [selectedAudience, setSelectedAudience] = useState<EventAudience | 'all'>('all');
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const filteredEvents = sampleEvents
        .filter(event => {
            const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
            const matchesLocation = selectedLocation === 'all' || event.location === selectedLocation;
            const matchesAudience = selectedAudience === 'all' || 
                event.audiences.includes(selectedAudience as EventAudience) || 
                event.audiences.includes('All');
            return matchesCategory && matchesLocation && matchesAudience;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/events-hero.jpg"
                        alt="Networking and career events in South Yorkshire"
                        fill
                        className="object-cover object-center object-[center_25%] brightness-75"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-indigo-300 mb-4">
                            <div className="p-1.5 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20">
                                <Calendar className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium tracking-wide uppercase">Events & Workshops</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Connect with Opportunities<br className="hidden sm:block" /> in South Yorkshire
                        </h1>
                        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                            Join our events and workshops to develop your skills, network with professionals, and explore career opportunities across the region.
                        </p>

                        {/* Enhanced Audience Selection */}
                        <div className="max-w-sm mx-auto">
                            <div className="relative">
                                <select
                                    value={selectedAudience}
                                    onChange={(e) => setSelectedAudience(e.target.value as EventAudience | 'all')}
                                    className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white px-5 py-3 text-base font-medium focus:border-indigo-400 focus:ring-indigo-400 cursor-pointer hover:border-white/30 transition-colors appearance-none"
                                >
                                    <option value="all" className="text-gray-900">Find events for...</option>
                                    {eventAudiences
                                        .filter(audience => audience !== 'All')
                                        .map((audience) => (
                                            <option key={audience} value={audience} className="text-gray-900">
                                                {audience === 'Businesses' ? 'Business' :
                                                 audience === 'Parents' ? 'Parent' :
                                                 audience === 'Job Seekers' ? 'Job Seeker' :
                                                 audience === 'Students' ? 'Student' :
                                                 audience === 'Training Providers' ? 'Training Provider' :
                                                 audience}
                                            </option>
                                        ))}
                                </select>
                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
                            </div>
                            <p className="mt-2 text-gray-300 text-sm">
                                Select your role to see relevant events
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <p className="text-sm text-indigo-600 font-medium mb-1">Total Events</p>
                        <p className="text-3xl font-bold text-slate-900">{filteredEvents.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <p className="text-sm text-indigo-600 font-medium mb-1">Online Events</p>
                        <p className="text-3xl font-bold text-slate-900">
                            {filteredEvents.filter(e => e.isOnline).length}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <p className="text-sm text-indigo-600 font-medium mb-1">This Month</p>
                        <p className="text-3xl font-bold text-slate-900">
                            {filteredEvents.filter(e => new Date(e.date).getMonth() === new Date().getMonth()).length}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <p className="text-sm text-indigo-600 font-medium mb-1">Locations</p>
                        <p className="text-3xl font-bold text-slate-900">
                            {new Set(filteredEvents.map(e => e.location)).size}
                        </p>
                    </div>
                </div>

                {/* Controls and Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-indigo-100 mb-8">
                    {/* Top Controls */}
                    <div className="border-b border-indigo-100 p-4">
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                                className="px-4 py-2 text-indigo-700 hover:text-indigo-800 border border-indigo-200 hover:border-indigo-300 rounded-lg flex items-center gap-2 bg-white transition-colors"
                                aria-label={`Switch to ${view === 'grid' ? 'list' : 'grid'} view`}
                            >
                                {view === 'grid' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                )}
                                <span className="hidden sm:inline">{view === 'grid' ? 'List View' : 'Grid View'}</span>
                            </button>
                            <a
                                href="/events/add"
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center gap-2 font-medium transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                <span className="hidden sm:inline">Add Event</span>
                            </a>
                        </div>
                    </div>

                    {/* Filters Section */}
                    <div className="p-6">
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
                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-indigo-700">
                        Showing <span className="font-medium">{filteredEvents.length}</span> events
                    </p>
                    {filteredEvents.length > 0 && (
                        <p className="text-sm text-indigo-700">
                            Next event: <span className="font-medium">
                                {format(parseISO(filteredEvents[0].date), 'do MMMM yyyy')}
                            </span>
                        </p>
                    )}
                </div>

                {/* Events List */}
                {filteredEvents.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl border border-indigo-100">
                        <p className="text-lg text-slate-600">No events found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSelectedLocation('all');
                                setSelectedAudience('all');
                            }}
                            className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className={view === 'grid' 
                        ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" 
                        : "space-y-6"
                    }>
                        {filteredEvents.map((event) => (
                            <article 
                                key={event.id}
                                className={`bg-white border border-indigo-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                                    view === 'list' ? 'flex flex-col md:flex-row' : ''
                                }`}
                            >
                                {view === 'list' && (
                                    <div className="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-indigo-100">
                                        <div className="flex flex-wrap items-center gap-2 mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                                {event.category}
                                            </span>
                                            {event.isOnline && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                                                    Online Event
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-xl font-semibold text-slate-900 mb-2">
                                            {event.title}
                                        </h2>
                                        <p className="text-slate-600 line-clamp-2">
                                            {event.description}
                                        </p>
                                    </div>
                                )}
                                
                                <div className={view === 'list' ? 'md:w-2/3 p-6' : 'p-6'}>
                                    {view === 'grid' && (
                                        <>
                                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                                    {event.category}
                                                </span>
                                                {event.isOnline && (
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                                                        Online Event
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-xl font-semibold text-slate-900 mb-2">
                                                {event.title}
                                            </h2>
                                            <p className="text-slate-600 mb-4 line-clamp-2">
                                                {event.description}
                                            </p>
                                        </>
                                    )}
                                    
                                    <div className="space-y-2 text-slate-700 mb-4">
                                        <p className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span>{format(new Date(event.date), 'do MMMM yyyy')}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span>{event.time}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {event.audiences.map(audience => (
                                            <span 
                                                key={audience}
                                                className="px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100"
                                            >
                                                For {audience}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <a
                                        href={event.registrationUrl}
                                        className="block w-full text-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                                        aria-label={`Register for ${event.title}`}
                                    >
                                        Register Now
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
} 