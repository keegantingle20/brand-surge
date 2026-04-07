"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

const challenges = [
  "We rely almost entirely on referrals for new business",
  "We've tried outbound but can't get consistent results",
  "We have no structured outbound process at all",
  "We're generating leads but not converting them to clients",
] as const;

function CheckCircleIcon() {
  return (
    <svg
      className="mx-auto mb-4 h-12 w-12 text-brand-cyan"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const inputClass =
  "w-full rounded-lg border border-brand-border bg-[#010f1f] px-4 py-3 text-sm text-white placeholder:text-[#7c8fa3] transition focus:border-brand-cyan/50 focus:outline-none";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [challenge, setChallenge] = useState("");
  const [conversations, setConversations] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Required";
    if (!company.trim()) e.company = "Required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Valid work email required";
    if (!companyType) e.companyType = "Please select";
    if (!challenge) e.challenge = "Please select one";
    if (!conversations) e.conversations = "Please select";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          companyType,
          challenge,
          conversations,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
      };
      if (!res.ok || !data.success) {
        setErrors({
          _form:
            data.error ??
            "Something went wrong. Please try again or email us directly.",
        });
        return;
      }
      setDone(true);
    } catch {
      setErrors({
        _form: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-brand-border bg-[#0a1628] p-8 text-center md:p-10">
        <CheckCircleIcon />
        <h3 className="mb-3 text-xl font-semibold text-white">
          You&apos;re all set. Let&apos;s talk pipeline.
        </h3>
        <p className="mb-6 text-sm text-[#b4c5d8]">
          Click below to pick a time that works for you. The call is 15 minutes.
          We&apos;ll come prepared based on your answers.
        </p>
        <Button href={CALENDLY_AUDIT_URL} variant="primary">
          Choose your time →
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-brand-border bg-[#0a1628] p-8 md:p-10"
    >
      <div className="mb-6">
        <label htmlFor="name" className="mb-2 block text-sm text-[#b4c5d8]">
          Your name
        </label>
        <input
          id="name"
          type="text"
          placeholder="First and last name"
          className={inputClass}
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          aria-invalid={!!errors.name}
        />
        {errors.name ? (
          <p className="mt-1 text-xs text-red-400">{errors.name}</p>
        ) : null}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm text-[#b4c5d8]"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company name"
            className={inputClass}
            value={company}
            onChange={(ev) => setCompany(ev.target.value)}
            aria-invalid={!!errors.company}
          />
          {errors.company ? (
            <p className="mt-1 text-xs text-red-400">{errors.company}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-[#b4c5d8]">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Work email"
            className={inputClass}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="companyType"
          className="mb-2 block text-sm text-[#b4c5d8]"
        >
          What best describes your company?
        </label>
        <select
          id="companyType"
          className={inputClass}
          value={companyType}
          onChange={(ev) => setCompanyType(ev.target.value)}
          aria-invalid={!!errors.companyType}
        >
          <option value="" disabled>
            Select your company type
          </option>
          <option>Agency or marketing services</option>
          <option>Consulting firm</option>
          <option>
            Professional services (accounting, legal, engineering)
          </option>
          <option>SaaS or technology company</option>
          <option>Construction or commercial real estate</option>
          <option>Manufacturing or industrial</option>
          <option>Other</option>
        </select>
        {errors.companyType ? (
          <p className="mt-1 text-xs text-red-400">{errors.companyType}</p>
        ) : null}
      </div>

      <fieldset className="mb-6">
        <legend className="mb-2 text-sm text-[#b4c5d8]">
          What&apos;s your biggest pipeline challenge right now?
        </legend>
        <div className="mt-1 flex flex-col gap-3">
          {challenges.map((opt, index) => {
            const id = `challenge-${index}`;
            return (
              <label
                key={opt}
                htmlFor={id}
                className="flex cursor-pointer items-start gap-3"
              >
                <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
                  <input
                    id={id}
                    type="radio"
                    name="challenge"
                    value={opt}
                    checked={challenge === opt}
                    onChange={() => setChallenge(opt)}
                    className="peer sr-only"
                  />
                  <span className="h-4 w-4 rounded-full border border-brand-cyan/40 peer-checked:border-brand-cyan peer-checked:bg-brand-cyan" />
                </span>
                <span className="text-sm text-[#b4c5d8]">{opt}</span>
              </label>
            );
          })}
        </div>
        {errors.challenge ? (
          <p className="mt-2 text-xs text-red-400">{errors.challenge}</p>
        ) : null}
      </fieldset>

      <div className="mb-2">
        <label
          htmlFor="conversations"
          className="mb-2 block text-sm text-[#b4c5d8]"
        >
          How many qualified sales conversations per month?
        </label>
        <select
          id="conversations"
          className={inputClass}
          value={conversations}
          onChange={(ev) => setConversations(ev.target.value)}
          aria-invalid={!!errors.conversations}
        >
          <option value="" disabled>
            Select a range
          </option>
          <option>0–2 per month</option>
          <option>3–5 per month</option>
          <option>6–10 per month</option>
          <option>10+ per month</option>
        </select>
        {errors.conversations ? (
          <p className="mt-1 text-xs text-red-400">{errors.conversations}</p>
        ) : null}
      </div>

      {errors._form ? (
        <p className="mt-6 text-sm text-red-400" role="alert">
          {errors._form}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        className="mt-8 w-full"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Book my free pipeline audit"}
      </Button>
    </form>
  );
}
