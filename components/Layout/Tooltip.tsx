import { ReactElement, useRef, useState } from 'react'
import { Float } from '@headlessui-float/react'

type Props = {
  container: ReactElement;
  onClickContainer?: () => void;
  containerClassname: string;
  content: string;
}

export default function Tooltip({ container,
  containerClassname,
  onClickContainer,
  content,

}: Props) {
  const [show, setShow] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current)
      timer.current = null
    }
    setShow(true)
  }

  const delayClose = () => {
    timer.current = setTimeout(() => {
      setShow(false)
    }, 150)
  }

  return (
    <Float
      show={show}
      placement="bottom"
      offset={12}
      arrow
    >
      <button
        onMouseEnter={open}
        onMouseLeave={delayClose}
        onClick={onClickContainer}>
        {container}
      </button>
      <div
        className={containerClassname}
        onMouseEnter={open}
        onMouseLeave={delayClose}
      >
        <Float.Arrow className="absolute bg-inherit w-4 h-4 rotate-45" />
        <div
          className="relative rounded-md overflow-hidden p-2"
        >
          <p className='text-xs text-center'>{content}</p>
        </div>
      </div>
    </Float>
  )
}