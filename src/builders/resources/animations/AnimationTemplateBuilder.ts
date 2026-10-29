import { AnimationParams, RPAnimationDefinition, RPAnimationOverride, RPAnimationsMap } from "../../../types/resources/animations/AnimationTemplate";
import { ResourceAnimationBuilder } from "./AnimationBuilder";

/**
 * Clase principal final que crea una plantilla definitiva para la creacion de una animacion.
 * @class FinalRPAnimationTemplateBuilder
 * @extends {ResourceAnimationBuilder}
 * @author HaJuegos - 28-10-2026 
 * @export
 */
export class FinalRPAnimationTemplateBuilder extends ResourceAnimationBuilder {
    /**
     * Eventos y parametros principales de la clase para la creacion de nuevas animaciones.
     * @param {RPAnimationDefinition} def Definiciones iniciales de la plantilla base.
     * @param {RPAnimationOverride<any>} [over] (Opcional) Definiciones de las ediciones post-edicion de la plantilla base.
     * @author HaJuegos - 28-10-2026  
     * @constructor
     * @public
     */
    public constructor (def: RPAnimationDefinition, over: RPAnimationOverride<any> = {}) {
        super();

        const isObj = (v: unknown): v is Record<string, any> => {
            return !!v && typeof v === 'object' && !Array.isArray(v);
        };

        const merge = (t: Record<string, any>, s: Record<string, any>) => {
            for (const k of Object.keys(s)) {
                if (isObj(s[k]) && isObj(t[k])) {
                    merge(t[k], s[k]);
                } else {
                    t[k] = s[k];
                }
            }
        };

        if (def.formatVersion) {
            this.setFormatVersion(def.formatVersion);
        }

        let anims: AnimationParams[] = structuredClone([...def.animations]);

        if (over.clearAllData) {
            anims = [];
        } else {
            for (const [id, edit] of Object.entries(over.changeAnimations ?? {}) as [string, any][]) {
                const anim = anims.find(a => a.idAnimation === id);

                if (anim && edit) {
                    merge(anim, edit);
                };
            }

            for (const [id, rem] of Object.entries(over.remove ?? {}) as [string, any][]) {
                if (!rem) continue;

                if (rem === true) {
                    anims = anims.filter(a => a.idAnimation !== id);
                    continue;
                }

                const anim = anims.find(a => a.idAnimation === id) as any;

                if (!anim) continue;

                for (const [prop, val] of Object.entries(rem) as [string, any][]) {
                    if (val === true) {
                        delete anim[prop];
                        continue;
                    }

                    if (!isObj(val) || !isObj(anim[prop])) continue;

                    for (const [key, sub] of Object.entries(val) as [string, any][]) {
                        if (sub === true) {
                            delete anim[prop][key];
                        } else if (isObj(sub) && isObj(anim[prop][key])) {
                            for (const c of Object.keys(sub)) {
                                delete anim[prop][key][c];
                            };

                            if (Object.keys(anim[prop][key]).length == 0) {
                                delete anim[prop][key];
                            };
                        }
                    }

                    if (Object.keys(anim[prop]).length == 0) {
                        delete anim[prop];
                    };
                }
            }
        }

        if (over.add?.animations) {
            anims.push(...structuredClone([...over.add.animations]));
        }

        this.setAnimations(anims);
    }

    /**
     * Metodo principal final que convierte toda la plantilla definitiva en JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura final.
     * @author HaJuegos - 28-10-2026 
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de unas Animaciones para un RP a partir de una definicion fija.
 * @param {{ formatVersion?: RPAnimationDefinition['formatVersion']; animations: TAnims; }} def Definiciones base de los parametros de la plantilla fija. 
 * @template {readonly AnimationParams[]} TAnims Tipado principales a seguir de la plantilla base definidos.
 * @returns {(over?: RPAnimationOverride<RPAnimationsMap<TAnims>>) => string} Devuele una funcion auxiliar para las ediciones de la plantilla base para la post-edicion y finalmente la exportacion final adaptada a txt para el JSON final.
 * @author HaJuegos - 28-10-2026 
 * @export
 */
export function createRPAnimation<
    const TAnims extends readonly AnimationParams[]
>(def: { formatVersion?: RPAnimationDefinition['formatVersion']; animations: TAnims; }) {
    return (over: RPAnimationOverride<RPAnimationsMap<TAnims>> = {}) => {
        return new FinalRPAnimationTemplateBuilder(def, over).finalBuild();
    };

}