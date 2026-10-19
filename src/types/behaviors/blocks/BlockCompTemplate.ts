import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";

export {
    BPBlockFile,
    BPBlockComponent,
};

/**
 * Tipado general para identificar un archivo de un bloque.
 * @author HaJuegos - 18-10-2026
 */
type BPBlockFile = Readonly<Record<string, unknown>>;

/**
 * Tipado general para identificar un componente de un bloque.
 * @author HaJuegos - 18-10-2026
 */
type BPBlockComponent = BehaviorBlockComponentBuilder<any, string>;