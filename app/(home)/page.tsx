import { AppPreview, Cta, Features, Footer, Hero, Layouts, Pipeline } from '@/components/landing';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <AppPreview />
      <Pipeline />
      <Layouts />
      <Features />
      <Cta />
      <Footer />
    </main>
  );
}
