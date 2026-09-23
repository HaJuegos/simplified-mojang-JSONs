import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BalloonableData extends BPComponent {
    onBalloon?: string;
    onUnballoon?: string;
    softDistance: number;
    maxDistance: number;
    mass: number;
}

export class SetBalloonable extends BehaviorEntityComponentBuilder<BalloonableData> {
    public constructor (params?: BalloonableData) {
        super("minecraft:balloonable", params);
    }
}