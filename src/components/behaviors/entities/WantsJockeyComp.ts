import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface WantsJockeyData extends BPComponent {
    
}

export class SetWantsJockey extends BehaviorEntityComponentBuilder<WantsJockeyData> {
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