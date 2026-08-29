"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid, Zap, Palette, Brain, Lightbulb, Egg, Apple, Grid3x3, SpellCheck2, Crosshair, PenTool, Puzzle, Calculator, Sparkles, Search, Repeat, Globe, Target, Snowflake, Waves, Landmark } from "lucide-react";

export default function GamesDirectory() {
    const [activeCategory, setActiveCategory] = useState("All");

    const games = [
        {
            id: "memory-matrix",
            name: "Memory Matrix",
            description: "Improve your spatial recall by remembering exact tile sequences.",
            category: "Memory",
            icon: LayoutGrid,
            cardBg: "bg-gradient-to-br from-orange-400 to-orange-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "speed-match",
            name: "Speed Match",
            description: "Enhance your processing speed by matching symbols quickly before time runs out.",
            category: "Speed",
            icon: Zap,
            cardBg: "bg-gradient-to-br from-yellow-400 to-amber-500",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "color-clash",
            name: "Color Clash",
            description: "Train cognitive flexibility by matching the meaning of the word vs its ink color.",
            category: "Attention",
            icon: Palette,
            cardBg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "daily-teaser",
            name: "Daily Brain Teaser",
            description: "A new logic puzzle every day to keep your problem-solving skills sharp.",
            category: "Logic",
            icon: Lightbulb,
            cardBg: "bg-gradient-to-br from-purple-400 to-purple-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "egg-catcher",
            name: "Egg Toss",
            description: "A fun and addictive timing game! Toss the egg into the moving basket.",
            category: "Reflex",
            icon: Egg,
            cardBg: "bg-gradient-to-br from-green-500 to-green-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "monkey-fruit-drop",
            name: "Monkey Fruit Drop",
            description: "Catch the falling blackberries in your mouth and avoid getting hit on the head!",
            category: "Reflex",
            icon: Apple,
            cardBg: "bg-gradient-to-br from-pink-500 to-rose-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "sudoku",
            name: "Sudoku",
            description: "The classic 9x9 number puzzle. Train your logical thinking and pattern recognition.",
            category: "Logic",
            icon: Grid3x3,
            cardBg: "bg-gradient-to-br from-blue-500 to-indigo-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "word-formation",
            name: "Word Formation",
            description: "Connect letters to form words. Expand your vocabulary and quick thinking.",
            category: "Language",
            icon: SpellCheck2,
            cardBg: "bg-gradient-to-br from-teal-400 to-teal-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "word-2-picture",
            name: "Word 2 Picture",
            description: "Match words to their correct pictures. Build your vocabulary visually.",
            category: "Language",
            icon: Brain,
            cardBg: "bg-gradient-to-br from-cyan-400 to-cyan-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "country-shooter",
            name: "Country Shooter",
            description: "Test your geography knowledge by shooting the correct properties of different countries.",
            category: "Knowledge",
            icon: Crosshair,
            cardBg: "bg-gradient-to-br from-sky-400 to-blue-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "global-genius",
            name: "Global Genius",
            description: "Explore the world, match capitals into treasure jars, and master global geography.",
            category: "Knowledge",
            icon: Globe,
            cardBg: "bg-gradient-to-br from-blue-500 to-teal-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "word-canve",
            name: "Word Canvas",
            description: "Paint with words and challenge your vocabulary in this creative word game.",
            category: "Language",
            icon: PenTool,
            cardBg: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "word-puzzle",
            name: "Word Puzzle",
            description: "Solve challenging word puzzles to expand your vocabulary and analytical thinking.",
            category: "Language",
            icon: Puzzle,
            cardBg: "bg-gradient-to-br from-rose-400 to-rose-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "math-puzzle",
            name: "Math Puzzle",
            description: "Sharpen your mental math and logical reasoning with numeric challenges.",
            category: "Logic",
            icon: Calculator,
            cardBg: "bg-gradient-to-br from-indigo-400 to-indigo-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "train-game",
            name: "Train Game",
            description: "Train your brain with numerical paths and connect the dots.",
            category: "Logic",
            icon: Calculator,
            cardBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "find-room",
            name: "Find Room",
            description: "Find hidden objects in the room scenes and boost your observational skills.",
            category: "Attention",
            icon: Search,
            cardBg: "bg-gradient-to-br from-pink-500 to-rose-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "loop-game",
            name: "Loop Game",
            description: "Connect paths and close endless loops to test your spatial reasoning.",
            category: "Logic",
            icon: Repeat,
            cardBg: "bg-gradient-to-br from-violet-500 to-purple-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "bubble-pop-safari",
            name: "Bubble Pop Safari",
            description: "Pop numbered bubbles, spell words in magic buckets, and brew letters in the wizard's cauldron!",
            category: "Reflex",
            icon: Sparkles,
            cardBg: "bg-gradient-to-br from-amber-500 to-orange-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "state-capital-shooter",
            name: "State Capital Shooter",
            description: "Aim your cannon and shoot the correct US state capitals in glossy bubbles to test your geography accuracy.",
            category: "Knowledge",
            icon: Target,
            cardBg: "bg-gradient-to-br from-red-500 to-amber-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "country-symbol-matcher",
            name: "Country Symbol Matcher",
            description: "Connect country flags to their national symbols across a snowy board using 2-turn pathfinding.",
            category: "Knowledge",
            icon: Snowflake,
            cardBg: "bg-gradient-to-br from-cyan-500 to-blue-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "river-country-game",
            name: "River Country Challenge",
            description: "Master city, country, river, and mnemonic associations in an interactive football quiz challenge.",
            category: "Knowledge",
            icon: Waves,
            cardBg: "bg-gradient-to-br from-blue-600 to-indigo-800",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "parliament-master",
            name: "Parliament Master",
            description: "Test your legislative and world parliament trivia in an arcade archery hall setting.",
            category: "Knowledge",
            icon: Landmark,
            cardBg: "bg-gradient-to-br from-emerald-800 to-teal-950",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "trivia-smash",
            name: "Trivia Smash",
            description: "Smash through 3D blocks while answering engaging trivia questions in a ping-pong style game.",
            category: "Knowledge",
            icon: Target,
            cardBg: "bg-gradient-to-br from-pink-600 to-purple-800",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "institute-orbit",
            name: "Institute Orbit",
            description: "Launch into orbit and navigate through educational institutes in this space-themed challenge.",
            category: "Knowledge",
            icon: Target,
            cardBg: "bg-gradient-to-br from-indigo-500 to-purple-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "seven-wonders",
            name: "Seven Wonders",
            description: "Explore the ancient wonders of the world in an engaging, interactive journey.",
            category: "Knowledge",
            icon: Globe,
            cardBg: "bg-gradient-to-br from-amber-600 to-orange-800",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "mystery-pointer",
            name: "Mystery Pointer(Vocab)",
            description: "Move your flashlight to discover hidden answers in the dark room quiz.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-gray-700 to-gray-900",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-sick-room",
            name: "Wonder Sick Room",
            description: "Find hidden wonders in the sick room and complete the puzzle adventure.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-purple-500 to-indigo-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-assembly-hall",
            name: "Wonder Assembly Hall",
            description: "Explore the assembly hall and solve interactive challenges.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-indigo-500 to-blue-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-bath-room",
            name: "Wonder Bath Room",
            description: "Find your way through the wonderful bathroom puzzles.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-bed-room",
            name: "Wonder Bed Room",
            description: "Solve puzzles and mysteries in the wonderful bed room.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-pink-400 to-rose-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-school-toilet",
            name: "Wonder School Toilet",
            description: "Find your way through the wonderful school toilet puzzles.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-school-bus",
            name: "Wonder School Bus",
            description: "Hop on the wonderful school bus and solve fun puzzles.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-yellow-400 to-amber-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-principal-room",
            name: "Wonder Principal Room",
            description: "Solve puzzles in the principal's office.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-red-500 to-rose-700",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-library",
            name: "Wonder Library",
            description: "Discover the hidden secrets of the wonder library.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
        {
            id: "wonder-play-ground",
            name: "Wonder Play Ground",
            description: "Have fun and solve puzzles in the wonder play ground.",
            category: "Logic",
            icon: Search,
            cardBg: "bg-gradient-to-br from-green-500 to-teal-600",
            textColor: "text-white",
            pillBg: "bg-white/20",
            pillText: "text-white",
            disabled: false,
        },
    ];

    const categories = ["All", ...Array.from(new Set(games.map(g => g.category)))];

    const filteredGames = activeCategory === "All"
        ? games
        : games.filter(g => g.category === activeCategory);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2 flex items-center gap-3 text-foreground">
                        <Brain className="w-10 h-10 text-primary-500" />
                        Free Game Zone
                    </h1>
                    <p className="text-text-muted text-lg font-medium">Choose an exercise to target specific cognitive skills.</p>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${activeCategory === category
                                    ? "bg-primary-600 text-white shadow-md shadow-primary-200"
                                    : "bg-white text-text-muted border border-gray-200 hover:border-primary-300 hover:text-primary-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => {
                    const Icon = game.icon;
                    return (
                        <div
                            key={game.id}
                            className={`
                relative rounded-3xl p-6 shadow-lg border border-white/10
                group overflow-hidden transition-all duration-300
                ${game.cardBg}
                ${game.disabled ? 'opacity-60 grayscale' : 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer'}
              `}
                        >
                            {/* Subtle overlay glow */}
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

                            {game.disabled && (
                                <div className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full bg-black/20 text-white backdrop-blur-md">
                                    Coming Soon
                                </div>
                            )}

                            <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                <Icon className={`w-7 h-7 text-white drop-shadow-sm`} />
                            </div>

                            <h3 className={`relative z-10 text-2xl font-extrabold mb-2 ${game.textColor}`}>{game.name}</h3>
                            <p className={`relative z-10 text-sm mb-8 font-medium leading-relaxed opacity-90 ${game.textColor}`}>{game.description}</p>

                            <div className="relative z-10 flex items-center justify-between mt-auto">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${game.pillBg} ${game.pillText}`}>
                                    {game.category}
                                </span>

                                {!game.disabled ? (
                                    <Link
                                        href={`/games/${game.id}`}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 group-hover:scale-110 group-hover:shadow-lg transition-all"
                                    >
                                        <span className="sr-only">Play</span>
                                        <span aria-hidden="true" className="font-bold text-lg leading-none mb-0.5">→</span>
                                    </Link>
                                ) : (
                                    <button disabled className="text-sm font-bold text-gray-400 cursor-not-allowed">
                                        Locked
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}

                {filteredGames.length === 0 && (
                    <div className="col-span-full py-12 text-center text-text-muted font-medium">
                        No games found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
