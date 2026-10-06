import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CustomHitTestData extends BPComponent {
    hitboxes: HitboxesTypes[];
}

interface HitboxesTypes {
    height: number,
    pivot: number[],
    width: number;
}

export class SetCustomHitTest extends BehaviorEntityComponentBuilder<CustomHitTestData, "minecraft:custom_hit_test"> {
    /**
     * 
     * @param {CustomHitTestData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: CustomHitTestData) {
        super("minecraft:custom_hit_test", params);
    }
}