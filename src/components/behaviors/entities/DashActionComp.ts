import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface DashActionData extends BPComponent {
    canDashUnderwater?: boolean;
    cooldownTime?: number;
    horizontalMomentum?: number;
    verticalMomentum?: number;
    direction?: "entity" | "passenger";
}

export class SetDashAction extends BehaviorEntityComponentBuilder<DashActionData> {
    /**
     * 
     * @param {DashActionData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: DashActionData) {
        super("minecraft:dash_action", params);
    }
}