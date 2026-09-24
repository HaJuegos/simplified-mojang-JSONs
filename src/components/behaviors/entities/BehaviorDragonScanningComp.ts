import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorDragonScanningData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonScanning extends BehaviorEntityComponentBuilder<BehaviorDragonScanningData> {
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