import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorBreedData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorBreed extends BehaviorEntityComponentBuilder<BehaviorBreedData> {
    /**
     * 
     * @param {BehaviorBreedData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorBreedData) {
        super("minecraft:behavior.breed", params);
    }
}