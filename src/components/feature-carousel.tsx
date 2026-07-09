import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import type { Pizza04Icon } from "@hugeicons/core-free-icons";

export type FeatureItem = {
  id: string;
  icon: typeof Pizza04Icon;
  image: string;
};

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 80;

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function FeatureCarousel({ items }: { items: FeatureItem[] }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndex = ((step % items.length) + items.length) % items.length;

  const nextStep = useCallback(() => setStep((p) => p + 1), []);

  const handleChipClick = (index: number) => {
    const diff = index - currentIndex;
    const len = items.length;
    const shortest = diff > 0
      ? (diff <= len / 2 ? diff : diff - len)
      : (-diff <= len / 2 ? diff : diff + len);
    if (shortest !== 0) setStep((s) => s + shortest);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = items.length;
    let nd = diff;
    if (diff > len / 2) nd -= len;
    if (diff < -len / 2) nd += len;
    if (nd === 0) return "active";
    if (nd === -1) return "prev";
    if (nd === 1) return "next";
    return "hidden";
  };

  return (
    <div id="projects-carousel" className="w-full max-w-7xl mx-auto scroll-mt-20">
      <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[3rem] flex flex-col lg:flex-row min-h-[500px] lg:aspect-video border border-white/10">
        <div className="w-full lg:w-[40%] min-h-[300px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 lg:pl-14 bg-[#62B2FE]">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40 pointer-events-none" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {items.map((feature, index) => {
              const distance = index - currentIndex;
              const wrappedDistance = wrap(-(items.length / 2), items.length / 2, distance);
              const label = t(`carousel.items.${feature.id}.label`);
              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{ y: wrappedDistance * ITEM_HEIGHT, opacity: 1 - Math.abs(wrappedDistance) * 0.25 }}
                  transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`relative flex items-center gap-4 px-6 py-3 rounded-full transition-all duration-700 text-left border text-base font-medium ${
                      index === currentIndex
                        ? "bg-white text-[#62B2FE] border-white z-10 shadow-lg"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    <div className={index === currentIndex ? "text-[#62B2FE]" : "text-white/40"}>
                      <HugeiconsIcon icon={feature.icon} size={20} strokeWidth={2} />
                    </div>
                    <span className="font-normal whitespace-nowrap">{label}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-h-[400px] lg:h-full bg-zinc-900/50 flex items-center justify-center py-12 px-6 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
            {items.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";
              const label = t(`carousel.items.${feature.id}.label`);
              const description = t(`carousel.items.${feature.id}.description`);
              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-4 border-background bg-background origin-center"
                >
                  <img src={feature.image} alt={label} loading="lazy" className="w-full h-full object-cover transition-all duration-700" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-8 pt-24 flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] w-fit shadow-lg mb-2 border border-white/10">
                          {index + 1} &bull; {label}
                        </div>
                        <p className="text-white font-normal text-lg leading-tight drop-shadow-lg">
                          {description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
