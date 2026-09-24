import { ArrowLeft, Search, MapPin, Calendar, ArrowRight, Shapes, Shirt } from "lucide-react";

export default function DiscoverPals() {
    return(
        <div>
            {/* Banner */}
            <div className="flex flex-col px-6 py-4 mx-6 my-4 bg-gray-100 rounded-lg">
                <div style={{ background: `var(--color-secondary)`, fontFamily: `var(--font-bricolage)`}} className="flex gap-1 px-2 py-1 w-63.5 h-6.5 rounded-md text-xs font-semibold">
                    <ArrowLeft className="w-4 h-4" /> 100% PLATONIC & IDENTITY VERIFIED
                </div>
                <h1 style={{ fontFamily: `var(--font-bricolage)` }} className="text-3xl font-bold">Find Your Plus-One For Any Vibe</h1>
                <span style={{ fontFamily: `var(--font-open-sans)` }} className="text-sm text-gray-600">Zero romantic fluff, pure shared energy. Rent a verified buddy for flea markets, <br/> silent co-working, or live gigs.</span>

                {/* Filter */}
                <div className="flex flex-row bg-white mt-3 rounded-xl">
                    {/* Search Activity */}
                    <div className="flex flex-row px-3 py-2 mx-3 my-3 bg-gray-100 items-center gap-3 rounded-lg w-lg">
                        <Search style={{ color: `var(--color-primary)`}} className="w-4 h-4" />
                        <div style={{ fontFamily: `var(--font-bricolage)`}} className="flex flex-col text-xs">
                            <p className="font-semibold">Activity / Vibe</p>
                            <p className="text-gray-500">Thrifting, coffee-study, recording...</p>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="flex flex-row px-3 py-2 mr-3 my-3 bg-gray-100 items-center gap-3 rounded-lg w-70">
                        <MapPin style={{ color: `var(--color-tertiary)`}} className="w-4 h-4" />
                        <div style={{ fontFamily: `var(--font-bricolage)`}} className="flex flex-col text-xs">
                            <p className="font-semibold">City / Area</p>
                            <p className="text-gray-500">Jakarta, Indonesia</p>
                        </div>
                    </div>
                    {/* Calendar */}
                    <div className="flex flex-row px-3 py-2 mr-3 my-3 bg-gray-100 items-center gap-3 rounded-lg w-64">
                        <Calendar style={{ color: `var(--color-neutral)`}} className="w-4 h-4" />
                        <div style={{ fontFamily: `var(--font-bricolage)`}} className="flex flex-col text-xs">
                            <p className="font-semibold">When</p>
                            <p className="text-gray-500">Today / ASAP</p>
                        </div>
                    </div>
                    {/* Match */}
                    <button className="flex flex-row px-6 py-2 my-3 bg-(--color-primary) text-white text-sm font-semibold items-center gap-3 rounded-lg w-40">
                        <p style={{ fontFamily: `var(--font-bricolage)`}}>Match Vibes</p>
                        <ArrowRight style={{ color: `white`}} className="w-4 h-4" />
                    </button>
                </div>
            </div>
            {/* Categories */}
            <div className="flex flex-row mx-6 my-4">
                <button style={{ fontFamily: `var(--font-bricolage)`}} className="bg-(--color-primary) px-4 py-2 w-29.5 mr-1 rounded-lg gap-2 items-center text-sm flex flex-row text-white font-semibold">
                    <Shapes fill="white" style={{ color: "white" }} className="w-4.5 h-4.5" /> All Vibes
                </button>
                <button style={{ fontFamily: `var(--font-bricolage)`}} className="bg-gray-300 px-4 py-2 w-29.5 rounded-lg gap-2 items-center text-sm flex flex-row text-white font-semibold">
                    <Shirt style={{ color: "white" }} className="w-4.5 h-4.5" /> All Vibes
                </button>
            </div>
        </div>
    )
}