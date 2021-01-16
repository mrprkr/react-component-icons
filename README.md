# React component icons
SVG icons wrapped as react-components for easy styling

Why use component icons?
- Easy vector graphics for common UI icons
- Change the color and size using props
- ES6 module imports (only import what you need and save load time)
- Typescript types
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
```js
import { IconSettings } from 'react-component-icons'
```

Add to react components as needed:
```js
<IconSettings size={24} color='#999999' />
```

Additional props:
- Style: Customise the wrapper
- Alt: Provide your own alt-tag