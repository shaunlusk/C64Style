import { Layer, LayerFactory, ILayerFactory } from '@shaunlusk/slgfx';
import { ITextLayerProps, TextLayer } from './TextLayer';

LayerFactory.DefaultTypes['TextLayer'] = function(props: ITextLayerProps): Layer {
  return new TextLayer(props);
};

export { LayerFactory };
