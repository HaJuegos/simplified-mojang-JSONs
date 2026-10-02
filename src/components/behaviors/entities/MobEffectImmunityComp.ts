import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityEffectTypes } from "../../../types/EntityFilters";

interface MobEffectImmunityData extends BPComponent {
    mobEffects?: EntityEffectTypes[];
}

export class SetMobEffectImmunity extends BehaviorEntityComponentBuilder<MobEffectImmunityData, "minecraft:mob_effect_immunity"> {
    /**
     * 
     * @param {MobEffectImmunityData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MobEffectImmunityData) {
        super("minecraft:mob_effect_immunity", params);
    }
}