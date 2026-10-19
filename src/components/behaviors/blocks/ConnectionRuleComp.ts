import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type SideConnectionsTypes = "north" | "east" | "south" | "west";

interface ConnectionRuleData extends BPComponent {
    acceptsConnectionsFrom?: "all" | "only_fences" | "none";
    enabledDirections?: SideConnectionsTypes[];
}

export class SetConnectionRule extends BehaviorBlockComponentBuilder<ConnectionRuleData, "minecraft:connection_rule"> {
    /**
     * 
     * @param {ConnectionRuleData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ConnectionRuleData) {
        super("minecraft:connection_rule", params);
    }
}