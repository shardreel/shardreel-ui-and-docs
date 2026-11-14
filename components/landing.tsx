import Link from 'next/link';
import type { ReactNode } from 'react';
import { Logo, Wordmark } from '@/components/logo';

const container = 'mx-auto w-full max-w-6xl px-6';

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.14em] text-fd-muted-foreground">
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-fd-muted-foreground text-pretty">{body}</p>}
    </div>
  );
}

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-fd-border">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className={`${container} relative flex flex-col items-center py-24 text-center sm:py-32`}>
        <Logo size={56} className="mb-8" />
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-background px-3 py-1 font-mono text-xs text-fd-muted-foreground">
          <span className="size-1.5 rounded-full bg-fd-foreground" />
          Apple Silicon only. No cloud renderer.
        </span>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tighter text-balance sm:text-7xl">
          Hours of gameplay in.
          <br />
          <span className="text-fd-muted-foreground">Shorts out.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-fd-muted-foreground text-pretty">
          shardreel finds the peak moments in long recordings and cuts them into captioned 9:16 clips for
          Shorts, Reels and TikTok. Transcription, analysis and encoding all run on your Mac.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex h-11 items-center rounded-md bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-85"
          >
            Get started
          </Link>
          <Link
            href="/docs/concepts/how-it-works"
            className="inline-flex h-11 items-center rounded-md border border-fd-border bg-fd-background px-5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            How it works
          </Link>
        </div>
        <Terminal />
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <div className="mt-14 w-full max-w-xl overflow-hidden rounded-lg border border-fd-border bg-fd-card text-left shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-fd-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-fd-border" />
        <span className="size-2.5 rounded-full bg-fd-border" />
        <span className="size-2.5 rounded-full bg-fd-border" />
        <span className="ml-3 font-mono text-xs text-fd-muted-foreground">terminal</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6">
        <span className="text-fd-muted-foreground">$ </span>cd web && bun install && bun run build
        {'\n'}
        <span className="text-fd-muted-foreground">$ </span>cargo run --release
        {'\n'}
        <span className="text-fd-muted-foreground">clipforge listening on http://127.0.0.1:8787</span>
      </pre>
    </div>
  );
}

/* ---------- App preview (illustrative mockup) ---------- */

const STEPS = ['Fetch', 'Audio', 'Transcribe', 'Analyse', 'Pick', 'Render'];

function CaptionChip({ before, hot, after }: { before: string; hot: string; after: string }) {
  return (
    <span className="text-[11px] font-black uppercase leading-none tracking-tight text-white">
      {before} <span className="rounded-sm bg-white px-1 py-0.5 text-black">{hot}</span> {after}
    </span>
  );
}

const CLIPS = [
  { title: 'Cops chase ends in a crash', tags: '#gta6 #chase #shorts', time: '1:12 - 1:42', cap: ['THE', 'COPS', 'ARE'] },
  { title: 'Five stars in thirty seconds', tags: '#gta6 #wanted #gaming', time: '14:03 - 14:33', cap: ['FIVE', 'STARS', 'LET’S GO'] },
  { title: 'The truck did not stop', tags: '#gta #crash #fail', time: '31:48 - 32:20', cap: ['I', 'CRASHED', 'INTO A TRUCK'] },
];

