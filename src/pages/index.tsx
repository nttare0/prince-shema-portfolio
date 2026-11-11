import HomePage from "@/components/HomePage";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import TechnologiesSection from "@/components/Technologies";
import { HeroParallax } from "@/components/ui/hero-parallax";
import CommunitySection from "@/components/CommunitySection";

import { projects } from "../data";
import { navitems } from "../data";

import FeedbackSection from "@/components/FeedbackSection";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <div className={`${poppins.className} bg-black overflow-hidden`}>
      <FloatingNav navItems={navitems} />
      <HomePage />
      <WorkExperienceSection />
      <TechnologiesSection />
      <HeroParallax projects={projects} />
      <CommunitySection />
      <FeedbackSection />
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
