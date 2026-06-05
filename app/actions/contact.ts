"use server";

import prisma from "@/app/lib/prisma";

export async function submitContactMessage(data: {
  name: string;
  email: string;
  company?: string | null;
  message: string;
}) {
  try {
    const { name, email, company = null, message } = data;

    if (!name || !email || !message) {
      return { success: false, error: "Please fill out all required fields." };
    }

    // Insert into database
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        company,
        message,
      },
    });

    return { success: true, message: "Thank you! Your message has been sent successfully." };
  } catch (error: any) {
    console.error("Error submitting contact message:", error);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}

export async function subscribeEmail(data: { email: string }) {
  try {
    const { email } = data;

    if (!email) {
      return { success: false, error: "Please provide a valid email address." };
    }

    // Check if email already exists
    const existing = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.active) {
        return { success: true, message: "You are already subscribed!" };
      } else {
        await prisma.subscriber.update({
          where: { email },
          data: { active: true },
        });
        return { success: true, message: "Subscription re-activated! Welcome back." };
      }
    }

    // Create subscriber
    await prisma.subscriber.create({
      data: {
        email,
      },
    });

    return { success: true, message: "Thank you for subscribing!" };
  } catch (error: any) {
    console.error("Error subscribing email:", error);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}

export async function deleteContactMessage(id: string) {
  try {
    await prisma.contactMessage.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact message:", error);
    return { success: false, error: "Failed to delete message." };
  }
}
