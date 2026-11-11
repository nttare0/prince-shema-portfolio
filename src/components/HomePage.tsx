import { Spotlight } from "@/components/ui/Spotlight";
import HomeWrapper from "@/components/HomeWrapper";
import { ArrowUpRight, Github } from "lucide-react";

export default function HomePage() {
  return (
    <HomeWrapper>
      <div className={`h-screen flex items-center justify-center text-white`}>
        <Spotlight />
        <div
          className="flex items-center justify-center gap-4
                lg:gap-0 p-[1.7rem] pt-2 flex-col text-center h-3/4"
        >
          <h1 className="text-5xl font-bold lg:text-[5rem] flex flex-col">
            Hi, I&apos;m Prince.
            <br />a software engineer.
          </h1>
          <div className="text-md lg:text-xl pt-2 flex items-center justify-center flex-col">
            <p className="w-full lg:w-1/2">
              Software engineer in Rwanda building for the web — 32 public
              repos, mostly TypeScript, everything built in the open.
            </p>
            <a
              href="https://github.com/nttare0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 mt-8"
            >
              <Github className="w-5 h-5" />
              View my GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}
