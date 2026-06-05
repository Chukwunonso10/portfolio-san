import React from "react";
import prisma from "../lib/prisma";
import AdminClient from "./AdminClient";
import Footer from "../components/footer";

export const dynamic = "force-dynamic";

async function getAdminData() {
  try {
    const [messages, subscribers] = await Promise.all([
      prisma.contactMessage.findMany({
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.subscriber.findMany({
        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);
    return { messages, subscribers };
  } catch (error) {
    console.error("Error fetching admin dashboard data:", error);
    return { messages: [], subscribers: [] };
  }
}

export default async function AdminDashboard() {
  const { messages, subscribers } = await getAdminData();

  return (
    <div className="flex flex-col min-h-screen">
      <AdminClient
        initialMessages={messages}
        initialSubscribers={subscribers}
      />
      <Footer />
    </div>
  );
}
