import { TracingBeam } from "@/components/ui/tracing-beam";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { workData } from "@/data";
import { WorkExperience } from "@/types";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function WorkExperienceSection() {
  const work: WorkExperience[] = workData;
  return (
    <TracingBeam
      className={`${outfit.className} h-auto max-w-[90%] bg-dark-black pl-8 py-10 lg:p-10 rounded-xl lg:max-w-5xl text-white`}
    >
      <div className=" flex flex-col gap-10">
        <header className=" text-2xl lg:text-4xl font-bold">Worked As,</header>
        {work.map((w, index) => {
          return (
            <div
              key={index}
              className="justify-between lg:justify-normal flex gap-2 w-full lg:gap-6 lg:min-w-96 "
            >
              <div className="pt-1 min-w-[15%] lg:min-w-[0%] lg:max-w-16">
                <Image
                  alt={w.company}
                  className="aspect-[3/2] object-contain lg:w-44"
                  src={w.logo}
                />
              </div>
              <div className="flex flex-col gap-9 min-w-[85%] lg:full">
                <div className="flex flex-col">
                  <div>
                    <p className="font-medium text-[0.9rem] w-4/5 lg:text-[1.3rem]">
                      {w.post}, {w.company}
                    </p>
                  </div>
                  <div>
                    <Link
                      className="font-medium flex items-center"
                      href={w.link}
                    >
                      <p className=" text-gray-400 text-[0.8rem] lg:text-[1.2rem]">
                        at, {w.company}.io
                      </p>
                      <ArrowUpRight className="text-orange-300 w-8" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-8 lg:gap-12 text-sm w-[96%] lg:w-full">
                  {w.responsabilites.map((resp, i) => {
                    return (
                      <div className="flex p-0  max-w-full" key={i}>
                        <ChevronRight className="min-w-8 text-orange-300" />
                        <p className="max-w-full">{resp}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </TracingBeam>
  );
}
