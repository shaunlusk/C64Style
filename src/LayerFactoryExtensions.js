import LayerFactory from 'slgfx/src/LayerFactory';
import TextLayer from './TextLayer';

LayerFactory.DefaultTypes.TextLayer = function(props) {
  return new TextLayer(props);
};

export default LayerFactory;
