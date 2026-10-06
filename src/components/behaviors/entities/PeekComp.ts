import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface PeekData extends BPComponent {
    onClose?: EntityFilterTrigger;
    onOpen?: EntityFilterTrigger;
    onTargetOpen?: EntityFilterTrigger;
}

export class SetPeek extends BehaviorEntityComponentBuilder<PeekData, "minecraft:peek"> {
    /**
     * 
     * @param {PeekData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PeekData) {
        super("minecraft:peek", params);
    }
}