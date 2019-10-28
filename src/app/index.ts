// External imports
import { ModuleFactory } from '@cspruit/vivi';

// Internal imports
import { ContainerComponent } from './container/container.component';
import { HiViviComponent } from './hi-vivi/hi-vivi.component';
import { HiViviService } from './services/hi-vivi.service';

export const vivi: ModuleFactory = new ModuleFactory({
    componentConstructors: [
        { constructor: ContainerComponent },
        { constructor: HiViviComponent, services: [HiViviService] }
    ],
    serviceConstructors: [{ constructor: HiViviService }],
    rootComponent: ContainerComponent
});