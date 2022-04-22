# C64Style

## What is it?
A library for rendering Commodore 64 style graphics with JavaScript and HTML5 Canvas.  It is an extension of [slgfx](https://shaunlusk.github.io/slgfx/index.html).

- Fun for creating retro-style games and animations.
- Lightweight

## What isn't it?
C64Style is not an emulator.

## How do I use it?

### Basic Usage
Install it:

    npm install @shaunlusk/C64Style

Create a div to hold the screen and its components:

    <div id="content">
    </div>

Then setup your screen:

```javascript
// get the screen element
var targetDiv = document.getElementById("content");

// create basic configuration
var config = {
  layerFactory:new C64Style.LayerFactory(),
  targetDiv:document.getElementById("content")
};

// create the screen
screen = new C64Style.C64Panel(config);

// call initialize on screen
screen.initialize();

// add a layer to draw to
textLayer = screen.createLayer("TextLayer", {
  registerKeyHandler : screen.addEventListenerToDocument,
  characterRenderer : characterRenderer
});

// Write some text to the layer
textLayer.writeText("Hello World", 0, 0, C64Style.Color.LIGHTBLUE);

// Start rendering!
screen.render();
```

### [Documentation](https://shaunlusk.github.io/C64Style/docs/index.html)

### [Tutorial - Alien Invasion](https://shaunlusk.github.io/C64Style/demos/tutorial.html)

### [Tools](https://shaunlusk.github.io/C64Style/tools/index.html)
