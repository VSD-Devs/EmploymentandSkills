'use client';

import { EventCategory, EventLocation, EventAudience } from '@/types/event';
import { eventCategories, eventLocations, eventAudiences } from '@/data/events';

interface EventFiltersProps {
    selectedCategory: EventCategory | 'all';
    selectedLocation: EventLocation | 'all';
    selectedAudience: EventAudience | 'all';
    onCategoryChange: (category: EventCategory | 'all') => void;
    onLocationChange: (location: EventLocation | 'all') => void;
    onAudienceChange: (audience: EventAudience | 'all') => void;
}

export default function EventFilters({
    selectedCategory,
    selectedLocation,
    selectedAudience,
    onCategoryChange,
    onLocationChange,
    onAudienceChange
}: EventFiltersProps) {
    const hasActiveFilters = selectedCategory !== 'all' || selectedLocation !== 'all' || selectedAudience !== 'all';

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-slate-900">Filter Events</h2>
                {hasActiveFilters && (
                    <button
                        onClick={() => {
                            onCategoryChange('all');
                            onLocationChange('all');
                            onAudienceChange('all');
                        }}
                        className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Reset all filters
                    </button>
                )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="category" className="block text-sm font-medium text-slate-700">
                        Event Type
                    </label>
                    <div className="relative">
                        <select
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => onCategoryChange(e.target.value as EventCategory | 'all')}
                            className="w-full rounded-lg border-slate-200 bg-white pl-3 pr-10 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer hover:border-slate-300"
                        >
                            <option value="all">All Types</option>
                            {eventCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700">
                        Location
                    </label>
                    <div className="relative">
                        <select
                            id="location"
                            value={selectedLocation}
                            onChange={(e) => onLocationChange(e.target.value as EventLocation | 'all')}
                            className="w-full rounded-lg border-slate-200 bg-white pl-3 pr-10 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer hover:border-slate-300"
                        >
                            <option value="all">All Locations</option>
                            {eventLocations.map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                    {selectedAudience !== 'all' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">
                            {selectedAudience}
                            <button
                                onClick={() => onAudienceChange('all')}
                                className="ml-1 hover:text-indigo-900"
                                aria-label={`Remove ${selectedAudience} filter`}
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </span>
                    )}
                    {selectedCategory !== 'all' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">
                            {selectedCategory}
                            <button
                                onClick={() => onCategoryChange('all')}
                                className="ml-1 hover:text-indigo-900"
                                aria-label={`Remove ${selectedCategory} filter`}
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </span>
                    )}
                    {selectedLocation !== 'all' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">
                            {selectedLocation}
                            <button
                                onClick={() => onLocationChange('all')}
                                className="ml-1 hover:text-indigo-900"
                                aria-label={`Remove ${selectedLocation} filter`}
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </span>
                    )}
                </div>
            )}
        </div>
    );
} 