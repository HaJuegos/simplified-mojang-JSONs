import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface PhysicsData extends BPComponent {
    hasCollision?: boolean;
    hasGravity?: boolean;
    pushTowardsClosestSpace?: boolean;
}

export class SetPhysics extends BehaviorEntityComponentBuilder<PhysicsData> {
    /**
     * 
     * @param {PhysicsData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PhysicsData) {
        super("minecraft:physics", params);
    }
}