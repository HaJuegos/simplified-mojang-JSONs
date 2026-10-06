import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface TrustData extends BPComponent {

}

export class SetTrust extends BehaviorEntityComponentBuilder<TrustData, "minecraft:trust"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:trust");
    }
}