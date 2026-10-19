import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DestructibleByExplosionData extends BPComponent {

}

export class SetDestructibleByExplosion extends BehaviorBlockComponentBuilder<DestructibleByExplosionData, "minecraft:destructible_by_explosion"> {
    /**
     * 
     * @param {boolean} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: boolean) {
        super("minecraft:destructible_by_explosion", params);
    }
}