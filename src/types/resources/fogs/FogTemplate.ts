import { RGB } from "@minecraft/server";

export {
    RPFogDefinition,
    RPFogOverride,

    FormatVersionListFog,
    DistanceFogParams,
    VolumetricFogParams,
    DensityVolumetricParams,
};

/**
 * Lista de versiones permitidas para el format version de un fog.
 * @enum {string}
 * @author HaJuegos - 31-10-2026
 */
enum FormatVersionListFog {
    MostRecent = "1.21.90",
    V1_16_100 = "1.16.100"
}

/**
 * Parametros base principales para la creacion de un nuevo fog.
 * @interface RPFogDefinition
 * @author HaJuegos - 31-10-2026
 */
interface RPFogDefinition {
    /**
     * (Opcional) Version del format version en concreto que tomara el fog.
     * @type {?FormatVersionListFog}
     */
    formatVersion?: FormatVersionListFog;

    /**
     * ID del fog en concreto a crear.
     * @type {string}
     */
    idFog: string;

    /**
     * Parametros de distancia en concreto del fog a crear.
     * @type {DistanceFogParams}
     */
    distance: DistanceFogParams;

    /**
     * Parametros volumetricos en concreto del fog a crear.
     * @type {VolumetricFogParams}
     */
    volumetric: VolumetricFogParams;
}

/**
 * Tipado auxiliar general recursivo que define como se puede eliminar un valor de la plantilla base en post-edicion.
 * @template V Tipo de valor de la plantilla base a considerar. 
 * @author HaJuegos - 30-10-2026
 */
type RemoveValue<V> = V extends readonly (infer E)[] ? true | E[] : V extends object ? true | { [K in keyof V]?: RemoveValue<NonNullable<V[K]>> } : true;

/**
 * Tipado auxiliar general para definir qeu datos de la plantilla base se pueden eliminar en el parametro remove de post-edicion.
 * @template A Datos a considerar de los keys en concreto. 
 * @author HaJuegos - 30-10-2026
 */
type RemoverEdit<A> = true | {
    [P in keyof A]?: RemoveValue<NonNullable<A[P]>>;
};

/**
 * Tipado general auxiliar para modificar profundamente los valores en post-edicion de la plantilla base, manteniendo solo las keys.
 * @template T 
 * @author HaJuegos - 31-10-2026
 */
type DeepModify<T> = string extends keyof T ? T : number extends keyof T ? T : T extends object ? [keyof T] extends [never] ? { [K in string]?: never } : {
    [K in keyof T]?: DeepModify<T[K]>;
} : T extends boolean ? boolean : T extends number ? number : T extends string ? string : T;

/**
 * Parametros principales para las ediciones de la plantilla base en la post-edicion.
 * @template {RPFogDefinition} TBaseDefinition Definiciones creadas en la plantilla base. 
 * @author HaJuegos - 31-10-2026
 */
type RPFogOverride<
    TBaseDefinition extends RPFogDefinition = RPFogDefinition
> = {
    /**
     * Si se define, la plantilla base es limpiada totalmente dejando solo el archivo vacio.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Parametros adiccionales a implementar en la plantilla base sin necesidad de modificar esta misma.
     * @type {?{ readonly distance?: DistanceFogParams; readonly volumetric?: VolumetricFogParams; }}
     */
    add?: {
        readonly distance?: DistanceFogParams;
        readonly volumetric?: VolumetricFogParams;
    };
} | {
    /**
     * (Opcional) Si se define, la plantilla base es limpiada totalmente dejando solo el archivo vacio.
     * @type {true}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Lista de parametros y datos a modificar en concreto de la plantilla base.
     * @type {?{changeFormatVersion?: FormatVersionListFog; distance?: DeepModify<TBaseDefinition['distance']>; volumetric?: DeepModify<TBaseDefinition['volumetric']>; }}
     */
    changeFog?: {
        changeFormatVersion?: FormatVersionListFog;
        distance?: DeepModify<TBaseDefinition['distance']>;
        volumetric?: DeepModify<TBaseDefinition['volumetric']>;
    };

    /**
     * (Opcional) Lista de parametros fijos o completos a eliminar de la plantilla base sin modificar el archivo completamente.
     * @type {?{distance?: RemoverEdit<NonNullable<TBaseDefinition['distance']>>; volumetric?: RemoverEdit<NonNullable<TBaseDefinition['volumetric']>>; }}
     */
    remove?: {
        distance?: RemoverEdit<NonNullable<TBaseDefinition['distance']>>;
        volumetric?: RemoverEdit<NonNullable<TBaseDefinition['volumetric']>>;
    };

    /**
     * (Opcional) Parametros adiccionales a implementar en la plantilla base sin necesidad de modificar esta misma.
     * @type {?{ readonly distance?: DistanceFogParams; readonly volumetric?: VolumetricFogParams; }}
     */
    add?: {
        readonly distance?: DistanceFogParams;
        readonly volumetric?: VolumetricFogParams;
    };
};


