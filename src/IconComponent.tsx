import React from 'react'

type IconComponentProps = {
  icon: string
  size?: number
  height?: number
  width?: number
  color?: string
  alt?: string
  style?: any
}

const IconComponent = ({ icon, height, width, color, alt }: IconComponentProps) => {
  return (
    <div>
      <p>Icon here</p>
    </div>
  )
}

export default IconComponent