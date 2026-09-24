import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorEatMobData extends BPComponent {
    priority: number;
    eatAnimationTime?: number;
    eatMobSound?: string;
    lootTable?: string;
    pullInForce?: number;
    reachMobDistance?: number;
    runSpeed?: number;
}

export class SetBehaviorEatMob extends BehaviorEntityComponentBuilder<BehaviorEatMobData> {
    /**
     * 
     * @param {BehaviorEatMobData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorEatMobData) {
        super("minecraft:behavior.eat_mob", params);
    }
}