'use client'
import { motion } from 'motion/react'
import { WISHES } from '@/lib/content'
import { Eyebrow, CtaButton } from '../ui-kit'
import { FlowerMark, SparkleMark } from '../decor'
export function WishesScreen({ onNext }: { onNext: () => void }) {
 return <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-12 text-center">
  <Eyebrow tone="gold">A few wishes for you</Eyebrow><h1 className="mt-5 font-serif text-5xl text-maroon sm:text-6xl">May life feel a little <em className="text-coral">brighter.</em></h1>
  <div className="mt-12 grid w-full gap-4 md:grid-cols-3">{WISHES.map((wish,i)=><motion.div key={wish} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:i*.15}} className="flex min-h-48 flex-col items-center justify-center border border-gold/40 bg-white/40 px-7 py-8 shadow-sm"><FlowerMark className="size-10 text-coral"/><p className="mt-5 font-serif text-2xl leading-snug text-maroon">{wish}</p></motion.div>)}</div>
  <div className="mt-10"><CtaButton onClick={onNext}>One last thing…</CtaButton></div><SparkleMark className="mt-8 size-5 text-gold"/>
 </section>
}
