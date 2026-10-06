import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorTeleportToOwnerData extends BPComponent {
    priority: number;
    cooldown?: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorTeleportToOwner extends BehaviorEntityComponentBuilder<BehaviorTeleportToOwnerData, "minecraft:behavior.teleport_to_owner"> {
    /**
     * 
     * @param {BehaviorTeleportToOwnerData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTeleportToOwnerData) {
        super("minecraft:behavior.teleport_to_owner", params);
    }
}