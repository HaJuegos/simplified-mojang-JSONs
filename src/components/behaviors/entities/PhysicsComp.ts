import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PhysicsData extends BPComponent {
    hasCollision?: boolean;
    hasGravity?: boolean;
    pushTowardsClosestSpace?: boolean;
}

export class SetPhysics extends BehaviorEntityComponentBuilder<PhysicsData, "minecraft:physics"> {
    /**
     * 
     * @param {PhysicsData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: PhysicsData) {
        super("minecraft:physics", params);
    }
}