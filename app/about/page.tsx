"use client";

import React, { useState } from "react";
import { Award, BookOpen, FileText, Lightbulb, ChevronRight, CheckCircle2 } from "lucide-react";
import { profileData } from "../lib/profileData";
import Footer from "../components/footer";

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(profileData.timeline[0].id);

  const activeStage = profileData.timeline.find((t) => t.id === activeTimeline) || profileData.timeline[0];

  const principles = [
    {
      icon: <Award className="w-5 h-5 text-purple-500" />,
      title: "Clarity Over Complexity",
      description: "Data is only valuable if it leads to decisions. I prioritize building clean charts and transparent tables that instantly answer key strategic questions."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      title: "Continuous Learning",
      description: "Relational queries are only the beginning. I continuously hone Python automation scripts, ETL optimization, and predictive modeling methods."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-emerald-500" />,
      title: "Business-First Insights",
      description: "I don't just calculate averages; I examine how pricing variances, operational delays, and cohort attrition impact EBITDA and cash reserves."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 transition-all duration-300 relative">
      <main className="flex-grow pt-28 pb-16">
        {/* Glow ambient background lights */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

        {/* Bio Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Avatar & Quick Info */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:sticky lg:top-28">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 shadow-xl bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">{profileData.name}</h2>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-1 font-bold uppercase tracking-wider">
                  {profileData.title.split("|")[0].trim()}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">{profileData.email}</p>
              </div>
              
              <a
                href={profileData.resumeUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950 font-bold text-xs uppercase tracking-wider text-zinc-800 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                <FileText className="w-4 h-4" />
                View Complete Resume
              </a>
            </div>

            {/* Right Column Professional Summary */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-max">
                Professional Bio
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950 dark:text-white">
                Transforming numbers into structural logic.
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                My career trajectory began in Civil Engineering, where I spent days managing material coordinates, project budgets, and subcontractor schedules. It was during this time that I discovered my passion lay not in setting bricks, but in tracking the performance indices of those projects.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I taught myself advanced Excel, leading to complex forecasting structures. Realizing that spreadsheets could not keep pace with large datasets, I mastered SQL and database querying, followed by Python scripting to automate entire ELT schemas. Today, I build production-ready analytics systems connecting raw application transactional records directly to visual BI dashboards.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                {principles.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-sm shadow-sm flex flex-col gap-2">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-xl w-max">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                Interactive Timeline
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 text-zinc-955 dark:text-white">
                My Journey to Data Analytics
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                Click on the milestones below to explore how I transitioned from construction management to database architectures and statistical modeling.
              </p>
            </div>

            {/* Timeline Tabs */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left timeline nodes */}
              <div className="md:col-span-5 flex flex-col gap-3">
                {profileData.timeline.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTimeline(item.id)}
                    className={`p-4 rounded-xl text-left transition-all border flex items-center justify-between group ${
                      activeTimeline === item.id
                        ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/20"
                        : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/5 hover:border-purple-500 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm">{item.stage}</h4>
                      <p className={`text-[10px] ${activeTimeline === item.id ? "text-purple-200" : "text-zinc-400"}`}>{item.year}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${activeTimeline === item.id ? "text-white" : "text-zinc-400"}`} />
                  </button>
                ))}
              </div>

              {/* Right content details card */}
              <div className="md:col-span-7 p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 shadow-md flex flex-col gap-4 min-h-[300px]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                    {activeStage.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-zinc-950 dark:text-white">{activeStage.stage}</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">{activeStage.description}</p>
                </div>
                
                <hr className="border-zinc-200 dark:border-white/5" />

                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Key Achievements / Milestones</h4>
                  {activeStage.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Proficiencies Section */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column skills visualization */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-max">
                  Skills Metrics
                </span>
                <h2 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
                  Technical Expertise Breakdown
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                  {profileData.skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-zinc-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column breakdown details */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-max">
                  Capabilities Matrix
                </span>
                <h2 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
                  Data Systems Competency
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  I operate at the intersection of business requirements and database logic. Here is the core operational capability I leverage daily:
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Languages", desc: "SQL (Window functions, CTEs, tuning), Python (Pandas, Numpy, Scikit-learn)" },
                    { title: "Databases", desc: "PostgreSQL, MySQL, Microsoft SQL Server schema architecture" },
                    { title: "BI & Visualization", desc: "Power BI (advanced DAX, PQ, Star schemas), Excel models, Tableau" },
                    { title: "Methodologies", desc: "Cohort analysis, RFM segmentation, forecasting, linear regressions" }
                  ].map((skill, index) => (
                    <div key={index} className="flex gap-3 border-b border-zinc-200 dark:border-white/5 pb-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 mt-2 animate-pulse" />
                      <div>
                        <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{skill.title}</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{skill.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
