import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface LeashableData extends BPComponent {
    canBeCut?: boolean;
    canBeStolen?: boolean;
    onUnleashInteractOnly?: boolean;
    onLeash?: EntityFilterTrigger;
    onUnleash?: EntityFilterTrigger;
    unleashOnRemoval?: boolean;
    presets?: PresetLeashTypes[];
}

interface PresetLeashTypes {
    filter?: EntityFilter;
    hardDistance?: number;
    maxDistance?: number;
    rotationAdjustment?: number;
    softDistance?: number;
    springType?: 'bouncy' | 'dampened' | 'quad_dampened';
}

export class SetLeashable extends BehaviorEntityComponentBuilder<LeashableData, "minecraft:leashable"> {
    /**
     * 
     * @param {LeashableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: LeashableData) {
        super("minecraft:leashable", params);
    }
}