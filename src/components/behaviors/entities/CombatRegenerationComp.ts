import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CombatRegenerationData extends BPComponent {
    applyToFamily?: boolean;
    applyToSelf?: boolean;
    regenerationDuration?: "infinite" | number;
}

export class SetCombatRegeneration extends BehaviorEntityComponentBuilder<CombatRegenerationData> {
    /**
     * 
     * @param {CombatRegenerationData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: CombatRegenerationData) {
        super("minecraft:combat_regeneration", params);
    }
}