import { Spotlight } from "@/components/ui/Spotlight";
import HomeWrapper from "@/components/HomeWrapper";
import { useTranslations } from "use-intl";

const handleDownload = async () => {
  const res = await fetch("/api/file");
  const blob = await res.blob();
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "CV_YOUNES.pdf");
  document.body.appendChild(link);
  link.click();
  link?.parentNode?.removeChild(link);
};

export default function HomePage() {
  const t = useTranslations("Home");
  return (
    <HomeWrapper>
      <div className={`h-screen flex items-center justify-center text-white`}>
        <Spotlight />
        <div
          className="flex items-center justify-center gap-4
                lg:gap-0 p-[1.7rem] pt-2 flex-col text-center h-3/4"
        >
          <h1 className="text-6xl font-bold lg:text-[5.4rem] flex flex-col ">
            Hi, Younes here
            <br />a web developer.
          </h1>
          <div className=" text-md lg:text-xl pt-2 flex items-center justify-center flex-col">
            <p className="w-full lg:w-1/2">
              I build scalable and reliable web applications from stable backend
              and frontend libraries and frameworks that work and generate
              revenue for you !
            </p>
            <button
              disabled
              onClick={handleDownload}
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-8"
            >
              Get my resume
            </button>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}
