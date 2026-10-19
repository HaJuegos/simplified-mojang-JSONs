import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type Vector3 = [number, number, number];

type CollisionBoxData = boolean | {
    origin: Vector3;
    size: Vector3;
};

export class SetCollisionBox extends BehaviorBlockComponentBuilder<CollisionBoxData, "minecraft:collision_box"> {
    /**
     * 
     * @param {CollisionBoxData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: CollisionBoxData) {
        super("minecraft:collision_box", params);
    }
}