export function AppPreview() {
  return (
    <section className={`${container} py-24`}>
      <SectionHead
        eyebrow="The app"
        title="A local web UI with live progress."
        body="Drop in a file or paste a URL, watch each stage run, then review the clips in a grid. Everything is served from one process on your machine."
      />
      <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
        <div className="flex items-center gap-3 border-b border-fd-border px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-fd-border" />
            <span className="size-2.5 rounded-full bg-fd-border" />
            <span className="size-2.5 rounded-full bg-fd-border" />
          </div>
          <span className="mx-auto rounded-md border border-fd-border bg-fd-background px-3 py-0.5 font-mono text-[11px] text-fd-muted-foreground">
            127.0.0.1:8787/#/job/a1b2c3d4
          </span>
        </div>
        <div className="flex items-center gap-6 border-b border-fd-border px-5 py-3 text-sm">
          <Wordmark size={18} />
          <span className="text-fd-muted-foreground max-sm:hidden">New job</span>
          <span className="max-sm:hidden">Jobs</span>
          <span className="text-fd-muted-foreground max-sm:hidden">Settings</span>
        </div>
        <div className="p-5 sm:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-xl font-semibold tracking-tight">gta-session-evening.mp4</h3>
              <p className="truncate font-mono text-xs text-fd-muted-foreground">
                /Users/you/Movies/gta-session-evening.mp4
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-fd-primary px-3 py-1 text-xs font-medium text-fd-primary-foreground">
              Done
            </span>
          </div>
          <div className="mb-8 grid grid-cols-3 overflow-hidden rounded-lg border border-fd-border bg-fd-background sm:grid-cols-6">
            {STEPS.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 border-r border-b border-fd-border px-3 py-2.5 text-xs text-fd-muted-foreground last:border-r-0 sm:border-b-0"
              >
                <span className="size-2 rounded-full bg-fd-foreground" />
                {s}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CLIPS.map((c) => (
              <div key={c.title} className="overflow-hidden rounded-lg border border-fd-border bg-fd-background">
                <div className="relative aspect-[9/12] bg-gradient-to-b from-neutral-700 to-neutral-950">
                  <div className="absolute inset-x-0 top-[28%] h-[26%] bg-neutral-400/40" />
                  <div className="absolute left-1/2 top-[41%] flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/30">
                    <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
                  </div>
                  <div className="absolute inset-x-0 bottom-[14%] flex justify-center">
                    <CaptionChip before={c.cap[0]} hot={c.cap[1]} after={c.cap[2]} />
                  </div>
                </div>
                <div className="space-y-1.5 p-3.5">
                  <p className="text-sm font-semibold leading-snug">{c.title}</p>
                  <p className="text-xs text-fd-muted-foreground">{c.tags}</p>
                  <p className="font-mono text-[11px] text-fd-muted-foreground">{c.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-xs text-fd-muted-foreground">
        Interface preview. Titles and footage are illustrative.
      </p>
    </section>
  );
}

/* ---------- Pipeline ---------- */

const PIPELINE = [
  ['01', 'Fetch', 'A local file, an upload, or a YouTube or Twitch URL through yt-dlp, with a live download bar.'],
  ['02', 'Transcribe', 'Whisper large-v3-turbo on the Apple GPU through Metal, with word-level timestamps.'],
  ['03', 'Analyse', 'Per-second loudness spikes and on-screen action from scene-change scores.'],
  ['04', 'Pick', 'Peaks become windows with build-up before and payoff after, snapped to sentences and cuts.'],
  ['05', 'Rank', 'Optional. A model re-ranks within guard rails and writes the title, hook and hashtags.'],
  ['06', 'Render', '1080x1920 H.264 or HEVC, loudness-normalised, several clips in parallel.'],
];

export function Pipeline() {
  return (
    <section className="border-y border-fd-border bg-fd-muted/40">
      <div className={`${container} py-24`}>
        <SectionHead
          eyebrow="How it works"
          title="Six stages, cached after the first run."
          body="Each stage saves its result, so re-rendering with a different layout skips transcription and analysis."
        />
        <div className="grid overflow-hidden rounded-xl border border-fd-border bg-fd-background sm:grid-cols-2 lg:grid-cols-3">
          {PIPELINE.map(([n, t, d]) => (
            <div key={n} className="border-b border-r border-fd-border p-6 last:border-b-0 lg:[&:nth-child(3n)]:border-r-0">
              <p className="font-mono text-xs text-fd-muted-foreground">{n}</p>
              <h3 className="mt-3 font-semibold tracking-tight">{t}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground text-pretty">{d}</p>
            </div>
          ))}
        </div>
        <Link
          href="/docs/concepts/how-it-works"
          className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
        >
          Read the full pipeline
        </Link>
      </div>
    </section>
  );
}

/* ---------- Layouts ---------- */

function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[9/16] w-28 overflow-hidden rounded-xl border border-fd-border bg-fd-foreground/10 sm:w-32">
      {children}
    </div>
  );
}

const LAYOUTS: { name: string; hint: string; phone: ReactNode; beta?: boolean }[] = [
  {
    name: 'Blur',
    hint: 'Zoomed gameplay over a blurred copy of itself.',
    phone: (
      <Phone>
        <div className="absolute inset-0 bg-fd-foreground/15 blur-[2px]" />
        <div className="absolute inset-x-0 top-[34%] h-[32%] bg-fd-foreground/55" />
      </Phone>
    ),
  },
  {
    name: 'Crop',
    hint: 'A full-height 9:16 slice. You choose the horizontal position.',
    phone: (
      <Phone>
        <div className="absolute inset-0 bg-fd-foreground/55" />
        <div className="absolute inset-y-0 left-[18%] w-px bg-fd-background/70" />
        <div className="absolute inset-y-0 right-[18%] w-px bg-fd-background/70" />
      </Phone>
    ),
  },
  {
    name: 'Facecam',
    beta: true,
    hint: 'Your webcam on top, gameplay below. Draw the box on a real frame.',
    phone: (
      <Phone>
        <div className="absolute inset-x-0 top-0 flex h-[30%] items-center justify-center bg-fd-foreground/30">
          <span className="size-7 rounded-full bg-fd-foreground/70" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-fd-foreground/55" />
        <div className="absolute inset-x-0 top-[30%] h-px bg-fd-background/80" />
      </Phone>
    ),
  },
  {
    name: 'Fit',
    hint: 'The whole 16:9 frame, no zoom. Good for cutscenes.',
    phone: (
      <Phone>
        <div className="absolute inset-x-0 top-[40%] h-[20%] bg-fd-foreground/55" />
      </Phone>
    ),
  },
];

export function Layouts() {
  return (
    <section className={`${container} py-24`}>
      <SectionHead
        eyebrow="Layouts"
        title="Four ways to fit 16:9 into 9:16."
        body="Pick a layout per job and see it on a real frame of your video before you render."
      />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {LAYOUTS.map((l) => (
          <div key={l.name} className="flex flex-col items-start gap-4">
            {l.phone}
            <div>
              <h3 className="font-semibold tracking-tight">
                {l.name}
                {l.beta && (
                  <span className="ml-2 rounded border border-fd-border px-1.5 py-0.5 align-middle font-mono text-[10px] font-semibold uppercase tracking-wider text-fd-muted-foreground">
                    Beta
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-fd-muted-foreground text-pretty">{l.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Features ---------- */

const FEATURES = [
  ['Native on Apple Silicon', 'Whisper runs on the GPU through Metal. Encoding uses the media engine through VideoToolbox. Nothing leaves your Mac unless you turn on an AI model.'],
  ['Finds the peak', 'Loudness spikes, on-screen action, speech pace and hype words combine into one excitement curve. Silence never wins.'],
  ['Captions that follow the voice', 'Word-by-word highlighted captions and a hook banner, burned in with libass from real word timestamps.'],
  ['AI ranking, optional', 'Gemini, OpenRouter, LM Studio or Ollama can re-rank candidates and write titles. If the model fails, the run finishes on signals alone.'],
  ['Re-render in seconds', 'Analysis is cached per video. Change the layout, captions or clip count without transcribing again.'],
  ['Yours to keep', 'No accounts and no subscription. Clips are saved to a folder you choose, ready to upload by hand.'],
];

export function Features() {
  return (
    <section className="border-t border-fd-border">
      <div className={`${container} py-24`}>
        <SectionHead eyebrow="Features" title="Built for gameplay, not talking heads." />
        <div className="grid gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([t, d]) => (
            <div key={t} className="bg-fd-background p-6">
              <h3 className="font-semibold tracking-tight">{t}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground text-pretty">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA + footer ---------- */

export function Cta() {
  return (
    <section className="border-t border-fd-border bg-fd-muted/40">
      <div className={`${container} flex flex-col items-center py-24 text-center`}>
        <Logo size={40} className="mb-6" />
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Point it at a recording.
        </h2>
        <p className="mt-4 max-w-md text-fd-muted-foreground text-pretty">
          Setup takes a few commands. The guides walk through each one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex h-11 items-center rounded-md bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-85"
          >
            Read the setup guide
          </Link>
          <Link
            href="/docs/guides/ai-ranking"
            className="inline-flex h-11 items-center rounded-md border border-fd-border bg-fd-background px-5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            Set up AI ranking
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-fd-border">
      <div className={`${container} flex flex-col gap-6 py-10 text-sm text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between`}>
        <div className="space-y-1">
          <Wordmark size={16} />
          <p className="max-w-md pt-2">
            Clip your own gameplay, or streamers who allow it. Reposting other people&apos;s streams without
            permission gets accounts struck.
          </p>
        </div>
        <nav className="flex gap-5">
          <Link href="/docs" className="hover:text-fd-foreground">Docs</Link>
          <Link href="/docs/guides" className="hover:text-fd-foreground">Guides</Link>
          <Link href="/docs/reference/http-api" className="hover:text-fd-foreground">API</Link>
          <Link href="/docs/troubleshooting" className="hover:text-fd-foreground">Troubleshooting</Link>
        </nav>
      </div>
    </footer>
  );
}
