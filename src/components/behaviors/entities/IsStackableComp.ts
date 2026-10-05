import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface IsStackableData extends BPComponent {
    value?: boolean;
}

export class SetIsStackable extends BehaviorEntityComponentBuilder<IsStackableData, "minecraft:is_stackable"> {
    /**
     * 
     * @param {IsStackableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: IsStackableData) {
        super("minecraft:is_stackable", params);
    }
}