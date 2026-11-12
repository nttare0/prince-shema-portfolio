import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { feedbacks } from "@/data";
export default function FeedbackSection() {
    return (
        <div className="h-[30rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center gap-7 relative overflow-hidden">
            <h1 className=" font-medium text-[2.5rem] lg:text-6xl">Thank You✨</h1>
            <InfiniteMovingCards
                items={feedbacks}
                direction="right"
                speed="slow"
            />
        </div>
    );
}
