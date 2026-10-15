import { BuiltComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { CustomCompData, CustomCompID } from "../../../types/behaviors/items/ItemsCustomCompTemplate";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";

/**
 * Clase principal que construye y formatea un componente custom en cuestion a un item custom.
 * @class SetCustomComponent
 * @template {string} ID ID del componente custom en cuestion a crear.
 * @template {CustomCompData} Data Datos del componente custom en cuestion a crear.
 * @extends {BehaviorItemsComponentsBuilder<Data, ID>}
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class SetCustomComponent<
    ID extends string,
    Data extends CustomCompData = {}
> extends BehaviorItemsComponentsBuilder<Data, ID> {
    /**
     * ID del componente custom a crear en cuestion.
     * @type {true}
     * @readonly
     * @public
     */
    public readonly idCustom = true as const;

    /**
     * Parametros principales del componente, como su ID y sus datos respectivos para crear el componente.
     * @param {(ID & CustomCompID<ID>)} idComp ID del componente a crear.
     * @param {Data} [data={} as Data] (Opcional) Datos custom del componente custom a crear en cuestion. 
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (idComp: ID & CustomCompID<ID>, data: Data = {} as Data) {
        if (!/^(?!minecraft:)[^:\s]+:[^\s]+$/.test(idComp)) {
            throw new Error(`[CATLOG] Error: El ID del componente custom '${idComp}' debe tener namespace y no puede usar 'minecraft:'.`);
        }

        super(idComp, data);
    }

    /**
     * Metodo auxiliar de tipo GET para obtener los datos del componente custom en cuestion.
     * @type {Data}
     * @author HaJuegos - 15-10-2026
     * @readonly
     * @public
     */
    public get customData(): Data {
        return this.getCompData() ?? ({} as Data);
    }

    /**
     * Metodo principal auxiliar para construir el componente custom en cuestion en el formato requerido.
     * @returns {BuiltComponent} Devuelve el componente construido correctamente.
     * @author HaJuegos - 15-10-2026
     * @override
     * @public
     */
    public override build(): BuiltComponent {
        return {
            [this.idComp]: this.customData
        };
    }
}