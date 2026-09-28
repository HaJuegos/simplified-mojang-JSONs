import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface IsIllagerCaptainData extends BPComponent {

}

export class SetIsIllagerCaptain extends BehaviorEntityComponentBuilder<IsIllagerCaptainData> {
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