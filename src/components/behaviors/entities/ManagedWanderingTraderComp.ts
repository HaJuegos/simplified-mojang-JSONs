import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ManagedWanderingTraderData extends BPComponent {

}

export class SetManagedWanderingTrader extends BehaviorEntityComponentBuilder<ManagedWanderingTraderData, "minecraft:managed_wandering_trader"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:managed_wandering_trader");
    }
}