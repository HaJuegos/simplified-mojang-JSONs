import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface AnnotationOpenDoorData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AnnotationOpenDoorData extends BPComponent { }

export class SetAnnotationOpenDoor extends BehaviorEntityComponentBuilder<AnnotationOpenDoorData> {
    /**
     * Componente que permite abrir puertas siempre y cuando se hayan configurado los indicadores par aque el componente los utilice en la navegacion.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:annotation.open_door");
    }
}

new SetAnnotationOpenDoor();