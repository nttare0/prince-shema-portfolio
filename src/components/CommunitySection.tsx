import SparklesPreview from "@/components/SparklesPreview";
import Image from "next/image";
import { communityData } from "@/data";

export default function CommunitySection() {
    return (
        <div className=" flex flex-col items-center gap-20 py-3 lg:py-9">
            <SparklesPreview />
            <div className="w-full flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-auto h-auto gap-7">
                    {
                        communityData.map((data, index) => {
                            return (
                                <div key={index} className="w-[300px] h-[410px] p-3 bg-white rounded-xl flex flex-col items-center gap-4">
                                    <div className="w-full h-full relative">
                                        <Image src={data.img} layout="fill" objectFit="cover" alt='something' className="rounded-xl" />
                                    </div>
                                    <div className="w-full h-full rounded-xl text-black flex flex-col justify-between">
                                        <p className="text-2xl font-bold">{data.title}</p>
                                        <p className=" text-[15px] text-zinc-800 overflow-hidden">{data.description}</p>
                                        <div className="flex text-sm w-full justify-between items-center">
                                            <p className="text-zinc-600">{data.date}</p>
                                            <button type="button" className="rounded-lg text-[12px] bg-black text-zinc-200 p-2 w-30 font-medium">Read more</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                        )
                    }

                </div>
            </div>
        </div>
    )
}
