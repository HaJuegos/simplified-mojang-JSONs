import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface WantsJockeyData extends BPComponent {

}

export class SetWantsJockey extends BehaviorEntityComponentBuilder<WantsJockeyData, "minecraft:wants_jockey"> {
    /**
     * 
     * @param {WantsJockeyData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: WantsJockeyData) {
        super("minecraft:wants_jockey", params);
    }
}