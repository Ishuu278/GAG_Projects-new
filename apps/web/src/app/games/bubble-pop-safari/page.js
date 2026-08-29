"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import InGameAdminConfig from "@/components/InGameAdminConfig";
import { getApiBaseValue, getSlugValue } from "@/api/questions";

export default function BubblePopSafariGame() {
  const [iframeSrc, setIframeSrc] = useState("https://viebrain-games.b-cdn.net/bubble-pop-safari/index.html");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const api = getApiBaseValue();
    const slug = getSlugValue("bubble-pop-safari");
    setIframeSrc(`https://viebrain-games.b-cdn.net/bubble-pop-safari/index.html?api=${encodeURIComponent(api)}&slug=${encodeURIComponent(slug)}`);
  }, [key]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8" style={{ height: "calc(100vh - 80px)", marginTop: "80px" }}>
      <div className="flex items-center justify-between mb-4">
        <Link href="/games" className="inline-flex items-center text-text-muted hover:text-primary-600 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Games
        </Link>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-foreground">Bubble Pop Safari</h1>
          <InGameAdminConfig
            defaultSlug="bubble-pop-safari"
            onQuestionsReload={() => setKey((k) => k + 1)}
          />
        </div>
      </div>
      <div className="w-full h-[calc(100%-60px)] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
        <div className="absolute inset-0 bg-gray-50 animate-pulse -z-10 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
        <iframe
          key={key}
          src={iframeSrc}
          className="w-full h-full border-none bg-white relative z-10"
          title="Bubble Pop Safari"
        />
      </div>
    </div>
  );
}