/**
 * Parametros principales para definir la distancia del fog para diferentes ubicaciones de la camara.
 * @interface DistanceFogParams
 * @author HaJuegos - 31-10-2026
 */
interface DistanceFogParams {
    /**
     * (Opcional) Parametros de ajuste del fog que afectar la camara en el aire.
     * @type {?BaseTypeDistanceParams}
     */
    air?: BaseTypeDistanceParams;

    /**
     * (Opcional) Parametros de ajuste del fog que afectar la camara en la lava.
     * @type {?BaseTypeDistanceParams}
     */
    lava?: BaseTypeDistanceParams;

    /**
     * (Opcional) Parametros de ajuste del fog que afectar la camara cuando esta en la lava y tienes fire resistance.
     * @type {?BaseTypeDistanceParams}
     */
    lavaResistance?: BaseTypeDistanceParams;

    /**
     * (Opcional) Parametros de ajuste del fog que afectar la camara en el nieve en polvo.
     * @type {?BaseTypeDistanceParams}
     */
    powderSnow?: BaseTypeDistanceParams;

    /**
     * (Opcional) Parametros de ajuste del fog que afectar la camara en el agua.
     * @type {?BaseTypeDistanceParams}
     */
    water?: BaseTypeDistanceParams;

    /**
     * (Opcional) Parametros de ajuste del fog que afectar la camara cuando llueve.
     * @type {?BaseTypeDistanceParams}
     */
    weather?: BaseTypeDistanceParams;
}

/**
 * Definiciones base para las modificaciones de un fog afectado por algo ambiental del juego.
 * @interface BaseTypeDistanceParams
 * @author HaJuegos - 31-10-2026
 */
interface BaseTypeDistanceParams {
    /**
     * Distancia en bloques donde la fog comienza. Afectado por el render del jugador.
     * @type {number}
     */
    fogStart: number;

    /**
     * Distancia en bloques donde la fog termina. Afectado por el render del jugador.
     * @type {number}
     */
    fogEnd: number;

    /**
     * Color hexadecimal del color que tomara el fog en concreto.
     * @type {string}
     */
    fogColor: string;

    /**
     * Formato en como se va a renderizar inicialmente la fog en concreto. "fixed" se refiere a que la distancia se mide en bloques y "render" se multiplica por la distancia de renderizado actual.
     * @type {"render" | "fixed"}
     */
    renderDistanceType: "render" | "fixed";

    /**
     * (Opcional) Parametros que transformaran gradualmente la distancia de la fog por el bioma actual.
     * @type {?boolean}
     */
    transitionFog?: TransitionFogParams;
}

/**
 * Parametros base principales para la transformacion gradual de la distancia de la fog por el bioma acutal.
 * @interface TransitionFogParams
 * @author HaJuegos - 31-10-2026
 */
interface TransitionFogParams {
    /**
     * (Opcional) Fog inicial que transformara lentamente la distancia del fog sobre el agua propia del bioma cuando el jugador se sumerja en agua.
     * @type {{ fogColor: string; fogEnd: number; fogStart: number; renderDistanceType: "fixed" | "render"; }}
     */
    initFog: {
        /**
         * Distancia en bloques donde la fog comienza. Afectado por el render del jugador.
         * @type {number}
         */
        fogStart: number;

        /**
         * Distancia en bloques donde la fog termina. Afectado por el render del jugador.
         * @type {number}
         */
        fogEnd: number;

        /**
         * Color hexadecimal del color que tomara el fog en concreto.
         * @type {string}
         */
        fogColor: string;

        /**
         * Formato en como se va a renderizar inicialmente la fog en concreto. "fixed" se refiere a que la distancia se mide en bloques y "render" se multiplica por la distancia de renderizado actual.
         * @type {"render" | "fixed"}
         */
        renderDistanceType: "render" | "fixed";
    };

    /**
     * (Opcional) Tiempo que tardara en completarse la transicion de la fog.
     * @type {number}
     */
    maxSeconds: number;

    /**
     * (Opcional) Tiempo de avance de la transicion de la niebla despues de midSeconds.
     * @type {number}
     */
    midPercent: number;

    /**
     * (Opcional) Tiempo que tarda en alcanzarse un determinado porcentaje de avance en la transicion de la niebla.
     * @type {number}
     */
    midSeconds: number;

    /**
     * (Opcional) Tiempo minimo de la transicion de la niebla.
     * @type {number}
     */
    minPercent: number;
}


/**
 * Parametros para los ajustes del volumen volumetrico de la fog en concreto.
 * @interface VolumetricFogParams
 * @author HaJuegos - 31-10-2026
 */
interface VolumetricFogParams {
    /**
     * (Opcional) Parametros de densidad para las distintas ubicaciones de la camara.
     * @type {?DensityVolumetricParams}
     */
    density?: DensityVolumetricParams;

