import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface InsomniaData extends BPComponent {
    daysUntilInsomnia?: number;
}

export class SetInsomnia extends BehaviorEntityComponentBuilder<InsomniaData, "minecraft:insomnia"> {
    /**
     * 
     * @param {InsomniaData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: InsomniaData) {
        super("minecraft:insomnia", params);
    }
}