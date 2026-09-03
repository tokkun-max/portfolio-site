"use client";

import { motion } from "framer-motion";
import CursorGlow from "./CursorGlow";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <CursorGlow />

      {/* 背景の格子模様 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="font-mono text-sm text-accent-2">
          Web Engineer Portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          図面と向き合った2年間から、
          <br />
          <span className="gradient-text">コードと向き合う</span>毎日へ。
        </motion.h1>

        <motion.p variants={item} className="max-w-xl text-base text-muted sm:text-lg">
          設計からコーディング、CI/CDまで一貫して作り込んだポートフォリオです。半導体製造で培った品質意識と、独学で磨いたAI活用力を武器に、仕様の先にある価値を提案できるエンジニアを目指しています。
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
          <a
            href="#works"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            制作実績を見る
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
          >
            連絡する
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
