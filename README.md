# color-palette

>JavaScript library for immutable color conversion in console

## Install

> npm install color-palette

> yarn add color-palette

> pnpm add color-palette

## Usage

```
import palette from 'color-palette';
 
console.log(palette.red("Hello world!!!"));
console.log(palette.greenBg("Hello world!!!"));
```

### You can use call chain:

```
import palette from 'color-palette';

console.log(palette.blue.yellowBg("Hello world!!!"));
```

### Define your own themes:



```
import palette from 'color-palette';

const warning = palette.yellow;
const error = palette.redBg;

console.log(warning("Warning"));
console.log(error("Error"));
``` 

## Colors

### Front color

- **black**
- **red**
- **green**
- **yellow**
- **blue**
- **magenta**
- **cyan**
- **white**
- **crimson**

### Background colors

- **blackBg**
- **redBg**
- **greenBg**
- **yellowBg**
- **blueBg**
- **magentaBg**
- **cyanBg**
- **whiteBg**
- **crimsonBg**