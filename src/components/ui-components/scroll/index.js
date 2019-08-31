import React, {useRef, useState, useEffect} from 'react'
import BScroll from '@better-scroll/core'



export default function Scroll(props) {
  const [bs, setBs] = useState(null)
  const container = useRef(null)
  const { direction } = props
  useEffect(() => {
    if (bs) {
      bs.refresh()
      bs.scrollTo(0, 0, 100)
    } else {
      setBs(new BScroll(container.current,{
        scrollX: direction.scrollX,
        scrollY: direction.scrollY,
        useTransition: true,
        momentum: true,
        bounce: false,
        click: true,
        stopPropagation: true,
        probeType: 2
      }))
    }
  })
  return <div ref={container} style={{height: '100%'}}>
  {props.children}
  </div>
}