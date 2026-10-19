import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type TintsVanillaTypes = "birch_foliage" | "default_foliage" | "dry_foliage" | "evergreen_foliage" | "grass" | "water" | (string & {});

interface DestructionParticlesData extends BPComponent {
    particleCount?: number;
    texture?: string;
    tintMethod?: TintsVanillaTypes;
}

export class SetDestructionParticles extends BehaviorBlockComponentBuilder<DestructionParticlesData, "minecraft:destruction_particles"> {
    /**
     * 
     * @param {DestructionParticlesData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DestructionParticlesData) {
        super("minecraft:destruction_particles", params);
    }
}