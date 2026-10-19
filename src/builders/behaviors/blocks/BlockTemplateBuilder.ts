import { BPBlockComponent } from "../../../types/behaviors/blocks/BlockCompTemplate";
import { BPBlockDefinition, BPBlockOverride, BPBlockOverrideInstance, MenuCategoryParams, PermutationsGroupsParams, StatesListTypes, TraitsListTypes } from "../../../types/behaviors/blocks/BlockTemplate";
import { BehaviorBlockBuilder } from "./BlockBuilder";
import { BehaviorBlockComponentBuilder } from "./BlockCompBuilder";

/**
 * Clase principal final de la construccion del bloque en concreto considerando la base inicial y las ediciones post-edicion.
 * @class FinalBlockBulderTemplate
 * @extends {BehaviorBlockBuilder}
 * @author HaJuegos - 18-10-2026
 * @export
 */
export class FinalBlockBulderTemplate extends BehaviorBlockBuilder {
    /**
     * Parametros iniciales y eventos de la clase cuando es llamada o inicializada. Para la construccion definitiva del bloque con todos los parametros definidos en la base y post-edicion.
     * @param {BPBlockDefinition} def Parametros para la creacion de la plantilla base. 
     * @param {BPBlockOverride<any>} over Parametros para la edicion de la plantilla base post-edicion.
     * @author HaJuegos - 18-10-2026
     * @constructor
     */
    constructor (def: BPBlockDefinition, over: BPBlockOverride<any>) {
        super(def.idBlock);

        let finalMenuData: MenuCategoryParams | undefined;
        let finalStatesData: StatesListTypes | undefined;
        let finalTraits: TraitsListTypes | undefined;
        let finalPermutationsData: PermutationsGroupsParams[] | undefined;
        let finalComponents: BehaviorBlockComponentBuilder<any>[] | undefined;

        if (!over.clearAllData) {
            finalMenuData = def.menuCategory ? { ...def.menuCategory } : undefined;
            finalStatesData = def.setStatesBlock ? { ...def.setStatesBlock } : undefined;
            finalTraits = def.setTraitsBlock ? { ...def.setTraitsBlock } : undefined;
            finalPermutationsData = def.permutations ? [...def.permutations] : undefined;
            finalComponents = def.components.length ? [...def.components] : undefined;

            if (over.changeMenuCategory) {
                finalMenuData = {
                    ...finalMenuData,
                    ...over.changeMenuCategory,
                } as MenuCategoryParams;
            }

            if (over.changeStateBlocks) {
                finalStatesData = {
                    ...finalStatesData,
                    ...over.changeStateBlocks,
                } as StatesListTypes;
            }

            if (over.changeTraitsBlocks) {
                finalTraits = {
                    ...finalTraits,
                    ...over.changeTraitsBlocks,
                } as TraitsListTypes;
            }

            if (over.changePermutations) {
                finalPermutationsData = over.changePermutations.map((permutation) => {
                    const original = finalPermutationsData?.find(
                        (item) => item.condition == permutation.condition
                    );

                    return {
                        ...original,
                        ...permutation
                    } as PermutationsGroupsParams;
                });
            }

            if (over.changeComponents) {
                finalComponents = [
                    ...(finalComponents ?? []).filter((component) => !(component.idComp in over.changeComponents!)),
                    ...Object.values(over.changeComponents)
                ] as BehaviorBlockComponentBuilder<any>[];
            }
        } else {
            finalMenuData = over.add?.menuCategory;
            finalStatesData = over.add?.statesBlock;
            finalTraits = over.add?.traitsBlock;
            finalPermutationsData = over.add?.permutations ? [...over.add.permutations] : undefined;
            finalComponents = over.add?.components ? [...over.add.components] : undefined;
        }

        if (finalMenuData) {
            this.setMenuCategory(finalMenuData);
        }

        if (finalStatesData) {
            this.setStatesBlock(finalStatesData);
        }

        if (finalTraits) {
            this.setTraitsBlock(finalTraits);
        }

        if (finalPermutationsData) {
            this.setComponentsGroup(finalPermutationsData);
        }

        if (finalComponents) {
            this.setComponents(finalComponents);
        }
    }

    /**
     * Metodo final principal que convierte toda la plantilla definitiva en un JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura definitiva.
     * @author HaJuegos - 18-10-2026
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un nuevo bloque en un BP. Definiendo inicialmente la plantilla base y devolviendo una funcion auxiliar para la edicion post-edicion de la plantilla base. 
 * @template {BPBlockDefinition} BaseDef Datos iniciales de la plantilla base.
 * @template {readonly BPBlockComponent[]} Comps Componentes fijos definidos en la plantilla base.
 * @param {BaseDef} def Parametros iniciales para la definicion inicial de la plantilla base.
 * @returns {BPBlockOverrideInstance<BaseDef, Comps>} Devuelve una funcion auxiliar preparada para la post-edicion de la plantilla base.
 * @author HaJuegos - 18-10-2026 
 * @export
 */
export function createBPBlock<
    const BaseDef extends BPBlockDefinition,
    const Comps extends readonly BPBlockComponent[] = BaseDef['components'] extends readonly BPBlockComponent[] ? BaseDef['components'] : readonly BPBlockComponent[]
>(def: BaseDef): BPBlockOverrideInstance<BaseDef, Comps> {
    return (over = {}) => {
        return new FinalBlockBulderTemplate(def, over as unknown as BPBlockOverride<any>);
    };
}