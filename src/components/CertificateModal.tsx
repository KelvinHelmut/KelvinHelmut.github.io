import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface Props {
    src: string;
    alt: string;
    triggerType?: "image" | "icon";
    children?: React.ReactNode;
}

export default function CertificateModal({ src, alt, triggerType = "image", children }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            {/* Trigger */}
            <div
                onClick={() => setIsOpen(true)}
                className={`cursor-zoom-in relative group ${triggerType === "image" ? "w-full" : "inline-flex"}`}
            >
                {children}
                {triggerType === "image" && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 dark:bg-zinc-900/90 p-2 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                            <ZoomIn className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
                        />

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative z-10 w-full max-w-5xl max-h-full flex items-center justify-center"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <img
                                src={src}
                                alt={alt}
                                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
