import { CgSpinner } from 'react-icons/cg'

interface IButtonProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary'
  handleClick?: () => void
  loading?: boolean
  disabled?: boolean
  href?: string
  target?: string
  rel?: string
  className?: string
}

function Button(props: IButtonProps): JSX.Element {
  const { children, type, loading, handleClick, disabled, href, target, rel } =
    props

  let buttonClassName =
    'px-[24px] py-[18px] tracking-tight border-none text-center rounded-[4px] group hover:cursor-pointer active:scale-105 lg1:px-4 lg1:py-3 2xl:px-6 2xl:py-4'

  switch (type) {
    case 'secondary':
      buttonClassName += ' bg-white text-[#16181f]'
      break
    case 'primary':
    default:
      buttonClassName +=
        ' text-white bg-gradient-to-r from-[#2451B4] to-[#6E3DCD]'
      break
  }

  const textClassName = `block w-full font-archia font-bold capitalize text-[18px] leading-[24px] m-0`

  return (
    <button
      className={`${buttonClassName} ${props.className}`}
      type="button"
      disabled={disabled ?? loading}
      onClick={handleClick}
    >
      {href ? (
        <a
          href={href}
          target={target ?? '_blank'}
          rel={rel ?? ''}
          className={textClassName}
        >
          {loading && <CgSpinner className="animate-spin" />}
          {children}
        </a>
      ) : (
        <p className={textClassName}>
          {loading && <CgSpinner className="animate-spin" />}
          {children}
        </p>
      )}
    </button>
  )
}

export default Button
