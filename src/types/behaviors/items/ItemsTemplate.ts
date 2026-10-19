import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BPItemComponent, BPItemCompOverride } from "./ItemsCompTemplate";
import { FinalItemsBuilderTemplate } from "../../../builders/behaviors/items/ItemsTemplateBuilder";

export {
    ItemsFormatVersionList,
    MenuDescTypes,
    BPItemDefinition,
    BPItemDefinitionOver,
    BPItemTemplateInstance,
    CategoryItemsList,
    GroupItemsList,
};

/**
 * Lista de format versions que se pueden usar en items.
 * @enum {string}
 * @author HaJuegos - 13-10-2026
 */
enum ItemsFormatVersionList {
    MostRecent = "1.26.50",
    V1_26_30 = "1.26.30",
    V1_21_100 = "1.21.100",
    V1_21_80 = "1.21.80",
    V1_16_0 = "1.16.0",
    V1_16 = "1.16",
    V1_14 = "1.14",
    V1_10 = "1.10",
}

/**
 * Lista de categorias de items disponibles para usar, los grupos son prehechos de forma vanilla.
 * @author HaJuegos - 13-10-2026
 */
type CategoryItemsList = "construction" | "equipment" | "items" | "nature" | "none";

/**
 * Lista de grupos en los cuales puede estar el item, los grupos son prehechos de forma vanilla.
 * @author HaJuegos - 13-10-2026
 */
type GroupItemsList = "minecraft:itemGroup.name.planks" | "minecraft:itemGroup.name.walls" | "minecraft:itemGroup.name.fence" | "minecraft:itemGroup.name.fenceGate" | "minecraft:itemGroup.name.stairs" | "minecraft:itemGroup.name.door" | "minecraft:itemGroup.name.trapdoor" | "minecraft:itemGroup.name.bars" | "minecraft:itemGroup.name.glass" | "minecraft:itemGroup.name.glassPane" | "minecraft:itemGroup.name.slab" | "minecraft:itemGroup.name.stoneBrick" | "minecraft:itemGroup.name.sandstone" | "minecraft:itemGroup.name.copper" | "minecraft:itemGroup.name.wool" | "minecraft:itemGroup.name.woolCarpet" | "minecraft:itemGroup.name.concretePowder" | "minecraft:itemGroup.name.concrete" | "minecraft:itemGroup.name.stainedClay" | "minecraft:itemGroup.name.glazedTerracotta" | "minecraft:itemGroup.name.helmet" | "minecraft:itemGroup.name.chestplate" | "minecraft:itemGroup.name.leggings" | "minecraft:itemGroup.name.boots" | "minecraft:itemGroup.name.sword" | "minecraft:itemGroup.name.spear" | "minecraft:itemGroup.name.axe" | "minecraft:itemGroup.name.pickaxe" | "minecraft:itemGroup.name.shovel" | "minecraft:itemGroup.name.hoe" | "minecraft:itemGroup.name.arrow" | "minecraft:itemGroup.name.cookedFood" | "minecraft:itemGroup.name.miscFood" | "minecraft:itemGroup.name.goatHorn" | "minecraft:itemGroup.name.harnesses" | "minecraft:itemGroup.name.bundles" | "minecraft:itemGroup.name.horseArmor" | "minecraft:itemGroup.name.nautilus_armor" | "minecraft:itemGroup.name.potion" | "minecraft:itemGroup.name.splashPotion" | "minecraft:itemGroup.name.lingeringPotion" | "minecraft:itemGroup.name.ominousBottle" | "minecraft:itemGroup.name.bed" | "minecraft:itemGroup.name.lanterns" | "minecraft:itemGroup.name.candles" | "minecraft:itemGroup.name.anvil" | "minecraft:itemGroup.name.shelf" | "minecraft:itemGroup.name.chest" | "minecraft:itemGroup.name.shulkerBox" | "minecraft:itemGroup.name.copper_golem_statue" | "minecraft:itemGroup.name.record" | "minecraft:itemGroup.name.sign" | "minecraft:itemGroup.name.hanging_sign" | "minecraft:itemGroup.name.skull" | "minecraft:itemGroup.name.lightning_rod" | "minecraft:itemGroup.name.boat" | "minecraft:itemGroup.name.chestboat" | "minecraft:itemGroup.name.rail" | "minecraft:itemGroup.name.minecart" | "minecraft:itemGroup.name.buttons" | "minecraft:itemGroup.name.pressurePlate" | "minecraft:itemGroup.name.banner_pattern" | "minecraft:itemGroup.name.potterySherds" | "minecraft:itemGroup.name.smithing_templates" | "minecraft:itemGroup.name.chains" | "minecraft:itemGroup.name.ore" | "minecraft:itemGroup.name.stone" | "minecraft:itemGroup.name.log" | "minecraft:itemGroup.name.wood" | "minecraft:itemGroup.name.leaves" | "minecraft:itemGroup.name.sapling" | "minecraft:itemGroup.name.seed" | "minecraft:itemGroup.name.crop" | "minecraft:itemGroup.name.grass" | "minecraft:itemGroup.name.coral_decorations" | "minecraft:itemGroup.name.flower" | "minecraft:itemGroup.name.dye" | "minecraft:itemGroup.name.rawFood" | "minecraft:itemGroup.name.mushroom" | "minecraft:itemGroup.name.monsterStoneEgg" | "minecraft:itemGroup.name.mobEgg" | "minecraft:itemGroup.name.coral" | "minecraft:itemGroup.name.sculk" | (string & {});

