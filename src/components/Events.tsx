import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Digital Skills Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Sheffield Digital Hub",
      type: "Workshop",
      description: "Learn essential digital skills for the modern workplace.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Careers Fair 2024",
      date: "March 20, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Rotherham Conference Centre",
      type: "Fair",
      description: "Meet local businesses and discover job opportunities.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Manufacturing Skills Seminar",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Doncaster Manufacturing Hub",
      type: "Seminar",
      description: "Industry experts discuss the future of manufacturing.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b4a5a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Events & Workshops</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our events to learn, network, and grow your career
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={event.image}
                  alt={event.title}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {event.location}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#register"
                    className="block w-full bg-gray-100 text-center py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    Register Interest
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#all-events"
            className="inline-flex items-center text-blue-600 hover:text-blue-500"
          >
            View all upcoming events
            <svg className="ml-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;