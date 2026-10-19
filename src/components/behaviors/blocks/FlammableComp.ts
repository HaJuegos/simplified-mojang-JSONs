import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type FlammableData = boolean | {
    catchChanceModifier: number;
    destroyChanceModifier: number;
    lavaFlammable: "always" | "never";
};

export class SetFlammable extends BehaviorBlockComponentBuilder<FlammableData, "minecraft:flammable"> {
    /**
     * 
     * @param {FlammableData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: FlammableData) {
        super("minecraft:flammable", params);
    }
}