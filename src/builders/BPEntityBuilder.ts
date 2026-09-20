import * as vanilla from '@minecraft/vanilla-data';

import { BehaviorAnimationScript, BehaviorEntityOptionalParams, FormatVersionEntities, SpawnCategoryEntities } from "../types/BPEntitiesEnums";
import { MoLangValue } from '../types/MoLang';
import { MoLang } from '../utils/MoLang';
import { afterEventsSimplified } from 'simplified-mojang-api';

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
    private animations?: Record<string, BehaviorAnimationScript>;

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
    public setOtherParams(otherParams: BehaviorEntityOptionalParams): this {
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
    public setAnimationScripts(anims: Record<string, BehaviorAnimationScript>): this {
        this.animations = anims;

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

        const finalObj = Object.freeze({
            format_version: this.version,
            ...(this.useBetaFeatures != undefined && { use_beta_features: this.useBetaFeatures }),
            'minecraft:entity': {
                description
            }
        });

        const JSONtxt = JSON.stringify(finalObj);

        return stringify ? JSONtxt : finalObj;
    }
}