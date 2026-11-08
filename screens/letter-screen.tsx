'use client'
import { Eyebrow, CtaButton } from '../ui-kit'
import { AnimatedEnvelope } from '../animated-envelope'
export function LetterScreen({ onNext }: { onNext: () => void }) {
 return <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-10 text-center">
  <Eyebrow>A note, from me to you</Eyebrow><h1 className="mt-5 font-serif text-5xl text-maroon sm:text-6xl">A little letter <em className="text-coral">inside.</em></h1><p className="mt-4 max-w-lg leading-7 text-muted">There are a few words I wanted to share with you. Tap the seal whenever you’re ready.</p>
  <div className="mt-8 w-full"><AnimatedEnvelope/></div><div className="mt-8"><CtaButton onClick={onNext} variant="gold">Some more wishes</CtaButton></div>
 </section>
}
