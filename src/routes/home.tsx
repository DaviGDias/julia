import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { InstagramSection } from '@/components/home/instagram';
import { About } from '@/components/home/about';
import { Practice } from '@/components/home/practice';
import { Clinic } from '@/components/home/clinic';
import { Contact } from '@/components/home/contact';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'Dra. Julia Zambonato | Clínica da Mulher em Pelotas',
    description: 'Ginecologia e Obstetrícia com escuta, conhecimento e acolhimento em Pelotas. Conheça a Dra. Julia Zambonato e a história da Clínica da Mulher.',
    image: 'https://horizons-cdn.hostinger.com/6c9b7b40-a9ba-4dee-90b4-70a43c2125df/a84065a4b99049d7f9a4936789333c9b.png',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Physician', name: 'Dra. Julia Zambonato', description: 'Especialista em Ginecologia e Obstetrícia em Pelotas, Rio Grande do Sul.', areaServed: 'Pelotas, RS' },
  });
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <InstagramSection />
      <About />
      <Practice />
      <Clinic />
      <Contact />
    </main>
  );
}
