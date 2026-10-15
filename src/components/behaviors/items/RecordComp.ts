import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface RecordData extends BPComponent {
    comparatorSignal: number;
    duration: number;
    soundEvent: string;
}

export class SetRecord extends BehaviorItemsComponentsBuilder<RecordData, "minecraft:record"> {
    /**
     * 
     * @param {RecordData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: RecordData) {
        super("minecraft:record", params);
    }
}