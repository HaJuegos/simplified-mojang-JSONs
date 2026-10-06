import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsIllagerCaptainData extends BPComponent {

}

export class SetIsIllagerCaptain extends BehaviorEntityComponentBuilder<IsIllagerCaptainData, "minecraft:is_illager_captain"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_illager_captain");
    }
}