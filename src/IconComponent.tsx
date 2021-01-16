import React from 'react'

type IconComponentProps = {
  icon: string
  size?: number
  color?: string
  alt?: string
  style?: any
}

const IconComponent = ({ icon, color, alt, size, style }: IconComponentProps) => {
  return (
    <div style={style}>
      
    </div>
  )
}

export default IconComponent