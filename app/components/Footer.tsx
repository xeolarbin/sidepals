import { Copyright } from "lucide-react";

export default function Footer() {
    return (
        <footer style={{ fontFamily: `var(--font-bricolage)`}} className="flex flex-col lg:flex-row w-full border-t-2 bg-white px-6 py-4 rounded-b-xl items-center justify-between">
            {/* Right */}
            <div className="flex items-center flex-col sm:flex-row gap-2">
                <span className="text-lg font-semibold">SidePals</span>
                <p className="text-xs text-gray-500">Strictly  platonic, vibe-checked hangout. Built for real connection.</p>
            </div>
            {/* Left */}
            <div style={{ color: `var(--color-neutral)`}}className="flex items-center flex-col sm:flex-row gap-3 text-xs">
                <span className="font-semibold">ZERO CREEP POLICY</span>
                <span className="font-semibold">SOS & 24/7 ESCORT</span>
                <span className="font-semibold">CODE OF CONDUCT</span>
                <span className="text-gray-500"> © 2025 Sidekick Social Inc.</span>
            </div>
        </footer>
    )
}