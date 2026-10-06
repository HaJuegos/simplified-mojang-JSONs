import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface AttackDamageData extends BPComponent {
    value?: number | [number, number];
    min?: number;
    max?: number;
}

export class SetAttackDamage extends BehaviorEntityComponentBuilder<AttackDamageData, "minecraft:attack_damage"> {
    public constructor (params: AttackDamageData) {
        super("minecraft:attack_damage", params);
    }
}