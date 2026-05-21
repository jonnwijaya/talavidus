const PUBLIC_EMAIL_DOMAINS: string[] = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "protonmail.com",
  "icloud.com",
  "mail.com",
  "yandex.com",
  "zoho.com",
];

export function isPublicEmailDomain(email: string): boolean {
  const lower = email.trim().toLowerCase();
  const domain = lower.split("@")[1];
  if (!domain) return true;
  return PUBLIC_EMAIL_DOMAINS.includes(domain);
}

export function isValidCorporateEmail(email: string): boolean {
  const lower = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(lower)) return false;
  return !isPublicEmailDomain(lower);
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function isWithinMaxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}

export interface ValidationResult {
  valid: boolean;
  error: string;
}

export function validateRequired(
  value: string,
  fieldName: string
): ValidationResult {
  if (!isNonEmpty(value)) {
    return { valid: false, error: `${fieldName} is required.` };
  }
  return { valid: true, error: "" };
}

export function validateCorporateEmail(email: string): ValidationResult {
  if (!isNonEmpty(email)) {
    return { valid: false, error: "Corporate domain is required." };
  }
  if (!isValidCorporateEmail(email)) {
    return {
      valid: false,
      error:
        "Public email providers are not accepted. Please use your corporate domain.",
    };
  }
  return { valid: true, error: "" };
}

export function validateMaxLength(
  value: string,
  max: number,
  fieldName: string
): ValidationResult {
  if (!isWithinMaxLength(value, max)) {
    return {
      valid: false,
      error: `${fieldName} must not exceed ${max} characters.`,
    };
  }
  return { valid: true, error: "" };
}
