import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CollisionBoxData extends BPComponent {
    height: number;
    width: number;
}

export class SetCollisionBox extends BehaviorEntityComponentBuilder<CollisionBoxData, "minecraft:collision_box"> {
    /**
     * 
     * @param {CollisionBoxData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: CollisionBoxData) {
        super("minecraft:collision_box", params);
    }
}