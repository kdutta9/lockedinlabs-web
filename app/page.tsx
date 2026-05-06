export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 py-20">
      <div className="text-center max-w-md w-full">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-600 mb-16">
          LockedIn Labs LLC
        </p>

        <div className="border border-white/[0.08] rounded-3xl p-10 mb-12">
          <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/[0.08] mx-auto mb-8 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="13"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
              <circle
                cx="16"
                cy="16"
                r="8"
                stroke="white"
                strokeOpacity="0.4"
                strokeWidth="1.5"
              />
              <circle cx="16" cy="16" r="3" fill="white" fillOpacity="0.7" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            ZonedIn
          </h1>
          <p className="text-neutral-400 text-base font-medium mb-6">
            The Focus OS
          </p>
          <p className="text-neutral-600 text-sm leading-relaxed">
            A new kind of productivity app. Coming soon to the App Store.
          </p>
        </div>

        <p className="text-neutral-700 text-xs tracking-wide">
          Building tools for focused minds.
        </p>
      </div>
    </div>
  );
}
