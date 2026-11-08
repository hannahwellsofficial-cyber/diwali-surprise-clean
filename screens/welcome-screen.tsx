'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { SparkleMark } from '../decor'
import { Eyebrow, CtaButton } from '../ui-kit'
import { RECIPIENT } from '@/lib/content'
import hero from '../diwali-hero.png'
export function WelcomeScreen({ onNext }: { onNext: () => void }) {
 return <section className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 py-8 md:grid-cols-2 md:py-14">
  <div className="order-2 md:order-1">
   <Eyebrow>A little Diwali magic</Eyebrow>
   <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="mt-6 font-serif text-5xl leading-[1.05] text-maroon sm:text-6xl lg:text-7xl">Look who’s here,<br/><em className="text-coral">{RECIPIENT}.</em></motion.h1>
   <p className="mt-6 max-w-md text-base leading-8 text-muted sm:text-lg">I made something little and special for you. A few lights, a few wishes, and a tiny Diwali surprise. ✨</p>
   <div className="mt-9"><CtaButton onClick={onNext}>Let’s begin</CtaButton></div>
   <p className="mt-5 font-hand text-2xl text-coral">Made with a little extra warmth ♡</p>
  </div>
  <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="order-1 relative mx-auto w-full max-w-[510px] md:order-2">
   <div className="absolute -inset-4 rounded-[48%] bg-gold/10 blur-2xl"/>
   <div className="relative overflow-hidden rounded-t-[48%] border border-gold/40 bg-[#f6e5d0] p-3 shadow-[0_30px_70px_-35px_rgba(94,38,48,.35)]">
    <Image src={hero} alt="Warm Diwali lights and festive decor" priority className="h-auto w-full rounded-t-[48%] object-cover"/>
   </div>
   <SparkleMark className="absolute -right-3 top-12 size-9 text-gold"/>
  </motion.div>
 </section>
}
