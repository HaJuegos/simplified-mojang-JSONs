import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface MovementGlideData extends BPComponent {
    maxTurn?: number;
    startSpeed?: number;
    speedWhenTurning?: number;
}

export class SetMovementGlide extends BehaviorEntityComponentBuilder<MovementGlideData> {
    /**
     * 
     * @param {MovementGlideData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MovementGlideData) {
        super("minecraft:movement.glide", params);
    }
}