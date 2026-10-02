import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityEffectTypes } from "../../../types/EntityFilters";

interface SpellEffectsData extends BPComponent {
    addEffects?: ListEffectsTypes[];
    removeEffects?: string | string[];
}

interface ListEffectsTypes {
    ambient: boolean;
    amplifier: number;
    displayOnScreenAnimation: boolean;
    duration: "infinite" | number;
    effect: EntityEffectTypes;
    visible: boolean;
}

export class SetSpellEffects extends BehaviorEntityComponentBuilder<SpellEffectsData, "minecraft:spell_effects"> {
    /**
     * 
     * @param {SpellEffectsData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: SpellEffectsData) {
        super("minecraft:spell_effects", params);
    }
}