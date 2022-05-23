# paint-print

>JavaScript library for immutable output conversion in console

## Install

```
npm install paint-print

yarn add paint-print

pnpm add paint-print
```

## Usage

```
import {paint} from 'paint-print';
 
console.log(paint.red("Hello world!!!"));
console.log(paint.greenBg("Hello world!!!"));
```

### You can use call chain:

```
import {paint} from 'paint-print';

console.log(paint.blue.yellowBg("Hello world!!!"));
```

### Define your own themes:

```
import {paint} from 'paint-print';

const warning = paint.yellow;
const error = paint.redBg;

console.log(warning("Warning"));
console.log(error("Error"));
``` 

## Colors

### Front output

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- crimson

### Background colors

- blackBg
- redBg
- greenBg
- yellowBg
- blueBg
- magentaBg
- cyanBg
- whiteBg
- crimsonBg