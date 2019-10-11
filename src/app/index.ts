// External imports
import { ModuleFactory } from '@cspruit/vivi';

// Internal imports
import { ContainerComponent } from './container/container.component';
import { HiViviComponent } from './hi-vivi/hi-vivi.component';

const components = [
    { constructor: ContainerComponent },
    { constructor: HiViviComponent }
];

export const vivi: ModuleFactory = new ModuleFactory({
    componentConstructors: components,
    rootComponent: ContainerComponent
});