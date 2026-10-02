import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSquidFleeData extends BPComponent {
    priority: number;
}

export class SetBehaviorSquidFlee extends BehaviorEntityComponentBuilder<BehaviorSquidFleeData, "minecraft:behavior.squid_flee"> {
    /**
     * 
     * @param {BehaviorSquidFleeData} params Parametros del componente.
     * @author HaJuegos - 25-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSquidFleeData) {
        super("minecraft:behavior.squid_flee", params);
    }
}