"use client";

import { useState, useCallback } from "react";

type FormStatus = "idle" | "loading" | "error" | "success";

interface FormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

const TOPIC_OPTIONS = [
  { value: "", label: "Select a topic" },
  { value: "general", label: "General inquiry" },
  { value: "product", label: "Product question" },
  { value: "institutional", label: "Institutional access" },
  { value: "api", label: "API & integrations" },
  { value: "research", label: "Research & methodology" },
  { value: "partnerships", label: "Partnerships" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      if (name === "message" && value.length > 2000) return;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    []
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!validateForm()) return;

      setStatus("loading");
      setErrors({});

      try {
        const payload = {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          topic: formData.topic,
          message: formData.message.trim(),
        };

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setStatus("success");
          setFormData(INITIAL_FORM_DATA);
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
    [formData, validateForm]
  );

  if (status === "success") {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-sm font-light tracking-body text-ink-light">
            Message received. We will respond shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Name */}
        <div className="md:col-span-1">
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-ultra text-ink-light"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-4 w-full h-12 px-0 bg-transparent border-0 border-b border-border text-sm text-ink placeholder-ink-lighter focus:border-ink transition-colors duration-300 ease-out"
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-ink">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="md:col-span-1">
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-ultra text-ink-light"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-4 w-full h-12 px-0 bg-transparent border-0 border-b border-border text-sm text-ink placeholder-ink-lighter focus:border-ink transition-colors duration-300 ease-out"
            placeholder="name@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-ink">
              {errors.email}
            </p>
          )}
        </div>

        {/* Topic */}
        <div className="md:col-span-2">
          <label
            htmlFor="topic"
            className="block text-xs uppercase tracking-ultra text-ink-light"
          >
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="mt-4 w-full h-12 px-0 bg-transparent border-0 border-b border-border text-sm text-ink focus:border-ink transition-colors duration-300 ease-out appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237d7b78' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0 center",
            }}
          >
            {TOPIC_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-ultra text-ink-light"
            >
              Message
            </label>
            <span className="text-xs text-ink-lighter">
              {formData.message.length}/2000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={6}
            maxLength={2000}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-4 w-full px-0 py-3 bg-transparent border-0 border-b border-border text-sm text-ink placeholder-ink-lighter focus:border-ink transition-colors duration-300 ease-out resize-none"
            placeholder="How can we help?"
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-xs text-ink">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-6">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center text-center font-sans h-14 bg-ink px-14 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-ink text-white hover:bg-transparent hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && (
            <p className="mt-4 text-xs text-ink">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>

      {/* Legal line */}
      <p className="mt-12 text-xs font-light leading-body text-ink-lighter">
        By submitting this form, you consent to Talavidus processing your
        inquiry in accordance with our privacy and data handling practices.
        We do not share your information with third parties.
      </p>
    </form>
  );
}
