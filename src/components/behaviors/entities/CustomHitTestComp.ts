import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CustomHitTestData extends BPComponent {
    hitboxes: HitboxesTypes[];
}

interface HitboxesTypes {
    height: number,
    pivot: number[],
    width: number;
}

export class SetCustomHitTest extends BehaviorEntityComponentBuilder<CustomHitTestData> {
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