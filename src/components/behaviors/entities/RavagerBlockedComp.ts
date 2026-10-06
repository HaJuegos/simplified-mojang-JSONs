import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface RavagerBlockedData extends BPComponent {
    knockbackStrength?: number;
    reactionChoices?: ReactionEvents[];
}

interface ReactionEvents {
    weight?: number;
    value?: string | EntityFilterTrigger;
}

export class SetRavagerBlocked extends BehaviorEntityComponentBuilder<RavagerBlockedData, "minecraft:ravager_blocked"> {
    /**
     * 
     * @param {RavagerBlockedData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: RavagerBlockedData) {
        super("minecraft:ravager_blocked", params);
    }
}