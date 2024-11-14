import React, { useRef, useState } from 'react'
import useClickOutside from './useClickOutSide'

export default function ClickOutsideComponent() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  useClickOutside(modalRef, () => {
    if (open) setOpen(false)
  })

  return (
    <>
      <button onClick={() => {
        setOpen(true)
        console.info(open)
      }}>Open</button>
      {open && <div ref={modalRef} style={{
        display: 'block',
        background: "blue",
        color: "white",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
        textAlign: "center"
      }}>
        <span>Modal</span>
      </div>}
    </>
  )
}
