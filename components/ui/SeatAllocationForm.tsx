"use client";

import { useState, useCallback } from "react";
import {
  validateRequired,
  validateCorporateEmail,
  validateMaxLength,
  type ValidationResult,
} from "@/lib/validations";

type FormStatus = "idle" | "loading" | "error" | "success";

interface FormData {
  entity: string;
  signatory: string;
  domain: string;
  aum: string;
  intent: string;
}

interface FormErrors {
  entity?: string;
  signatory?: string;
  domain?: string;
  aum?: string;
  intent?: string;
  general?: string;
}

const INITIAL_FORM_DATA: FormData = {
  entity: "",
  signatory: "",
  domain: "",
  aum: "",
  intent: "",
};

const AUM_OPTIONS = [
  { value: "", label: "Select AUM range" },
  { value: "below-500m", label: "Below $500M" },
  { value: "500m-2b", label: "$500M — $2B" },
  { value: "2b-10b", label: "$2B — $10B" },
  { value: "10b-50b", label: "$10B — $50B" },
  { value: "above-50b", label: "Above $50B" },
];

export default function SeatAllocationForm() {
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
      if (name === "intent" && value.length > 500) return;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    []
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    const entityValidation: ValidationResult = validateRequired(
      formData.entity,
      "Institutional entity"
    );
    if (!entityValidation.valid) newErrors.entity = entityValidation.error;

    const signatoryValidation: ValidationResult = validateRequired(
      formData.signatory,
      "Authorised signatory"
    );
    if (!signatoryValidation.valid)
      newErrors.signatory = signatoryValidation.error;

    const emailValidation: ValidationResult = validateCorporateEmail(
      formData.domain
    );
    if (!emailValidation.valid) newErrors.domain = emailValidation.error;

    const aumValidation: ValidationResult = validateRequired(
      formData.aum,
      "Assets under management"
    );
    if (!aumValidation.valid) newErrors.aum = aumValidation.error;

    const intentValidation: ValidationResult = validateMaxLength(
      formData.intent,
      500,
      "Allocation intent"
    );
    if (!intentValidation.valid) newErrors.intent = intentValidation.error;

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
          entity: formData.entity.trim(),
          signatory: formData.signatory.trim(),
          domain: formData.domain.trim().toLowerCase(),
          aum: formData.aum,
          intent: formData.intent.trim(),
        };

        const response = await fetch("/api/seat-request", {
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
        <p className="text-sm font-light tracking-body text-ink-light text-center">
          Received. Review in progress.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Institutional Entity */}
        <div className="md:col-span-1">
          <label
            htmlFor="entity"
            className="block text-xs uppercase tracking-ultra text-ink-light"
          >
            Institutional Entity
          </label>
          <input
            id="entity"
            name="entity"
            type="text"
            value={formData.entity}
            onChange={handleChange}
            aria-invalid={!!errors.entity}
            aria-describedby={errors.entity ? "entity-error" : undefined}
            className="mt-4 w-full h-12 px-0 bg-transparent border-0 border-b border-border text-sm text-ink placeholder-ink-lighter focus:border-ink transition-colors duration-300 ease-out"
            placeholder="Registered legal name"
          />
          {errors.entity && (
            <p id="entity-error" className="mt-2 text-xs text-ink">
              {errors.entity}
            </p>
          )}
        </div>

        {/* Authorised Signatory */}
        <div className="md:col-span-1">
          <label
            htmlFor="signatory"
            className="block text-xs uppercase tracking-ultra text-ink-light"
          >
            Authorised Signatory
          </label>
          <input
            id="signatory"
            name="signatory"
            type="text"
            value={formData.signatory}
            onChange={handleChange}
            aria-invalid={!!errors.signatory}
            aria-describedby={
              errors.signatory ? "signatory-error" : undefined
            }
            className="mt-4 w-full h-12 px-0 bg-transparent border-0 border-b border-border text-sm text-ink placeholder-ink-lighter focus:border-ink transition-colors duration-300 ease-out"
            placeholder="Title and full name"
          />
          {errors.signatory && (
            <p id="signatory-error" className="mt-2 text-xs text-ink">
              {errors.signatory}
            </p>
          )}
        </div>

        {/* Corporate Domain */}
        <div className="md:col-span-1">
          <label
            htmlFor="domain"
            className="block text-xs uppercase tracking-ultra text-ink-light"
          >
            Corporate Domain
          </label>
          <input
            id="domain"
            name="domain"
            type="email"
            value={formData.domain}
            onChange={handleChange}
            aria-invalid={!!errors.domain}
            aria-describedby={errors.domain ? "domain-error" : undefined}
            className="mt-4 w-full h-12 px-0 bg-transparent border-0 border-b border-border text-sm text-ink placeholder-ink-lighter focus:border-ink transition-colors duration-300 ease-out"
            placeholder="name@institution.com"
          />
          {errors.domain && (
            <p id="domain-error" className="mt-2 text-xs text-ink">
              {errors.domain}
            </p>
          )}
        </div>

        {/* Assets Under Management */}
        <div className="md:col-span-1">
          <label
            htmlFor="aum"
            className="block text-xs uppercase tracking-ultra text-ink-light"
          >
            Assets Under Management
          </label>
          <select
            id="aum"
            name="aum"
            value={formData.aum}
            onChange={handleChange}
            aria-invalid={!!errors.aum}
            aria-describedby={errors.aum ? "aum-error" : undefined}
            className="mt-4 w-full h-12 px-0 bg-transparent border-0 border-b border-border text-sm text-ink focus:border-ink transition-colors duration-300 ease-out appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237d7b78' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0 center",
            }}
          >
            {AUM_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.aum && (
            <p id="aum-error" className="mt-2 text-xs text-ink">
              {errors.aum}
            </p>
          )}
        </div>

        {/* Allocation Intent */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="intent"
              className="block text-xs uppercase tracking-ultra text-ink-light"
            >
              Allocation Intent
            </label>
            <span className="text-xs text-ink-lighter">
              {formData.intent.length}/500
            </span>
          </div>
          <textarea
            id="intent"
            name="intent"
            rows={5}
            maxLength={500}
            value={formData.intent}
            onChange={handleChange}
            aria-invalid={!!errors.intent}
            aria-describedby={errors.intent ? "intent-error" : undefined}
            className="mt-4 w-full px-0 py-3 bg-transparent border-0 border-b border-border text-sm text-ink placeholder-ink-lighter focus:border-ink transition-colors duration-300 ease-out resize-none"
            placeholder="Describe your allocation intent..."
          />
          {errors.intent && (
            <p id="intent-error" className="mt-2 text-xs text-ink">
              {errors.intent}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-6">
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative inline-flex items-center justify-center text-center border font-sans h-14 bg-ink px-14 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo overflow-clip border-ink text-white hover:bg-transparent hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading"
              ? "Processing..."
              : "Submit for Review"}
          </button>
        </div>

        {/* Error State */}
        {status === "error" && (
          <div className="md:col-span-2">
            <p className="text-xs text-ink text-center">
              Submission failed. Retry or contact{" "}
              <a
                href="mailto:compliance@talavidus.com"
                className="underline underline-offset-4 transition-opacity duration-300 ease-out hover:opacity-60"
              >
                compliance@talavidus.com
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
