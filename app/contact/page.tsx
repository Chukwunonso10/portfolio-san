"use client";

import React, { useState } from "react";
import { Mail, MapPin, Building, Send, Bell } from "lucide-react";
import { profileData } from "../lib/profileData";
import { submitContactMessage, subscribeEmail } from "../actions/contact";
import Footer from "../components/footer";

export default function Contact() {
  const [formState, setFormState] = useState<{ loading: boolean; success: string | null; error: string | null }>({
    loading: false,
    success: null,
    error: null,
  });

  
  const [subState, setSubState] = useState<{ loading: boolean; success: string | null; error: string | null }>({
    loading: false,
    success: null,
    error: null,
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ loading: true, success: null, error: null });
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string || null;
    const message = formData.get("message") as string;

    const result = await submitContactMessage({ name, email, company, message });
    
    if (result.success) {
      setFormState({ loading: false, success: result.message || "Message sent!", error: null });
      e.currentTarget.reset();
    } else {
      setFormState({ loading: false, success: null, error: result.error || "Something went wrong." });
    }
  };

  const handleSubscribeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubState({ loading: true, success: null, error: null });
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const result = await subscribeEmail({ email });
    
    if (result.success) {
      setSubState({ loading: false, success: result.message || "Subscribed!", error: null });
      e.currentTarget.reset();
    } else {
      setSubState({ loading: false, success: null, error: result.error || "Something went wrong." });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 relative">
      <main className="flex-grow pt-28 pb-16">
        {/* Glow ambient background lights */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 text-zinc-950 dark:text-white">
              Let's build something analytical.
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              Have a database that needs query optimization, or an executive dashboard that needs engineering? Drop me a line!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-6">
                <h3 className="font-bold text-lg text-zinc-950 dark:text-white">Contact Information</h3>
                
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Address</p>
                    <a href={`mailto:${profileData.email}`} className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 hover:text-purple-500 transition-colors">
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-300">Lagos, Nigeria (Available for Remote Worldwide)</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Sub Panel */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-bold text-sm text-zinc-950 dark:text-white">Subscribe to Data Insights</h3>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Join my newsletter where I occasionally share insights about database scaling, DAX time intelligence functions, and Python ETL scripts.
                </p>
                <form onSubmit={handleSubscribeSubmit} className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@domain.com"
                    className="flex-grow px-3 py-2 text-xs rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    disabled={subState.loading}
                    className="px-4 py-2 text-xs font-bold uppercase bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all disabled:opacity-50"
                  >
                    {subState.loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
                {subState.success && <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{subState.success}</p>}
                {subState.error && <p className="text-xs font-bold text-red-600 dark:text-red-400">{subState.error}</p>}
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-md flex flex-col gap-6">
              <h3 className="font-bold text-lg text-zinc-950 dark:text-white">Send a Message</h3>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="px-4 py-2.5 text-xs rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Your Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane.doe@company.com"
                      className="px-4 py-2.5 text-xs rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Company Name (Optional)</label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Stark Industries"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Message <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your analytics objectives or database pipeline requirements..."
                    className="px-4 py-2.5 text-xs rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.loading}
                  className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-700 transition-all shadow-md shadow-purple-500/10 hover:shadow-lg disabled:opacity-50"
                >
                  {formState.loading ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {formState.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  {formState.success}
                </div>
              )}
              {formState.error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold">
                  {formState.error}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
