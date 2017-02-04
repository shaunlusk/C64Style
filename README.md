# C64Style

## What is it?
A framework for rendering Commodore 64 style graphics with JavaScript and HTML5 Canvas.

- Fun for creating retro-style games and animations.
- Lightweight

## What isn't it?
C64Style is not an emulator.

## How do I use it?

### Basic Usage
Install it:

    bower install shaunlusk/C64Style

Create a div to hold the screen and its components:

    <div id="content">
    </div>

Then setup your screen:

```javascript
// get the screen element
var targetDiv = document.getElementById("content");

// empty config = use defaults for everything
var config = {};

// create the screen
screen = new C64Style.Screen(targetDiv, config);

// call initialize on screen
screen.initialize();

// add a layer to draw to
textLayer = screen.createLayer("TextLayer");

// Write some text to the layer
textLayer.writeText("Hello World", 0, 0, C64Style.Color.LIGHTBLUE);

// Start rendering!
screen.render();
```

### [Documentation](https://shaunlusk.github.io/C64Style/docs/index.html)

### [Tutorial - Alien Invasion](https://shaunlusk.github.io/C64Style/demos/tutorial.html)

### [Tools](https://shaunlusk.github.io/C64Style/tools/index.html)
