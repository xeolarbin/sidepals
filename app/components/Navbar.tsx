import Link from "next/link";
import { Search, Bell, CirclePlus, CircleUser } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-black w-full rounded-t-xl gap-4">
            {/* Left */}
            <div className="flex items-center gap-3">
                <div>
                    ^^
                </div>
                <span style={{ fontFamily: 'var(--font-bricolage)'}} className="text-xl font-extrabold">SidePals</span>
                {/* <span style={{ background: 'var(--color-secondary)'}} className="border-black border-2 rounded text-[10px] font-bold px-1.5 py-0.5 tracking-wider">BETA</span> */}
            </div>
            {/* Center */}
            <div style={{ fontFamily: `var(--font-bricolage)`}} className="hidden md:flex items-center gap-8 border-2 border-black rounded-lg px-6 py-2">
                <Link href="/discover-pals" className="hover:font-semibold hover:translate-y-[1px] transition-all"> Discover Pals</Link>
                <Link href="/my-hangouts" className="hover:font-semibold hover:translate-y-[1px] transition-all"> My Hangouts </Link>
                <Link href="/live-safety-hub" className="hover:font-semibold hover:translate-y-[1px] transition-all"> Live Safety Hub </Link>
                <Link href="/community-safety-hub" className="hover:font-semibold hover:translate-y-[1px] transition-all"> Community Safety Hub </Link>
            </div>
            {/* Right */}
            <div className="flex items-center gap-3">
                {/* Search Bar */}
                <div className="relative flex items-center w-64 h-10 border-black border-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white overflow:hidden">
                    <Search className="w-4 h-4 text-gray-500 ml-3" />
                    <input style={{ fontFamily: `var(--font-body)`}} type="text" placeholder="Filter vibes (e.g thrifting, vinyl)..."
                    className="w-full h-full px-2 text-sm outline-none placeholder:text-gray-400" />
                </div>
                {/* Notif Button */}
                <button className="flex cursor-pointer items-center px-2 h-10 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-gray-100 hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Bell className="w-5 h-5" />
                </button>
                {/* Become a Pal */}
                <button style={{ background: `var(--color-primary)`, fontFamily: `var(--font-bricolage)`}} className="cursor-pointer text-white font-semibold text-sm flex items-center gap-2 px-2 h-10 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <CirclePlus className="w-4 h-4" /> Become a Pal
                </button>
                {/* Profile */}
                <button className="relative cursor-pointer hover:translate-y-[1px] transition-transform">
                    <div>
                       <CircleUser className="w-9 h-9 text-light"/> 
                       <div style={{ background: `var(--color-secondary)`}} className="absolute w-3 h-3 bottom-0 right-0 rounded-full border-2 border-black"></div>
                    </div>
                </button>
            </div>
        </nav>
    )
}