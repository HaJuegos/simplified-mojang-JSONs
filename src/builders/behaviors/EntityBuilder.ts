import * as vanilla from '@minecraft/vanilla-data';

import { BPAnimationScriptEntities, BPEntityOptionalParams, BPPropertiesEntities, FormatVersionEntities, SpawnCategoryEntities } from "../../types/behaviors/EntitiesEnums";
import { MoLangValue } from '../../types/MoLang';
import { BPComponent, BPCompsGroups } from '../../types/behaviors/EntitiesComps';
import { BehaviorEntityComponentBuilder } from './EntityCompsBuilder';

/**
 * Clase abstracta de base para la creacion de una entidad con todos los parametros requeridos y una estructura fija.
 * @class EntityBuilder
 * @author HaJuegos - 16-09-2026
 * @export
 * @abstract
 */
export class BehaviorEntityBuilder {
    /**
     * Version de formato requerida para la entidad. Por defecto, siempre sera la mas reciente.
     * @type {(FormatVersionEntities | string)}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private version: FormatVersionEntities | string = FormatVersionEntities.MostRecent;

    /**
     * (Opcional) ID de la entidad vanilla que usara esta entidad para crearse a si misma. Principalmente usado para valores hardcore o adaptaciones de animaciones vanillas en entidades custom.
     * @type {?string}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private runtimeIdentifier?: vanilla.MinecraftEntityTypes;

    /**
     * ID de la entidad en cuestion a crear.
     * @type {(string | vanilla.MinecraftEntityTypes)}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private idEntity: string | vanilla.MinecraftEntityTypes;

    /**
     * (Opcional) Parametro que asigna si la entidad va a utilizar valores o componentes experimentales por parte de Mojang.
     * se
     * @type {?boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private useBetaFeatures?: boolean;

    /**
     * Parametro que establece si esta entidad se puede generar por medio de un generador o "huevos". Por defecto estara activo.
     * @type {boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private isSpawneable: boolean = true;

    /**
     * Parametro que establece si esta entidad se puede generar por medio de comandos o comunmente por el comando /summon. Por defecto esta activo.
     * @type {boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private isSummonable: boolean = true;

    /**
     * (Opcional) Parametro que establece si esta entidad solo va a aparecer si esta activado los experimentales en el mundo.
     * @type {?boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private isExperimental?: boolean;

    /**
     * (Opcional) Grupo de entidades a la cual pertenecera esta entidad en cuestion.
     * @type {?SpawnCategoryEntities}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private spawnCategory?: SpawnCategoryEntities;

    /**
     * (Opcional) Los animations y/o animations controllers asociados a la entidad en cuestion.
     * @type {?Record<string, string>}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    private animations?: Record<string, BPAnimationScriptEntities>;

    /**
     * (Opcional) Las propiedades dinamicas custom de la entidad en cuestion.
     * @type {?Record<string, BPPropertiesEntities>}
     * @author HaJuegos - 20-09-2026
     * @private
     */
    private properties?: Record<string, BPPropertiesEntities>;

    /**
     * (Opcional) Componentes estaticos de la entidad a crear en cuestion.
     * @type {?BehaviorEntityComponentBuilder<any>[]}
     * @author HaJuegos - 23-09-2026
     * @private
     */
    private components?: BehaviorEntityComponentBuilder<any>[];

    /**
     * (Opcional) Grupo de componentes dinamicos de la entidad a crear en cuestion.
     * @type {?Record<string, BehaviorEntityComponentBuilder<any>[]>}
     * @author HaJuegos - 23-09-2026
     * @private
     */
    private componentGroups?: Record<string, BehaviorEntityComponentBuilder<any>[]>;

    /**
     * (Opcional) Lista de grupos de eventos de la entidad a crear en cuestion.
     * @type {?Record<string, unknown>}
     * @author HaJuegos - 23-09-2026
     * @private
     */
    private events?: Record<string, unknown>;

    /**
     * Eventos y parametros iniciales de la clase cuando es llamada o inicializada.
     * @param {string | vanilla.MinecraftEntityTypes} idEntity ID de la entidad en cuestion.
     * @constructor
     */
    constructor (idEntity: string | vanilla.MinecraftEntityTypes) {
        this.idEntity = idEntity;
    }

    /**
     * Metodo auxiliar que asigna el formato de version que va a tomar la entidad en cuestion. Por defecto, siempre sera la mas reciente.
     * @param {(FormatVersionEntities | string)} version Version en concreto a asignar.
     * @returns {this}
     * @author HaJuegos - 16-09-2026 
     * @public
     */
    public setVersion(version: FormatVersionEntities | string): this {
        this.version = version;

        return this;
    }

    /**
     * Metodo auxiliar que asigna los parametros opcionales de una entidad para su personalizacion en el juego.
     * @param {BehaviorEntityOptionalParams} otherParams Parametros en concreto a poner. 
     * @returns {this}
     * @author HaJuegos - 16-09-2026
     * @public
     */
    public setDescParams(otherParams: BPEntityOptionalParams): this {
        Object.assign(this, otherParams);

        return this;
    }

    /**
     * Metodo auxiliar que asigna animacioens y controladores, con condiciones a la entidad en cuestion.
     * @param {Record<string, BehaviorAnimationScript>} anims Animaciones en cuestion a asignar. 
     * @returns {this} 
     * @author HaJuegos - 16-09-2026
     * @public
     */
    public setAnimationScripts(anims: Record<string, BPAnimationScriptEntities>): this {
        this.animations = anims;

        return this;
    }

