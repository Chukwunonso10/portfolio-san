"use client";

import React, { useState } from "react";
import { Mail, Trash2, Users, MessageSquare, Calendar, Trash } from "lucide-react";


interface Message {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  createdAt: Date;
}

interface Subscriber {
  id: string;
  email: string;
  active: boolean;
  createdAt: Date;
}

interface AdminClientProps {
  initialMessages: Message[];
  initialSubscribers: Subscriber[];
}

export default function AdminClient({ initialMessages, initialSubscribers }: AdminClientProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [subscribers, setSubscribers] = useState<Subscriber[]>(initialSubscribers);
  const [activeTab, setActiveTab] = useState<"messages" | "subscribers">("messages");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // const handleDeleteMessage = async (id: string) => {
  //   if (!confirm("Are you sure you want to delete this message?")) return;
    
  //   setDeletingId(id);
  //   const result = ""
  //   setDeletingId(null);
    
  //   if (result.success) {
  //     setMessages(messages.filter((m) => m.id !== id));
  //   } else {
  //     alert("Failed to delete message: " + (result.error || "Unknown error"));
  //   }
  // };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 relative">
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                Admin Console
              </span>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mt-3 text-zinc-950 dark:text-white">
                Portfolio Dashboard
              </h1>
            </div>
            
            {/* Tab Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("messages")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border flex items-center gap-2 ${
                  activeTab === "messages"
                    ? "bg-purple-600 border-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Messages ({messages.length})
              </button>
              <button
                onClick={() => setActiveTab("subscribers")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border flex items-center gap-2 ${
                  activeTab === "subscribers"
                    ? "bg-purple-600 border-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400"
                }`}
              >
                <Users className="w-4 h-4" />
                Subscribers ({subscribers.length})
              </button>
            </div>
          </div>

          {/* KPI Summary Banner */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Total Enquiries</p>
                <p className="text-2xl font-black text-zinc-950 dark:text-white">{messages.length}</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Active Newsletter Subscribers</p>
                <p className="text-2xl font-black text-zinc-950 dark:text-white">
                  {subscribers.filter((s) => s.active).length}
                </p>
              </div>
            </div>
          </div>

          {/* Active Tab View */}
          {activeTab === "messages" ? (
            <div className="flex flex-col gap-6">
              {messages.length === 0 ? (
                <div className="p-12 text-center rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/20 text-zinc-400 text-sm">
                  No messages found in database.
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex flex-col gap-2 flex-grow">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-sm text-zinc-950 dark:text-white">{msg.name}</span>
                          <span className="text-xs text-zinc-400">({msg.email})</span>
                          {msg.company && (
                            <span className="text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded">
                              {msg.company}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl whitespace-pre-wrap">
                          {msg.message}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-semibold mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(msg.createdAt).toLocaleDateString(undefined, {
                            dateStyle: "medium",
                          })}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 self-start sm:self-center">
                        <button
                          
                          disabled={deletingId === msg.id}
                          className="p-2 text-zinc-400 hover:text-red-500 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/20 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    <th className="px-6 py-4">Subscriber Email</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Subscribed Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-white/5 text-xs">
                  {subscribers.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-8 text-center text-zinc-400">
                        No subscribers registered.
                      </td>
                    </tr>
                  ) : (
                    subscribers.map((sub) => (
                      <tr key={sub.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/20">
                        <td className="px-6 py-4 font-semibold text-zinc-800 dark:text-zinc-200">{sub.email}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded ${
                            sub.active
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "bg-zinc-200 text-zinc-500"
                          }`}>
                            {sub.active ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-zinc-400">
                          {new Date(sub.createdAt).toLocaleDateString(undefined, { dateStyle: "medium" })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
