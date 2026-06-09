"use client";

import React, { useState } from "react";
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, RefreshCw, Layers } from "lucide-react";
import Footer from "../components/footer";

export default function Dashboards() {
  const [activeTab, setActiveTab] = useState<"finance" | "logistics">("finance");

  const kpis = {
    finance: [
      { name: "Customer Acquisition Cost", val: "$150", change: "-8% QoQ", icon: <Users className="w-5 h-5 text-blue-500" /> },
      { name: "LTV to CAC Ratio", val: "4.2x", change: "Healthy", icon: <TrendingUp className="w-5 h-5 text-purple-500" /> },
      { name: "Gross Margin %", val: "78.4%", change: "+1.2% YTD", icon: <Layers className="w-5 h-5 text-orange-500" /> }
    ],
    logistics: [
      { name: "On-Time Delivery Rate", val: "94.2%", change: "+2.1% MoM", icon: <Calendar className="w-5 h-5 text-emerald-500" /> },
      { name: "Average Transit Delay", val: "4.5 Hrs", change: "-1.2 Hrs", icon: <RefreshCw className="w-5 h-5 text-blue-500" /> },
      
    ]
  };

  const chartData = {
    finance: [
      { month: "Jan", rev: 32000, churn: 1.8 },
      { month: "Feb", rev: 35000, churn: 1.5 },
      { month: "Mar", rev: 37500, churn: 1.6 },
      { month: "Apr", rev: 39000, churn: 2.1 },
      { month: "May", rev: 41200, churn: 1.4 },
      { month: "Jun", rev: 42500, churn: 1.2 }
    ],
    logistics: [
      { month: "Jan", rate: 91.5, delay: 5.8 },
      { month: "Feb", rate: 92.0, delay: 5.2 },
      { month: "Mar", rate: 92.8, delay: 5.0 },
      { month: "Apr", rate: 93.1, delay: 4.8 },
      { month: "May", rate: 93.9, delay: 4.6 },
      { month: "Jun", rate: 94.2, delay: 4.5 }
    ]
  };

  const codeSnippets = {
    finance: `// DAX Measure: Month-over-Month MRR Growth %
MRR MoM Growth % = 
VAR CurrentMRR = [Total MRR]
VAR PriorMRR = 
    CALCULATE(
        [Total MRR],
        DATEADD('Calendar'[Date], -1, MONTH)
    )
RETURN
    DIVIDE(CurrentMRR - PriorMRR, PriorMRR, 0)`,
    logistics: `# Python script for delivery delay prediction models
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

def predict_transit_delay(df):
    features = ['distance_miles', 'carrier_id', 'day_of_week', 'hour_of_day']
    X = df[features]
    y = df['delay_hours']
    
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X, y)
    return model`
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
              Data Visualization
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 text-zinc-950 dark:text-white">
              Interactive Dashboards
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              Explore dynamic dashboard environments constructed in Power BI and Python. Toggle categories below to view live mock performance indexes.
            </p>
          </div>

          {/* Interactive controls */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab("finance")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center gap-2 ${
                activeTab === "finance"
                  ? "bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-500/10"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              SaaS Financials
            </button>
            <button
              onClick={() => setActiveTab("logistics")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center gap-2 ${
                activeTab === "logistics"
                  ? "bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-500/10"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              Supply Chain Logistics
            </button>
          </div>

          {/* Dashboard Environment */}
          <div className="flex flex-col gap-8">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis[activeTab].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-relaxed">{item.name}</span>
                    <div className="p-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-lg">{item.icon}</div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-zinc-900 dark:text-white">{item.val}</span>
                    <span className={`text-[10px] font-bold ${item.change.startsWith("+") || item.change === "Healthy" ? "text-emerald-500" : "text-red-500"}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Visuals Area */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Graphical Visualizer */}
              <div className="lg:col-span-8 p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-4">
                <h4 className="font-bold text-sm text-zinc-950 dark:text-white">Historical Performance Index</h4>
                <div className="h-64 flex items-end justify-between gap-4 pt-6 px-4">
                  {chartData[activeTab].map((data: any, idx) => {
                    const primaryVal = activeTab === "finance" ? data.rev : data.rate;
                    const maxPrimary = activeTab === "finance" ? 45000 : 100;
                    const pct = (primaryVal / maxPrimary) * 80; // Scale to max 80% height

                    return (
                      <div key={idx} className="flex-grow flex flex-col items-center gap-2 h-full justify-end group">
                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[10px] py-1 px-2 rounded absolute mb-20 shadow-md">
                          {activeTab === "finance" ? `$${(primaryVal/1000).toFixed(1)}k` : `${primaryVal}%`}
                        </div>
                        <div
                          className="w-full bg-gradient-to-t from-purple-600 to-blue-500 rounded-t-lg transition-all duration-700 hover:from-purple-500 hover:to-blue-400 cursor-pointer"
                          style={{ height: `${pct}%` }}
                        />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{data.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Code/Formula showcase */}
              <div className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 shadow-sm flex flex-col gap-4">
                <h4 className="font-bold text-sm text-zinc-950 dark:text-white">Metrics Implementation Code</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Calculated using production-ready query modeling logic:
                </p>
                <pre className="flex-grow p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-950 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 overflow-x-auto border border-zinc-200/50 dark:border-white/5 whitespace-pre-wrap">
                  {codeSnippets[activeTab]}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
