import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface AttackDamageData extends BPComponent {
    value: number | [number, number];
    min: number;
    max?: number;
}

export class SetAttackDamage extends BehaviorEntityComponentBuilder<AttackDamageData> {
    public constructor (params: AttackDamageData) {
        super("minecraft:attack_damage", params);
    }
}