import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface TransformationData extends BPComponent {
    add?: AddCompsTypes;
    beginTransformSound?: string;
    delay?: DelayTypes;
    dropEquipment?: boolean;
    dropInventory?: boolean;
    into?: string;
    keepLevel?: boolean;
    keepOwner?: boolean;
    preserveEquipment?: boolean;
    transformationSound?: string;
}

interface AddCompsTypes {
    componentGroups: string[];
}

interface DelayTypes {
    blockAssistChance?: number;
    blockChance?: number;
    blockMax?: number;
    blockRadius?: number;
    blockTypes?: (string | MinecraftBlockTypes)[];
    value: number;
}

export class SetTransformation extends BehaviorEntityComponentBuilder<TransformationData> {
    /**
     * 
     * @param {TransformationData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TransformationData) {
        super("minecraft:transformation", params);
    }
}