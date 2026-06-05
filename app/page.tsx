import React from "react";
import Link from "next/link";
import { ArrowRight, Database, LineChart, FileSpreadsheet, ChevronRight, Check } from "lucide-react";
import { profileData } from "./lib/profileData";
import prisma from "./lib/prisma";
import Footer from "./components/footer";

export const revalidate = 60; // Revalidate every minute

async function getFeaturedProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      include: {
        categories: true
      }
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects in home page:", error);
    // Return empty list so it falls back gracefully
    return [];
  }
}

export default async function Home() {
  const dbProjects = await getFeaturedProjects();
  
  // Fallback if DB didn't connect or seed is not run yet
  const projects = dbProjects.length > 0 ? dbProjects : [
    {
      id: "demo-1",
      title: "E-commerce Cohort Retention Engine",
      slug: "ecommerce-cohort-retention-engine",
      description: "An automated Python and SQL analytics system that extracts raw transaction logs and calculates rolling customer retention metrics.",
      techStack: ["Python", "PostgreSQL", "Pandas", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      categories: [{ name: "Analytics Pipelines" }]
    },
    {
      id: "demo-2",
      title: "SaaS Interactive Finance Dashboard",
      slug: "saas-interactive-finance-dashboard",
      description: "A comprehensive Power BI executive reporting suite showing real-time MRR, LTV, churn rate, and operational overhead metrics.",
      techStack: ["Power BI", "SQL Server", "DAX", "Power Query"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      categories: [{ name: "Business Intelligence" }]
    }
  ];

  const highlights = [
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: "Pipeline Engineering",
      description: "Automated ingestion routines extracting transactional data, standardizing coordinates, and resolving relational schemas."
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-500" />,
      title: "BI Dashboarding",
      description: "Designing semantic models and advanced DAX formulas in Power BI for real-time finance and logistics metrics visibility."
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-500" />,
      title: "Statistical Insight",
      description: "Conducting cohort analysis, RFM segmentation, and logistics bottleneck tracking to reduce manual operational overhead."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-36 pb-20 relative z-10 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/10">
            {profileData.headline}
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-950 dark:text-white mt-6 max-w-4xl leading-tight">
            Decisions are hidden in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500">unstructured logic</span>.
          </h1>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-6 max-w-2xl leading-relaxed">
            I am a Data Analyst specializing in building SQL architectures, automating Python ELT scripts, and designing executive Power BI dashboards that guide business strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/15 hover:shadow-purple-500/25"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950 font-bold text-xs uppercase tracking-wider text-zinc-800 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-white transition-all shadow-sm"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Stats Metrics Section */}
        <section className="border-y border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/10 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            {[
              { label: "Completed Projects", val: profileData.stats.projectsCount },
              { label: "Data Rows Analyzed", val: profileData.stats.rowsAnalyzed },
              { label: "BI Dashboards Built", val: profileData.stats.dashboardsCount },
              { label: "Analysis Accuracy", val: profileData.stats.modelAccuracy }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 p-4">
                <span className="text-4xl font-black tracking-tight text-zinc-950 dark:text-white">
                  {stat.val}
                </span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
              Areas of Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 text-zinc-950 dark:text-white">
              Analytical capability toolkit.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-4">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-xl w-max shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Showcase */}
        <section className="py-24 border-t border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Case Studies
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 text-zinc-950 dark:text-white">
                  Featured Data Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all"
              >
                View All Case Studies
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project: any) => (
                <Link
                  key={project.id}
                  href={`/projects#${project.slug}`}
                  className="group flex flex-col gap-4 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-4 shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200 dark:border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded">
                      {project.categories?.[0]?.name || "Case Study"}
                    </span>
                    <h3 className="text-lg font-bold mt-2 text-zinc-950 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.techStack.map((tech: string, idx: number) => (
                        <span key={idx} className="text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}