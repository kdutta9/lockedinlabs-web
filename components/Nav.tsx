import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-white/[0.06] px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.12em] uppercase text-white"
        >
          LockedIn Labs
        </Link>
        <div className="flex items-center gap-6 text-sm text-neutral-400">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/support" className="hover:text-white transition-colors">
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}
