import { ArrowLeft } from "lucide-react";

export default function DiscoverPals() {
    return(
        <div className="flex flex-col">
            <div style={{ background: `var(--color-secondary)`, fontFamily: `var(--font-bricolage)`}} className="flex gap-1 px-2 py-1 rounded text-sm font-semibold">
                <ArrowLeft className="w-5 h-5" /> 100% PLATONIC & IDENTITY VERIFIED
            </div>
            <h1 style={{ fontFamily: `var(--font-bricolage)` }} className="text-xl font-bold">Find Your Plus-One For Any Vibe</h1>
        </div>
    )
}