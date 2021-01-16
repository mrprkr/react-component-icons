import React from 'react'

type IconComponentWrapperProps = {
  alt?: string
  style?: any
  children?: React.ReactElement
}

const IconComponentWrapper = ({ alt="Icon", style, children }: IconComponentWrapperProps) => {
  return (
    <div style={style}>
      <img alt={alt} style={{ display: 'none' }}/>
      { children }
    </div>
  )
}

export default IconComponentWrapper