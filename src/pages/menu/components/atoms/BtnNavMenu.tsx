
const BtnNavMenu = ( {text, select, changeTextBtn}: {text: string, select: string, changeTextBtn: (text: string) => void } ) => {
  return (
    <button onClick={() => changeTextBtn(text)} className={` min-w-max py-1.5 px-3.5 rounded-full ${ select === text ?'bg-brand text-cream' :'border border-border bg-bgCard text-sectionDivider' } uppercase tracking-widest font-bold text-xs `}>
      {text}
    </button>
  )
}

export default BtnNavMenu