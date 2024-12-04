import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-wrap gap-3 p-8">
            <Skeleton className="h-[198px] w-[250px] rounded-xl" />
            <Skeleton className="h-[198px] w-[250px] rounded-xl" />
            <Skeleton className="h-[198px] w-[250px] rounded-xl" />
            <Skeleton className="h-[198px] w-[250px] rounded-xl" />
            <Skeleton className="h-[198px] w-[250px] rounded-xl" />
        </div>
    )
}