interface ITitleProps {
  children: React.ReactNode
}

function SectionTitle(props: ITitleProps): JSX.Element {
  const { children } = props

  return (
    <h1 className="font-archiaregular text-[46px] leading-[55px] relative m-0 font-bold text-center">
      {children}
    </h1>
  )
}

export default SectionTitle
