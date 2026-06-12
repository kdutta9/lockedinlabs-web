"use client";

import { useState } from "react";
import Link from "next/link";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "loading" | "success" | "error";

export default function SupportPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) return;

    setStatus("loading");
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold text-white mb-2">ZonedIn Support</h1>
      <p className="text-neutral-400 text-sm mb-10">
        ZonedIn is an AI-powered productivity app that helps you build focus and
        momentum.
      </p>

      <h2 className="text-base font-semibold text-white mb-6">Contact Us</h2>

      {status === "success" ? (
        <div className="border border-white/[0.08] rounded-2xl p-8 text-center mb-12">
          <p className="text-white font-medium mb-1">Message sent</p>
          <p className="text-neutral-400 text-sm">
            We&apos;ll get back to you within 48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 mb-8">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-neutral-300 mb-2"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm text-neutral-300 mb-2"
            >
              Subject
            </label>
            <select
              name="subject"
              id="subject"
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors [color-scheme:dark]"
            >
              <option value="Bug Report">Bug Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Account Deletion">Account Deletion</option>
              <option value="General Question">General Question</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-neutral-300 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              placeholder="Describe your issue or question..."
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 transition-colors resize-y"
            />
          </div>

          <input
            type="hidden"
            name="_subject"
            value="ZonedIn Support Request"
          />

          {status === "error" && (
            <p className="text-red-400 text-sm">
              Something went wrong. Email us at{" "}
              <a
                href="mailto:support@locked-in-labs.com"
                className="underline hover:text-red-300"
              >
                support@locked-in-labs.com
              </a>
              .
            </p>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "loading" || !FORMSPREE_ID}
              className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {!FORMSPREE_ID && (
              <p className="text-neutral-600 text-xs">
                Form not configured —{" "}
                <a
                  href="mailto:support@locked-in-labs.com"
                  className="underline hover:text-neutral-400 transition-colors"
                >
                  email us directly
                </a>
              </p>
            )}
          </div>
        </form>
      )}

      <p className="text-neutral-500 text-sm mb-14">
        You can also reach us at{" "}
        <a
          href="mailto:support@locked-in-labs.com"
          className="text-neutral-300 hover:text-white transition-colors"
        >
          support@locked-in-labs.com
        </a>
        . We respond within 48 hours.
      </p>

      <h2 className="text-base font-semibold text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-7 mb-14">
        <div>
          <p className="text-sm font-medium text-white mb-1.5">
            How do I create an account?
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Tap &quot;Continue with Apple&quot; on the login screen.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-white mb-1.5">
            How do I delete my account and data?
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Use the contact form above with the &quot;Account Deletion&quot;
            subject, or email{" "}
            <a
              href="mailto:support@locked-in-labs.com"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              support@locked-in-labs.com
            </a>{" "}
            with the subject &quot;Account Deletion Request.&quot; We will
            process your request within 30 days.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-white mb-1.5">
            The app isn&apos;t working as expected.
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Try closing and reopening the app. If the issue persists, use the
            contact form above with details about the problem and your device
            model.
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.06] pt-8">
        <p className="text-xs text-neutral-600 uppercase tracking-wider mb-3">
          Legal
        </p>
        <div className="flex gap-5 text-sm text-neutral-400">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}
