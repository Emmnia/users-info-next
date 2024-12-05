import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    const skeletonCount = 10;

    return (
        <div className="flex flex-wrap justify-center gap-3 py-20 px-8">
            {[...Array(skeletonCount)].map((_, index) => (
                <Skeleton key={index} className="h-[198px] w-[250px] rounded-xl" />
            ))}
        </div>
    )
}