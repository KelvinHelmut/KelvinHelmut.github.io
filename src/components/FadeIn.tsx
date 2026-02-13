import { motion } from "framer-motion";
import React from 'react';

interface Props {
    children: React.ReactNode;
    delay?: number;
}

export default function FadeIn({ children, delay = 0 }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
        >
            {children}
        </motion.div>
    );
}
