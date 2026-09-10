"use client";

import React, { useState, useRef } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selected]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) {
      const dropped = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...dropped]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // Append managed files
    formData.delete("attachments[]");
    files.forEach((file) => {
      formData.append("attachments[]", file);
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send inquiry. Please try again.");
      }

      const serviceVal = (formData.get("service") as string) || "General Inquiry";
      
      setSuccess(true);
      setFiles([]);
      if (formRef.current) formRef.current.reset();

      // Trigger Google Analytics (GA4) generate_lead conversion event
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "generate_lead", {
          event_category: "Contact",
          event_label: serviceVal,
          value: 1,
        });
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please call 01707 257 575.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{
        background: "rgba(36, 36, 39, 0.7)",
        border: "1px solid var(--c-accent)",
        borderRadius: "6px",
        padding: "2.5rem 2rem",
        textAlign: "center"
      }}>
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "rgba(232, 84, 30, 0.15)",
          color: "var(--c-accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          margin: "0 auto 1.2rem auto",
          fontWeight: "bold"
        }}>
          ✓
        </div>
        <h3 style={{ fontSize: "1.6rem", color: "var(--c-text)", marginBottom: "0.8rem" }}>
          Quote Request Received!
        </h3>
        <p style={{ color: "var(--c-text-dim)", maxWidth: "520px", margin: "0 auto 1.8rem auto", lineHeight: "1.6" }}>
          Thank you for reaching out. Your project specifications have been sent to our studio team at <strong style={{ color: "var(--c-text)" }}>sales@hertssigns.co.uk</strong>. A confirmation copy has also been sent to your email.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="btn-ghost"
          style={{ cursor: "pointer" }}
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form" encType="multipart/form-data">
      {error && (
        <div style={{
          background: "rgba(239, 68, 68, 0.15)",
          border: "1px solid #ef4444",
          color: "#fca5a5",
          padding: "1rem",
          borderRadius: "4px",
          marginBottom: "1rem",
          fontSize: "0.9rem"
        }}>
          ⚠️ {error}
        </div>
      )}

      <div className="form-row">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" required type="text" placeholder="Your full name" />
      </div>

      <div className="form-row">
        <label htmlFor="company">Company (optional)</label>
        <input id="company" name="company" type="text" placeholder="Company or business name" />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" required type="email" placeholder="name@company.com" />
      </div>

      <div className="form-row">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" placeholder="07123 456789" />
      </div>

      <div className="form-row">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Select a service</option>
          <option value="vehicle-graphics">Vehicle Graphics &amp; Wrapping</option>
          <option value="signage">Commercial &amp; Shopfront Signage</option>
          <option value="window-films">Window Films &amp; Manifestation</option>
          <option value="printing">Large Format &amp; Printing</option>
          <option value="exhibitions">Exhibitions &amp; Display Stands</option>
          <option value="clothing">Clothing &amp; Merchandise</option>
          <option value="design">Design Studio &amp; Logos</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="message">Tell us about the project *</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          placeholder="Dimensions, vehicle model, materials, deadlines or details..."
          rows={5}
        />
      </div>

      <div className="form-row">
        <label htmlFor="attachments">Attachments (optional)</label>
        <label 
          className={`file-drop ${isDragOver ? "is-dragover" : ""}`} 
          htmlFor="attachments"
          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
        >
          <input 
            ref={fileInputRef}
            accept="image/*,.pdf,.ai,.eps,.psd,.svg,.doc,.docx,.zip" 
            id="attachments" 
            multiple 
            name="attachments[]" 
            type="file" 
            onChange={handleFileChange}
          />
          <span aria-hidden="true" className="file-drop-icon">↑</span>
          <span className="file-drop-text"><strong>Choose files</strong> or drag them here</span>
          <span className="file-drop-hint">Logos, photos, sketches or PDFs — images, PDF, AI, EPS, SVG, DOC, ZIP</span>
        </label>

        {files.length > 0 && (
          <ul aria-live="polite" className="file-list" id="fileList">
            {files.map((file, idx) => (
              <li key={idx}>
                <span className="file-name">{file.name}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.8rem", flex: "0 0 auto" }}>
                  <span className="file-meta">{formatSize(file.size)}</span>
                  <button 
                    type="button" 
                    className="file-remove" 
                    aria-label={`Remove ${file.name}`}
                    onClick={() => removeFile(idx)}
                  >
                    &times;
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button 
        className="btn-primary" 
        style={{ justifyContent: "center", width: "100%", opacity: loading ? 0.7 : 1 }} 
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending your inquiry..." : "Send request →"}
      </button>
    </form>
  );
}
