# React component icons
SVG icons wrapped as react-components for easy styling

Why use component icons?
- Easily resizable, vector graphics
- Change the color with prop
- ES6 module imports (only import what you need and save load time)
- More accessible with alt tags

Advantages over other libraries:
- Import the whole icon set bloating load times
- Don't allow easy coloring
- Seperate line/outline/filled icons

Coming soon:
- More icons!
- Adjust stroke weight with prop
- Swap line/fill/outline style with prop
- BYO SVG icons with helper wrapper


## Usage
Import the icons you need
`import { Example } from 'react-component-icons'`

Add to react components as needed
`<Example size={} color='#999999' />`

Additional props:
- Style: Customise the wrapper
- Alt: Provide your own alt-tag