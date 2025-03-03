import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Yorkshire Pathways',
  description: 'Learn about the South Yorkshire Mayoral Combined Authority and our mission to support businesses, stakeholders and residents of South Yorkshire.'
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'About SYMCA', href: '/about' }
            ]}
            darkMode={true}
          />
        </div>
      </div>
    
      <PageHeader 
        title="About Us" 
        description="The South Yorkshire Mayoral Combined Authority, led by Oliver Coppard, working to create opportunities and support for the people of South Yorkshire."
      />
      
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Purpose</h2>
              <p className="text-lg text-zinc-700 mb-6">
                Yorkshire Pathways has been developed as an outcome of the South Yorkshire Skills Strategy and Oliver Coppard's manifesto. We aim to be a one-stop shop for businesses, stakeholders, and residents of South Yorkshire, providing access to resources, opportunities, and support.
              </p>
              <p className="text-lg text-zinc-700">
                By bringing together information about apprenticeships, skills training, career development, and business support, we're making it easier for everyone in South Yorkshire to find the resources they need to grow and succeed.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/region.jpg"
                alt="South Yorkshire landscape"
                width={640}
                height={427}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Meet Our Leadership</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <Image
                  src="/images/optimized-oliver-coppard.jpg"
                  alt="Oliver Coppard, South Yorkshire Mayor"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Oliver Coppard</h3>
                <p className="text-zinc-500 mb-4">South Yorkshire Mayor</p>
                <p className="text-zinc-700">
                  Oliver Coppard was elected as South Yorkshire Mayor in May 2022. He is committed to building a stronger, greener, and fairer South Yorkshire where everyone has the opportunity to thrive.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">South Yorkshire Mayoral Combined Authority</h3>
                <p className="text-zinc-700 mb-4">
                  The South Yorkshire Mayoral Combined Authority (SYMCA) brings together the local authorities of Barnsley, Doncaster, Rotherham, and Sheffield to work with the Mayor on issues that affect the whole region.
                </p>
                <p className="text-zinc-700 mb-4">
                  Together, we're working to create jobs, improve skills, and make South Yorkshire a better place to live, work, and invest.
                </p>
                <ul className="text-zinc-700 space-y-2 pl-5 list-disc">
                  <li>Supporting local businesses to grow and innovate</li>
                  <li>Investing in infrastructure and transportation</li>
                  <li>Developing skills and training opportunities</li>
                  <li>Building sustainable communities</li>
                  <li>Tackling climate change and protecting our environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">Our Vision for South Yorkshire</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Skills Development</h3>
              <p className="text-zinc-700">
                We're investing in education and training to equip South Yorkshire residents with the skills they need for the jobs of today and tomorrow.
              </p>
            </div>
            
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Business Growth</h3>
              <p className="text-zinc-700">
                By supporting local businesses and attracting new investment, we're creating jobs and opportunities across the region.
              </p>
            </div>
            
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Community Support</h3>
              <p className="text-zinc-700">
                We're working to ensure that everyone in South Yorkshire has access to the resources and opportunities they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a business looking for support, a young person exploring career options, or a resident seeking new skills, Yorkshire Pathways is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-zinc-100 transition-colors">
              Contact Us
            </a>
            <a href="/events" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-emerald-500 transition-colors">
              Find Events
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 