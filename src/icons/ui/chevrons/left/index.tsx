import React from 'react'
import IconComponentWrapper from '../../../../IconComponentWrapper'

import { IconProps } from '../../..'

const ChevronLeft = ({ size = 24, color = '#CCCCCC', style, containerStyle }: IconProps) => {
  return (
    <IconComponentWrapper alt="chevron left icon" style={containerStyle}>
      <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 12.3373 14.8447 12.6599 14.572 12.8838L11.1733 15.6917C10.766 16.0277 10.188 16.095 9.69933 15.8644C9.268 15.6611 9 15.2565 9 14.808L9 9.19207C9 8.74351 9.268 8.33895 9.69933 8.13567C10.188 7.90506 10.766 7.97237 11.1727 8.30762L14.572 11.1162C14.8447 11.3402 15 11.6628 15 12Z" fill="#5E00D6"/> */}
      </svg>
    </IconComponentWrapper>
  )
}

export default ChevronLeft