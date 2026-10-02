import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface UsesLegacyFrictionData extends BPComponent {

}

export class SetUsesLegacyFriction extends BehaviorEntityComponentBuilder<UsesLegacyFrictionData, "minecraft:uses_legacy_friction"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:uses_legacy_friction");
    }
}