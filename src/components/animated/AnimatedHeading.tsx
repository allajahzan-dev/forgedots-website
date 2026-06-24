"use client";

import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

// Interface for Props
interface Props {
  children: React.ReactNode;
  className?: string;
}

// Animate heading
export const AnimateHeading: React.FC<Props> = ({ children, className }) => {
  // Helper to recursively extract words & preserve spans/br
  const renderContent = (node: React.ReactNode, i: number): React.ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((word, j) => {
        if (word.trim() === "") return " ";
        return (
          <motion.span
            key={`${i}-${j}-${word}`}
            className="inline-block"
            initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: i * 0.1 + j * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        );
      });
    }

    // Preserve nested JSX like <span> or <br />
    if (React.isValidElement(node)) {
      if (node.type === "br") return <br key={`br-${i}`} />;
      const el = node as React.ReactElement<React.PropsWithChildren<unknown>>;
      return React.cloneElement(
        el,
        { key: i },
        React.Children.map(el.props.children, (child, j) =>
          renderContent(child, i + j),
        ),
      );
    }

    return node;
  };

  return (
    <h1
      className={cn(
        "font-bold will-change-transform",
        bricolageGrotesque.className,
        className,
      )}
    >
      {React.Children.map(children, (child, i) => renderContent(child, i))}
    </h1>
  );
};
