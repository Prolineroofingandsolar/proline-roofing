"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";


const SERVICES = [
  "Roof Repairs",
  "New Roof Installation",
  "Flat Roofing",
  "Solar PV System",
  "Battery Storage",
  "Roof Maintenance",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^[\d\s\+\-\(\)]{7,}$/.test(data.phone))
    errors.phone = "Enter a valid phone number";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.service) errors.service = "Please select a service";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10)
    errors.message = "Please provide a bit more detail";
  return errors;
}

const SUPABASE_URL = "https://qzvdzzvkocmulcfujyea.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dmR6enZrb2NtdWxjZnVqeWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NzIxNjUsImV4cCI6MjA5NDQ0ODE2NX0.g42AvuElukfbpgbg9Y6XImnuHQ2Po5GEaVVGMz3Siu0";

async function sendToCRM(form: FormData) {
  const now = new Date().toISOString();
  const lead = {
    id: crypto.randomUUID(),
    name: form.name,
    phone: form.phone,
    email: form.email,
    address: "",
    job_type: form.service,
    stage: "New Lead",
    source: "Website",
    notes: form.message,
    created_at: now,
    updated_at: now,
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(lead),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Error ${res.status}`);
  }
}

export default function ContactForm({ darkBg = false }: { darkBg?: boolean }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const inputBase = `w-full px-4 py-3 rounded border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#f97316] ${
    darkBg
      ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#f97316]"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#f97316]"
  }`;

  const errorClass = "border-red-500 focus:ring-red-400";
  const labelClass = `block text-sm font-semibold mb-1.5 ${darkBg ? "text-gray-200" : "text-gray-700"}`;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof Errors] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof Errors] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      await sendToCRM(form);
      setSubmitted(true);
    } catch (err) {
      console.error("CRM submit error:", err);
      const msg = err instanceof Error ? err.message : "Unknown error";
      setSubmitError(`Something went wrong: ${msg}. Please call us on 07587 478826.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-9 h-9 text-green-600" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${darkBg ? "text-white" : "text-gray-900"}`}>
          Message Sent!
        </h3>
        <p className={`text-sm ${darkBg ? "text-gray-300" : "text-gray-600"}`}>
          Thank you for getting in touch. We&apos;ll be back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-[#f97316]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Smith"
            className={`${inputBase} ${errors.name ? errorClass : ""}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-[#f97316]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="07700 900000"
            className={`${inputBase} ${errors.phone ? errorClass : ""}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-[#f97316]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="john@example.com"
          className={`${inputBase} ${errors.email ? errorClass : ""}`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>
          Service Required <span className="text-[#f97316]">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} ${errors.service ? errorClass : ""}`}
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-[#f97316]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us about your project..."
          className={`${inputBase} resize-none ${errors.message ? errorClass : ""}`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {submitError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#f97316] hover:bg-[#ea6c0a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded transition-colors text-sm tracking-wide flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
      <p className={`text-xs text-center ${darkBg ? "text-gray-400" : "text-gray-500"}`}>
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