    /**
     * (Opcional) Parametros que determinan la distribucion de la luz dispersa en diferentes medios.
     * @type {?HenyeyVolumetricParams}
     */
    henyeyGreensteinG?: HenyeyVolumetricParams;

    /**
     * (Opcional) Parametros para ajustes coeficientes para la fog volumetrica en los distintos bloques.
     * @type {?MediaCoefficientsParams}
     */
    mediaCoefficients?: MediaCoefficientsParams;
}

/**
 * Parametros principales que afectan los valores de densidad de la nuevla a medida que la luz atravieza estos mismos.
 * @interface DensityVolumetricParams
 * @author HaJuegos - 31-10-2026
 */
interface DensityVolumetricParams {
    /**
     * (Opcional) Parametros que afectaran la camara en el aire.
     * @type {?BaseDensityParams}
     */
    air?: BaseDensityParams;

    /**
     * (Opcional) Parametros que afectaran la camara en la lava.
     * @type {?BaseDensityParams}
     */
    lava?: BaseDensityParams;

    /**
     * (Opcional) Parametros que afectaran la camara en la lava con resistencia al fuego.
     * @type {?BaseDensityParams}
     */
    lavaResistance?: BaseDensityParams;

    /**
     * (Opcional) Parametros que afectaran la camara en el agua.
     * @type {?BaseDensityParams}
     */
    water?: BaseDensityParams;
}

/**
 * Parametros principales para la definicion de un nuevo ajuste de densidad cuando atravieza ciertos parametros de luz.
 * @interface BaseDensityParams
 * @author HaJuegos - 31-10-2026
 */
interface BaseDensityParams {
    /**
     * (Opcional) El nivel maximo de opacidad que puede alcanzar la niebla baja. Solo se permite entre 0 a 1.
     * @type {?number}
     */
    maxDensity?: number;

    /**
     * (Opcional) La altura en bloques a la que la niebla terrestre alcazara su densidad maxima.
     * @type {?number}
     */
    maxDensityHeight?: number;

    /**
     * (Opcional) Si se establece, la densidad sera uniforme en todas las alturas.
     * @type {?boolean}
     */
    uniform?: boolean;

    /**
     * (Opcional) La altura en bloques a la que la niebla del suelo sera completamente transparente y comenzara a aparecer. Este solo acepta valores menores que 1 y mayores que maxDensityHeight.
     * @type {?number}
     */
    zeroDensityHeight?: number;
}

/**
 * Tipado general para seguir la estructura aceptada en un valor de distribucion de luz.
 * @author HaJuegos - 31-10-2026
 */
type HenyeyTypes = {
    /**
     * Valor que controla la distribucion de la luz dispersa en bloques, numeros o animaciones de tipo "0.1": number.
     * @type {(number | Record<string, number>)}
     */
    henyeyGreensteinG: number | Record<string, number>;
};

/**
 * Parametros que determinan como la distribucion de luz se dispersa en diferentes medios de la camara o ambiente.
 * @interface HenyeyVolumetricParams
 * @author HaJuegos - 31-10-2026
 */
interface HenyeyVolumetricParams {
    /**
     * (Opcional) Parametros para definir como la luz atravieza el aire.
     * @type {?HenyeyTypes}
     */
    air?: HenyeyTypes;

    /**
     * (Opcional) Parametros para definir como la luz atravieza el agua.
     * @type {?HenyeyTypes}
     */
    water?: HenyeyTypes;
}

/**
 * Parametros que ajustan los medios coeficientes para la niebla volumetrica en los distintos bloques.
 * @interface MediaCoefficientsParams
 * @author HaJuegos - 31-10-2026
 */
interface MediaCoefficientsParams {
    /**
     * (Opcional) Valores del coeficiente del fog cuando la luz atraviesa el aire.
     * @type {?MediaCoefficientBaseParams}
     */
    air?: MediaCoefficientBaseParams;

    /**
     * (Opcional) Valores del coeficiente del fog cuando la luz atraviesa alguna nube.
     * @type {?MediaCoefficientBaseParams}
     */
    cloud?: MediaCoefficientBaseParams;

    /**
     * (Opcional) Valores del coeficiente del fog cuando la luz atraviesa el agua.
     * @type {?MediaCoefficientBaseParams}
     */
    water?: MediaCoefficientBaseParams;
}

/**
 * Parametros de color para ver como este mismo afecta los medios de la fog.
 * @interface MediaCoefficientBaseParams
 * @author HaJuegos - 31-10-2026
 */
interface MediaCoefficientBaseParams {
    /**
     * El color de la luz que emite el bloque en formato hexadecimal.
     * @type {?string}
     */
    absorption: string | [number, number, number];

    /**
     * El color de la luz que emite el bloque en formato hexadecimal.
     * @type {?string}
     */
    scattering: string | [number, number, number];
}