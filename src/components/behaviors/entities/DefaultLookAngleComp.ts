import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface DefaultLookAngleData extends BPComponent {
    value?: number;
}

export class SetDefaultLookAngle extends BehaviorEntityComponentBuilder<DefaultLookAngleData, "minecraft:default_look_angle"> {
    /**
     * 
     * @param {DefaultLookAngleData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: DefaultLookAngleData) {
        super("minecraft:default_look_angle", params);
    }
}