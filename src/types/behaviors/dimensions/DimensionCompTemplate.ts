import { BehaviorDimensionComponentBuilder } from "../../../builders/behaviors/dimensions/DimensionCompBuilder";

export {
    BPDimensionFile,
    BPDimensionComponent,
};

/**
 * Tipado general que establece una defincion de un archivo de dimension.
 * @author HaJuegos - 15-10-2026
 */
type BPDimensionFile = Readonly<Record<string, unknown>>;

/**
 * Tipado general que establece una definicion de un archivo de componente de dimension.
 * @author HaJuegos - 15-10-2026
 */
type BPDimensionComponent = BehaviorDimensionComponentBuilder<any, string>;