import React from 'react'

export default function MenuIcon() {
  return (
    <>
    <style jsx >
        {`
        .icon:hover{
            transform:translateX(40deg)
        }
        `}
    </style>
      <svg style={{
        "height":"40px"
      }} className="icon " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
          </>
  )
}
