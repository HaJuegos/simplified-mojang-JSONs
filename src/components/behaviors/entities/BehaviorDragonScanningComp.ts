import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorDragonScanningData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonScanning extends BehaviorEntityComponentBuilder<BehaviorDragonScanningData, "minecraft:behavior.dragonscanning"> {
    /**
     * 
     * @param {BehaviorDragonScanningData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonScanningData) {
        super("minecraft:behavior.dragonscanning", params);
    }
}