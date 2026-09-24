import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorDragonDeathData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonDeath extends BehaviorEntityComponentBuilder<BehaviorDragonDeathData> {
    /**
     * 
     * @param {BehaviorDragonDeathData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonDeathData) {
        super("minecraft:behavior.dragondeath", params);
    }
}