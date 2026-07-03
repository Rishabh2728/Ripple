import { RippleLogo } from './components/RippleLogo';

export function App() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-ripple-dark dark:text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-between px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RippleLogo />
            <span className="text-lg font-bold">Ripple</span>
          </div>
          <a
            className="rounded-full bg-ripple-burgundy px-5 py-2 text-sm font-semibold text-white"
            href="mailto:hello@ripple.example"
          >
            Contact
          </a>
        </nav>

        <div className="grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ripple-burgundy">
              Modern community platform
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">Ripple</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              A focused space for community discussion, saved knowledge, personal profiles, and one-to-one real-time conversations.
            </p>
          </div>

          <div className="rounded-ripple border border-zinc-200 bg-ripple-soft p-6 shadow-sm dark:border-zinc-800 dark:bg-ripple-card">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Platform status</span>
              <span className="rounded-full bg-ripple-burgundy px-3 py-1 text-xs font-bold text-white">Building</span>
            </div>
            <div className="space-y-4">
              {['Community feed', 'Secure accounts', 'Real-time messaging'].map((item) => (
                <div className="rounded-2xl bg-white p-4 text-sm font-semibold shadow-sm dark:bg-ripple-dark" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          Built for Expo, Express, MongoDB, Socket.IO, and Vercel.
        </footer>
      </section>
    </main>
  );
}
