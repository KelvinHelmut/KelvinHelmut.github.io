import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

interface Experience {
    data: {
        company: string;
        role: string;
        period: string;
        location?: string;
        description?: string;
        highlights?: string[];
        technologies?: string[];
        certificateUrl?: string;
        contractType?: string;
        workMode?: string;
    };
}

interface Props {
    items: Experience[];
    initialCount?: number;
    seeMoreLabel: string;
    seeLessLabel: string;
    certificateLabel: string;
    translations: Record<string, string>;
}

export default function ExperienceSection({ items, initialCount = 3, seeMoreLabel, seeLessLabel, certificateLabel, translations }: Props) {
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
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                                <div className="flex flex-col md:flex-row md:items-center gap-2">
                                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                                        {exp.data.role}
                                    </h3>
                                    {(exp.data.contractType || exp.data.workMode) && (
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1 md:mb-0">
                                            {exp.data.contractType && (
                                                <div className="flex items-center gap-1.5">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${exp.data.contractType === 'type.fulltime' ? 'bg-blue-500/60' :
                                                        exp.data.contractType === 'type.freelance' ? 'bg-violet-500/60' :
                                                            'bg-amber-500/60'
                                                        }`} />
                                                    <span className="text-[9px] font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
                                                        {translations[exp.data.contractType] || exp.data.contractType}
                                                    </span>
                                                </div>
                                            )}
                                            {exp.data.workMode && (
                                                <div className="flex items-center gap-1.5">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${exp.data.workMode === 'mode.remote' ? 'bg-emerald-500/60' :
                                                        exp.data.workMode === 'mode.hybrid' ? 'bg-indigo-500/60' :
                                                            'bg-zinc-400/60'
                                                        }`} />
                                                    <span className="text-[9px] font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
                                                        {translations[exp.data.workMode] || exp.data.workMode}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    {exp.data.certificateUrl && (
                                        <a
                                            href={exp.data.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-200"
                                            title={certificateLabel}
                                        >
                                            <span className="text-[9px] font-bold uppercase tracking-widest border-b border-dotted border-zinc-300 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-200">
                                                {certificateLabel}
                                            </span>
                                            <FileText size={10} className="stroke-[2.5px] opacity-70" />
                                        </a>
                                    )}
                                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                        {exp.data.period}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 italic">
                                    {exp.data.company}
                                </p>
                                {exp.data.location && (
                                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium">
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
