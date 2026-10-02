import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityEffectTypes, EntityFilter } from "../../../types/EntityFilters";

interface MobEffectData extends BPComponent {
    ambient?: boolean;
    cooldownTime?: number;
    effectRange?: number;
    effectTime?: "infinite" | number;
    entityFilter?: EntityFilter | EntityFilter[];
    mobEffect?: EntityEffectTypes;
}

export class SetMobEffect extends BehaviorEntityComponentBuilder<MobEffectData, "minecraft:mob_effect"> {
    /**
     * 
     * @param {MobEffectData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MobEffectData) {
        super("minecraft:mob_effect", params);
    }
}