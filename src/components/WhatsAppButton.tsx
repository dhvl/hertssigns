"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const pathname = usePathname();

  let message = "Hi Herts Signs, I want to know more about your signage, wrapping, and printing services.";
  if (pathname?.includes("vehicle-graphics")) {
    message = "Hi Herts Signs, I'd like a quote for vehicle graphics / van wrapping.";
  } else if (pathname?.includes("signage")) {
    message = "Hi Herts Signs, I'd like to discuss commercial / shop signage.";
  } else if (pathname?.includes("printing")) {
    message = "Hi Herts Signs, I'm interested in large format printing.";
  } else if (pathname?.includes("design")) {
    message = "Hi Herts Signs, I'd like to discuss logo and branding design.";
  }

  const encodedUrl = `https://wa.me/447459367473/?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={encodedUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Herts Signs on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.43-.14-.62.14-.18.27-.7.9-.86 1.08-.16.18-.32.2-.6.07-1.62-.8-2.68-1.44-3.74-3.26-.28-.49.28-.45.8-1.5.1-.2.05-.37-.04-.51-.1-.14-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46-.16 0-.35 0-.53 0-.18 0-.48.07-.74.35-.25.27-.96.94-.96 2.3 0 1.34 1 2.65 1.13 2.83.14.18 1.92 2.93 4.66 3.99 2.32.9 2.79.72 3.3.67.5-.05 1.6-.65 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.1-.26-.16-.54-.3z" />
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.33A9.96 9.96 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18a8 8 0 0 1-4.08-1.12l-.3-.18-3.02.8.8-2.95-.2-.3A8 8 0 1 1 12 20z" />
      </svg>
      <span className="wa-label">WhatsApp Us</span>
    </a>
  );
}
