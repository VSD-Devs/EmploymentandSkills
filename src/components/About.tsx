import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              The South Yorkshire Employment & Skills Hub is a partnership between the South Yorkshire 
              Mayoral Combined Authority and local stakeholders, dedicated to driving economic growth 
              and workforce development in our region.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    🎯
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                  <p className="mt-2 text-gray-600">
                    To create opportunities for growth, innovation, and prosperity across South Yorkshire 
                    by connecting people with opportunities and supporting businesses to thrive.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    👥
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Partners</h3>
                  <p className="mt-2 text-gray-600">
                    We work closely with local authorities, businesses, education providers, and 
                    community organizations to deliver integrated employment and skills solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Team meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;