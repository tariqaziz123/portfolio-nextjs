"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function StaggerItem({ children }: Props) {
  return (
    <motion.div
      variants={item}
      className="inline-block"
    >
        <div className="mt-4 mr-1">
      {children}

        </div>
    </motion.div>
  );
}