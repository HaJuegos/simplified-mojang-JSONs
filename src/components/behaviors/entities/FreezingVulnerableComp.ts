import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FreezingVulnerableData extends BPComponent {

}

export class SetFreezingVulnerable extends BehaviorEntityComponentBuilder<FreezingVulnerableData, "minecraft:freezing_vulnerable"> {
    /**
     * 
     * @author HaJuegos - 04-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:freezing_vulnerable");
    }
}