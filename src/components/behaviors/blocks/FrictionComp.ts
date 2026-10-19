import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FrictionData extends BPComponent {

}

export class SetFriction extends BehaviorBlockComponentBuilder<FrictionData, "minecraft:friction"> {
    /**
     * 
     * @param {number} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: number) {
        super("minecraft:friction", params);
    }
}