/**
 * Tipado y definicion final para la creacion de un item base para modificaciones de la plantilla despues.
 * @interface BPItemDefinition
 * @author HaJuegos - 14-10-2026
 */
interface BPItemDefinition {
    /**
     * (Opcional) Format version a utilizar para este item en concreto.
     * @type {?ItemsFormatVersionList}
     */
    formatVersion?: ItemsFormatVersionList;

    /**
     * ID del item en concreto a crear.
     * @type {(string | MinecraftItemTypes)}
     */
    idItem: string | MinecraftItemTypes;

    /**
     * (Opcional) Datos y parametros para la asignacion del menu del inventario de este item.
     * @type {?MenuDescTypes}
     */
    menuCategory?: MenuDescTypes;

    /**
     * (Opcional) Los componentes a asignar al item en concreto.
     * @type {?readonly BPItemComponent[]}
     */
    components?: readonly BPItemComponent[];
}

/**
 * Tipado generico para transferir la logica de los componentes y los tipados originales para mantener la estructura y documentacion.
 * @interface BPItemTemplateInstance
 * @template {readonly BPItemComponent[]} Comps Componentes en cuestion a considerar.
 * @author HaJuegos - 14-10-2026 
 */
interface BPItemTemplateInstance<
    Comps extends readonly BPItemComponent[] = readonly BPItemComponent[]
> {
    (over?: BPItemDefinitionOver<Comps>): FinalItemsBuilderTemplate;
}

/**
 * Tipado y definicion post-edicion para la asignacion o recreacion de un item base de una plantilla.
 * @interface BPItemDefinitionOver
 * @author HaJuegos - 14-10-2026
 */
type BPItemDefinitionOver<
    Comps extends readonly BPItemComponent[] = readonly BPItemComponent[]
> =
    {
        /**
         * (Opcional) Si se establece en true, todos los datos de la plantilla base, son limpiados. Dejandolo totalmente limpio.
         * @type {?boolean}
         */
        clearAllData: true;
        menuCategory?: never;
        components?: never;

        /**
         * (Opcional) Si se establece, los componentes a añadir directamente a la plantilla base sin modificar los datos ya implementados.
         * @type {?{components?: readonly BPItemComponent[];}}
         */
        add?: {
            components?: readonly BPItemComponent[];
        };
    } |
    {
        /**
         * (Opcional) Si se establece en true, todos los datos de la plantilla base, son limpiados. Dejandolo totalmente limpio.
         * @type {?boolean}
         */
        clearAllData?: false | undefined;

        /**
         * (Opcional) Si se establecen los parametros, se rescriben o añaden datos a la plantilla base sobre la categoria del inventario de este item.
         * @type {?Partial<MenuDescTypes>}
         */
        menuCategory?: Partial<MenuDescTypes>;

        /**
         * (Opcional) Si se establece, los componentes a modificar de la plantilla base ya creada insertando nueva informacion.
         * @type {?readonly BPItemComponent[]}
         */
        components?: Comps extends readonly [] ? Record<string, BPItemComponent> : { [K in Comps[number]['idComp']]?: BPItemCompOverride<Extract<Comps[number], { idComp: K; }>>; };

        /**
         * (Opcional) Si se establece, los componentes a añadir directamente a la plantilla base sin modificar los datos ya implementados.
         * @type {?{components?: readonly BPItemComponent[];}}
         */
        add?: {
            components?: readonly BPItemComponent[];
        };
    };

/**
 * Tipado general y parametros para la asignacion de la agrupacion del inventario del item en concreto.
 * @interface MenuDescTypes
 * @author HaJuegos - 14-10-2026
 */
interface MenuDescTypes {
    /**
     * Categoria en concreto donde ira este item.
     * @type {CategoryItemsList}
     */
    category: CategoryItemsList;

    /**
     * (Opcional) Grupo en especifico donde ira este item. Los grupos son los vanilla por defecto, no se pueden añadir un custom. De momento.
     * @type {?GroupItemsList}
     */
    group?: GroupItemsList;
}