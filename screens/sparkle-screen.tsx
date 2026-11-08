'use client'
import { motion } from 'motion/react'
import { InteractiveDiya } from '../interactive-diya'
import { Eyebrow, CtaButton } from '../ui-kit'
export function SparkleScreen({ onNext }: { onNext: () => void }) {
 return <section className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 py-8 md:grid-cols-2 md:py-12">
  <div><Eyebrow tone="gold">A little moment of light</Eyebrow><h1 className="mt-6 font-serif text-5xl leading-tight text-maroon sm:text-6xl">Make a wish,<br/><em className="text-coral">light by light.</em></h1><p className="mt-5 max-w-md leading-8 text-muted">Tap the diya to light it up. Make a small wish and let this festive glow bring a little happiness your way.</p><div className="mt-8"><CtaButton onClick={onNext}>A little note for you</CtaButton></div></div>
  <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="mx-auto w-full max-w-[440px]"><InteractiveDiya/></motion.div>
 </section>
}
