# React Component Icons
SVG icons wrapped as react-components for quick implementation and easy styling

Why use component icons?
- Easy vector graphics for common UI icons
- Change the color and size using props
- ES6 module imports (only import what you need and save load time)
- Written in Typescript
- More accessible with alt tags

Advantages over other libraries:
- Import the whole icon set bloating load times
- Don't allow easy coloring
- Seperate line/outline/filled icons

Anti-Pitch:
- Not as comprehensive
- Very much work-in-progress
- Mixed browser support for native SVG


Coming soon:
- More icons!
- Adjust stroke weight with prop
- Swap line/fill/outline style with prop
- BYO SVG icons with SvgIcon component


## Usage
Import the icons you need
```js
import { IconSettings } from 'react-component-icons'
```

Add to react components as needed:
```js
<IconSettings size={24} color='#999999' />
```

Optional props:
- `style`: customise the svg style
- `containerStyle`: customise the style of the wrapping container
- `alt`: Provide your own alt-tag for the icon

## Icons
All icons are 24x24px by default and are optically scaled

Categories:
- UI [work in progress]
- Nature [coming soon]
- People [coming soon]
- Science [coming soon]
- Social [coming soon]
- Buildings [coming soon]
- Misc [coming soon]

Components:
- AddIcon
- ChevronDownIcon
- ChevronRightIcon
- ComareIcon
- CrossIcon
- FilterIcon
- SettingsIcon
- SortIcon
- ExampleIcon (Used for example)
- Many more coming soon...