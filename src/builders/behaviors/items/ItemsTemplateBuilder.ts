import { SetCustomComponent } from "../../../components/behaviors/items/CustomComponentComp";
import { BPItemComponent } from "../../../types/behaviors/items/ItemsCompTemplate";
import { BPItemDefinition, BPItemDefinitionOver, BPItemTemplateInstance, MenuDescTypes } from "../../../types/behaviors/items/ItemsTemplate";
import { BehaviorItemsBuilder } from "./ItemsBuilder";
import { BehaviorItemsComponentsBuilder } from "./ItemsCompsBuilder";

/**
 * Clase principal que crea una plantilla definitiva para la creacion de un item.
 * @class FinalItemsBuilderTemplate
 * @extends {BehaviorItemsBuilder}
 * @author HaJuegos - 14-10-2026
 * @export
 */
export class FinalItemsBuilderTemplate extends BehaviorItemsBuilder {
    /**
     * Argumentos principales para la creacion de un item de una plantilla en concreto.
     * @param {BPItemDefinition} def Los valores fijos a definir en concreto.
     * @param {BPItemDefinitionOver<any>} [over] Los valores a añadir post-edicion a la plantilla base.
     * @author HaJuegos - 14-10-2026 
     * @constructor
     */
    constructor (def: BPItemDefinition, over: BPItemDefinitionOver<any> = {}) {
        super(def.idItem);

        if (def.formatVersion) {
            this.setFormatVersion(def.formatVersion);
        }

        let menuCategory: MenuDescTypes | undefined;

        const componentsMap = new Map<string, BPItemComponent>();

        if (over.clearAllData) {
            menuCategory = undefined;
        } else {
            menuCategory = def.menuCategory;

            if (over.menuCategory && menuCategory) {
                menuCategory = { ...menuCategory, ...over.menuCategory };
            } else if (over.menuCategory) {
                menuCategory = over.menuCategory as MenuDescTypes;
            }

            if (over.components) {
                for (const [id, value] of Object.entries(over.components as Record<string, unknown>)) {
                    if (value == undefined) {
                        continue;
                    }

                    if (value instanceof BehaviorItemsComponentsBuilder) {
                        componentsMap.set(value.idComp, value);
                        continue;
                    }

                    const base = componentsMap.get(id);

                    if (base instanceof SetCustomComponent && typeof value == "object") {
                        componentsMap.set(id, new SetCustomComponent(id as `${string}:${string}`, { ...base.customData, ...value }));
                    }
                }
            }

            if (over.components) {
                for (const comp of Object.values(over.components)) {
                    if (comp) {
                        componentsMap.set(comp.idComp, comp);
                    }
                }
            }
        }

        if (over.add?.components) {
            for (const comp of over.add.components) {
                componentsMap.set(comp.idComp, comp);
            }
        }

        const finalComponents = Array.from(componentsMap.values());

        if (finalComponents.length > 0) {
            this.setComponents(finalComponents);
        }
    }

    /**
     * Metodo final principal que convierte toda la plantilla definitiva en un JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura definitiva.
     * @author HaJuegos - 30-09-2026
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un Item BP vanilla o custom a partir de una definicion fija.
 * @param {(BPItemDefinition & { components?: Comps; })} def Tipados finales de la plantilla base.
 * @template {readonly BPItemComponent[]} Comps Definicion base de los parametros de la plantilla fija del item. 
 * @returns {BPItemTemplateInstance<Comps>} Devuelve la plantilla base ya creada y adaptada para el JSON final, permitiendo la edicion de datos de la plantilla base.
 * @author HaJuegos - 14-10-2026 
 * @export
 */
export function createBPItemTemplate<
    const Comps extends readonly BPItemComponent[] = []
>(def: BPItemDefinition & { components?: Comps; }): BPItemTemplateInstance<Comps> {
    return (over = {}) => {
        return new FinalItemsBuilderTemplate(def, over as unknown as BPItemDefinitionOver<any>);
    };
}