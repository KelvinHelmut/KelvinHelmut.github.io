import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Experience {
    data: {
        company: string;
        role: string;
        period: string;
        location?: string;
        description?: string;
        highlights?: string[];
        technologies?: string[];
    };
}

interface Props {
    items: Experience[];
    initialCount?: number;
    seeMoreLabel: string;
    seeLessLabel: string;
}

export default function ExperienceSection({ items, initialCount = 3, seeMoreLabel, seeLessLabel }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedItems = isExpanded ? items : items.slice(0, initialCount);
    const hasMore = items.length > initialCount;

    return (
        <div className="space-y-0">
            <div className="relative">
                <AnimatePresence initial={false}>
                    {displayedItems.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={index >= initialCount ? { opacity: 0, height: 0 } : false}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="relative pl-8 pb-12 border-l border-zinc-100 dark:border-zinc-800 last:border-0 last:pb-0 overflow-hidden"
                        >
                            <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] rounded-full bg-zinc-200 dark:bg-zinc-700 border-2 border-white dark:border-[#0a0a0a]" />
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                                    {exp.data.role}
                                </h3>
                                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                    {exp.data.period}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 italic">
                                    {exp.data.company}
                                </p>
                                {exp.data.location && (
                                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                                        {exp.data.location}
                                    </span>
                                )}
                            </div>

                            {exp.data.description && (
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                    {exp.data.description}
                                </p>
                            )}

                            {exp.data.highlights && exp.data.highlights.length > 0 && (
                                <ul className="space-y-2 mb-4">
                                    {exp.data.highlights.map((item, idx) => (
                                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                                            <span className="text-zinc-300 dark:text-zinc-700 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {exp.data.technologies && (
                                <div className="flex flex-wrap gap-2">
                                    {exp.data.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded text-zinc-500 dark:text-zinc-400 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {!isExpanded && hasMore && (
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent pointer-events-none" />
                )}
            </div>

            {hasMore && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border border-zinc-100 dark:border-zinc-800 rounded-full hover:border-zinc-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm"
                    >
                        {isExpanded ? (
                            <>
                                {seeLessLabel}
                                <ChevronUp size={14} />
                            </>
                        ) : (
                            <>
                                {seeMoreLabel}
                                <ChevronDown size={14} />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
