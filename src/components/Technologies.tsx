import { Outfit } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { technologies } from "@/data"
const outfit = Outfit({
    subsets: ["latin"],
})

export default function TechnologiesSection() {

    return (
        <div className={`${outfit.className} h-auto bg-dark-black p-10 mx-auto mt-6 rounded-xl max-w-[90%] lg:max-w-5xl flex flex-col gap-8 text-white`}>
            <header className="flex flex-col gap-4">
                <p className="text-2xl lgtext-4xl font-bold">I build with,</p>
                <p className=" text-gray-400 text-[0.8rem] lg:text-[1.1rem]">I constantly learn new and exciting concepts in computer science and web development. I try applying these concepts to solve real-world problems. A few technologies I enjoy working with:</p>
            </header>
            <section className="grid grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    technologies.map((tech, index) => {
                        return (
                            <p key={index} className="text-[0.8rem] lg:text-[1.1rem] text-gray-300 hover:text-white font-medium flex gap-2 items-center  hover:translate-x-1 transition-transform cursor-pointer "><ArrowRight className="w-4 h-4 hidden lg:block text-green-400" />{tech}</p>
                        )
                    })
                }
            </section>
        </div>
    )
}
