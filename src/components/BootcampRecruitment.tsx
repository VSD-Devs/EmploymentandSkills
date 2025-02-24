"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BootcampRecruitment() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Recruitment Support via Skills Bootcamps</h1>
      <p className="text-lg mb-6">Connect with training providers, explore bootcamps, and influence course design.</p>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search training providers or courses"
            className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button>Filter Options</Button>
      </div>

      {/* Custom Tabs */}
      <div className="w-full mb-6">
        <div className="flex gap-4 border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "courses" ? "border-b-2 border-primary font-semibold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("courses")}
          >
            Courses & Providers
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "engagement" ? "border-b-2 border-primary font-semibold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("engagement")}
          >
            Employer Engagement
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "meet-learners" ? "border-b-2 border-primary font-semibold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("meet-learners")}
          >
            Meet the Learners
          </button>
        </div>

        {/* Courses & Providers */}
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="p-4">
                <h2 className="text-xl font-semibold">Provider {index + 1}</h2>
                <p className="text-sm text-gray-600">Key skills: Software Dev, Cybersecurity</p>
                <Button className="mt-4 w-full">View Course Details</Button>
              </Card>
            ))}
          </div>
        )}

        {/* Employer Engagement */}
        {activeTab === "engagement" && (
          <div className="bg-gray-100 p-6 rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">Shape the Future of Bootcamps</h2>
            <p className="mb-4">Provide feedback on bootcamp design, help refine training content, and influence policy.</p>
            <Button>Get Involved</Button>
          </div>
        )}

        {/* Meet the Learners */}
        {activeTab === "meet-learners" && (
          <div className="bg-gray-100 p-6 rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">Connect with Bootcamp Graduates</h2>
            <p className="mb-4">Attend employer events and meet skilled learners ready for job opportunities.</p>
            <Button>See Upcoming Events</Button>
          </div>
        )}
      </div>
    </div>
  );
} 