    /**
     * Metodo principal que asigna propiedades custom a la entidad.
     * @param {Record<string, BPPropertiesEntities>} properties La lista de propiedades a asignar.
     * @returns {this} 
     * @author HaJuegos - 20-09-2026
     * @public
     */
    public setProperties(properties: Record<string, BPPropertiesEntities>): this {
        this.properties = properties;

        return this;
    }

    /**
     * Metodo principal que registra la lista de componentes dinamicos de la entidad.
     * @param {Record<string, BehaviorEntityComponentBuilder<any>[]>} groups Grupos de componentes en cuestion basado por un ID. Por ej: `"ha:test": {}`.
     * @returns {this}
     * @author HaJuegos - 23-09-2026 
     * @public
     */
    public setComponentGroups(groups: Record<string, BehaviorEntityComponentBuilder<any>[]>): this {
        this.componentGroups = groups;
        return this;
    }

    /**
     * Metodo principal que registra los componentes estaticos de la entidad.
     * @param {BehaviorEntityComponentBuilder<any>[]} comps Componentes estaticos en cuestion.
     * @returns {this} 
     * @author HaJuegos - 23-09-2026 
     * @public
     */
    public setComponents(comps: BehaviorEntityComponentBuilder<any>[]): this {
        this.components = comps;
        return this;
    }

    /**
     * Metodo principal que registra la lista de grupos de eventos de la entidad.
     * @param {Record<string, unknown>} events Lista de eventos en cuestion a registrar por su ID. Por ej: `"minecraft:entity_spawned": {}`.
     * @returns {this} 
     * @public
     */
    public setEvents(events: Record<string, unknown>): this {
        this.events = events;
        return this;
    }

    /**
     * Metodo principal y final que transforma toda la logica final compilada en un JSON de solo lectura, ya sea en Object o en texto.
     * @param {?boolean} [stringify] (Opcional) Parametro opcional que cambia si el formato del JSON final sera en forma de objecto de solo lectura o en texto.
     * @returns {string | object} Devuelve el objecto de solo lectura o el json en formato de texto.
     * @author HaJuegos - 16-09-2026 
     * @public
     */
    public toJSON(stringify?: boolean) {
        const planeAnimations: Record<string, string> = {};
        const animsScriptsList: (string | Record<string, MoLangValue>)[] = [];

        if (this.animations) {
            for (const [shortName, data] of Object.entries(this.animations)) {
                planeAnimations[shortName] = data.idAnimation;

                if (data.molangCondition) {
                    animsScriptsList.push({ [shortName]: data.molangCondition });
                } else {
                    animsScriptsList.push(shortName);
                }
            }
        }

        const description: Record<string, any> = {
            identifier: this.idEntity,
            runtime_identifier: this.runtimeIdentifier,
            spawn_category: this.spawnCategory,
            is_summonable: this.isSummonable,
            is_spawnable: this.isSpawneable,
            is_experimental: this.isExperimental
        };

        if (Object.keys(planeAnimations).length > 0) {
            description.animations = planeAnimations;
        }

        if (animsScriptsList.length > 0) {
            description.scripts = {
                animate: animsScriptsList
            };
        }

        if (this.properties && Object.keys(this.properties).length > 0) {
            const formattedProperties: Record<string, any> = {};

            for (const [propKey, propData] of Object.entries(this.properties)) {
                const baseProp: Record<string, any> = {
                    client_sync: propData.clientSync,
                    type: propData.type,
                    default: propData.default
                };

                if (propData.type == 'enum' && 'values' in propData) {
                    baseProp.values = propData.values;
                }

                if ((propData.type == 'float' || propData.type == 'int') && 'range' in propData) {
                    baseProp.range = propData.range;
                }

                formattedProperties[propKey] = baseProp;
            }

            description.properties = formattedProperties;
        }

        const componentsObj = this.components ? this.converComps(this.components) : undefined;
        const componentGroupsObj = this.componentGroups ? Object.fromEntries(Object.entries(this.componentGroups).map(([id, comps]) => [id, this.converComps(comps)])) : undefined;

        const finalObj = Object.freeze({
            format_version: this.version,
            ...(this.useBetaFeatures != undefined && { use_beta_features: this.useBetaFeatures }),
            'minecraft:entity': {
                description,
                ...(componentGroupsObj && Object.keys(componentGroupsObj).length > 0 && { component_groups: componentGroupsObj }),
                ...(componentsObj && Object.keys(componentsObj).length > 0 && { components: componentsObj }),
                ...(this.events && Object.keys(this.events).length > 0 && { events: this.events })
            }
        });

        const JSONtxt = JSON.stringify(finalObj);

        return stringify ? JSONtxt : finalObj;
    }

    /**
     * Metodo auxiliar que convierte la lista de componentes a un estilo plano para el formato JSON.
     * @param {BehaviorEntityComponentBuilder<any>[]} list La lista de componentes a considerar.
     * @returns {Record<string, unknown>} Devuelve un formato mas legible y adaptado al esquema.
     * @author HaJuegos - 23-09-2026
     * @private
     */
    private converComps(list: BehaviorEntityComponentBuilder<any>[]): Record<string, unknown> {
        return list.reduce((acc, comp) => ({ ...acc, ...comp.build() }), {});
    }
}