import HomePage from "@/components/HomePage";
import { FloatingNav } from "@/components/ui/floating-navbar";
import TechnologiesSection from "@/components/Technologies";
import { HeroParallax } from "@/components/ui/hero-parallax";

import { projects } from "../data";
import { navitems } from "../data";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <FloatingNav navItems={navitems} />
      <HomePage />
      <TechnologiesSection />
      <HeroParallax projects={projects} />
    </div>
  );
}

interface StaticPropsContext {
  locale: string;
}

interface StaticProps {
  props: {
    messages: Record<string, string>;
  };
}

export async function getStaticProps(
  context: StaticPropsContext
): Promise<StaticProps> {
  return {
    props: {
      messages: (await import(`../../locales/${context.locale}.json`)).default,
    },
  };
}
