"use client";

import Link from "next/link";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { subscribeEmail } from "@/app/actions/contact";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await subscribeEmail({ email });
      if (res.success) {
        setStatus("success");
        setMessage(res.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(res.error || "Something went wrong. Please check your email and try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <footer className="bg-zinc-100 dark:bg-[#070708] border-t border-zinc-200 dark:border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left branding */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-black">
              SN
            </span>
            Sandra Nzekwe
          </Link>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
            Data Analyst specializing in SQL, Python, and Power BI. Converting complex operational and user interaction datasets into premium executive intelligence.
          </p>
          <span className="text-[10px] text-zinc-400 dark:text-zinc-600 font-medium">
            © {new Date().getFullYear()} Sandra Nzekwe. All rights reserved.
          </span>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-white">Navigation</h4>
          <div className="flex flex-col gap-2 text-xs">
            <Link href="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-all">About</Link>
            <Link href="/projects" className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-all">Projects</Link>
            <Link href="/dashboards" className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-all">Dashboards Showcase</Link>
            <Link href="/contact" className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-all">Contact</Link>
          </div>
        </div>

        {/* Newsletter Subscription column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-white">Stay Updated</h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
            Subscribe to receive advanced SQL workflows, data models, and visualization tricks.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
            <div className="flex items-center gap-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 rounded-xl px-3 py-1.5 shadow-sm">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-0 text-xs text-zinc-800 dark:text-white focus:outline-none focus:ring-0 placeholder:text-zinc-500 py-1"
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="p-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white disabled:bg-zinc-800 transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                {status === "loading" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </div>
            
            {/* Status alerts */}
            {status === "success" && (
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3 h-3" />
                {message}
              </span>
            )}
            {status === "error" && (
              <span className="text-[10px] text-rose-600 dark:text-rose-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3 h-3" />
                {message}
              </span>
            )}
          </form>
        </div>

      </div>
    </footer>
  );
}
