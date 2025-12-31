"use client";

import { useEffect, useState } from "react";
import { motion, MotionProps } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

type Props = {
    children: string;
    className?: string;
    trigger?: boolean;
} & MotionProps;

export const TextScramble = ({ children, className, trigger = true, ...props }: Props) => {
    const [text, setText] = useState(children);
    const [scrambling, setScrambling] = useState(false);

    useEffect(() => {
        if (!trigger) return;

        let pos = 0;
        const interval = setInterval(() => {
            const scrambled = children.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    const randomCharFromText = children[Math.floor(Math.random() * children.length)];

                    return Math.random() > 0.5 ? randomChar : randomCharFromText;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= children.length * CYCLES_PER_LETTER) {
                clearInterval(interval);
                setText(children);
                setScrambling(false);
            }
        }, SHUFFLE_TIME);

        setScrambling(true);

        return () => clearInterval(interval);
    }, [children, trigger]);

    return (
        <motion.span className={className} {...props}>
            {text}
        </motion.span>
    );
};
