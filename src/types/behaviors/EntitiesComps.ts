export {
    BPComponent,
    BPCompsGroups,
    BuiltComponent
};

/**
 * Definicion generica para la creacion de un componente.
 * @author HaJuegos - 23-09-2026
 */
type BPComponent = Record<string, unknown>;

/**
 * Definicion generica para la creacion de un componente compilado o adaptado a formato JSON.
 * @author HaJuegos - 23-09-2026
 */
type BuiltComponent = Record<string, Record<string, unknown>>;

/**
 * Plantilla generica para la creacion de un grupo de componentes.
 * @interface BPCompsGroups
 * @author HaJuegos - 23-09-2026
 */
interface BPCompsGroups {
    /**
     * ID del grupo en cuestion.
     * @type {string}
     */
    idGroup: string;

    /**
     * Lista de componentes del grupo en cuestion.
     * @type {BPComponent[]}
     */
    components: BPComponent[];
}