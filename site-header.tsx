'use client'
import { Music2, VolumeX } from 'lucide-react'
type Props = { step: number; total: number; onSelect: (step: number) => void; playing: boolean; onToggleMusic: () => void }
export function SiteHeader({ step, total, onSelect, playing, onToggleMusic }: Props) {
  return <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-[70px]">
    <div className="font-serif text-xl italic text-maroon sm:text-2xl">a little surprise <span className="text-gold">✳</span></div>
    <nav aria-label="Invitation progress" className="hidden items-center gap-2 sm:flex">
      {Array.from({length: total}, (_,i) => <button key={i} aria-label={`Go to part ${i+1}`} onClick={() => onSelect(i)} className={`h-1.5 rounded-full transition-all ${i===step ? 'w-8 bg-maroon' : 'w-3 bg-gold/40 hover:bg-gold'}`} />)}
    </nav>
    <button data-music-toggle onClick={onToggleMusic} aria-label={playing ? 'Mute music' : 'Play music'} className="grid size-10 place-items-center rounded-full border border-gold/50 text-maroon transition hover:bg-cream-deep">
      {playing ? <Music2 size={17}/> : <VolumeX size={17}/>}
    </button>
  </header>
}
