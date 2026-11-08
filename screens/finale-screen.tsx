'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { FireworksCanvas } from '../fireworks-canvas'
import { Eyebrow, CtaButton } from '../ui-kit'
import finale from '../diwali-finale.png'
import { RECIPIENT } from '@/lib/content'
export function FinaleScreen({ onRestart }: { onRestart: () => void }) {
 const [celebrate,setCelebrate] = useState(0)
 return <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center overflow-hidden py-10 text-center">
  <div className="pointer-events-none absolute inset-0"><FireworksCanvas trigger={celebrate}/></div>
  <div className="relative z-10"><Eyebrow tone="gold">Until the next little moment</Eyebrow><motion.h1 initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="mt-6 font-serif text-5xl leading-tight text-maroon sm:text-7xl">Happy Diwali,<br/><em className="text-coral">{RECIPIENT}!</em></motion.h1>
  <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">May your days sparkle with joy, your home glow with warmth, and your year be filled with beautiful beginnings. ❤️</p>
  <div className="mx-auto mt-8 w-full max-w-sm overflow-hidden rounded-t-[48%] border border-gold/40 p-2"><Image src={finale} alt="A festive Diwali celebration" className="h-auto w-full rounded-t-[48%]"/></div>
  <div className="mt-8 flex flex-wrap justify-center gap-3"><CtaButton onClick={()=>setCelebrate(v=>v+1)}>More sparkle</CtaButton><CtaButton variant="outline" className="border-maroon/30 text-maroon hover:border-maroon hover:text-maroon" onClick={onRestart}>See it again</CtaButton></div></div>
 </section>
}
