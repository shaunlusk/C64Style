import TextElement from './TextElement';
import Utils from 'slcommon/src/Utils';

/** TextElement that draws a text string or a text symbol to a canvas and provides a Hyperlink to another location.<br />
* <b>Extends</b>: {@link TextElement}
* @constructor
* @param {C64Screen} screenContext The target screen.
* @param {GfxLayer} parentLayer The parent layer that will draw this element.
* @param {Object} props Properties for this TextLink.  Supports:
* From {@link GfxElement}
*   <ul>
*     <li>scaleX - integer - Horizontal scale of this element.  Independent of screen scale.</li>
*     <li>scaleY - integer - Vertical scale of this element.  Independent of screen scale.</li>
*     <li>hidden - boolean - Whether to hide this element.</li>
*     <li>x - number - The X coordinate for this element.</li>
*     <li>y - number - The Y coordinate for this element.</li>
*     <li>zIndex - number - The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).</li>
*   </ul>
* From {@link TextElement}:
* <ul>
*   <li>text - string - The text for this element. A text string or a symbol name is required for TextElement.</li>
*   <li>symbolName - string - The symbolName for this element.  A text string or a symbol name is required for TextElement.  Refer to symbol names in {@link CharacterMap}.</li>
*   <li>color - Color - The color for the text. Default: Color.LIGHTBLUE</li>
*   <li>backgroundColor - Color - The backgroundColor for the text. Default: no background color</li>
*   <li>characterRenderer - CharacterRenderer - The renderer to use to draw text.
*     This can be shared with a renderer for drawing text elements.  If a renderer is not provided,
*     This TextLayer will create a {@link CharacterRenderer}.</li>
* </ul>
* For TextLink:
* <ul>
*   <li>mouseOverColor - Color - the text color to display when the mouse is over this element.</li>
*   <li>mouseOverBackgroundColor - Color - the text backgroundColor to display when the mouse is over this element.</li>
*   <li>onClick - function - An optional function to call when the link is clicked.</li>
*   <li>href - string - The location to navigate to when the link is clicked.</li>
*   <li>newWindow - boolean - Whether to open the new location in a new window or not.</li>
* </ul>
*/
function TextLink(props) {
  props = props || {};
  TextElement.call(this, props);
  this._mouseOverColor = props.mouseOverColor || this._color;
  this._mouseOverBackgroundColor = props.mouseOverBackgroundColor || this._backgroundColor;
  this._onClick = props.onClick;
  this._href = props.href;
  this._newWindow = props.newWindow;
  this._baseColor = this._color;
  this._baseBackgroundColor = this._backgroundColor;
  this._windowOpen = props.windowOpen || window.open;
  this._setDocumentLocation = props.setDocumentLocation || ((location) => {document.location = location});
  this.on("MOUSE_UP_ON_ELEMENT", this._click.bind(this));
  this.on("MOUSE_ENTER_ELEMENT", this._enter.bind(this));
  this.on("MOUSE_EXIT_ELEMENT", this._exit.bind(this));
};

TextLink.prototype = new TextElement({characterRenderer:{}});
TextLink.prototype.constructor = TextLink;

/** @private */
TextLink.prototype._enter = function() {
  this._setActive(true);
};

/** @private */
TextLink.prototype._exit = function() {
  this._setActive(false);
};

/** @private */
TextLink.prototype._setActive = function(bool) {
  this._mouseIsOver = bool;
  if (bool) {
    this.setColor(this._mouseOverColor);
    this.setBackgroundColor(this._mouseOverBackgroundColor);
  } else {
    this.setColor(this._baseColor);
    this.setBackgroundColor(this._baseBackgroundColor);
  }
  this.setDirty(true);
};

/** @private */
TextLink.prototype._click = function(event) {
  if (Utils.isFunction(this._onClick)) {
    var result = this._onClick(event);
    if (result !== undefined && !result) return;
  }
  if (this._href) {
    if (this._newWindow) {
      this._windowOpen(this._href, "_blank");
    } else {
      this._setDocumentLocation(this._href);
    }
  }
};

export default TextLink;
