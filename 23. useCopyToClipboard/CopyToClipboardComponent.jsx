import React from 'react'
import useCopyToClipboard from './useCopyToClipboard'

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard()

  return (
    <>
      <button onClick={() => copyToClipboard("This was copied")}>Copy Text</button>
      <input type="text" />
    </>
  )
}
