import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface MovementBasicData extends BPComponent {
    maxTurn?: number;
}

export class SetMovementBasic extends BehaviorEntityComponentBuilder<MovementBasicData, "minecraft:movement.basic"> {
    /**
     * 
     * @param {MovementBasicData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: MovementBasicData) {
        super("minecraft:movement.basic", params);
    }
}