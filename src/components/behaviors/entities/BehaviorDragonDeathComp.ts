import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorDragonDeathData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonDeath extends BehaviorEntityComponentBuilder<BehaviorDragonDeathData, "minecraft:behavior.dragondeath"> {
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