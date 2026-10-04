"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";


const SERVICES = [
  "Roof Repairs",
  "New Roof Installation",
  "Flat Roofing",
  "Slate or Tile Roofing",
  "Chimney Repairs",
  "Leadwork",
  "Fascias, Soffits or Guttering",
  "Emergency Roofing",
  "Commercial Roofing",
  "Solar PV System",
  "Battery Storage",
  "EV Charging",
  "Roof Maintenance",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  service: string;
  message: string;
  company: string;
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  contact?: string;
  postcode?: string;
  service?: string;
  message?: string;
}

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (data.phone.trim() && !/^[\d\s\+\-\(\)]{7,}$/.test(data.phone))
    errors.phone = "Enter a valid phone number";
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.phone.trim() && !data.email.trim())
    errors.contact = "Enter a phone number or email address";
  if (!data.postcode.trim()) errors.postcode = "Postcode is required";
  else if (!/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(data.postcode.trim()))
    errors.postcode = "Enter a valid UK postcode";
  if (!data.service) errors.service = "Please select a service";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10)
    errors.message = "Please provide a bit more detail";
  return errors;
}

async function sendToCRM(form: FormData) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    throw new Error("The enquiry could not be sent");
  }
}

export default function ContactForm({ darkBg = false }: { darkBg?: boolean }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    service: "",
    message: "",
    company: "",
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
    setTouched({ name: true, phone: true, email: true, postcode: true, service: true, message: true });
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      await sendToCRM(form);
      setSubmitted(true);
    } catch (err) {
      console.error("CRM submit error:", err);
      setSubmitError("We could not send your enquiry. Please try again or call 07587 478826.");
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
          Thank you for getting in touch. We&apos;ll reply as soon as possible during staffed hours.
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
            Phone Number
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            className={`${inputBase} ${errors.email || errors.contact ? errorClass : ""}`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="postcode" className={labelClass}>
            Project Postcode <span className="text-[#f97316]">*</span>
          </label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            value={form.postcode}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="TA1 1AA"
            className={`${inputBase} ${errors.postcode ? errorClass : ""}`}
          />
          {errors.postcode && <p className="mt-1 text-xs text-red-500">{errors.postcode}</p>}
        </div>
      </div>
      {errors.contact && <p className="-mt-3 text-xs text-red-500">{errors.contact}</p>}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" value={form.company} onChange={handleChange} tabIndex={-1} autoComplete="off" />
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
        We use your details only to respond to this enquiry. See our{" "}
        <Link href="/privacy" className="underline hover:no-underline">privacy policy</Link>.
      </p>
    </form>
  );
}
