import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorDragonFlamingData extends BPComponent {
    priority: number;
    cooldownTime?: number;
    flameTime?: number;
    groundFlameCount?: number;
    roarTime?: number;
}

export class SetBehaviorDragonFlaming extends BehaviorEntityComponentBuilder<BehaviorDragonFlamingData> {
    /**
     * 
     * @param {BehaviorDragonFlamingData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonFlamingData) {
        super("minecraft:behavior.dragonflaming", params);
    }
}