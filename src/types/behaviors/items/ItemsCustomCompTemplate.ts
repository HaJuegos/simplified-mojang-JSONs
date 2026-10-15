export {
    JSONVal,
    CustomCompData,
    CustomCompID,
};

/**
 * Tipado general para los valores permitidos en un componente custom de un item.
 * @author HaJuegos - 15-10-2026
 */
type JSONVal = string | number | boolean | undefined | JSONVal[] | { [key: string]: JSONVal; };

/**
 * Datos del componente custom a crear en cuestion.
 * @author HaJuegos - 15-10-2026
 */
type CustomCompData = { [key: string]: JSONVal; };

/**
 * Tipado general que obtiene los IDs y datos de los componente custom en concreto cuando se va a editar en post-edicion.
 * @template {string} ID 
 * @author HaJuegos - 15-10-2026
 */
type CustomCompID<ID extends string> = ID extends `minecraft:${string}` ? never : ID extends `${string}:${string}` ? ID : never;