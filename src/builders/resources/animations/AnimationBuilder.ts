import { AnimationParams, FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal de base para la creacion de una animacion para Resource Packs.
 * @class ResourceAnimationBuilder
 * @author HaJuegos - 28-10-2026 
 * @export
 */
export class ResourceAnimationBuilder {
    /**
     * Version de la animacion. Por defecto, siempre sera la version "1.10.0".
     * @type {FormatVersionListAnims}
     * @readonly
     * @private
     */
    private AnimVersion: FormatVersionListAnims = FormatVersionListAnims.MostRecent;

    /**
     * (Opcional) Lista de animaciones asignadas en concreto.
     * @type {AnimationParams[]}
     * @private
     */
    private animationData: AnimationParams[] = [];

    protected constructor () { }

    /**
     * Metodo principal auxiliar que establece la version de la animacion en concreto.
     * @param {FormatVersionListAnims} newVersion Nueva version a establecer. Por defecto es "1.10.0".
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 28-10-2026 
     * @protected
     */
    protected setFormatVersion(newVersion: FormatVersionListAnims): this {
        this.AnimVersion = newVersion;

        return this;
    }

    /**
     * Metodo principal auxiliar que asigna las animaciones con sus respectivos datos en concreto.
     * @param {AnimationParams[]} params Lista de animaciones con sus parametros en concreto.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 28-10-2026  
     * @protected
     */
    protected setAnimations(params: AnimationParams[]): this {
        this.animationData = params;

        return this;
    }

    /**
     * Metodo principal que convierte toda la plantilla general a una JSON con estructura fija lista para su exportacion.
     * @param {boolean} stringify Si se establece en true, devuelve el objecto en formato de TXT listo para un JSON. 
     * @returns {string | Record<string, unknown>} Devuelve un string o un objecto readonly dependiendo el argumento asignado.
     * 
     * @throws {Error} Puede pasar error si, no se establece un ID al controllador de la animacion.
     * 
     * @author HaJuegos - 28-10-2026 
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const mapCases = (obj: object) => {
            return SnakeCase.shallowSnakeCase(Object.fromEntries(
                Object.entries(obj).filter(([, v]) => v !== undefined)
            ));
        };

        const mapEach = <T extends object>(group: Record<string, T | T[]>) => {
            return Object.fromEntries(
                Object.entries(group).map(([key, v]) => [key, Array.isArray(v) ? v.map(mapCases) : mapCases(v)])
            );
        };

        const animsBody: Record<string, unknown> = {};

        for (const { idAnimation, bones, particleEffects, soundEffects, ...rest } of this.animationData) {
            animsBody[`animation.${idAnimation}`] = {
                ...mapCases(rest),
                ...(bones && {
                    bones: Object.fromEntries(Object.entries(bones).map(([id, b]) => {
                        return [id, mapCases(b)];
                    }))
                }),
                ...(particleEffects && { particle_effects: mapEach(particleEffects) }),
                ...(soundEffects && { sound_effects: mapEach(soundEffects) })
            };
        }

        const preAnimation = {
            format_version: this.AnimVersion,
            animations: animsBody
        };

        const finalObj = Object.freeze(preAnimation);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}