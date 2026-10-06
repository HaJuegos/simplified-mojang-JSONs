import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface LeashableToData extends BPComponent {
    canRetrieveFrom?: boolean;
    unleashOnRemoval?: boolean;
}

export class SetLeashableTo extends BehaviorEntityComponentBuilder<LeashableToData, "minecraft:leashable_to"> {
    /**
     * 
     * @param {LeashableToData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: LeashableToData) {
        super("minecraft:leashable_to", params);
    }
}