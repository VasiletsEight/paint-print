# color-palette

>JavaScript library for immutable color conversion in console

## Install

> npm install color-palette

> yarn add color-palette

> pnpm add color-palette

## Usage

```
import {paint} from 'color-palette';
 
console.log(paint.red("Hello world!!!"));
console.log(paint.greenBg("Hello world!!!"));
```

### You can use call chain:

```
import {paint} from 'color-palette';

console.log(paint.blue.yellowBg("Hello world!!!"));
```

### Define your own themes:



```
import {paint} from 'color-palette';

const warning = paint.yellow;
const error = paint.redBg;

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