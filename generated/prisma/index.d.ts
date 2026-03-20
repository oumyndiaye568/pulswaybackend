
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Accueil
 * 
 */
export type Accueil = $Result.DefaultSelection<Prisma.$AccueilPayload>
/**
 * Model Medecin
 * 
 */
export type Medecin = $Result.DefaultSelection<Prisma.$MedecinPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model FileAttente
 * 
 */
export type FileAttente = $Result.DefaultSelection<Prisma.$FileAttentePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model RendezVous
 * 
 */
export type RendezVous = $Result.DefaultSelection<Prisma.$RendezVousPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  ACCUEIL: 'ACCUEIL',
  PATIENT: 'PATIENT',
  MEDECIN: 'MEDECIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutFile: {
  EN_ATTENTE: 'EN_ATTENTE',
  VALIDE: 'VALIDE',
  EN_COURS: 'EN_COURS',
  TERMINE: 'TERMINE',
  ANNULE: 'ANNULE'
};

export type StatutFile = (typeof StatutFile)[keyof typeof StatutFile]


export const StatutTicket: {
  EN_ATTENTE: 'EN_ATTENTE',
  EN_COURS: 'EN_COURS',
  TERMINE: 'TERMINE',
  ANNULE: 'ANNULE'
};

export type StatutTicket = (typeof StatutTicket)[keyof typeof StatutTicket]


export const StatutRendezVous: {
  PLANIFIE: 'PLANIFIE',
  CONFIRME: 'CONFIRME',
  ANNULE: 'ANNULE'
};

export type StatutRendezVous = (typeof StatutRendezVous)[keyof typeof StatutRendezVous]


export const TypeNotification: {
  INSCRIPTION: 'INSCRIPTION',
  RENDEZ_VOUS: 'RENDEZ_VOUS',
  PATIENT_REFERE: 'PATIENT_REFERE',
  URGENCE: 'URGENCE'
};

export type TypeNotification = (typeof TypeNotification)[keyof typeof TypeNotification]


export const CanalNotification: {
  SMS: 'SMS',
  IN_APP: 'IN_APP'
};

export type CanalNotification = (typeof CanalNotification)[keyof typeof CanalNotification]


export const CreerPar: {
  MEDECIN: 'MEDECIN',
  ACCUEIL: 'ACCUEIL'
};

export type CreerPar = (typeof CreerPar)[keyof typeof CreerPar]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutFile = $Enums.StatutFile

export const StatutFile: typeof $Enums.StatutFile

export type StatutTicket = $Enums.StatutTicket

export const StatutTicket: typeof $Enums.StatutTicket

export type StatutRendezVous = $Enums.StatutRendezVous

export const StatutRendezVous: typeof $Enums.StatutRendezVous

export type TypeNotification = $Enums.TypeNotification

export const TypeNotification: typeof $Enums.TypeNotification

export type CanalNotification = $Enums.CanalNotification

export const CanalNotification: typeof $Enums.CanalNotification

export type CreerPar = $Enums.CreerPar

export const CreerPar: typeof $Enums.CreerPar

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accueil`: Exposes CRUD operations for the **Accueil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accueils
    * const accueils = await prisma.accueil.findMany()
    * ```
    */
  get accueil(): Prisma.AccueilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medecin`: Exposes CRUD operations for the **Medecin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medecins
    * const medecins = await prisma.medecin.findMany()
    * ```
    */
  get medecin(): Prisma.MedecinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileAttente`: Exposes CRUD operations for the **FileAttente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileAttentes
    * const fileAttentes = await prisma.fileAttente.findMany()
    * ```
    */
  get fileAttente(): Prisma.FileAttenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rendezVous`: Exposes CRUD operations for the **RendezVous** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RendezVous
    * const rendezVous = await prisma.rendezVous.findMany()
    * ```
    */
  get rendezVous(): Prisma.RendezVousDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Accueil: 'Accueil',
    Medecin: 'Medecin',
    Patient: 'Patient',
    Service: 'Service',
    FileAttente: 'FileAttente',
    Ticket: 'Ticket',
    RendezVous: 'RendezVous',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "accueil" | "medecin" | "patient" | "service" | "fileAttente" | "ticket" | "rendezVous" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Accueil: {
        payload: Prisma.$AccueilPayload<ExtArgs>
        fields: Prisma.AccueilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccueilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccueilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload>
          }
          findFirst: {
            args: Prisma.AccueilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccueilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload>
          }
          findMany: {
            args: Prisma.AccueilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload>[]
          }
          create: {
            args: Prisma.AccueilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload>
          }
          createMany: {
            args: Prisma.AccueilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccueilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload>
          }
          update: {
            args: Prisma.AccueilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload>
          }
          deleteMany: {
            args: Prisma.AccueilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccueilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccueilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccueilPayload>
          }
          aggregate: {
            args: Prisma.AccueilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccueil>
          }
          groupBy: {
            args: Prisma.AccueilGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccueilGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccueilCountArgs<ExtArgs>
            result: $Utils.Optional<AccueilCountAggregateOutputType> | number
          }
        }
      }
      Medecin: {
        payload: Prisma.$MedecinPayload<ExtArgs>
        fields: Prisma.MedecinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedecinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedecinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload>
          }
          findFirst: {
            args: Prisma.MedecinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedecinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload>
          }
          findMany: {
            args: Prisma.MedecinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload>[]
          }
          create: {
            args: Prisma.MedecinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload>
          }
          createMany: {
            args: Prisma.MedecinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedecinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload>
          }
          update: {
            args: Prisma.MedecinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload>
          }
          deleteMany: {
            args: Prisma.MedecinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedecinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedecinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinPayload>
          }
          aggregate: {
            args: Prisma.MedecinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedecin>
          }
          groupBy: {
            args: Prisma.MedecinGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedecinGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedecinCountArgs<ExtArgs>
            result: $Utils.Optional<MedecinCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      FileAttente: {
        payload: Prisma.$FileAttentePayload<ExtArgs>
        fields: Prisma.FileAttenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileAttenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileAttenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload>
          }
          findFirst: {
            args: Prisma.FileAttenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileAttenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload>
          }
          findMany: {
            args: Prisma.FileAttenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload>[]
          }
          create: {
            args: Prisma.FileAttenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload>
          }
          createMany: {
            args: Prisma.FileAttenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FileAttenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload>
          }
          update: {
            args: Prisma.FileAttenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload>
          }
          deleteMany: {
            args: Prisma.FileAttenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileAttenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileAttenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileAttentePayload>
          }
          aggregate: {
            args: Prisma.FileAttenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileAttente>
          }
          groupBy: {
            args: Prisma.FileAttenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileAttenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileAttenteCountArgs<ExtArgs>
            result: $Utils.Optional<FileAttenteCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      RendezVous: {
        payload: Prisma.$RendezVousPayload<ExtArgs>
        fields: Prisma.RendezVousFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RendezVousFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RendezVousFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          findFirst: {
            args: Prisma.RendezVousFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RendezVousFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          findMany: {
            args: Prisma.RendezVousFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>[]
          }
          create: {
            args: Prisma.RendezVousCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          createMany: {
            args: Prisma.RendezVousCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RendezVousDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          update: {
            args: Prisma.RendezVousUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          deleteMany: {
            args: Prisma.RendezVousDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RendezVousUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RendezVousUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          aggregate: {
            args: Prisma.RendezVousAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRendezVous>
          }
          groupBy: {
            args: Prisma.RendezVousGroupByArgs<ExtArgs>
            result: $Utils.Optional<RendezVousGroupByOutputType>[]
          }
          count: {
            args: Prisma.RendezVousCountArgs<ExtArgs>
            result: $Utils.Optional<RendezVousCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    accueil?: AccueilOmit
    medecin?: MedecinOmit
    patient?: PatientOmit
    service?: ServiceOmit
    fileAttente?: FileAttenteOmit
    ticket?: TicketOmit
    rendezVous?: RendezVousOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MedecinCountOutputType
   */

  export type MedecinCountOutputType = {
    rendezVous: number
    tickets: number
  }

  export type MedecinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rendezVous?: boolean | MedecinCountOutputTypeCountRendezVousArgs
    tickets?: boolean | MedecinCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * MedecinCountOutputType without action
   */
  export type MedecinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedecinCountOutputType
     */
    select?: MedecinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedecinCountOutputType without action
   */
  export type MedecinCountOutputTypeCountRendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendezVousWhereInput
  }

  /**
   * MedecinCountOutputType without action
   */
  export type MedecinCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    tickets: number
    rendezVous: number
    notifications: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | PatientCountOutputTypeCountTicketsArgs
    rendezVous?: boolean | PatientCountOutputTypeCountRendezVousArgs
    notifications?: boolean | PatientCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountRendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendezVousWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    medecins: number
    accueils: number
    fileAttente: number
    tickets: number
    rendezVous: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medecins?: boolean | ServiceCountOutputTypeCountMedecinsArgs
    accueils?: boolean | ServiceCountOutputTypeCountAccueilsArgs
    fileAttente?: boolean | ServiceCountOutputTypeCountFileAttenteArgs
    tickets?: boolean | ServiceCountOutputTypeCountTicketsArgs
    rendezVous?: boolean | ServiceCountOutputTypeCountRendezVousArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountMedecinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedecinWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAccueilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccueilWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountFileAttenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileAttenteWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountRendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendezVousWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    telephone: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nom: string | null
    prenom: string | null
    telephone: string | null
    email: string | null
    password: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | User$adminArgs<ExtArgs>
    accueil?: boolean | User$accueilArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    medecin?: boolean | User$medecinArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "telephone" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | User$adminArgs<ExtArgs>
    accueil?: boolean | User$accueilArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    medecin?: boolean | User$medecinArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      accueil: Prisma.$AccueilPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
      medecin: Prisma.$MedecinPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string | null
      prenom: string | null
      telephone: string | null
      email: string | null
      password: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accueil<T extends User$accueilArgs<ExtArgs> = {}>(args?: Subset<T, User$accueilArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    medecin<T extends User$medecinArgs<ExtArgs> = {}>(args?: Subset<T, User$medecinArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.accueil
   */
  export type User$accueilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    where?: AccueilWhereInput
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.medecin
   */
  export type User$medecinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    where?: MedecinWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    userId: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly userId: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Accueil
   */

  export type AggregateAccueil = {
    _count: AccueilCountAggregateOutputType | null
    _avg: AccueilAvgAggregateOutputType | null
    _sum: AccueilSumAggregateOutputType | null
    _min: AccueilMinAggregateOutputType | null
    _max: AccueilMaxAggregateOutputType | null
  }

  export type AccueilAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceId: number | null
  }

  export type AccueilSumAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceId: number | null
  }

  export type AccueilMinAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceId: number | null
  }

  export type AccueilMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceId: number | null
  }

  export type AccueilCountAggregateOutputType = {
    id: number
    userId: number
    serviceId: number
    _all: number
  }


  export type AccueilAvgAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
  }

  export type AccueilSumAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
  }

  export type AccueilMinAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
  }

  export type AccueilMaxAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
  }

  export type AccueilCountAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    _all?: true
  }

  export type AccueilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accueil to aggregate.
     */
    where?: AccueilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accueils to fetch.
     */
    orderBy?: AccueilOrderByWithRelationInput | AccueilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccueilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accueils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accueils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accueils
    **/
    _count?: true | AccueilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccueilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccueilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccueilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccueilMaxAggregateInputType
  }

  export type GetAccueilAggregateType<T extends AccueilAggregateArgs> = {
        [P in keyof T & keyof AggregateAccueil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccueil[P]>
      : GetScalarType<T[P], AggregateAccueil[P]>
  }




  export type AccueilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccueilWhereInput
    orderBy?: AccueilOrderByWithAggregationInput | AccueilOrderByWithAggregationInput[]
    by: AccueilScalarFieldEnum[] | AccueilScalarFieldEnum
    having?: AccueilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccueilCountAggregateInputType | true
    _avg?: AccueilAvgAggregateInputType
    _sum?: AccueilSumAggregateInputType
    _min?: AccueilMinAggregateInputType
    _max?: AccueilMaxAggregateInputType
  }

  export type AccueilGroupByOutputType = {
    id: number
    userId: number
    serviceId: number | null
    _count: AccueilCountAggregateOutputType | null
    _avg: AccueilAvgAggregateOutputType | null
    _sum: AccueilSumAggregateOutputType | null
    _min: AccueilMinAggregateOutputType | null
    _max: AccueilMaxAggregateOutputType | null
  }

  type GetAccueilGroupByPayload<T extends AccueilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccueilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccueilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccueilGroupByOutputType[P]>
            : GetScalarType<T[P], AccueilGroupByOutputType[P]>
        }
      >
    >


  export type AccueilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | Accueil$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["accueil"]>



  export type AccueilSelectScalar = {
    id?: boolean
    userId?: boolean
    serviceId?: boolean
  }

  export type AccueilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serviceId", ExtArgs["result"]["accueil"]>
  export type AccueilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | Accueil$serviceArgs<ExtArgs>
  }

  export type $AccueilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accueil"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      serviceId: number | null
    }, ExtArgs["result"]["accueil"]>
    composites: {}
  }

  type AccueilGetPayload<S extends boolean | null | undefined | AccueilDefaultArgs> = $Result.GetResult<Prisma.$AccueilPayload, S>

  type AccueilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccueilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccueilCountAggregateInputType | true
    }

  export interface AccueilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accueil'], meta: { name: 'Accueil' } }
    /**
     * Find zero or one Accueil that matches the filter.
     * @param {AccueilFindUniqueArgs} args - Arguments to find a Accueil
     * @example
     * // Get one Accueil
     * const accueil = await prisma.accueil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccueilFindUniqueArgs>(args: SelectSubset<T, AccueilFindUniqueArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accueil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccueilFindUniqueOrThrowArgs} args - Arguments to find a Accueil
     * @example
     * // Get one Accueil
     * const accueil = await prisma.accueil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccueilFindUniqueOrThrowArgs>(args: SelectSubset<T, AccueilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accueil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccueilFindFirstArgs} args - Arguments to find a Accueil
     * @example
     * // Get one Accueil
     * const accueil = await prisma.accueil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccueilFindFirstArgs>(args?: SelectSubset<T, AccueilFindFirstArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accueil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccueilFindFirstOrThrowArgs} args - Arguments to find a Accueil
     * @example
     * // Get one Accueil
     * const accueil = await prisma.accueil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccueilFindFirstOrThrowArgs>(args?: SelectSubset<T, AccueilFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accueils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccueilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accueils
     * const accueils = await prisma.accueil.findMany()
     * 
     * // Get first 10 Accueils
     * const accueils = await prisma.accueil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accueilWithIdOnly = await prisma.accueil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccueilFindManyArgs>(args?: SelectSubset<T, AccueilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accueil.
     * @param {AccueilCreateArgs} args - Arguments to create a Accueil.
     * @example
     * // Create one Accueil
     * const Accueil = await prisma.accueil.create({
     *   data: {
     *     // ... data to create a Accueil
     *   }
     * })
     * 
     */
    create<T extends AccueilCreateArgs>(args: SelectSubset<T, AccueilCreateArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accueils.
     * @param {AccueilCreateManyArgs} args - Arguments to create many Accueils.
     * @example
     * // Create many Accueils
     * const accueil = await prisma.accueil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccueilCreateManyArgs>(args?: SelectSubset<T, AccueilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accueil.
     * @param {AccueilDeleteArgs} args - Arguments to delete one Accueil.
     * @example
     * // Delete one Accueil
     * const Accueil = await prisma.accueil.delete({
     *   where: {
     *     // ... filter to delete one Accueil
     *   }
     * })
     * 
     */
    delete<T extends AccueilDeleteArgs>(args: SelectSubset<T, AccueilDeleteArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accueil.
     * @param {AccueilUpdateArgs} args - Arguments to update one Accueil.
     * @example
     * // Update one Accueil
     * const accueil = await prisma.accueil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccueilUpdateArgs>(args: SelectSubset<T, AccueilUpdateArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accueils.
     * @param {AccueilDeleteManyArgs} args - Arguments to filter Accueils to delete.
     * @example
     * // Delete a few Accueils
     * const { count } = await prisma.accueil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccueilDeleteManyArgs>(args?: SelectSubset<T, AccueilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accueils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccueilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accueils
     * const accueil = await prisma.accueil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccueilUpdateManyArgs>(args: SelectSubset<T, AccueilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accueil.
     * @param {AccueilUpsertArgs} args - Arguments to update or create a Accueil.
     * @example
     * // Update or create a Accueil
     * const accueil = await prisma.accueil.upsert({
     *   create: {
     *     // ... data to create a Accueil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accueil we want to update
     *   }
     * })
     */
    upsert<T extends AccueilUpsertArgs>(args: SelectSubset<T, AccueilUpsertArgs<ExtArgs>>): Prisma__AccueilClient<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accueils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccueilCountArgs} args - Arguments to filter Accueils to count.
     * @example
     * // Count the number of Accueils
     * const count = await prisma.accueil.count({
     *   where: {
     *     // ... the filter for the Accueils we want to count
     *   }
     * })
    **/
    count<T extends AccueilCountArgs>(
      args?: Subset<T, AccueilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccueilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accueil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccueilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccueilAggregateArgs>(args: Subset<T, AccueilAggregateArgs>): Prisma.PrismaPromise<GetAccueilAggregateType<T>>

    /**
     * Group by Accueil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccueilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccueilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccueilGroupByArgs['orderBy'] }
        : { orderBy?: AccueilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccueilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccueilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accueil model
   */
  readonly fields: AccueilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accueil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccueilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends Accueil$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Accueil$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accueil model
   */
  interface AccueilFieldRefs {
    readonly id: FieldRef<"Accueil", 'Int'>
    readonly userId: FieldRef<"Accueil", 'Int'>
    readonly serviceId: FieldRef<"Accueil", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Accueil findUnique
   */
  export type AccueilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * Filter, which Accueil to fetch.
     */
    where: AccueilWhereUniqueInput
  }

  /**
   * Accueil findUniqueOrThrow
   */
  export type AccueilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * Filter, which Accueil to fetch.
     */
    where: AccueilWhereUniqueInput
  }

  /**
   * Accueil findFirst
   */
  export type AccueilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * Filter, which Accueil to fetch.
     */
    where?: AccueilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accueils to fetch.
     */
    orderBy?: AccueilOrderByWithRelationInput | AccueilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accueils.
     */
    cursor?: AccueilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accueils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accueils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accueils.
     */
    distinct?: AccueilScalarFieldEnum | AccueilScalarFieldEnum[]
  }

  /**
   * Accueil findFirstOrThrow
   */
  export type AccueilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * Filter, which Accueil to fetch.
     */
    where?: AccueilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accueils to fetch.
     */
    orderBy?: AccueilOrderByWithRelationInput | AccueilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accueils.
     */
    cursor?: AccueilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accueils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accueils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accueils.
     */
    distinct?: AccueilScalarFieldEnum | AccueilScalarFieldEnum[]
  }

  /**
   * Accueil findMany
   */
  export type AccueilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * Filter, which Accueils to fetch.
     */
    where?: AccueilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accueils to fetch.
     */
    orderBy?: AccueilOrderByWithRelationInput | AccueilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accueils.
     */
    cursor?: AccueilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accueils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accueils.
     */
    skip?: number
    distinct?: AccueilScalarFieldEnum | AccueilScalarFieldEnum[]
  }

  /**
   * Accueil create
   */
  export type AccueilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * The data needed to create a Accueil.
     */
    data: XOR<AccueilCreateInput, AccueilUncheckedCreateInput>
  }

  /**
   * Accueil createMany
   */
  export type AccueilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accueils.
     */
    data: AccueilCreateManyInput | AccueilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accueil update
   */
  export type AccueilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * The data needed to update a Accueil.
     */
    data: XOR<AccueilUpdateInput, AccueilUncheckedUpdateInput>
    /**
     * Choose, which Accueil to update.
     */
    where: AccueilWhereUniqueInput
  }

  /**
   * Accueil updateMany
   */
  export type AccueilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accueils.
     */
    data: XOR<AccueilUpdateManyMutationInput, AccueilUncheckedUpdateManyInput>
    /**
     * Filter which Accueils to update
     */
    where?: AccueilWhereInput
    /**
     * Limit how many Accueils to update.
     */
    limit?: number
  }

  /**
   * Accueil upsert
   */
  export type AccueilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * The filter to search for the Accueil to update in case it exists.
     */
    where: AccueilWhereUniqueInput
    /**
     * In case the Accueil found by the `where` argument doesn't exist, create a new Accueil with this data.
     */
    create: XOR<AccueilCreateInput, AccueilUncheckedCreateInput>
    /**
     * In case the Accueil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccueilUpdateInput, AccueilUncheckedUpdateInput>
  }

  /**
   * Accueil delete
   */
  export type AccueilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    /**
     * Filter which Accueil to delete.
     */
    where: AccueilWhereUniqueInput
  }

  /**
   * Accueil deleteMany
   */
  export type AccueilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accueils to delete
     */
    where?: AccueilWhereInput
    /**
     * Limit how many Accueils to delete.
     */
    limit?: number
  }

  /**
   * Accueil.service
   */
  export type Accueil$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Accueil without action
   */
  export type AccueilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
  }


  /**
   * Model Medecin
   */

  export type AggregateMedecin = {
    _count: MedecinCountAggregateOutputType | null
    _avg: MedecinAvgAggregateOutputType | null
    _sum: MedecinSumAggregateOutputType | null
    _min: MedecinMinAggregateOutputType | null
    _max: MedecinMaxAggregateOutputType | null
  }

  export type MedecinAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceId: number | null
  }

  export type MedecinSumAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceId: number | null
  }

  export type MedecinMinAggregateOutputType = {
    id: number | null
    userId: number | null
    specialite: string | null
    serviceId: number | null
  }

  export type MedecinMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    specialite: string | null
    serviceId: number | null
  }

  export type MedecinCountAggregateOutputType = {
    id: number
    userId: number
    specialite: number
    serviceId: number
    _all: number
  }


  export type MedecinAvgAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
  }

  export type MedecinSumAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
  }

  export type MedecinMinAggregateInputType = {
    id?: true
    userId?: true
    specialite?: true
    serviceId?: true
  }

  export type MedecinMaxAggregateInputType = {
    id?: true
    userId?: true
    specialite?: true
    serviceId?: true
  }

  export type MedecinCountAggregateInputType = {
    id?: true
    userId?: true
    specialite?: true
    serviceId?: true
    _all?: true
  }

  export type MedecinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medecin to aggregate.
     */
    where?: MedecinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinOrderByWithRelationInput | MedecinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedecinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medecins
    **/
    _count?: true | MedecinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedecinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedecinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedecinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedecinMaxAggregateInputType
  }

  export type GetMedecinAggregateType<T extends MedecinAggregateArgs> = {
        [P in keyof T & keyof AggregateMedecin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedecin[P]>
      : GetScalarType<T[P], AggregateMedecin[P]>
  }




  export type MedecinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedecinWhereInput
    orderBy?: MedecinOrderByWithAggregationInput | MedecinOrderByWithAggregationInput[]
    by: MedecinScalarFieldEnum[] | MedecinScalarFieldEnum
    having?: MedecinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedecinCountAggregateInputType | true
    _avg?: MedecinAvgAggregateInputType
    _sum?: MedecinSumAggregateInputType
    _min?: MedecinMinAggregateInputType
    _max?: MedecinMaxAggregateInputType
  }

  export type MedecinGroupByOutputType = {
    id: number
    userId: number
    specialite: string
    serviceId: number
    _count: MedecinCountAggregateOutputType | null
    _avg: MedecinAvgAggregateOutputType | null
    _sum: MedecinSumAggregateOutputType | null
    _min: MedecinMinAggregateOutputType | null
    _max: MedecinMaxAggregateOutputType | null
  }

  type GetMedecinGroupByPayload<T extends MedecinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedecinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedecinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedecinGroupByOutputType[P]>
            : GetScalarType<T[P], MedecinGroupByOutputType[P]>
        }
      >
    >


  export type MedecinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialite?: boolean
    serviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    rendezVous?: boolean | Medecin$rendezVousArgs<ExtArgs>
    tickets?: boolean | Medecin$ticketsArgs<ExtArgs>
    _count?: boolean | MedecinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medecin"]>



  export type MedecinSelectScalar = {
    id?: boolean
    userId?: boolean
    specialite?: boolean
    serviceId?: boolean
  }

  export type MedecinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialite" | "serviceId", ExtArgs["result"]["medecin"]>
  export type MedecinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    rendezVous?: boolean | Medecin$rendezVousArgs<ExtArgs>
    tickets?: boolean | Medecin$ticketsArgs<ExtArgs>
    _count?: boolean | MedecinCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedecinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medecin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      rendezVous: Prisma.$RendezVousPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      specialite: string
      serviceId: number
    }, ExtArgs["result"]["medecin"]>
    composites: {}
  }

  type MedecinGetPayload<S extends boolean | null | undefined | MedecinDefaultArgs> = $Result.GetResult<Prisma.$MedecinPayload, S>

  type MedecinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedecinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedecinCountAggregateInputType | true
    }

  export interface MedecinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medecin'], meta: { name: 'Medecin' } }
    /**
     * Find zero or one Medecin that matches the filter.
     * @param {MedecinFindUniqueArgs} args - Arguments to find a Medecin
     * @example
     * // Get one Medecin
     * const medecin = await prisma.medecin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedecinFindUniqueArgs>(args: SelectSubset<T, MedecinFindUniqueArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medecin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedecinFindUniqueOrThrowArgs} args - Arguments to find a Medecin
     * @example
     * // Get one Medecin
     * const medecin = await prisma.medecin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedecinFindUniqueOrThrowArgs>(args: SelectSubset<T, MedecinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medecin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinFindFirstArgs} args - Arguments to find a Medecin
     * @example
     * // Get one Medecin
     * const medecin = await prisma.medecin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedecinFindFirstArgs>(args?: SelectSubset<T, MedecinFindFirstArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medecin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinFindFirstOrThrowArgs} args - Arguments to find a Medecin
     * @example
     * // Get one Medecin
     * const medecin = await prisma.medecin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedecinFindFirstOrThrowArgs>(args?: SelectSubset<T, MedecinFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medecins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medecins
     * const medecins = await prisma.medecin.findMany()
     * 
     * // Get first 10 Medecins
     * const medecins = await prisma.medecin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medecinWithIdOnly = await prisma.medecin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedecinFindManyArgs>(args?: SelectSubset<T, MedecinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medecin.
     * @param {MedecinCreateArgs} args - Arguments to create a Medecin.
     * @example
     * // Create one Medecin
     * const Medecin = await prisma.medecin.create({
     *   data: {
     *     // ... data to create a Medecin
     *   }
     * })
     * 
     */
    create<T extends MedecinCreateArgs>(args: SelectSubset<T, MedecinCreateArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medecins.
     * @param {MedecinCreateManyArgs} args - Arguments to create many Medecins.
     * @example
     * // Create many Medecins
     * const medecin = await prisma.medecin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedecinCreateManyArgs>(args?: SelectSubset<T, MedecinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medecin.
     * @param {MedecinDeleteArgs} args - Arguments to delete one Medecin.
     * @example
     * // Delete one Medecin
     * const Medecin = await prisma.medecin.delete({
     *   where: {
     *     // ... filter to delete one Medecin
     *   }
     * })
     * 
     */
    delete<T extends MedecinDeleteArgs>(args: SelectSubset<T, MedecinDeleteArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medecin.
     * @param {MedecinUpdateArgs} args - Arguments to update one Medecin.
     * @example
     * // Update one Medecin
     * const medecin = await prisma.medecin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedecinUpdateArgs>(args: SelectSubset<T, MedecinUpdateArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medecins.
     * @param {MedecinDeleteManyArgs} args - Arguments to filter Medecins to delete.
     * @example
     * // Delete a few Medecins
     * const { count } = await prisma.medecin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedecinDeleteManyArgs>(args?: SelectSubset<T, MedecinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medecins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medecins
     * const medecin = await prisma.medecin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedecinUpdateManyArgs>(args: SelectSubset<T, MedecinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medecin.
     * @param {MedecinUpsertArgs} args - Arguments to update or create a Medecin.
     * @example
     * // Update or create a Medecin
     * const medecin = await prisma.medecin.upsert({
     *   create: {
     *     // ... data to create a Medecin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medecin we want to update
     *   }
     * })
     */
    upsert<T extends MedecinUpsertArgs>(args: SelectSubset<T, MedecinUpsertArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medecins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinCountArgs} args - Arguments to filter Medecins to count.
     * @example
     * // Count the number of Medecins
     * const count = await prisma.medecin.count({
     *   where: {
     *     // ... the filter for the Medecins we want to count
     *   }
     * })
    **/
    count<T extends MedecinCountArgs>(
      args?: Subset<T, MedecinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedecinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medecin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedecinAggregateArgs>(args: Subset<T, MedecinAggregateArgs>): Prisma.PrismaPromise<GetMedecinAggregateType<T>>

    /**
     * Group by Medecin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedecinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedecinGroupByArgs['orderBy'] }
        : { orderBy?: MedecinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedecinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedecinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medecin model
   */
  readonly fields: MedecinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medecin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedecinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rendezVous<T extends Medecin$rendezVousArgs<ExtArgs> = {}>(args?: Subset<T, Medecin$rendezVousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Medecin$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Medecin$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medecin model
   */
  interface MedecinFieldRefs {
    readonly id: FieldRef<"Medecin", 'Int'>
    readonly userId: FieldRef<"Medecin", 'Int'>
    readonly specialite: FieldRef<"Medecin", 'String'>
    readonly serviceId: FieldRef<"Medecin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medecin findUnique
   */
  export type MedecinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * Filter, which Medecin to fetch.
     */
    where: MedecinWhereUniqueInput
  }

  /**
   * Medecin findUniqueOrThrow
   */
  export type MedecinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * Filter, which Medecin to fetch.
     */
    where: MedecinWhereUniqueInput
  }

  /**
   * Medecin findFirst
   */
  export type MedecinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * Filter, which Medecin to fetch.
     */
    where?: MedecinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinOrderByWithRelationInput | MedecinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medecins.
     */
    cursor?: MedecinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medecins.
     */
    distinct?: MedecinScalarFieldEnum | MedecinScalarFieldEnum[]
  }

  /**
   * Medecin findFirstOrThrow
   */
  export type MedecinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * Filter, which Medecin to fetch.
     */
    where?: MedecinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinOrderByWithRelationInput | MedecinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medecins.
     */
    cursor?: MedecinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medecins.
     */
    distinct?: MedecinScalarFieldEnum | MedecinScalarFieldEnum[]
  }

  /**
   * Medecin findMany
   */
  export type MedecinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * Filter, which Medecins to fetch.
     */
    where?: MedecinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinOrderByWithRelationInput | MedecinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medecins.
     */
    cursor?: MedecinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    distinct?: MedecinScalarFieldEnum | MedecinScalarFieldEnum[]
  }

  /**
   * Medecin create
   */
  export type MedecinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * The data needed to create a Medecin.
     */
    data: XOR<MedecinCreateInput, MedecinUncheckedCreateInput>
  }

  /**
   * Medecin createMany
   */
  export type MedecinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medecins.
     */
    data: MedecinCreateManyInput | MedecinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medecin update
   */
  export type MedecinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * The data needed to update a Medecin.
     */
    data: XOR<MedecinUpdateInput, MedecinUncheckedUpdateInput>
    /**
     * Choose, which Medecin to update.
     */
    where: MedecinWhereUniqueInput
  }

  /**
   * Medecin updateMany
   */
  export type MedecinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medecins.
     */
    data: XOR<MedecinUpdateManyMutationInput, MedecinUncheckedUpdateManyInput>
    /**
     * Filter which Medecins to update
     */
    where?: MedecinWhereInput
    /**
     * Limit how many Medecins to update.
     */
    limit?: number
  }

  /**
   * Medecin upsert
   */
  export type MedecinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * The filter to search for the Medecin to update in case it exists.
     */
    where: MedecinWhereUniqueInput
    /**
     * In case the Medecin found by the `where` argument doesn't exist, create a new Medecin with this data.
     */
    create: XOR<MedecinCreateInput, MedecinUncheckedCreateInput>
    /**
     * In case the Medecin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedecinUpdateInput, MedecinUncheckedUpdateInput>
  }

  /**
   * Medecin delete
   */
  export type MedecinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    /**
     * Filter which Medecin to delete.
     */
    where: MedecinWhereUniqueInput
  }

  /**
   * Medecin deleteMany
   */
  export type MedecinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medecins to delete
     */
    where?: MedecinWhereInput
    /**
     * Limit how many Medecins to delete.
     */
    limit?: number
  }

  /**
   * Medecin.rendezVous
   */
  export type Medecin$rendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    where?: RendezVousWhereInput
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    cursor?: RendezVousWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * Medecin.tickets
   */
  export type Medecin$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Medecin without action
   */
  export type MedecinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    userId: number | null
    telephone: string | null
    codePin: string | null
    age: number | null
    estComplet: boolean | null
    estPrioritaire: boolean | null
    estRefere: boolean | null
    createdAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    telephone: string | null
    codePin: string | null
    age: number | null
    estComplet: boolean | null
    estPrioritaire: boolean | null
    estRefere: boolean | null
    createdAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    userId: number
    telephone: number
    codePin: number
    age: number
    estComplet: number
    estPrioritaire: number
    estRefere: number
    createdAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    userId?: true
    telephone?: true
    codePin?: true
    age?: true
    estComplet?: true
    estPrioritaire?: true
    estRefere?: true
    createdAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    userId?: true
    telephone?: true
    codePin?: true
    age?: true
    estComplet?: true
    estPrioritaire?: true
    estRefere?: true
    createdAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    userId?: true
    telephone?: true
    codePin?: true
    age?: true
    estComplet?: true
    estPrioritaire?: true
    estRefere?: true
    createdAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    userId: number
    telephone: string
    codePin: string
    age: number | null
    estComplet: boolean
    estPrioritaire: boolean
    estRefere: boolean
    createdAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    telephone?: boolean
    codePin?: boolean
    age?: boolean
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fileAttente?: boolean | Patient$fileAttenteArgs<ExtArgs>
    tickets?: boolean | Patient$ticketsArgs<ExtArgs>
    rendezVous?: boolean | Patient$rendezVousArgs<ExtArgs>
    notifications?: boolean | Patient$notificationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type PatientSelectScalar = {
    id?: boolean
    userId?: boolean
    telephone?: boolean
    codePin?: boolean
    age?: boolean
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "telephone" | "codePin" | "age" | "estComplet" | "estPrioritaire" | "estRefere" | "createdAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fileAttente?: boolean | Patient$fileAttenteArgs<ExtArgs>
    tickets?: boolean | Patient$ticketsArgs<ExtArgs>
    rendezVous?: boolean | Patient$rendezVousArgs<ExtArgs>
    notifications?: boolean | Patient$notificationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fileAttente: Prisma.$FileAttentePayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      rendezVous: Prisma.$RendezVousPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      telephone: string
      codePin: string
      age: number | null
      estComplet: boolean
      estPrioritaire: boolean
      estRefere: boolean
      createdAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fileAttente<T extends Patient$fileAttenteArgs<ExtArgs> = {}>(args?: Subset<T, Patient$fileAttenteArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Patient$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rendezVous<T extends Patient$rendezVousArgs<ExtArgs> = {}>(args?: Subset<T, Patient$rendezVousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Patient$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly userId: FieldRef<"Patient", 'Int'>
    readonly telephone: FieldRef<"Patient", 'String'>
    readonly codePin: FieldRef<"Patient", 'String'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly estComplet: FieldRef<"Patient", 'Boolean'>
    readonly estPrioritaire: FieldRef<"Patient", 'Boolean'>
    readonly estRefere: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.fileAttente
   */
  export type Patient$fileAttenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    where?: FileAttenteWhereInput
  }

  /**
   * Patient.tickets
   */
  export type Patient$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Patient.rendezVous
   */
  export type Patient$rendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    where?: RendezVousWhereInput
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    cursor?: RendezVousWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * Patient.notifications
   */
  export type Patient$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    prixTicket: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    prixTicket: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    prixTicket: number | null
    createdAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    prixTicket: number | null
    createdAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    prixTicket: number
    createdAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    prixTicket?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    prixTicket?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prixTicket?: true
    createdAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prixTicket?: true
    createdAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prixTicket?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    nom: string
    description: string | null
    prixTicket: number
    createdAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    prixTicket?: boolean
    createdAt?: boolean
    medecins?: boolean | Service$medecinsArgs<ExtArgs>
    accueils?: boolean | Service$accueilsArgs<ExtArgs>
    fileAttente?: boolean | Service$fileAttenteArgs<ExtArgs>
    tickets?: boolean | Service$ticketsArgs<ExtArgs>
    rendezVous?: boolean | Service$rendezVousArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    prixTicket?: boolean
    createdAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "prixTicket" | "createdAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medecins?: boolean | Service$medecinsArgs<ExtArgs>
    accueils?: boolean | Service$accueilsArgs<ExtArgs>
    fileAttente?: boolean | Service$fileAttenteArgs<ExtArgs>
    tickets?: boolean | Service$ticketsArgs<ExtArgs>
    rendezVous?: boolean | Service$rendezVousArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      medecins: Prisma.$MedecinPayload<ExtArgs>[]
      accueils: Prisma.$AccueilPayload<ExtArgs>[]
      fileAttente: Prisma.$FileAttentePayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      rendezVous: Prisma.$RendezVousPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      description: string | null
      prixTicket: number
      createdAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medecins<T extends Service$medecinsArgs<ExtArgs> = {}>(args?: Subset<T, Service$medecinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accueils<T extends Service$accueilsArgs<ExtArgs> = {}>(args?: Subset<T, Service$accueilsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccueilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fileAttente<T extends Service$fileAttenteArgs<ExtArgs> = {}>(args?: Subset<T, Service$fileAttenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Service$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Service$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rendezVous<T extends Service$rendezVousArgs<ExtArgs> = {}>(args?: Subset<T, Service$rendezVousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly nom: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly prixTicket: FieldRef<"Service", 'Float'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.medecins
   */
  export type Service$medecinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    where?: MedecinWhereInput
    orderBy?: MedecinOrderByWithRelationInput | MedecinOrderByWithRelationInput[]
    cursor?: MedecinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedecinScalarFieldEnum | MedecinScalarFieldEnum[]
  }

  /**
   * Service.accueils
   */
  export type Service$accueilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accueil
     */
    select?: AccueilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accueil
     */
    omit?: AccueilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccueilInclude<ExtArgs> | null
    where?: AccueilWhereInput
    orderBy?: AccueilOrderByWithRelationInput | AccueilOrderByWithRelationInput[]
    cursor?: AccueilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccueilScalarFieldEnum | AccueilScalarFieldEnum[]
  }

  /**
   * Service.fileAttente
   */
  export type Service$fileAttenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    where?: FileAttenteWhereInput
    orderBy?: FileAttenteOrderByWithRelationInput | FileAttenteOrderByWithRelationInput[]
    cursor?: FileAttenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileAttenteScalarFieldEnum | FileAttenteScalarFieldEnum[]
  }

  /**
   * Service.tickets
   */
  export type Service$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Service.rendezVous
   */
  export type Service$rendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    where?: RendezVousWhereInput
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    cursor?: RendezVousWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model FileAttente
   */

  export type AggregateFileAttente = {
    _count: FileAttenteCountAggregateOutputType | null
    _avg: FileAttenteAvgAggregateOutputType | null
    _sum: FileAttenteSumAggregateOutputType | null
    _min: FileAttenteMinAggregateOutputType | null
    _max: FileAttenteMaxAggregateOutputType | null
  }

  export type FileAttenteAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    serviceId: number | null
    numero: number | null
  }

  export type FileAttenteSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    serviceId: number | null
    numero: number | null
  }

  export type FileAttenteMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    serviceId: number | null
    numero: number | null
    estPrioritaire: boolean | null
    statut: $Enums.StatutFile | null
    heurePrise: Date | null
    heureValidation: Date | null
    heureExpiration: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileAttenteMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    serviceId: number | null
    numero: number | null
    estPrioritaire: boolean | null
    statut: $Enums.StatutFile | null
    heurePrise: Date | null
    heureValidation: Date | null
    heureExpiration: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileAttenteCountAggregateOutputType = {
    id: number
    patientId: number
    serviceId: number
    numero: number
    estPrioritaire: number
    statut: number
    heurePrise: number
    heureValidation: number
    heureExpiration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileAttenteAvgAggregateInputType = {
    id?: true
    patientId?: true
    serviceId?: true
    numero?: true
  }

  export type FileAttenteSumAggregateInputType = {
    id?: true
    patientId?: true
    serviceId?: true
    numero?: true
  }

  export type FileAttenteMinAggregateInputType = {
    id?: true
    patientId?: true
    serviceId?: true
    numero?: true
    estPrioritaire?: true
    statut?: true
    heurePrise?: true
    heureValidation?: true
    heureExpiration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileAttenteMaxAggregateInputType = {
    id?: true
    patientId?: true
    serviceId?: true
    numero?: true
    estPrioritaire?: true
    statut?: true
    heurePrise?: true
    heureValidation?: true
    heureExpiration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileAttenteCountAggregateInputType = {
    id?: true
    patientId?: true
    serviceId?: true
    numero?: true
    estPrioritaire?: true
    statut?: true
    heurePrise?: true
    heureValidation?: true
    heureExpiration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAttenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileAttente to aggregate.
     */
    where?: FileAttenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileAttentes to fetch.
     */
    orderBy?: FileAttenteOrderByWithRelationInput | FileAttenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileAttenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileAttentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileAttentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileAttentes
    **/
    _count?: true | FileAttenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAttenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileAttenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileAttenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileAttenteMaxAggregateInputType
  }

  export type GetFileAttenteAggregateType<T extends FileAttenteAggregateArgs> = {
        [P in keyof T & keyof AggregateFileAttente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileAttente[P]>
      : GetScalarType<T[P], AggregateFileAttente[P]>
  }




  export type FileAttenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileAttenteWhereInput
    orderBy?: FileAttenteOrderByWithAggregationInput | FileAttenteOrderByWithAggregationInput[]
    by: FileAttenteScalarFieldEnum[] | FileAttenteScalarFieldEnum
    having?: FileAttenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileAttenteCountAggregateInputType | true
    _avg?: FileAttenteAvgAggregateInputType
    _sum?: FileAttenteSumAggregateInputType
    _min?: FileAttenteMinAggregateInputType
    _max?: FileAttenteMaxAggregateInputType
  }

  export type FileAttenteGroupByOutputType = {
    id: number
    patientId: number
    serviceId: number
    numero: number
    estPrioritaire: boolean
    statut: $Enums.StatutFile
    heurePrise: Date
    heureValidation: Date | null
    heureExpiration: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FileAttenteCountAggregateOutputType | null
    _avg: FileAttenteAvgAggregateOutputType | null
    _sum: FileAttenteSumAggregateOutputType | null
    _min: FileAttenteMinAggregateOutputType | null
    _max: FileAttenteMaxAggregateOutputType | null
  }

  type GetFileAttenteGroupByPayload<T extends FileAttenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileAttenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileAttenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileAttenteGroupByOutputType[P]>
            : GetScalarType<T[P], FileAttenteGroupByOutputType[P]>
        }
      >
    >


  export type FileAttenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    serviceId?: boolean
    numero?: boolean
    estPrioritaire?: boolean
    statut?: boolean
    heurePrise?: boolean
    heureValidation?: boolean
    heureExpiration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ticket?: boolean | FileAttente$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["fileAttente"]>



  export type FileAttenteSelectScalar = {
    id?: boolean
    patientId?: boolean
    serviceId?: boolean
    numero?: boolean
    estPrioritaire?: boolean
    statut?: boolean
    heurePrise?: boolean
    heureValidation?: boolean
    heureExpiration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileAttenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "serviceId" | "numero" | "estPrioritaire" | "statut" | "heurePrise" | "heureValidation" | "heureExpiration" | "createdAt" | "updatedAt", ExtArgs["result"]["fileAttente"]>
  export type FileAttenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ticket?: boolean | FileAttente$ticketArgs<ExtArgs>
  }

  export type $FileAttentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileAttente"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      serviceId: number
      numero: number
      estPrioritaire: boolean
      statut: $Enums.StatutFile
      heurePrise: Date
      heureValidation: Date | null
      heureExpiration: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileAttente"]>
    composites: {}
  }

  type FileAttenteGetPayload<S extends boolean | null | undefined | FileAttenteDefaultArgs> = $Result.GetResult<Prisma.$FileAttentePayload, S>

  type FileAttenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileAttenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileAttenteCountAggregateInputType | true
    }

  export interface FileAttenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileAttente'], meta: { name: 'FileAttente' } }
    /**
     * Find zero or one FileAttente that matches the filter.
     * @param {FileAttenteFindUniqueArgs} args - Arguments to find a FileAttente
     * @example
     * // Get one FileAttente
     * const fileAttente = await prisma.fileAttente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileAttenteFindUniqueArgs>(args: SelectSubset<T, FileAttenteFindUniqueArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileAttente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileAttenteFindUniqueOrThrowArgs} args - Arguments to find a FileAttente
     * @example
     * // Get one FileAttente
     * const fileAttente = await prisma.fileAttente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileAttenteFindUniqueOrThrowArgs>(args: SelectSubset<T, FileAttenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileAttente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAttenteFindFirstArgs} args - Arguments to find a FileAttente
     * @example
     * // Get one FileAttente
     * const fileAttente = await prisma.fileAttente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileAttenteFindFirstArgs>(args?: SelectSubset<T, FileAttenteFindFirstArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileAttente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAttenteFindFirstOrThrowArgs} args - Arguments to find a FileAttente
     * @example
     * // Get one FileAttente
     * const fileAttente = await prisma.fileAttente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileAttenteFindFirstOrThrowArgs>(args?: SelectSubset<T, FileAttenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileAttentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAttenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileAttentes
     * const fileAttentes = await prisma.fileAttente.findMany()
     * 
     * // Get first 10 FileAttentes
     * const fileAttentes = await prisma.fileAttente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileAttenteWithIdOnly = await prisma.fileAttente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileAttenteFindManyArgs>(args?: SelectSubset<T, FileAttenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileAttente.
     * @param {FileAttenteCreateArgs} args - Arguments to create a FileAttente.
     * @example
     * // Create one FileAttente
     * const FileAttente = await prisma.fileAttente.create({
     *   data: {
     *     // ... data to create a FileAttente
     *   }
     * })
     * 
     */
    create<T extends FileAttenteCreateArgs>(args: SelectSubset<T, FileAttenteCreateArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileAttentes.
     * @param {FileAttenteCreateManyArgs} args - Arguments to create many FileAttentes.
     * @example
     * // Create many FileAttentes
     * const fileAttente = await prisma.fileAttente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileAttenteCreateManyArgs>(args?: SelectSubset<T, FileAttenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FileAttente.
     * @param {FileAttenteDeleteArgs} args - Arguments to delete one FileAttente.
     * @example
     * // Delete one FileAttente
     * const FileAttente = await prisma.fileAttente.delete({
     *   where: {
     *     // ... filter to delete one FileAttente
     *   }
     * })
     * 
     */
    delete<T extends FileAttenteDeleteArgs>(args: SelectSubset<T, FileAttenteDeleteArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileAttente.
     * @param {FileAttenteUpdateArgs} args - Arguments to update one FileAttente.
     * @example
     * // Update one FileAttente
     * const fileAttente = await prisma.fileAttente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileAttenteUpdateArgs>(args: SelectSubset<T, FileAttenteUpdateArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileAttentes.
     * @param {FileAttenteDeleteManyArgs} args - Arguments to filter FileAttentes to delete.
     * @example
     * // Delete a few FileAttentes
     * const { count } = await prisma.fileAttente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileAttenteDeleteManyArgs>(args?: SelectSubset<T, FileAttenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileAttentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAttenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileAttentes
     * const fileAttente = await prisma.fileAttente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileAttenteUpdateManyArgs>(args: SelectSubset<T, FileAttenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileAttente.
     * @param {FileAttenteUpsertArgs} args - Arguments to update or create a FileAttente.
     * @example
     * // Update or create a FileAttente
     * const fileAttente = await prisma.fileAttente.upsert({
     *   create: {
     *     // ... data to create a FileAttente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileAttente we want to update
     *   }
     * })
     */
    upsert<T extends FileAttenteUpsertArgs>(args: SelectSubset<T, FileAttenteUpsertArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileAttentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAttenteCountArgs} args - Arguments to filter FileAttentes to count.
     * @example
     * // Count the number of FileAttentes
     * const count = await prisma.fileAttente.count({
     *   where: {
     *     // ... the filter for the FileAttentes we want to count
     *   }
     * })
    **/
    count<T extends FileAttenteCountArgs>(
      args?: Subset<T, FileAttenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileAttenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileAttente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAttenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAttenteAggregateArgs>(args: Subset<T, FileAttenteAggregateArgs>): Prisma.PrismaPromise<GetFileAttenteAggregateType<T>>

    /**
     * Group by FileAttente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAttenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileAttenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileAttenteGroupByArgs['orderBy'] }
        : { orderBy?: FileAttenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileAttenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileAttenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileAttente model
   */
  readonly fields: FileAttenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileAttente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileAttenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends FileAttente$ticketArgs<ExtArgs> = {}>(args?: Subset<T, FileAttente$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileAttente model
   */
  interface FileAttenteFieldRefs {
    readonly id: FieldRef<"FileAttente", 'Int'>
    readonly patientId: FieldRef<"FileAttente", 'Int'>
    readonly serviceId: FieldRef<"FileAttente", 'Int'>
    readonly numero: FieldRef<"FileAttente", 'Int'>
    readonly estPrioritaire: FieldRef<"FileAttente", 'Boolean'>
    readonly statut: FieldRef<"FileAttente", 'StatutFile'>
    readonly heurePrise: FieldRef<"FileAttente", 'DateTime'>
    readonly heureValidation: FieldRef<"FileAttente", 'DateTime'>
    readonly heureExpiration: FieldRef<"FileAttente", 'DateTime'>
    readonly createdAt: FieldRef<"FileAttente", 'DateTime'>
    readonly updatedAt: FieldRef<"FileAttente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileAttente findUnique
   */
  export type FileAttenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * Filter, which FileAttente to fetch.
     */
    where: FileAttenteWhereUniqueInput
  }

  /**
   * FileAttente findUniqueOrThrow
   */
  export type FileAttenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * Filter, which FileAttente to fetch.
     */
    where: FileAttenteWhereUniqueInput
  }

  /**
   * FileAttente findFirst
   */
  export type FileAttenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * Filter, which FileAttente to fetch.
     */
    where?: FileAttenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileAttentes to fetch.
     */
    orderBy?: FileAttenteOrderByWithRelationInput | FileAttenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileAttentes.
     */
    cursor?: FileAttenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileAttentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileAttentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileAttentes.
     */
    distinct?: FileAttenteScalarFieldEnum | FileAttenteScalarFieldEnum[]
  }

  /**
   * FileAttente findFirstOrThrow
   */
  export type FileAttenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * Filter, which FileAttente to fetch.
     */
    where?: FileAttenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileAttentes to fetch.
     */
    orderBy?: FileAttenteOrderByWithRelationInput | FileAttenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileAttentes.
     */
    cursor?: FileAttenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileAttentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileAttentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileAttentes.
     */
    distinct?: FileAttenteScalarFieldEnum | FileAttenteScalarFieldEnum[]
  }

  /**
   * FileAttente findMany
   */
  export type FileAttenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * Filter, which FileAttentes to fetch.
     */
    where?: FileAttenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileAttentes to fetch.
     */
    orderBy?: FileAttenteOrderByWithRelationInput | FileAttenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileAttentes.
     */
    cursor?: FileAttenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileAttentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileAttentes.
     */
    skip?: number
    distinct?: FileAttenteScalarFieldEnum | FileAttenteScalarFieldEnum[]
  }

  /**
   * FileAttente create
   */
  export type FileAttenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * The data needed to create a FileAttente.
     */
    data: XOR<FileAttenteCreateInput, FileAttenteUncheckedCreateInput>
  }

  /**
   * FileAttente createMany
   */
  export type FileAttenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileAttentes.
     */
    data: FileAttenteCreateManyInput | FileAttenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileAttente update
   */
  export type FileAttenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * The data needed to update a FileAttente.
     */
    data: XOR<FileAttenteUpdateInput, FileAttenteUncheckedUpdateInput>
    /**
     * Choose, which FileAttente to update.
     */
    where: FileAttenteWhereUniqueInput
  }

  /**
   * FileAttente updateMany
   */
  export type FileAttenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileAttentes.
     */
    data: XOR<FileAttenteUpdateManyMutationInput, FileAttenteUncheckedUpdateManyInput>
    /**
     * Filter which FileAttentes to update
     */
    where?: FileAttenteWhereInput
    /**
     * Limit how many FileAttentes to update.
     */
    limit?: number
  }

  /**
   * FileAttente upsert
   */
  export type FileAttenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * The filter to search for the FileAttente to update in case it exists.
     */
    where: FileAttenteWhereUniqueInput
    /**
     * In case the FileAttente found by the `where` argument doesn't exist, create a new FileAttente with this data.
     */
    create: XOR<FileAttenteCreateInput, FileAttenteUncheckedCreateInput>
    /**
     * In case the FileAttente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileAttenteUpdateInput, FileAttenteUncheckedUpdateInput>
  }

  /**
   * FileAttente delete
   */
  export type FileAttenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
    /**
     * Filter which FileAttente to delete.
     */
    where: FileAttenteWhereUniqueInput
  }

  /**
   * FileAttente deleteMany
   */
  export type FileAttenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileAttentes to delete
     */
    where?: FileAttenteWhereInput
    /**
     * Limit how many FileAttentes to delete.
     */
    limit?: number
  }

  /**
   * FileAttente.ticket
   */
  export type FileAttente$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * FileAttente without action
   */
  export type FileAttenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileAttente
     */
    select?: FileAttenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileAttente
     */
    omit?: FileAttenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileAttenteInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
    fileAttenteId: number | null
    montantPaye: number | null
    montantRestant: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
    fileAttenteId: number | null
    montantPaye: number | null
    montantRestant: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
    fileAttenteId: number | null
    numero: string | null
    montantPaye: number | null
    montantRestant: number | null
    statut: $Enums.StatutTicket | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
    fileAttenteId: number | null
    numero: string | null
    montantPaye: number | null
    montantRestant: number | null
    statut: $Enums.StatutTicket | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    patientId: number
    medecinId: number
    serviceId: number
    fileAttenteId: number
    numero: number
    montantPaye: number
    montantRestant: number
    statut: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    fileAttenteId?: true
    montantPaye?: true
    montantRestant?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    fileAttenteId?: true
    montantPaye?: true
    montantRestant?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    fileAttenteId?: true
    numero?: true
    montantPaye?: true
    montantRestant?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    fileAttenteId?: true
    numero?: true
    montantPaye?: true
    montantRestant?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    fileAttenteId?: true
    numero?: true
    montantPaye?: true
    montantRestant?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    patientId: number
    medecinId: number | null
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant: number
    statut: $Enums.StatutTicket
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medecinId?: boolean
    serviceId?: boolean
    fileAttenteId?: boolean
    numero?: boolean
    montantPaye?: boolean
    montantRestant?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medecin?: boolean | Ticket$medecinArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    fileAttente?: boolean | FileAttenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    patientId?: boolean
    medecinId?: boolean
    serviceId?: boolean
    fileAttenteId?: boolean
    numero?: boolean
    montantPaye?: boolean
    montantRestant?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "medecinId" | "serviceId" | "fileAttenteId" | "numero" | "montantPaye" | "montantRestant" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medecin?: boolean | Ticket$medecinArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    fileAttente?: boolean | FileAttenteDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      medecin: Prisma.$MedecinPayload<ExtArgs> | null
      service: Prisma.$ServicePayload<ExtArgs>
      fileAttente: Prisma.$FileAttentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      medecinId: number | null
      serviceId: number
      fileAttenteId: number
      numero: string
      montantPaye: number
      montantRestant: number
      statut: $Enums.StatutTicket
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medecin<T extends Ticket$medecinArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$medecinArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fileAttente<T extends FileAttenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileAttenteDefaultArgs<ExtArgs>>): Prisma__FileAttenteClient<$Result.GetResult<Prisma.$FileAttentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly patientId: FieldRef<"Ticket", 'Int'>
    readonly medecinId: FieldRef<"Ticket", 'Int'>
    readonly serviceId: FieldRef<"Ticket", 'Int'>
    readonly fileAttenteId: FieldRef<"Ticket", 'Int'>
    readonly numero: FieldRef<"Ticket", 'String'>
    readonly montantPaye: FieldRef<"Ticket", 'Float'>
    readonly montantRestant: FieldRef<"Ticket", 'Float'>
    readonly statut: FieldRef<"Ticket", 'StatutTicket'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.medecin
   */
  export type Ticket$medecinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecin
     */
    select?: MedecinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecin
     */
    omit?: MedecinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinInclude<ExtArgs> | null
    where?: MedecinWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model RendezVous
   */

  export type AggregateRendezVous = {
    _count: RendezVousCountAggregateOutputType | null
    _avg: RendezVousAvgAggregateOutputType | null
    _sum: RendezVousSumAggregateOutputType | null
    _min: RendezVousMinAggregateOutputType | null
    _max: RendezVousMaxAggregateOutputType | null
  }

  export type RendezVousAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
  }

  export type RendezVousSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
  }

  export type RendezVousMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
    creerPar: $Enums.CreerPar | null
    date: Date | null
    heure: string | null
    motif: string | null
    statut: $Enums.StatutRendezVous | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RendezVousMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    medecinId: number | null
    serviceId: number | null
    creerPar: $Enums.CreerPar | null
    date: Date | null
    heure: string | null
    motif: string | null
    statut: $Enums.StatutRendezVous | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RendezVousCountAggregateOutputType = {
    id: number
    patientId: number
    medecinId: number
    serviceId: number
    creerPar: number
    date: number
    heure: number
    motif: number
    statut: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RendezVousAvgAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
  }

  export type RendezVousSumAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
  }

  export type RendezVousMinAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    creerPar?: true
    date?: true
    heure?: true
    motif?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RendezVousMaxAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    creerPar?: true
    date?: true
    heure?: true
    motif?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RendezVousCountAggregateInputType = {
    id?: true
    patientId?: true
    medecinId?: true
    serviceId?: true
    creerPar?: true
    date?: true
    heure?: true
    motif?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RendezVousAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RendezVous to aggregate.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RendezVous
    **/
    _count?: true | RendezVousCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RendezVousAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RendezVousSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RendezVousMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RendezVousMaxAggregateInputType
  }

  export type GetRendezVousAggregateType<T extends RendezVousAggregateArgs> = {
        [P in keyof T & keyof AggregateRendezVous]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRendezVous[P]>
      : GetScalarType<T[P], AggregateRendezVous[P]>
  }




  export type RendezVousGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendezVousWhereInput
    orderBy?: RendezVousOrderByWithAggregationInput | RendezVousOrderByWithAggregationInput[]
    by: RendezVousScalarFieldEnum[] | RendezVousScalarFieldEnum
    having?: RendezVousScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RendezVousCountAggregateInputType | true
    _avg?: RendezVousAvgAggregateInputType
    _sum?: RendezVousSumAggregateInputType
    _min?: RendezVousMinAggregateInputType
    _max?: RendezVousMaxAggregateInputType
  }

  export type RendezVousGroupByOutputType = {
    id: number
    patientId: number
    medecinId: number
    serviceId: number
    creerPar: $Enums.CreerPar
    date: Date
    heure: string
    motif: string | null
    statut: $Enums.StatutRendezVous
    createdAt: Date
    updatedAt: Date
    _count: RendezVousCountAggregateOutputType | null
    _avg: RendezVousAvgAggregateOutputType | null
    _sum: RendezVousSumAggregateOutputType | null
    _min: RendezVousMinAggregateOutputType | null
    _max: RendezVousMaxAggregateOutputType | null
  }

  type GetRendezVousGroupByPayload<T extends RendezVousGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RendezVousGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RendezVousGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RendezVousGroupByOutputType[P]>
            : GetScalarType<T[P], RendezVousGroupByOutputType[P]>
        }
      >
    >


  export type RendezVousSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medecinId?: boolean
    serviceId?: boolean
    creerPar?: boolean
    date?: boolean
    heure?: boolean
    motif?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendezVous"]>



  export type RendezVousSelectScalar = {
    id?: boolean
    patientId?: boolean
    medecinId?: boolean
    serviceId?: boolean
    creerPar?: boolean
    date?: boolean
    heure?: boolean
    motif?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RendezVousOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "medecinId" | "serviceId" | "creerPar" | "date" | "heure" | "motif" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["rendezVous"]>
  export type RendezVousInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $RendezVousPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RendezVous"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      medecin: Prisma.$MedecinPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      medecinId: number
      serviceId: number
      creerPar: $Enums.CreerPar
      date: Date
      heure: string
      motif: string | null
      statut: $Enums.StatutRendezVous
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rendezVous"]>
    composites: {}
  }

  type RendezVousGetPayload<S extends boolean | null | undefined | RendezVousDefaultArgs> = $Result.GetResult<Prisma.$RendezVousPayload, S>

  type RendezVousCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RendezVousFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RendezVousCountAggregateInputType | true
    }

  export interface RendezVousDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RendezVous'], meta: { name: 'RendezVous' } }
    /**
     * Find zero or one RendezVous that matches the filter.
     * @param {RendezVousFindUniqueArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RendezVousFindUniqueArgs>(args: SelectSubset<T, RendezVousFindUniqueArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RendezVous that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RendezVousFindUniqueOrThrowArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RendezVousFindUniqueOrThrowArgs>(args: SelectSubset<T, RendezVousFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RendezVous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousFindFirstArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RendezVousFindFirstArgs>(args?: SelectSubset<T, RendezVousFindFirstArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RendezVous that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousFindFirstOrThrowArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RendezVousFindFirstOrThrowArgs>(args?: SelectSubset<T, RendezVousFindFirstOrThrowArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RendezVous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RendezVous
     * const rendezVous = await prisma.rendezVous.findMany()
     * 
     * // Get first 10 RendezVous
     * const rendezVous = await prisma.rendezVous.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rendezVousWithIdOnly = await prisma.rendezVous.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RendezVousFindManyArgs>(args?: SelectSubset<T, RendezVousFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RendezVous.
     * @param {RendezVousCreateArgs} args - Arguments to create a RendezVous.
     * @example
     * // Create one RendezVous
     * const RendezVous = await prisma.rendezVous.create({
     *   data: {
     *     // ... data to create a RendezVous
     *   }
     * })
     * 
     */
    create<T extends RendezVousCreateArgs>(args: SelectSubset<T, RendezVousCreateArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RendezVous.
     * @param {RendezVousCreateManyArgs} args - Arguments to create many RendezVous.
     * @example
     * // Create many RendezVous
     * const rendezVous = await prisma.rendezVous.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RendezVousCreateManyArgs>(args?: SelectSubset<T, RendezVousCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RendezVous.
     * @param {RendezVousDeleteArgs} args - Arguments to delete one RendezVous.
     * @example
     * // Delete one RendezVous
     * const RendezVous = await prisma.rendezVous.delete({
     *   where: {
     *     // ... filter to delete one RendezVous
     *   }
     * })
     * 
     */
    delete<T extends RendezVousDeleteArgs>(args: SelectSubset<T, RendezVousDeleteArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RendezVous.
     * @param {RendezVousUpdateArgs} args - Arguments to update one RendezVous.
     * @example
     * // Update one RendezVous
     * const rendezVous = await prisma.rendezVous.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RendezVousUpdateArgs>(args: SelectSubset<T, RendezVousUpdateArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RendezVous.
     * @param {RendezVousDeleteManyArgs} args - Arguments to filter RendezVous to delete.
     * @example
     * // Delete a few RendezVous
     * const { count } = await prisma.rendezVous.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RendezVousDeleteManyArgs>(args?: SelectSubset<T, RendezVousDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RendezVous
     * const rendezVous = await prisma.rendezVous.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RendezVousUpdateManyArgs>(args: SelectSubset<T, RendezVousUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RendezVous.
     * @param {RendezVousUpsertArgs} args - Arguments to update or create a RendezVous.
     * @example
     * // Update or create a RendezVous
     * const rendezVous = await prisma.rendezVous.upsert({
     *   create: {
     *     // ... data to create a RendezVous
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RendezVous we want to update
     *   }
     * })
     */
    upsert<T extends RendezVousUpsertArgs>(args: SelectSubset<T, RendezVousUpsertArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousCountArgs} args - Arguments to filter RendezVous to count.
     * @example
     * // Count the number of RendezVous
     * const count = await prisma.rendezVous.count({
     *   where: {
     *     // ... the filter for the RendezVous we want to count
     *   }
     * })
    **/
    count<T extends RendezVousCountArgs>(
      args?: Subset<T, RendezVousCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RendezVousCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RendezVousAggregateArgs>(args: Subset<T, RendezVousAggregateArgs>): Prisma.PrismaPromise<GetRendezVousAggregateType<T>>

    /**
     * Group by RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RendezVousGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RendezVousGroupByArgs['orderBy'] }
        : { orderBy?: RendezVousGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RendezVousGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRendezVousGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RendezVous model
   */
  readonly fields: RendezVousFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RendezVous.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RendezVousClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medecin<T extends MedecinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedecinDefaultArgs<ExtArgs>>): Prisma__MedecinClient<$Result.GetResult<Prisma.$MedecinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RendezVous model
   */
  interface RendezVousFieldRefs {
    readonly id: FieldRef<"RendezVous", 'Int'>
    readonly patientId: FieldRef<"RendezVous", 'Int'>
    readonly medecinId: FieldRef<"RendezVous", 'Int'>
    readonly serviceId: FieldRef<"RendezVous", 'Int'>
    readonly creerPar: FieldRef<"RendezVous", 'CreerPar'>
    readonly date: FieldRef<"RendezVous", 'DateTime'>
    readonly heure: FieldRef<"RendezVous", 'String'>
    readonly motif: FieldRef<"RendezVous", 'String'>
    readonly statut: FieldRef<"RendezVous", 'StatutRendezVous'>
    readonly createdAt: FieldRef<"RendezVous", 'DateTime'>
    readonly updatedAt: FieldRef<"RendezVous", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RendezVous findUnique
   */
  export type RendezVousFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous findUniqueOrThrow
   */
  export type RendezVousFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous findFirst
   */
  export type RendezVousFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RendezVous.
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RendezVous.
     */
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * RendezVous findFirstOrThrow
   */
  export type RendezVousFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RendezVous.
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RendezVous.
     */
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * RendezVous findMany
   */
  export type RendezVousFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RendezVous.
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * RendezVous create
   */
  export type RendezVousCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * The data needed to create a RendezVous.
     */
    data: XOR<RendezVousCreateInput, RendezVousUncheckedCreateInput>
  }

  /**
   * RendezVous createMany
   */
  export type RendezVousCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RendezVous.
     */
    data: RendezVousCreateManyInput | RendezVousCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RendezVous update
   */
  export type RendezVousUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * The data needed to update a RendezVous.
     */
    data: XOR<RendezVousUpdateInput, RendezVousUncheckedUpdateInput>
    /**
     * Choose, which RendezVous to update.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous updateMany
   */
  export type RendezVousUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RendezVous.
     */
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyInput>
    /**
     * Filter which RendezVous to update
     */
    where?: RendezVousWhereInput
    /**
     * Limit how many RendezVous to update.
     */
    limit?: number
  }

  /**
   * RendezVous upsert
   */
  export type RendezVousUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * The filter to search for the RendezVous to update in case it exists.
     */
    where: RendezVousWhereUniqueInput
    /**
     * In case the RendezVous found by the `where` argument doesn't exist, create a new RendezVous with this data.
     */
    create: XOR<RendezVousCreateInput, RendezVousUncheckedCreateInput>
    /**
     * In case the RendezVous was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RendezVousUpdateInput, RendezVousUncheckedUpdateInput>
  }

  /**
   * RendezVous delete
   */
  export type RendezVousDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter which RendezVous to delete.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous deleteMany
   */
  export type RendezVousDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RendezVous to delete
     */
    where?: RendezVousWhereInput
    /**
     * Limit how many RendezVous to delete.
     */
    limit?: number
  }

  /**
   * RendezVous without action
   */
  export type RendezVousDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    type: $Enums.TypeNotification | null
    canal: $Enums.CanalNotification | null
    message: string | null
    lu: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    type: $Enums.TypeNotification | null
    canal: $Enums.CanalNotification | null
    message: string | null
    lu: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    patientId: number
    type: number
    canal: number
    message: number
    lu: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    patientId?: true
    type?: true
    canal?: true
    message?: true
    lu?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    patientId?: true
    type?: true
    canal?: true
    message?: true
    lu?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    patientId?: true
    type?: true
    canal?: true
    message?: true
    lu?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    patientId: number
    type: $Enums.TypeNotification
    canal: $Enums.CanalNotification
    message: string
    lu: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    type?: boolean
    canal?: boolean
    message?: boolean
    lu?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    patientId?: boolean
    type?: boolean
    canal?: boolean
    message?: boolean
    lu?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "type" | "canal" | "message" | "lu" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      type: $Enums.TypeNotification
      canal: $Enums.CanalNotification
      message: string
      lu: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly patientId: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'TypeNotification'>
    readonly canal: FieldRef<"Notification", 'CanalNotification'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly lu: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AccueilScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId'
  };

  export type AccueilScalarFieldEnum = (typeof AccueilScalarFieldEnum)[keyof typeof AccueilScalarFieldEnum]


  export const MedecinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialite: 'specialite',
    serviceId: 'serviceId'
  };

  export type MedecinScalarFieldEnum = (typeof MedecinScalarFieldEnum)[keyof typeof MedecinScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    telephone: 'telephone',
    codePin: 'codePin',
    age: 'age',
    estComplet: 'estComplet',
    estPrioritaire: 'estPrioritaire',
    estRefere: 'estRefere',
    createdAt: 'createdAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    prixTicket: 'prixTicket',
    createdAt: 'createdAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const FileAttenteScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    serviceId: 'serviceId',
    numero: 'numero',
    estPrioritaire: 'estPrioritaire',
    statut: 'statut',
    heurePrise: 'heurePrise',
    heureValidation: 'heureValidation',
    heureExpiration: 'heureExpiration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileAttenteScalarFieldEnum = (typeof FileAttenteScalarFieldEnum)[keyof typeof FileAttenteScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    medecinId: 'medecinId',
    serviceId: 'serviceId',
    fileAttenteId: 'fileAttenteId',
    numero: 'numero',
    montantPaye: 'montantPaye',
    montantRestant: 'montantRestant',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const RendezVousScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    medecinId: 'medecinId',
    serviceId: 'serviceId',
    creerPar: 'creerPar',
    date: 'date',
    heure: 'heure',
    motif: 'motif',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RendezVousScalarFieldEnum = (typeof RendezVousScalarFieldEnum)[keyof typeof RendezVousScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    type: 'type',
    canal: 'canal',
    message: 'message',
    lu: 'lu',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const MedecinOrderByRelevanceFieldEnum: {
    specialite: 'specialite'
  };

  export type MedecinOrderByRelevanceFieldEnum = (typeof MedecinOrderByRelevanceFieldEnum)[keyof typeof MedecinOrderByRelevanceFieldEnum]


  export const PatientOrderByRelevanceFieldEnum: {
    telephone: 'telephone',
    codePin: 'codePin'
  };

  export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    nom: 'nom',
    description: 'description'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


  export const TicketOrderByRelevanceFieldEnum: {
    numero: 'numero'
  };

  export type TicketOrderByRelevanceFieldEnum = (typeof TicketOrderByRelevanceFieldEnum)[keyof typeof TicketOrderByRelevanceFieldEnum]


  export const RendezVousOrderByRelevanceFieldEnum: {
    heure: 'heure',
    motif: 'motif'
  };

  export type RendezVousOrderByRelevanceFieldEnum = (typeof RendezVousOrderByRelevanceFieldEnum)[keyof typeof RendezVousOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'StatutFile'
   */
  export type EnumStatutFileFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutFile'>
    


  /**
   * Reference to a field of type 'StatutTicket'
   */
  export type EnumStatutTicketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutTicket'>
    


  /**
   * Reference to a field of type 'CreerPar'
   */
  export type EnumCreerParFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreerPar'>
    


  /**
   * Reference to a field of type 'StatutRendezVous'
   */
  export type EnumStatutRendezVousFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutRendezVous'>
    


  /**
   * Reference to a field of type 'TypeNotification'
   */
  export type EnumTypeNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeNotification'>
    


  /**
   * Reference to a field of type 'CanalNotification'
   */
  export type EnumCanalNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CanalNotification'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    telephone?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    accueil?: XOR<AccueilNullableScalarRelationFilter, AccueilWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    medecin?: XOR<MedecinNullableScalarRelationFilter, MedecinWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    accueil?: AccueilOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    medecin?: MedecinOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telephone?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    accueil?: XOR<AccueilNullableScalarRelationFilter, AccueilWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    medecin?: XOR<MedecinNullableScalarRelationFilter, MedecinWhereInput> | null
  }, "id" | "telephone" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nom?: StringNullableWithAggregatesFilter<"User"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"User"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    userId?: IntFilter<"Admin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    userId?: IntWithAggregatesFilter<"Admin"> | number
  }

  export type AccueilWhereInput = {
    AND?: AccueilWhereInput | AccueilWhereInput[]
    OR?: AccueilWhereInput[]
    NOT?: AccueilWhereInput | AccueilWhereInput[]
    id?: IntFilter<"Accueil"> | number
    userId?: IntFilter<"Accueil"> | number
    serviceId?: IntNullableFilter<"Accueil"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }

  export type AccueilOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type AccueilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: AccueilWhereInput | AccueilWhereInput[]
    OR?: AccueilWhereInput[]
    NOT?: AccueilWhereInput | AccueilWhereInput[]
    serviceId?: IntNullableFilter<"Accueil"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }, "id" | "userId">

  export type AccueilOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    _count?: AccueilCountOrderByAggregateInput
    _avg?: AccueilAvgOrderByAggregateInput
    _max?: AccueilMaxOrderByAggregateInput
    _min?: AccueilMinOrderByAggregateInput
    _sum?: AccueilSumOrderByAggregateInput
  }

  export type AccueilScalarWhereWithAggregatesInput = {
    AND?: AccueilScalarWhereWithAggregatesInput | AccueilScalarWhereWithAggregatesInput[]
    OR?: AccueilScalarWhereWithAggregatesInput[]
    NOT?: AccueilScalarWhereWithAggregatesInput | AccueilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Accueil"> | number
    userId?: IntWithAggregatesFilter<"Accueil"> | number
    serviceId?: IntNullableWithAggregatesFilter<"Accueil"> | number | null
  }

  export type MedecinWhereInput = {
    AND?: MedecinWhereInput | MedecinWhereInput[]
    OR?: MedecinWhereInput[]
    NOT?: MedecinWhereInput | MedecinWhereInput[]
    id?: IntFilter<"Medecin"> | number
    userId?: IntFilter<"Medecin"> | number
    specialite?: StringFilter<"Medecin"> | string
    serviceId?: IntFilter<"Medecin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    rendezVous?: RendezVousListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type MedecinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialite?: SortOrder
    serviceId?: SortOrder
    user?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    rendezVous?: RendezVousOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    _relevance?: MedecinOrderByRelevanceInput
  }

  export type MedecinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: MedecinWhereInput | MedecinWhereInput[]
    OR?: MedecinWhereInput[]
    NOT?: MedecinWhereInput | MedecinWhereInput[]
    specialite?: StringFilter<"Medecin"> | string
    serviceId?: IntFilter<"Medecin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    rendezVous?: RendezVousListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "userId">

  export type MedecinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialite?: SortOrder
    serviceId?: SortOrder
    _count?: MedecinCountOrderByAggregateInput
    _avg?: MedecinAvgOrderByAggregateInput
    _max?: MedecinMaxOrderByAggregateInput
    _min?: MedecinMinOrderByAggregateInput
    _sum?: MedecinSumOrderByAggregateInput
  }

  export type MedecinScalarWhereWithAggregatesInput = {
    AND?: MedecinScalarWhereWithAggregatesInput | MedecinScalarWhereWithAggregatesInput[]
    OR?: MedecinScalarWhereWithAggregatesInput[]
    NOT?: MedecinScalarWhereWithAggregatesInput | MedecinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medecin"> | number
    userId?: IntWithAggregatesFilter<"Medecin"> | number
    specialite?: StringWithAggregatesFilter<"Medecin"> | string
    serviceId?: IntWithAggregatesFilter<"Medecin"> | number
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    userId?: IntFilter<"Patient"> | number
    telephone?: StringFilter<"Patient"> | string
    codePin?: StringFilter<"Patient"> | string
    age?: IntNullableFilter<"Patient"> | number | null
    estComplet?: BoolFilter<"Patient"> | boolean
    estPrioritaire?: BoolFilter<"Patient"> | boolean
    estRefere?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fileAttente?: XOR<FileAttenteNullableScalarRelationFilter, FileAttenteWhereInput> | null
    tickets?: TicketListRelationFilter
    rendezVous?: RendezVousListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    telephone?: SortOrder
    codePin?: SortOrder
    age?: SortOrderInput | SortOrder
    estComplet?: SortOrder
    estPrioritaire?: SortOrder
    estRefere?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    fileAttente?: FileAttenteOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    rendezVous?: RendezVousOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: PatientOrderByRelevanceInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    telephone?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    codePin?: StringFilter<"Patient"> | string
    age?: IntNullableFilter<"Patient"> | number | null
    estComplet?: BoolFilter<"Patient"> | boolean
    estPrioritaire?: BoolFilter<"Patient"> | boolean
    estRefere?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fileAttente?: XOR<FileAttenteNullableScalarRelationFilter, FileAttenteWhereInput> | null
    tickets?: TicketListRelationFilter
    rendezVous?: RendezVousListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "userId" | "telephone">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    telephone?: SortOrder
    codePin?: SortOrder
    age?: SortOrderInput | SortOrder
    estComplet?: SortOrder
    estPrioritaire?: SortOrder
    estRefere?: SortOrder
    createdAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    userId?: IntWithAggregatesFilter<"Patient"> | number
    telephone?: StringWithAggregatesFilter<"Patient"> | string
    codePin?: StringWithAggregatesFilter<"Patient"> | string
    age?: IntNullableWithAggregatesFilter<"Patient"> | number | null
    estComplet?: BoolWithAggregatesFilter<"Patient"> | boolean
    estPrioritaire?: BoolWithAggregatesFilter<"Patient"> | boolean
    estRefere?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    nom?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    prixTicket?: FloatFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    medecins?: MedecinListRelationFilter
    accueils?: AccueilListRelationFilter
    fileAttente?: FileAttenteListRelationFilter
    tickets?: TicketListRelationFilter
    rendezVous?: RendezVousListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    prixTicket?: SortOrder
    createdAt?: SortOrder
    medecins?: MedecinOrderByRelationAggregateInput
    accueils?: AccueilOrderByRelationAggregateInput
    fileAttente?: FileAttenteOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    rendezVous?: RendezVousOrderByRelationAggregateInput
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    description?: StringNullableFilter<"Service"> | string | null
    prixTicket?: FloatFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    medecins?: MedecinListRelationFilter
    accueils?: AccueilListRelationFilter
    fileAttente?: FileAttenteListRelationFilter
    tickets?: TicketListRelationFilter
    rendezVous?: RendezVousListRelationFilter
  }, "id" | "nom">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    prixTicket?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    nom?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    prixTicket?: FloatWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type FileAttenteWhereInput = {
    AND?: FileAttenteWhereInput | FileAttenteWhereInput[]
    OR?: FileAttenteWhereInput[]
    NOT?: FileAttenteWhereInput | FileAttenteWhereInput[]
    id?: IntFilter<"FileAttente"> | number
    patientId?: IntFilter<"FileAttente"> | number
    serviceId?: IntFilter<"FileAttente"> | number
    numero?: IntFilter<"FileAttente"> | number
    estPrioritaire?: BoolFilter<"FileAttente"> | boolean
    statut?: EnumStatutFileFilter<"FileAttente"> | $Enums.StatutFile
    heurePrise?: DateTimeFilter<"FileAttente"> | Date | string
    heureValidation?: DateTimeNullableFilter<"FileAttente"> | Date | string | null
    heureExpiration?: DateTimeNullableFilter<"FileAttente"> | Date | string | null
    createdAt?: DateTimeFilter<"FileAttente"> | Date | string
    updatedAt?: DateTimeFilter<"FileAttente"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }

  export type FileAttenteOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    serviceId?: SortOrder
    numero?: SortOrder
    estPrioritaire?: SortOrder
    statut?: SortOrder
    heurePrise?: SortOrder
    heureValidation?: SortOrderInput | SortOrder
    heureExpiration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type FileAttenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patientId?: number
    AND?: FileAttenteWhereInput | FileAttenteWhereInput[]
    OR?: FileAttenteWhereInput[]
    NOT?: FileAttenteWhereInput | FileAttenteWhereInput[]
    serviceId?: IntFilter<"FileAttente"> | number
    numero?: IntFilter<"FileAttente"> | number
    estPrioritaire?: BoolFilter<"FileAttente"> | boolean
    statut?: EnumStatutFileFilter<"FileAttente"> | $Enums.StatutFile
    heurePrise?: DateTimeFilter<"FileAttente"> | Date | string
    heureValidation?: DateTimeNullableFilter<"FileAttente"> | Date | string | null
    heureExpiration?: DateTimeNullableFilter<"FileAttente"> | Date | string | null
    createdAt?: DateTimeFilter<"FileAttente"> | Date | string
    updatedAt?: DateTimeFilter<"FileAttente"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }, "id" | "patientId">

  export type FileAttenteOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    serviceId?: SortOrder
    numero?: SortOrder
    estPrioritaire?: SortOrder
    statut?: SortOrder
    heurePrise?: SortOrder
    heureValidation?: SortOrderInput | SortOrder
    heureExpiration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileAttenteCountOrderByAggregateInput
    _avg?: FileAttenteAvgOrderByAggregateInput
    _max?: FileAttenteMaxOrderByAggregateInput
    _min?: FileAttenteMinOrderByAggregateInput
    _sum?: FileAttenteSumOrderByAggregateInput
  }

  export type FileAttenteScalarWhereWithAggregatesInput = {
    AND?: FileAttenteScalarWhereWithAggregatesInput | FileAttenteScalarWhereWithAggregatesInput[]
    OR?: FileAttenteScalarWhereWithAggregatesInput[]
    NOT?: FileAttenteScalarWhereWithAggregatesInput | FileAttenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FileAttente"> | number
    patientId?: IntWithAggregatesFilter<"FileAttente"> | number
    serviceId?: IntWithAggregatesFilter<"FileAttente"> | number
    numero?: IntWithAggregatesFilter<"FileAttente"> | number
    estPrioritaire?: BoolWithAggregatesFilter<"FileAttente"> | boolean
    statut?: EnumStatutFileWithAggregatesFilter<"FileAttente"> | $Enums.StatutFile
    heurePrise?: DateTimeWithAggregatesFilter<"FileAttente"> | Date | string
    heureValidation?: DateTimeNullableWithAggregatesFilter<"FileAttente"> | Date | string | null
    heureExpiration?: DateTimeNullableWithAggregatesFilter<"FileAttente"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FileAttente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileAttente"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    patientId?: IntFilter<"Ticket"> | number
    medecinId?: IntNullableFilter<"Ticket"> | number | null
    serviceId?: IntFilter<"Ticket"> | number
    fileAttenteId?: IntFilter<"Ticket"> | number
    numero?: StringFilter<"Ticket"> | string
    montantPaye?: FloatFilter<"Ticket"> | number
    montantRestant?: FloatFilter<"Ticket"> | number
    statut?: EnumStatutTicketFilter<"Ticket"> | $Enums.StatutTicket
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medecin?: XOR<MedecinNullableScalarRelationFilter, MedecinWhereInput> | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    fileAttente?: XOR<FileAttenteScalarRelationFilter, FileAttenteWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    fileAttenteId?: SortOrder
    numero?: SortOrder
    montantPaye?: SortOrder
    montantRestant?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    medecin?: MedecinOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    fileAttente?: FileAttenteOrderByWithRelationInput
    _relevance?: TicketOrderByRelevanceInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fileAttenteId?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    patientId?: IntFilter<"Ticket"> | number
    medecinId?: IntNullableFilter<"Ticket"> | number | null
    serviceId?: IntFilter<"Ticket"> | number
    numero?: StringFilter<"Ticket"> | string
    montantPaye?: FloatFilter<"Ticket"> | number
    montantRestant?: FloatFilter<"Ticket"> | number
    statut?: EnumStatutTicketFilter<"Ticket"> | $Enums.StatutTicket
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medecin?: XOR<MedecinNullableScalarRelationFilter, MedecinWhereInput> | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    fileAttente?: XOR<FileAttenteScalarRelationFilter, FileAttenteWhereInput>
  }, "id" | "fileAttenteId">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    fileAttenteId?: SortOrder
    numero?: SortOrder
    montantPaye?: SortOrder
    montantRestant?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    patientId?: IntWithAggregatesFilter<"Ticket"> | number
    medecinId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    serviceId?: IntWithAggregatesFilter<"Ticket"> | number
    fileAttenteId?: IntWithAggregatesFilter<"Ticket"> | number
    numero?: StringWithAggregatesFilter<"Ticket"> | string
    montantPaye?: FloatWithAggregatesFilter<"Ticket"> | number
    montantRestant?: FloatWithAggregatesFilter<"Ticket"> | number
    statut?: EnumStatutTicketWithAggregatesFilter<"Ticket"> | $Enums.StatutTicket
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type RendezVousWhereInput = {
    AND?: RendezVousWhereInput | RendezVousWhereInput[]
    OR?: RendezVousWhereInput[]
    NOT?: RendezVousWhereInput | RendezVousWhereInput[]
    id?: IntFilter<"RendezVous"> | number
    patientId?: IntFilter<"RendezVous"> | number
    medecinId?: IntFilter<"RendezVous"> | number
    serviceId?: IntFilter<"RendezVous"> | number
    creerPar?: EnumCreerParFilter<"RendezVous"> | $Enums.CreerPar
    date?: DateTimeFilter<"RendezVous"> | Date | string
    heure?: StringFilter<"RendezVous"> | string
    motif?: StringNullableFilter<"RendezVous"> | string | null
    statut?: EnumStatutRendezVousFilter<"RendezVous"> | $Enums.StatutRendezVous
    createdAt?: DateTimeFilter<"RendezVous"> | Date | string
    updatedAt?: DateTimeFilter<"RendezVous"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medecin?: XOR<MedecinScalarRelationFilter, MedecinWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type RendezVousOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    creerPar?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    medecin?: MedecinOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    _relevance?: RendezVousOrderByRelevanceInput
  }

  export type RendezVousWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RendezVousWhereInput | RendezVousWhereInput[]
    OR?: RendezVousWhereInput[]
    NOT?: RendezVousWhereInput | RendezVousWhereInput[]
    patientId?: IntFilter<"RendezVous"> | number
    medecinId?: IntFilter<"RendezVous"> | number
    serviceId?: IntFilter<"RendezVous"> | number
    creerPar?: EnumCreerParFilter<"RendezVous"> | $Enums.CreerPar
    date?: DateTimeFilter<"RendezVous"> | Date | string
    heure?: StringFilter<"RendezVous"> | string
    motif?: StringNullableFilter<"RendezVous"> | string | null
    statut?: EnumStatutRendezVousFilter<"RendezVous"> | $Enums.StatutRendezVous
    createdAt?: DateTimeFilter<"RendezVous"> | Date | string
    updatedAt?: DateTimeFilter<"RendezVous"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medecin?: XOR<MedecinScalarRelationFilter, MedecinWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type RendezVousOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    creerPar?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RendezVousCountOrderByAggregateInput
    _avg?: RendezVousAvgOrderByAggregateInput
    _max?: RendezVousMaxOrderByAggregateInput
    _min?: RendezVousMinOrderByAggregateInput
    _sum?: RendezVousSumOrderByAggregateInput
  }

  export type RendezVousScalarWhereWithAggregatesInput = {
    AND?: RendezVousScalarWhereWithAggregatesInput | RendezVousScalarWhereWithAggregatesInput[]
    OR?: RendezVousScalarWhereWithAggregatesInput[]
    NOT?: RendezVousScalarWhereWithAggregatesInput | RendezVousScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RendezVous"> | number
    patientId?: IntWithAggregatesFilter<"RendezVous"> | number
    medecinId?: IntWithAggregatesFilter<"RendezVous"> | number
    serviceId?: IntWithAggregatesFilter<"RendezVous"> | number
    creerPar?: EnumCreerParWithAggregatesFilter<"RendezVous"> | $Enums.CreerPar
    date?: DateTimeWithAggregatesFilter<"RendezVous"> | Date | string
    heure?: StringWithAggregatesFilter<"RendezVous"> | string
    motif?: StringNullableWithAggregatesFilter<"RendezVous"> | string | null
    statut?: EnumStatutRendezVousWithAggregatesFilter<"RendezVous"> | $Enums.StatutRendezVous
    createdAt?: DateTimeWithAggregatesFilter<"RendezVous"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RendezVous"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    patientId?: IntFilter<"Notification"> | number
    type?: EnumTypeNotificationFilter<"Notification"> | $Enums.TypeNotification
    canal?: EnumCanalNotificationFilter<"Notification"> | $Enums.CanalNotification
    message?: StringFilter<"Notification"> | string
    lu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    canal?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    patientId?: IntFilter<"Notification"> | number
    type?: EnumTypeNotificationFilter<"Notification"> | $Enums.TypeNotification
    canal?: EnumCanalNotificationFilter<"Notification"> | $Enums.CanalNotification
    message?: StringFilter<"Notification"> | string
    lu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    canal?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    patientId?: IntWithAggregatesFilter<"Notification"> | number
    type?: EnumTypeNotificationWithAggregatesFilter<"Notification"> | $Enums.TypeNotification
    canal?: EnumCanalNotificationWithAggregatesFilter<"Notification"> | $Enums.CanalNotification
    message?: StringWithAggregatesFilter<"Notification"> | string
    lu?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    accueil?: AccueilCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    medecin?: MedecinCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    accueil?: AccueilUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    medecin?: MedecinUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    accueil?: AccueilUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    medecin?: MedecinUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    accueil?: AccueilUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    medecin?: MedecinUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    userId: number
  }

  export type AdminUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateManyInput = {
    id?: number
    userId: number
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AccueilCreateInput = {
    user: UserCreateNestedOneWithoutAccueilInput
    service?: ServiceCreateNestedOneWithoutAccueilsInput
  }

  export type AccueilUncheckedCreateInput = {
    id?: number
    userId: number
    serviceId?: number | null
  }

  export type AccueilUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAccueilNestedInput
    service?: ServiceUpdateOneWithoutAccueilsNestedInput
  }

  export type AccueilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccueilCreateManyInput = {
    id?: number
    userId: number
    serviceId?: number | null
  }

  export type AccueilUpdateManyMutationInput = {

  }

  export type AccueilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MedecinCreateInput = {
    specialite: string
    user: UserCreateNestedOneWithoutMedecinInput
    service: ServiceCreateNestedOneWithoutMedecinsInput
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinInput
    tickets?: TicketCreateNestedManyWithoutMedecinInput
  }

  export type MedecinUncheckedCreateInput = {
    id?: number
    userId: number
    specialite: string
    serviceId: number
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinInput
    tickets?: TicketUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinUpdateInput = {
    specialite?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    service?: ServiceUpdateOneRequiredWithoutMedecinsNestedInput
    rendezVous?: RendezVousUpdateManyWithoutMedecinNestedInput
    tickets?: TicketUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialite?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinCreateManyInput = {
    id?: number
    userId: number
    specialite: string
    serviceId: number
  }

  export type MedecinUpdateManyMutationInput = {
    specialite?: StringFieldUpdateOperationsInput | string
  }

  export type MedecinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialite?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientCreateInput = {
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    fileAttente?: FileAttenteCreateNestedOneWithoutPatientInput
    tickets?: TicketCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousCreateNestedManyWithoutPatientInput
    notifications?: NotificationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    userId: number
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    fileAttente?: FileAttenteUncheckedCreateNestedOneWithoutPatientInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    fileAttente?: FileAttenteUpdateOneWithoutPatientNestedInput
    tickets?: TicketUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileAttente?: FileAttenteUncheckedUpdateOneWithoutPatientNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    userId: number
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinCreateNestedManyWithoutServiceInput
    accueils?: AccueilCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteCreateNestedManyWithoutServiceInput
    tickets?: TicketCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinUncheckedCreateNestedManyWithoutServiceInput
    accueils?: AccueilUncheckedCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteUncheckedCreateNestedManyWithoutServiceInput
    tickets?: TicketUncheckedCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUpdateManyWithoutServiceNestedInput
    tickets?: TicketUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUncheckedUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUncheckedUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUncheckedUpdateManyWithoutServiceNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileAttenteCreateInput = {
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutFileAttenteInput
    service: ServiceCreateNestedOneWithoutFileAttenteInput
    ticket?: TicketCreateNestedOneWithoutFileAttenteInput
  }

  export type FileAttenteUncheckedCreateInput = {
    id?: number
    patientId: number
    serviceId: number
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutFileAttenteInput
  }

  export type FileAttenteUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutFileAttenteNestedInput
    service?: ServiceUpdateOneRequiredWithoutFileAttenteNestedInput
    ticket?: TicketUpdateOneWithoutFileAttenteNestedInput
  }

  export type FileAttenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutFileAttenteNestedInput
  }

  export type FileAttenteCreateManyInput = {
    id?: number
    patientId: number
    serviceId: number
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileAttenteUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileAttenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTicketsInput
    medecin?: MedecinCreateNestedOneWithoutTicketsInput
    service: ServiceCreateNestedOneWithoutTicketsInput
    fileAttente: FileAttenteCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    patientId: number
    medecinId?: number | null
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTicketsNestedInput
    medecin?: MedecinUpdateOneWithoutTicketsNestedInput
    service?: ServiceUpdateOneRequiredWithoutTicketsNestedInput
    fileAttente?: FileAttenteUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id?: number
    patientId: number
    medecinId?: number | null
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousCreateInput = {
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutRendezVousInput
    medecin: MedecinCreateNestedOneWithoutRendezVousInput
    service: ServiceCreateNestedOneWithoutRendezVousInput
  }

  export type RendezVousUncheckedCreateInput = {
    id?: number
    patientId: number
    medecinId: number
    serviceId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousUpdateInput = {
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRendezVousNestedInput
    medecin?: MedecinUpdateOneRequiredWithoutRendezVousNestedInput
    service?: ServiceUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RendezVousUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousCreateManyInput = {
    id?: number
    patientId: number
    medecinId: number
    serviceId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousUpdateManyMutationInput = {
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    type: $Enums.TypeNotification
    canal?: $Enums.CanalNotification
    message: string
    lu?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    patientId: number
    type: $Enums.TypeNotification
    canal?: $Enums.CanalNotification
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    canal?: EnumCanalNotificationFieldUpdateOperationsInput | $Enums.CanalNotification
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    canal?: EnumCanalNotificationFieldUpdateOperationsInput | $Enums.CanalNotification
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    patientId: number
    type: $Enums.TypeNotification
    canal?: $Enums.CanalNotification
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    canal?: EnumCanalNotificationFieldUpdateOperationsInput | $Enums.CanalNotification
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    canal?: EnumCanalNotificationFieldUpdateOperationsInput | $Enums.CanalNotification
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type AccueilNullableScalarRelationFilter = {
    is?: AccueilWhereInput | null
    isNot?: AccueilWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type MedecinNullableScalarRelationFilter = {
    is?: MedecinWhereInput | null
    isNot?: MedecinWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type AccueilCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type AccueilAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type AccueilMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type AccueilMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type AccueilSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type RendezVousListRelationFilter = {
    every?: RendezVousWhereInput
    some?: RendezVousWhereInput
    none?: RendezVousWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type RendezVousOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedecinOrderByRelevanceInput = {
    fields: MedecinOrderByRelevanceFieldEnum | MedecinOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MedecinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialite?: SortOrder
    serviceId?: SortOrder
  }

  export type MedecinAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type MedecinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialite?: SortOrder
    serviceId?: SortOrder
  }

  export type MedecinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialite?: SortOrder
    serviceId?: SortOrder
  }

  export type MedecinSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FileAttenteNullableScalarRelationFilter = {
    is?: FileAttenteWhereInput | null
    isNot?: FileAttenteWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelevanceInput = {
    fields: PatientOrderByRelevanceFieldEnum | PatientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telephone?: SortOrder
    codePin?: SortOrder
    age?: SortOrder
    estComplet?: SortOrder
    estPrioritaire?: SortOrder
    estRefere?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telephone?: SortOrder
    codePin?: SortOrder
    age?: SortOrder
    estComplet?: SortOrder
    estPrioritaire?: SortOrder
    estRefere?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telephone?: SortOrder
    codePin?: SortOrder
    age?: SortOrder
    estComplet?: SortOrder
    estPrioritaire?: SortOrder
    estRefere?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MedecinListRelationFilter = {
    every?: MedecinWhereInput
    some?: MedecinWhereInput
    none?: MedecinWhereInput
  }

  export type AccueilListRelationFilter = {
    every?: AccueilWhereInput
    some?: AccueilWhereInput
    none?: AccueilWhereInput
  }

  export type FileAttenteListRelationFilter = {
    every?: FileAttenteWhereInput
    some?: FileAttenteWhereInput
    none?: FileAttenteWhereInput
  }

  export type MedecinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccueilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileAttenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prixTicket?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    prixTicket?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prixTicket?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prixTicket?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    prixTicket?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatutFileFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutFile | EnumStatutFileFieldRefInput<$PrismaModel>
    in?: $Enums.StatutFile[]
    notIn?: $Enums.StatutFile[]
    not?: NestedEnumStatutFileFilter<$PrismaModel> | $Enums.StatutFile
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type FileAttenteCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    serviceId?: SortOrder
    numero?: SortOrder
    estPrioritaire?: SortOrder
    statut?: SortOrder
    heurePrise?: SortOrder
    heureValidation?: SortOrder
    heureExpiration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAttenteAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    serviceId?: SortOrder
    numero?: SortOrder
  }

  export type FileAttenteMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    serviceId?: SortOrder
    numero?: SortOrder
    estPrioritaire?: SortOrder
    statut?: SortOrder
    heurePrise?: SortOrder
    heureValidation?: SortOrder
    heureExpiration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAttenteMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    serviceId?: SortOrder
    numero?: SortOrder
    estPrioritaire?: SortOrder
    statut?: SortOrder
    heurePrise?: SortOrder
    heureValidation?: SortOrder
    heureExpiration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAttenteSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    serviceId?: SortOrder
    numero?: SortOrder
  }

  export type EnumStatutFileWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutFile | EnumStatutFileFieldRefInput<$PrismaModel>
    in?: $Enums.StatutFile[]
    notIn?: $Enums.StatutFile[]
    not?: NestedEnumStatutFileWithAggregatesFilter<$PrismaModel> | $Enums.StatutFile
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFileFilter<$PrismaModel>
    _max?: NestedEnumStatutFileFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatutTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[]
    notIn?: $Enums.StatutTicket[]
    not?: NestedEnumStatutTicketFilter<$PrismaModel> | $Enums.StatutTicket
  }

  export type FileAttenteScalarRelationFilter = {
    is?: FileAttenteWhereInput
    isNot?: FileAttenteWhereInput
  }

  export type TicketOrderByRelevanceInput = {
    fields: TicketOrderByRelevanceFieldEnum | TicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    fileAttenteId?: SortOrder
    numero?: SortOrder
    montantPaye?: SortOrder
    montantRestant?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    fileAttenteId?: SortOrder
    montantPaye?: SortOrder
    montantRestant?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    fileAttenteId?: SortOrder
    numero?: SortOrder
    montantPaye?: SortOrder
    montantRestant?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    fileAttenteId?: SortOrder
    numero?: SortOrder
    montantPaye?: SortOrder
    montantRestant?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    fileAttenteId?: SortOrder
    montantPaye?: SortOrder
    montantRestant?: SortOrder
  }

  export type EnumStatutTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[]
    notIn?: $Enums.StatutTicket[]
    not?: NestedEnumStatutTicketWithAggregatesFilter<$PrismaModel> | $Enums.StatutTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutTicketFilter<$PrismaModel>
    _max?: NestedEnumStatutTicketFilter<$PrismaModel>
  }

  export type EnumCreerParFilter<$PrismaModel = never> = {
    equals?: $Enums.CreerPar | EnumCreerParFieldRefInput<$PrismaModel>
    in?: $Enums.CreerPar[]
    notIn?: $Enums.CreerPar[]
    not?: NestedEnumCreerParFilter<$PrismaModel> | $Enums.CreerPar
  }

  export type EnumStatutRendezVousFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRendezVous | EnumStatutRendezVousFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRendezVous[]
    notIn?: $Enums.StatutRendezVous[]
    not?: NestedEnumStatutRendezVousFilter<$PrismaModel> | $Enums.StatutRendezVous
  }

  export type MedecinScalarRelationFilter = {
    is?: MedecinWhereInput
    isNot?: MedecinWhereInput
  }

  export type RendezVousOrderByRelevanceInput = {
    fields: RendezVousOrderByRelevanceFieldEnum | RendezVousOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RendezVousCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    creerPar?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RendezVousAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
  }

  export type RendezVousMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    creerPar?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RendezVousMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
    creerPar?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RendezVousSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medecinId?: SortOrder
    serviceId?: SortOrder
  }

  export type EnumCreerParWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreerPar | EnumCreerParFieldRefInput<$PrismaModel>
    in?: $Enums.CreerPar[]
    notIn?: $Enums.CreerPar[]
    not?: NestedEnumCreerParWithAggregatesFilter<$PrismaModel> | $Enums.CreerPar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreerParFilter<$PrismaModel>
    _max?: NestedEnumCreerParFilter<$PrismaModel>
  }

  export type EnumStatutRendezVousWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRendezVous | EnumStatutRendezVousFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRendezVous[]
    notIn?: $Enums.StatutRendezVous[]
    not?: NestedEnumStatutRendezVousWithAggregatesFilter<$PrismaModel> | $Enums.StatutRendezVous
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutRendezVousFilter<$PrismaModel>
    _max?: NestedEnumStatutRendezVousFilter<$PrismaModel>
  }

  export type EnumTypeNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[]
    notIn?: $Enums.TypeNotification[]
    not?: NestedEnumTypeNotificationFilter<$PrismaModel> | $Enums.TypeNotification
  }

  export type EnumCanalNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalNotification | EnumCanalNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.CanalNotification[]
    notIn?: $Enums.CanalNotification[]
    not?: NestedEnumCanalNotificationFilter<$PrismaModel> | $Enums.CanalNotification
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    canal?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    canal?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    canal?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type EnumTypeNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[]
    notIn?: $Enums.TypeNotification[]
    not?: NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel> | $Enums.TypeNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeNotificationFilter<$PrismaModel>
    _max?: NestedEnumTypeNotificationFilter<$PrismaModel>
  }

  export type EnumCanalNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalNotification | EnumCanalNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.CanalNotification[]
    notIn?: $Enums.CanalNotification[]
    not?: NestedEnumCanalNotificationWithAggregatesFilter<$PrismaModel> | $Enums.CanalNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalNotificationFilter<$PrismaModel>
    _max?: NestedEnumCanalNotificationFilter<$PrismaModel>
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type AccueilCreateNestedOneWithoutUserInput = {
    create?: XOR<AccueilCreateWithoutUserInput, AccueilUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccueilCreateOrConnectWithoutUserInput
    connect?: AccueilWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type MedecinCreateNestedOneWithoutUserInput = {
    create?: XOR<MedecinCreateWithoutUserInput, MedecinUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutUserInput
    connect?: MedecinWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type AccueilUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AccueilCreateWithoutUserInput, AccueilUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccueilCreateOrConnectWithoutUserInput
    connect?: AccueilWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type MedecinUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MedecinCreateWithoutUserInput, MedecinUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutUserInput
    connect?: MedecinWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AccueilUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccueilCreateWithoutUserInput, AccueilUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccueilCreateOrConnectWithoutUserInput
    upsert?: AccueilUpsertWithoutUserInput
    disconnect?: AccueilWhereInput | boolean
    delete?: AccueilWhereInput | boolean
    connect?: AccueilWhereUniqueInput
    update?: XOR<XOR<AccueilUpdateToOneWithWhereWithoutUserInput, AccueilUpdateWithoutUserInput>, AccueilUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type MedecinUpdateOneWithoutUserNestedInput = {
    create?: XOR<MedecinCreateWithoutUserInput, MedecinUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutUserInput
    upsert?: MedecinUpsertWithoutUserInput
    disconnect?: MedecinWhereInput | boolean
    delete?: MedecinWhereInput | boolean
    connect?: MedecinWhereUniqueInput
    update?: XOR<XOR<MedecinUpdateToOneWithWhereWithoutUserInput, MedecinUpdateWithoutUserInput>, MedecinUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AccueilUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccueilCreateWithoutUserInput, AccueilUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccueilCreateOrConnectWithoutUserInput
    upsert?: AccueilUpsertWithoutUserInput
    disconnect?: AccueilWhereInput | boolean
    delete?: AccueilWhereInput | boolean
    connect?: AccueilWhereUniqueInput
    update?: XOR<XOR<AccueilUpdateToOneWithWhereWithoutUserInput, AccueilUpdateWithoutUserInput>, AccueilUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type MedecinUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MedecinCreateWithoutUserInput, MedecinUncheckedCreateWithoutUserInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutUserInput
    upsert?: MedecinUpsertWithoutUserInput
    disconnect?: MedecinWhereInput | boolean
    delete?: MedecinWhereInput | boolean
    connect?: MedecinWhereUniqueInput
    update?: XOR<XOR<MedecinUpdateToOneWithWhereWithoutUserInput, MedecinUpdateWithoutUserInput>, MedecinUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutAccueilInput = {
    create?: XOR<UserCreateWithoutAccueilInput, UserUncheckedCreateWithoutAccueilInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccueilInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAccueilsInput = {
    create?: XOR<ServiceCreateWithoutAccueilsInput, ServiceUncheckedCreateWithoutAccueilsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAccueilsInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccueilNestedInput = {
    create?: XOR<UserCreateWithoutAccueilInput, UserUncheckedCreateWithoutAccueilInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccueilInput
    upsert?: UserUpsertWithoutAccueilInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccueilInput, UserUpdateWithoutAccueilInput>, UserUncheckedUpdateWithoutAccueilInput>
  }

  export type ServiceUpdateOneWithoutAccueilsNestedInput = {
    create?: XOR<ServiceCreateWithoutAccueilsInput, ServiceUncheckedCreateWithoutAccueilsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAccueilsInput
    upsert?: ServiceUpsertWithoutAccueilsInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAccueilsInput, ServiceUpdateWithoutAccueilsInput>, ServiceUncheckedUpdateWithoutAccueilsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutMedecinInput = {
    create?: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedecinInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutMedecinsInput = {
    create?: XOR<ServiceCreateWithoutMedecinsInput, ServiceUncheckedCreateWithoutMedecinsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMedecinsInput
    connect?: ServiceWhereUniqueInput
  }

  export type RendezVousCreateNestedManyWithoutMedecinInput = {
    create?: XOR<RendezVousCreateWithoutMedecinInput, RendezVousUncheckedCreateWithoutMedecinInput> | RendezVousCreateWithoutMedecinInput[] | RendezVousUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinInput | RendezVousCreateOrConnectWithoutMedecinInput[]
    createMany?: RendezVousCreateManyMedecinInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutMedecinInput = {
    create?: XOR<TicketCreateWithoutMedecinInput, TicketUncheckedCreateWithoutMedecinInput> | TicketCreateWithoutMedecinInput[] | TicketUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutMedecinInput | TicketCreateOrConnectWithoutMedecinInput[]
    createMany?: TicketCreateManyMedecinInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type RendezVousUncheckedCreateNestedManyWithoutMedecinInput = {
    create?: XOR<RendezVousCreateWithoutMedecinInput, RendezVousUncheckedCreateWithoutMedecinInput> | RendezVousCreateWithoutMedecinInput[] | RendezVousUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinInput | RendezVousCreateOrConnectWithoutMedecinInput[]
    createMany?: RendezVousCreateManyMedecinInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutMedecinInput = {
    create?: XOR<TicketCreateWithoutMedecinInput, TicketUncheckedCreateWithoutMedecinInput> | TicketCreateWithoutMedecinInput[] | TicketUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutMedecinInput | TicketCreateOrConnectWithoutMedecinInput[]
    createMany?: TicketCreateManyMedecinInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutMedecinNestedInput = {
    create?: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedecinInput
    upsert?: UserUpsertWithoutMedecinInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedecinInput, UserUpdateWithoutMedecinInput>, UserUncheckedUpdateWithoutMedecinInput>
  }

  export type ServiceUpdateOneRequiredWithoutMedecinsNestedInput = {
    create?: XOR<ServiceCreateWithoutMedecinsInput, ServiceUncheckedCreateWithoutMedecinsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMedecinsInput
    upsert?: ServiceUpsertWithoutMedecinsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutMedecinsInput, ServiceUpdateWithoutMedecinsInput>, ServiceUncheckedUpdateWithoutMedecinsInput>
  }

  export type RendezVousUpdateManyWithoutMedecinNestedInput = {
    create?: XOR<RendezVousCreateWithoutMedecinInput, RendezVousUncheckedCreateWithoutMedecinInput> | RendezVousCreateWithoutMedecinInput[] | RendezVousUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinInput | RendezVousCreateOrConnectWithoutMedecinInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutMedecinInput | RendezVousUpsertWithWhereUniqueWithoutMedecinInput[]
    createMany?: RendezVousCreateManyMedecinInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutMedecinInput | RendezVousUpdateWithWhereUniqueWithoutMedecinInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutMedecinInput | RendezVousUpdateManyWithWhereWithoutMedecinInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutMedecinNestedInput = {
    create?: XOR<TicketCreateWithoutMedecinInput, TicketUncheckedCreateWithoutMedecinInput> | TicketCreateWithoutMedecinInput[] | TicketUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutMedecinInput | TicketCreateOrConnectWithoutMedecinInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutMedecinInput | TicketUpsertWithWhereUniqueWithoutMedecinInput[]
    createMany?: TicketCreateManyMedecinInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutMedecinInput | TicketUpdateWithWhereUniqueWithoutMedecinInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutMedecinInput | TicketUpdateManyWithWhereWithoutMedecinInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RendezVousUncheckedUpdateManyWithoutMedecinNestedInput = {
    create?: XOR<RendezVousCreateWithoutMedecinInput, RendezVousUncheckedCreateWithoutMedecinInput> | RendezVousCreateWithoutMedecinInput[] | RendezVousUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinInput | RendezVousCreateOrConnectWithoutMedecinInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutMedecinInput | RendezVousUpsertWithWhereUniqueWithoutMedecinInput[]
    createMany?: RendezVousCreateManyMedecinInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutMedecinInput | RendezVousUpdateWithWhereUniqueWithoutMedecinInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutMedecinInput | RendezVousUpdateManyWithWhereWithoutMedecinInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutMedecinNestedInput = {
    create?: XOR<TicketCreateWithoutMedecinInput, TicketUncheckedCreateWithoutMedecinInput> | TicketCreateWithoutMedecinInput[] | TicketUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutMedecinInput | TicketCreateOrConnectWithoutMedecinInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutMedecinInput | TicketUpsertWithWhereUniqueWithoutMedecinInput[]
    createMany?: TicketCreateManyMedecinInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutMedecinInput | TicketUpdateWithWhereUniqueWithoutMedecinInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutMedecinInput | TicketUpdateManyWithWhereWithoutMedecinInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type FileAttenteCreateNestedOneWithoutPatientInput = {
    create?: XOR<FileAttenteCreateWithoutPatientInput, FileAttenteUncheckedCreateWithoutPatientInput>
    connectOrCreate?: FileAttenteCreateOrConnectWithoutPatientInput
    connect?: FileAttenteWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutPatientInput = {
    create?: XOR<TicketCreateWithoutPatientInput, TicketUncheckedCreateWithoutPatientInput> | TicketCreateWithoutPatientInput[] | TicketUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPatientInput | TicketCreateOrConnectWithoutPatientInput[]
    createMany?: TicketCreateManyPatientInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type RendezVousCreateNestedManyWithoutPatientInput = {
    create?: XOR<RendezVousCreateWithoutPatientInput, RendezVousUncheckedCreateWithoutPatientInput> | RendezVousCreateWithoutPatientInput[] | RendezVousUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientInput | RendezVousCreateOrConnectWithoutPatientInput[]
    createMany?: RendezVousCreateManyPatientInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutPatientInput = {
    create?: XOR<NotificationCreateWithoutPatientInput, NotificationUncheckedCreateWithoutPatientInput> | NotificationCreateWithoutPatientInput[] | NotificationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPatientInput | NotificationCreateOrConnectWithoutPatientInput[]
    createMany?: NotificationCreateManyPatientInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FileAttenteUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<FileAttenteCreateWithoutPatientInput, FileAttenteUncheckedCreateWithoutPatientInput>
    connectOrCreate?: FileAttenteCreateOrConnectWithoutPatientInput
    connect?: FileAttenteWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<TicketCreateWithoutPatientInput, TicketUncheckedCreateWithoutPatientInput> | TicketCreateWithoutPatientInput[] | TicketUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPatientInput | TicketCreateOrConnectWithoutPatientInput[]
    createMany?: TicketCreateManyPatientInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type RendezVousUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<RendezVousCreateWithoutPatientInput, RendezVousUncheckedCreateWithoutPatientInput> | RendezVousCreateWithoutPatientInput[] | RendezVousUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientInput | RendezVousCreateOrConnectWithoutPatientInput[]
    createMany?: RendezVousCreateManyPatientInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<NotificationCreateWithoutPatientInput, NotificationUncheckedCreateWithoutPatientInput> | NotificationCreateWithoutPatientInput[] | NotificationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPatientInput | NotificationCreateOrConnectWithoutPatientInput[]
    createMany?: NotificationCreateManyPatientInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type FileAttenteUpdateOneWithoutPatientNestedInput = {
    create?: XOR<FileAttenteCreateWithoutPatientInput, FileAttenteUncheckedCreateWithoutPatientInput>
    connectOrCreate?: FileAttenteCreateOrConnectWithoutPatientInput
    upsert?: FileAttenteUpsertWithoutPatientInput
    disconnect?: FileAttenteWhereInput | boolean
    delete?: FileAttenteWhereInput | boolean
    connect?: FileAttenteWhereUniqueInput
    update?: XOR<XOR<FileAttenteUpdateToOneWithWhereWithoutPatientInput, FileAttenteUpdateWithoutPatientInput>, FileAttenteUncheckedUpdateWithoutPatientInput>
  }

  export type TicketUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TicketCreateWithoutPatientInput, TicketUncheckedCreateWithoutPatientInput> | TicketCreateWithoutPatientInput[] | TicketUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPatientInput | TicketCreateOrConnectWithoutPatientInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPatientInput | TicketUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TicketCreateManyPatientInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPatientInput | TicketUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPatientInput | TicketUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RendezVousUpdateManyWithoutPatientNestedInput = {
    create?: XOR<RendezVousCreateWithoutPatientInput, RendezVousUncheckedCreateWithoutPatientInput> | RendezVousCreateWithoutPatientInput[] | RendezVousUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientInput | RendezVousCreateOrConnectWithoutPatientInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutPatientInput | RendezVousUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: RendezVousCreateManyPatientInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutPatientInput | RendezVousUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutPatientInput | RendezVousUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<NotificationCreateWithoutPatientInput, NotificationUncheckedCreateWithoutPatientInput> | NotificationCreateWithoutPatientInput[] | NotificationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPatientInput | NotificationCreateOrConnectWithoutPatientInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPatientInput | NotificationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: NotificationCreateManyPatientInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPatientInput | NotificationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPatientInput | NotificationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type FileAttenteUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<FileAttenteCreateWithoutPatientInput, FileAttenteUncheckedCreateWithoutPatientInput>
    connectOrCreate?: FileAttenteCreateOrConnectWithoutPatientInput
    upsert?: FileAttenteUpsertWithoutPatientInput
    disconnect?: FileAttenteWhereInput | boolean
    delete?: FileAttenteWhereInput | boolean
    connect?: FileAttenteWhereUniqueInput
    update?: XOR<XOR<FileAttenteUpdateToOneWithWhereWithoutPatientInput, FileAttenteUpdateWithoutPatientInput>, FileAttenteUncheckedUpdateWithoutPatientInput>
  }

  export type TicketUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TicketCreateWithoutPatientInput, TicketUncheckedCreateWithoutPatientInput> | TicketCreateWithoutPatientInput[] | TicketUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPatientInput | TicketCreateOrConnectWithoutPatientInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPatientInput | TicketUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TicketCreateManyPatientInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPatientInput | TicketUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPatientInput | TicketUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RendezVousUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<RendezVousCreateWithoutPatientInput, RendezVousUncheckedCreateWithoutPatientInput> | RendezVousCreateWithoutPatientInput[] | RendezVousUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientInput | RendezVousCreateOrConnectWithoutPatientInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutPatientInput | RendezVousUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: RendezVousCreateManyPatientInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutPatientInput | RendezVousUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutPatientInput | RendezVousUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<NotificationCreateWithoutPatientInput, NotificationUncheckedCreateWithoutPatientInput> | NotificationCreateWithoutPatientInput[] | NotificationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPatientInput | NotificationCreateOrConnectWithoutPatientInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPatientInput | NotificationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: NotificationCreateManyPatientInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPatientInput | NotificationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPatientInput | NotificationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MedecinCreateNestedManyWithoutServiceInput = {
    create?: XOR<MedecinCreateWithoutServiceInput, MedecinUncheckedCreateWithoutServiceInput> | MedecinCreateWithoutServiceInput[] | MedecinUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MedecinCreateOrConnectWithoutServiceInput | MedecinCreateOrConnectWithoutServiceInput[]
    createMany?: MedecinCreateManyServiceInputEnvelope
    connect?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
  }

  export type AccueilCreateNestedManyWithoutServiceInput = {
    create?: XOR<AccueilCreateWithoutServiceInput, AccueilUncheckedCreateWithoutServiceInput> | AccueilCreateWithoutServiceInput[] | AccueilUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AccueilCreateOrConnectWithoutServiceInput | AccueilCreateOrConnectWithoutServiceInput[]
    createMany?: AccueilCreateManyServiceInputEnvelope
    connect?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
  }

  export type FileAttenteCreateNestedManyWithoutServiceInput = {
    create?: XOR<FileAttenteCreateWithoutServiceInput, FileAttenteUncheckedCreateWithoutServiceInput> | FileAttenteCreateWithoutServiceInput[] | FileAttenteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FileAttenteCreateOrConnectWithoutServiceInput | FileAttenteCreateOrConnectWithoutServiceInput[]
    createMany?: FileAttenteCreateManyServiceInputEnvelope
    connect?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutServiceInput = {
    create?: XOR<TicketCreateWithoutServiceInput, TicketUncheckedCreateWithoutServiceInput> | TicketCreateWithoutServiceInput[] | TicketUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutServiceInput | TicketCreateOrConnectWithoutServiceInput[]
    createMany?: TicketCreateManyServiceInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type RendezVousCreateNestedManyWithoutServiceInput = {
    create?: XOR<RendezVousCreateWithoutServiceInput, RendezVousUncheckedCreateWithoutServiceInput> | RendezVousCreateWithoutServiceInput[] | RendezVousUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutServiceInput | RendezVousCreateOrConnectWithoutServiceInput[]
    createMany?: RendezVousCreateManyServiceInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type MedecinUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<MedecinCreateWithoutServiceInput, MedecinUncheckedCreateWithoutServiceInput> | MedecinCreateWithoutServiceInput[] | MedecinUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MedecinCreateOrConnectWithoutServiceInput | MedecinCreateOrConnectWithoutServiceInput[]
    createMany?: MedecinCreateManyServiceInputEnvelope
    connect?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
  }

  export type AccueilUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AccueilCreateWithoutServiceInput, AccueilUncheckedCreateWithoutServiceInput> | AccueilCreateWithoutServiceInput[] | AccueilUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AccueilCreateOrConnectWithoutServiceInput | AccueilCreateOrConnectWithoutServiceInput[]
    createMany?: AccueilCreateManyServiceInputEnvelope
    connect?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
  }

  export type FileAttenteUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<FileAttenteCreateWithoutServiceInput, FileAttenteUncheckedCreateWithoutServiceInput> | FileAttenteCreateWithoutServiceInput[] | FileAttenteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FileAttenteCreateOrConnectWithoutServiceInput | FileAttenteCreateOrConnectWithoutServiceInput[]
    createMany?: FileAttenteCreateManyServiceInputEnvelope
    connect?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<TicketCreateWithoutServiceInput, TicketUncheckedCreateWithoutServiceInput> | TicketCreateWithoutServiceInput[] | TicketUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutServiceInput | TicketCreateOrConnectWithoutServiceInput[]
    createMany?: TicketCreateManyServiceInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type RendezVousUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<RendezVousCreateWithoutServiceInput, RendezVousUncheckedCreateWithoutServiceInput> | RendezVousCreateWithoutServiceInput[] | RendezVousUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutServiceInput | RendezVousCreateOrConnectWithoutServiceInput[]
    createMany?: RendezVousCreateManyServiceInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedecinUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MedecinCreateWithoutServiceInput, MedecinUncheckedCreateWithoutServiceInput> | MedecinCreateWithoutServiceInput[] | MedecinUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MedecinCreateOrConnectWithoutServiceInput | MedecinCreateOrConnectWithoutServiceInput[]
    upsert?: MedecinUpsertWithWhereUniqueWithoutServiceInput | MedecinUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MedecinCreateManyServiceInputEnvelope
    set?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    disconnect?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    delete?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    connect?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    update?: MedecinUpdateWithWhereUniqueWithoutServiceInput | MedecinUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MedecinUpdateManyWithWhereWithoutServiceInput | MedecinUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MedecinScalarWhereInput | MedecinScalarWhereInput[]
  }

  export type AccueilUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AccueilCreateWithoutServiceInput, AccueilUncheckedCreateWithoutServiceInput> | AccueilCreateWithoutServiceInput[] | AccueilUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AccueilCreateOrConnectWithoutServiceInput | AccueilCreateOrConnectWithoutServiceInput[]
    upsert?: AccueilUpsertWithWhereUniqueWithoutServiceInput | AccueilUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AccueilCreateManyServiceInputEnvelope
    set?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    disconnect?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    delete?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    connect?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    update?: AccueilUpdateWithWhereUniqueWithoutServiceInput | AccueilUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AccueilUpdateManyWithWhereWithoutServiceInput | AccueilUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AccueilScalarWhereInput | AccueilScalarWhereInput[]
  }

  export type FileAttenteUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FileAttenteCreateWithoutServiceInput, FileAttenteUncheckedCreateWithoutServiceInput> | FileAttenteCreateWithoutServiceInput[] | FileAttenteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FileAttenteCreateOrConnectWithoutServiceInput | FileAttenteCreateOrConnectWithoutServiceInput[]
    upsert?: FileAttenteUpsertWithWhereUniqueWithoutServiceInput | FileAttenteUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FileAttenteCreateManyServiceInputEnvelope
    set?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    disconnect?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    delete?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    connect?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    update?: FileAttenteUpdateWithWhereUniqueWithoutServiceInput | FileAttenteUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FileAttenteUpdateManyWithWhereWithoutServiceInput | FileAttenteUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FileAttenteScalarWhereInput | FileAttenteScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutServiceNestedInput = {
    create?: XOR<TicketCreateWithoutServiceInput, TicketUncheckedCreateWithoutServiceInput> | TicketCreateWithoutServiceInput[] | TicketUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutServiceInput | TicketCreateOrConnectWithoutServiceInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutServiceInput | TicketUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: TicketCreateManyServiceInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutServiceInput | TicketUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutServiceInput | TicketUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RendezVousUpdateManyWithoutServiceNestedInput = {
    create?: XOR<RendezVousCreateWithoutServiceInput, RendezVousUncheckedCreateWithoutServiceInput> | RendezVousCreateWithoutServiceInput[] | RendezVousUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutServiceInput | RendezVousCreateOrConnectWithoutServiceInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutServiceInput | RendezVousUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: RendezVousCreateManyServiceInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutServiceInput | RendezVousUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutServiceInput | RendezVousUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type MedecinUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MedecinCreateWithoutServiceInput, MedecinUncheckedCreateWithoutServiceInput> | MedecinCreateWithoutServiceInput[] | MedecinUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MedecinCreateOrConnectWithoutServiceInput | MedecinCreateOrConnectWithoutServiceInput[]
    upsert?: MedecinUpsertWithWhereUniqueWithoutServiceInput | MedecinUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MedecinCreateManyServiceInputEnvelope
    set?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    disconnect?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    delete?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    connect?: MedecinWhereUniqueInput | MedecinWhereUniqueInput[]
    update?: MedecinUpdateWithWhereUniqueWithoutServiceInput | MedecinUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MedecinUpdateManyWithWhereWithoutServiceInput | MedecinUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MedecinScalarWhereInput | MedecinScalarWhereInput[]
  }

  export type AccueilUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AccueilCreateWithoutServiceInput, AccueilUncheckedCreateWithoutServiceInput> | AccueilCreateWithoutServiceInput[] | AccueilUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AccueilCreateOrConnectWithoutServiceInput | AccueilCreateOrConnectWithoutServiceInput[]
    upsert?: AccueilUpsertWithWhereUniqueWithoutServiceInput | AccueilUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AccueilCreateManyServiceInputEnvelope
    set?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    disconnect?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    delete?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    connect?: AccueilWhereUniqueInput | AccueilWhereUniqueInput[]
    update?: AccueilUpdateWithWhereUniqueWithoutServiceInput | AccueilUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AccueilUpdateManyWithWhereWithoutServiceInput | AccueilUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AccueilScalarWhereInput | AccueilScalarWhereInput[]
  }

  export type FileAttenteUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FileAttenteCreateWithoutServiceInput, FileAttenteUncheckedCreateWithoutServiceInput> | FileAttenteCreateWithoutServiceInput[] | FileAttenteUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FileAttenteCreateOrConnectWithoutServiceInput | FileAttenteCreateOrConnectWithoutServiceInput[]
    upsert?: FileAttenteUpsertWithWhereUniqueWithoutServiceInput | FileAttenteUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FileAttenteCreateManyServiceInputEnvelope
    set?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    disconnect?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    delete?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    connect?: FileAttenteWhereUniqueInput | FileAttenteWhereUniqueInput[]
    update?: FileAttenteUpdateWithWhereUniqueWithoutServiceInput | FileAttenteUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FileAttenteUpdateManyWithWhereWithoutServiceInput | FileAttenteUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FileAttenteScalarWhereInput | FileAttenteScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<TicketCreateWithoutServiceInput, TicketUncheckedCreateWithoutServiceInput> | TicketCreateWithoutServiceInput[] | TicketUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutServiceInput | TicketCreateOrConnectWithoutServiceInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutServiceInput | TicketUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: TicketCreateManyServiceInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutServiceInput | TicketUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutServiceInput | TicketUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RendezVousUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<RendezVousCreateWithoutServiceInput, RendezVousUncheckedCreateWithoutServiceInput> | RendezVousCreateWithoutServiceInput[] | RendezVousUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutServiceInput | RendezVousCreateOrConnectWithoutServiceInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutServiceInput | RendezVousUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: RendezVousCreateManyServiceInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutServiceInput | RendezVousUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutServiceInput | RendezVousUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutFileAttenteInput = {
    create?: XOR<PatientCreateWithoutFileAttenteInput, PatientUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: PatientCreateOrConnectWithoutFileAttenteInput
    connect?: PatientWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutFileAttenteInput = {
    create?: XOR<ServiceCreateWithoutFileAttenteInput, ServiceUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFileAttenteInput
    connect?: ServiceWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutFileAttenteInput = {
    create?: XOR<TicketCreateWithoutFileAttenteInput, TicketUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFileAttenteInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedOneWithoutFileAttenteInput = {
    create?: XOR<TicketCreateWithoutFileAttenteInput, TicketUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFileAttenteInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumStatutFileFieldUpdateOperationsInput = {
    set?: $Enums.StatutFile
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateOneRequiredWithoutFileAttenteNestedInput = {
    create?: XOR<PatientCreateWithoutFileAttenteInput, PatientUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: PatientCreateOrConnectWithoutFileAttenteInput
    upsert?: PatientUpsertWithoutFileAttenteInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutFileAttenteInput, PatientUpdateWithoutFileAttenteInput>, PatientUncheckedUpdateWithoutFileAttenteInput>
  }

  export type ServiceUpdateOneRequiredWithoutFileAttenteNestedInput = {
    create?: XOR<ServiceCreateWithoutFileAttenteInput, ServiceUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFileAttenteInput
    upsert?: ServiceUpsertWithoutFileAttenteInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutFileAttenteInput, ServiceUpdateWithoutFileAttenteInput>, ServiceUncheckedUpdateWithoutFileAttenteInput>
  }

  export type TicketUpdateOneWithoutFileAttenteNestedInput = {
    create?: XOR<TicketCreateWithoutFileAttenteInput, TicketUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFileAttenteInput
    upsert?: TicketUpsertWithoutFileAttenteInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutFileAttenteInput, TicketUpdateWithoutFileAttenteInput>, TicketUncheckedUpdateWithoutFileAttenteInput>
  }

  export type TicketUncheckedUpdateOneWithoutFileAttenteNestedInput = {
    create?: XOR<TicketCreateWithoutFileAttenteInput, TicketUncheckedCreateWithoutFileAttenteInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFileAttenteInput
    upsert?: TicketUpsertWithoutFileAttenteInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutFileAttenteInput, TicketUpdateWithoutFileAttenteInput>, TicketUncheckedUpdateWithoutFileAttenteInput>
  }

  export type PatientCreateNestedOneWithoutTicketsInput = {
    create?: XOR<PatientCreateWithoutTicketsInput, PatientUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTicketsInput
    connect?: PatientWhereUniqueInput
  }

  export type MedecinCreateNestedOneWithoutTicketsInput = {
    create?: XOR<MedecinCreateWithoutTicketsInput, MedecinUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutTicketsInput
    connect?: MedecinWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ServiceCreateWithoutTicketsInput, ServiceUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutTicketsInput
    connect?: ServiceWhereUniqueInput
  }

  export type FileAttenteCreateNestedOneWithoutTicketInput = {
    create?: XOR<FileAttenteCreateWithoutTicketInput, FileAttenteUncheckedCreateWithoutTicketInput>
    connectOrCreate?: FileAttenteCreateOrConnectWithoutTicketInput
    connect?: FileAttenteWhereUniqueInput
  }

  export type EnumStatutTicketFieldUpdateOperationsInput = {
    set?: $Enums.StatutTicket
  }

  export type PatientUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<PatientCreateWithoutTicketsInput, PatientUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTicketsInput
    upsert?: PatientUpsertWithoutTicketsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutTicketsInput, PatientUpdateWithoutTicketsInput>, PatientUncheckedUpdateWithoutTicketsInput>
  }

  export type MedecinUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<MedecinCreateWithoutTicketsInput, MedecinUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutTicketsInput
    upsert?: MedecinUpsertWithoutTicketsInput
    disconnect?: MedecinWhereInput | boolean
    delete?: MedecinWhereInput | boolean
    connect?: MedecinWhereUniqueInput
    update?: XOR<XOR<MedecinUpdateToOneWithWhereWithoutTicketsInput, MedecinUpdateWithoutTicketsInput>, MedecinUncheckedUpdateWithoutTicketsInput>
  }

  export type ServiceUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ServiceCreateWithoutTicketsInput, ServiceUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutTicketsInput
    upsert?: ServiceUpsertWithoutTicketsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutTicketsInput, ServiceUpdateWithoutTicketsInput>, ServiceUncheckedUpdateWithoutTicketsInput>
  }

  export type FileAttenteUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<FileAttenteCreateWithoutTicketInput, FileAttenteUncheckedCreateWithoutTicketInput>
    connectOrCreate?: FileAttenteCreateOrConnectWithoutTicketInput
    upsert?: FileAttenteUpsertWithoutTicketInput
    connect?: FileAttenteWhereUniqueInput
    update?: XOR<XOR<FileAttenteUpdateToOneWithWhereWithoutTicketInput, FileAttenteUpdateWithoutTicketInput>, FileAttenteUncheckedUpdateWithoutTicketInput>
  }

  export type PatientCreateNestedOneWithoutRendezVousInput = {
    create?: XOR<PatientCreateWithoutRendezVousInput, PatientUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRendezVousInput
    connect?: PatientWhereUniqueInput
  }

  export type MedecinCreateNestedOneWithoutRendezVousInput = {
    create?: XOR<MedecinCreateWithoutRendezVousInput, MedecinUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutRendezVousInput
    connect?: MedecinWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutRendezVousInput = {
    create?: XOR<ServiceCreateWithoutRendezVousInput, ServiceUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutRendezVousInput
    connect?: ServiceWhereUniqueInput
  }

  export type EnumCreerParFieldUpdateOperationsInput = {
    set?: $Enums.CreerPar
  }

  export type EnumStatutRendezVousFieldUpdateOperationsInput = {
    set?: $Enums.StatutRendezVous
  }

  export type PatientUpdateOneRequiredWithoutRendezVousNestedInput = {
    create?: XOR<PatientCreateWithoutRendezVousInput, PatientUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRendezVousInput
    upsert?: PatientUpsertWithoutRendezVousInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutRendezVousInput, PatientUpdateWithoutRendezVousInput>, PatientUncheckedUpdateWithoutRendezVousInput>
  }

  export type MedecinUpdateOneRequiredWithoutRendezVousNestedInput = {
    create?: XOR<MedecinCreateWithoutRendezVousInput, MedecinUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: MedecinCreateOrConnectWithoutRendezVousInput
    upsert?: MedecinUpsertWithoutRendezVousInput
    connect?: MedecinWhereUniqueInput
    update?: XOR<XOR<MedecinUpdateToOneWithWhereWithoutRendezVousInput, MedecinUpdateWithoutRendezVousInput>, MedecinUncheckedUpdateWithoutRendezVousInput>
  }

  export type ServiceUpdateOneRequiredWithoutRendezVousNestedInput = {
    create?: XOR<ServiceCreateWithoutRendezVousInput, ServiceUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutRendezVousInput
    upsert?: ServiceUpsertWithoutRendezVousInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutRendezVousInput, ServiceUpdateWithoutRendezVousInput>, ServiceUncheckedUpdateWithoutRendezVousInput>
  }

  export type PatientCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PatientCreateWithoutNotificationsInput, PatientUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutNotificationsInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumTypeNotificationFieldUpdateOperationsInput = {
    set?: $Enums.TypeNotification
  }

  export type EnumCanalNotificationFieldUpdateOperationsInput = {
    set?: $Enums.CanalNotification
  }

  export type PatientUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<PatientCreateWithoutNotificationsInput, PatientUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutNotificationsInput
    upsert?: PatientUpsertWithoutNotificationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutNotificationsInput, PatientUpdateWithoutNotificationsInput>, PatientUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatutFileFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutFile | EnumStatutFileFieldRefInput<$PrismaModel>
    in?: $Enums.StatutFile[]
    notIn?: $Enums.StatutFile[]
    not?: NestedEnumStatutFileFilter<$PrismaModel> | $Enums.StatutFile
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatutFileWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutFile | EnumStatutFileFieldRefInput<$PrismaModel>
    in?: $Enums.StatutFile[]
    notIn?: $Enums.StatutFile[]
    not?: NestedEnumStatutFileWithAggregatesFilter<$PrismaModel> | $Enums.StatutFile
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFileFilter<$PrismaModel>
    _max?: NestedEnumStatutFileFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[]
    notIn?: $Enums.StatutTicket[]
    not?: NestedEnumStatutTicketFilter<$PrismaModel> | $Enums.StatutTicket
  }

  export type NestedEnumStatutTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[]
    notIn?: $Enums.StatutTicket[]
    not?: NestedEnumStatutTicketWithAggregatesFilter<$PrismaModel> | $Enums.StatutTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutTicketFilter<$PrismaModel>
    _max?: NestedEnumStatutTicketFilter<$PrismaModel>
  }

  export type NestedEnumCreerParFilter<$PrismaModel = never> = {
    equals?: $Enums.CreerPar | EnumCreerParFieldRefInput<$PrismaModel>
    in?: $Enums.CreerPar[]
    notIn?: $Enums.CreerPar[]
    not?: NestedEnumCreerParFilter<$PrismaModel> | $Enums.CreerPar
  }

  export type NestedEnumStatutRendezVousFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRendezVous | EnumStatutRendezVousFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRendezVous[]
    notIn?: $Enums.StatutRendezVous[]
    not?: NestedEnumStatutRendezVousFilter<$PrismaModel> | $Enums.StatutRendezVous
  }

  export type NestedEnumCreerParWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreerPar | EnumCreerParFieldRefInput<$PrismaModel>
    in?: $Enums.CreerPar[]
    notIn?: $Enums.CreerPar[]
    not?: NestedEnumCreerParWithAggregatesFilter<$PrismaModel> | $Enums.CreerPar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreerParFilter<$PrismaModel>
    _max?: NestedEnumCreerParFilter<$PrismaModel>
  }

  export type NestedEnumStatutRendezVousWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRendezVous | EnumStatutRendezVousFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRendezVous[]
    notIn?: $Enums.StatutRendezVous[]
    not?: NestedEnumStatutRendezVousWithAggregatesFilter<$PrismaModel> | $Enums.StatutRendezVous
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutRendezVousFilter<$PrismaModel>
    _max?: NestedEnumStatutRendezVousFilter<$PrismaModel>
  }

  export type NestedEnumTypeNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[]
    notIn?: $Enums.TypeNotification[]
    not?: NestedEnumTypeNotificationFilter<$PrismaModel> | $Enums.TypeNotification
  }

  export type NestedEnumCanalNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalNotification | EnumCanalNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.CanalNotification[]
    notIn?: $Enums.CanalNotification[]
    not?: NestedEnumCanalNotificationFilter<$PrismaModel> | $Enums.CanalNotification
  }

  export type NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[]
    notIn?: $Enums.TypeNotification[]
    not?: NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel> | $Enums.TypeNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeNotificationFilter<$PrismaModel>
    _max?: NestedEnumTypeNotificationFilter<$PrismaModel>
  }

  export type NestedEnumCanalNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalNotification | EnumCanalNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.CanalNotification[]
    notIn?: $Enums.CanalNotification[]
    not?: NestedEnumCanalNotificationWithAggregatesFilter<$PrismaModel> | $Enums.CanalNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalNotificationFilter<$PrismaModel>
    _max?: NestedEnumCanalNotificationFilter<$PrismaModel>
  }

  export type AdminCreateWithoutUserInput = {

  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: number
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AccueilCreateWithoutUserInput = {
    service?: ServiceCreateNestedOneWithoutAccueilsInput
  }

  export type AccueilUncheckedCreateWithoutUserInput = {
    id?: number
    serviceId?: number | null
  }

  export type AccueilCreateOrConnectWithoutUserInput = {
    where: AccueilWhereUniqueInput
    create: XOR<AccueilCreateWithoutUserInput, AccueilUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    fileAttente?: FileAttenteCreateNestedOneWithoutPatientInput
    tickets?: TicketCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousCreateNestedManyWithoutPatientInput
    notifications?: NotificationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: number
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    fileAttente?: FileAttenteUncheckedCreateNestedOneWithoutPatientInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type MedecinCreateWithoutUserInput = {
    specialite: string
    service: ServiceCreateNestedOneWithoutMedecinsInput
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinInput
    tickets?: TicketCreateNestedManyWithoutMedecinInput
  }

  export type MedecinUncheckedCreateWithoutUserInput = {
    id?: number
    specialite: string
    serviceId: number
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinInput
    tickets?: TicketUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinCreateOrConnectWithoutUserInput = {
    where: MedecinWhereUniqueInput
    create: XOR<MedecinCreateWithoutUserInput, MedecinUncheckedCreateWithoutUserInput>
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {

  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type AccueilUpsertWithoutUserInput = {
    update: XOR<AccueilUpdateWithoutUserInput, AccueilUncheckedUpdateWithoutUserInput>
    create: XOR<AccueilCreateWithoutUserInput, AccueilUncheckedCreateWithoutUserInput>
    where?: AccueilWhereInput
  }

  export type AccueilUpdateToOneWithWhereWithoutUserInput = {
    where?: AccueilWhereInput
    data: XOR<AccueilUpdateWithoutUserInput, AccueilUncheckedUpdateWithoutUserInput>
  }

  export type AccueilUpdateWithoutUserInput = {
    service?: ServiceUpdateOneWithoutAccueilsNestedInput
  }

  export type AccueilUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileAttente?: FileAttenteUpdateOneWithoutPatientNestedInput
    tickets?: TicketUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileAttente?: FileAttenteUncheckedUpdateOneWithoutPatientNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedecinUpsertWithoutUserInput = {
    update: XOR<MedecinUpdateWithoutUserInput, MedecinUncheckedUpdateWithoutUserInput>
    create: XOR<MedecinCreateWithoutUserInput, MedecinUncheckedCreateWithoutUserInput>
    where?: MedecinWhereInput
  }

  export type MedecinUpdateToOneWithWhereWithoutUserInput = {
    where?: MedecinWhereInput
    data: XOR<MedecinUpdateWithoutUserInput, MedecinUncheckedUpdateWithoutUserInput>
  }

  export type MedecinUpdateWithoutUserInput = {
    specialite?: StringFieldUpdateOperationsInput | string
    service?: ServiceUpdateOneRequiredWithoutMedecinsNestedInput
    rendezVous?: RendezVousUpdateManyWithoutMedecinNestedInput
    tickets?: TicketUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialite?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accueil?: AccueilCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    medecin?: MedecinCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accueil?: AccueilUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    medecin?: MedecinUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accueil?: AccueilUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    medecin?: MedecinUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accueil?: AccueilUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    medecin?: MedecinUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAccueilInput = {
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    medecin?: MedecinCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccueilInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    medecin?: MedecinUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccueilInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccueilInput, UserUncheckedCreateWithoutAccueilInput>
  }

  export type ServiceCreateWithoutAccueilsInput = {
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteCreateNestedManyWithoutServiceInput
    tickets?: TicketCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAccueilsInput = {
    id?: number
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinUncheckedCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteUncheckedCreateNestedManyWithoutServiceInput
    tickets?: TicketUncheckedCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutAccueilsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAccueilsInput, ServiceUncheckedCreateWithoutAccueilsInput>
  }

  export type UserUpsertWithoutAccueilInput = {
    update: XOR<UserUpdateWithoutAccueilInput, UserUncheckedUpdateWithoutAccueilInput>
    create: XOR<UserCreateWithoutAccueilInput, UserUncheckedCreateWithoutAccueilInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccueilInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccueilInput, UserUncheckedUpdateWithoutAccueilInput>
  }

  export type UserUpdateWithoutAccueilInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    medecin?: MedecinUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccueilInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    medecin?: MedecinUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ServiceUpsertWithoutAccueilsInput = {
    update: XOR<ServiceUpdateWithoutAccueilsInput, ServiceUncheckedUpdateWithoutAccueilsInput>
    create: XOR<ServiceCreateWithoutAccueilsInput, ServiceUncheckedCreateWithoutAccueilsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAccueilsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAccueilsInput, ServiceUncheckedUpdateWithoutAccueilsInput>
  }

  export type ServiceUpdateWithoutAccueilsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUpdateManyWithoutServiceNestedInput
    tickets?: TicketUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAccueilsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUncheckedUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUncheckedUpdateManyWithoutServiceNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserCreateWithoutMedecinInput = {
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    accueil?: AccueilCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedecinInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    accueil?: AccueilUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedecinInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
  }

  export type ServiceCreateWithoutMedecinsInput = {
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    accueils?: AccueilCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteCreateNestedManyWithoutServiceInput
    tickets?: TicketCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutMedecinsInput = {
    id?: number
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    accueils?: AccueilUncheckedCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteUncheckedCreateNestedManyWithoutServiceInput
    tickets?: TicketUncheckedCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutMedecinsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutMedecinsInput, ServiceUncheckedCreateWithoutMedecinsInput>
  }

  export type RendezVousCreateWithoutMedecinInput = {
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutRendezVousInput
    service: ServiceCreateNestedOneWithoutRendezVousInput
  }

  export type RendezVousUncheckedCreateWithoutMedecinInput = {
    id?: number
    patientId: number
    serviceId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousCreateOrConnectWithoutMedecinInput = {
    where: RendezVousWhereUniqueInput
    create: XOR<RendezVousCreateWithoutMedecinInput, RendezVousUncheckedCreateWithoutMedecinInput>
  }

  export type RendezVousCreateManyMedecinInputEnvelope = {
    data: RendezVousCreateManyMedecinInput | RendezVousCreateManyMedecinInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutMedecinInput = {
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTicketsInput
    service: ServiceCreateNestedOneWithoutTicketsInput
    fileAttente: FileAttenteCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutMedecinInput = {
    id?: number
    patientId: number
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutMedecinInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutMedecinInput, TicketUncheckedCreateWithoutMedecinInput>
  }

  export type TicketCreateManyMedecinInputEnvelope = {
    data: TicketCreateManyMedecinInput | TicketCreateManyMedecinInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMedecinInput = {
    update: XOR<UserUpdateWithoutMedecinInput, UserUncheckedUpdateWithoutMedecinInput>
    create: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedecinInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedecinInput, UserUncheckedUpdateWithoutMedecinInput>
  }

  export type UserUpdateWithoutMedecinInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    accueil?: AccueilUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedecinInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    accueil?: AccueilUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ServiceUpsertWithoutMedecinsInput = {
    update: XOR<ServiceUpdateWithoutMedecinsInput, ServiceUncheckedUpdateWithoutMedecinsInput>
    create: XOR<ServiceCreateWithoutMedecinsInput, ServiceUncheckedCreateWithoutMedecinsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutMedecinsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutMedecinsInput, ServiceUncheckedUpdateWithoutMedecinsInput>
  }

  export type ServiceUpdateWithoutMedecinsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accueils?: AccueilUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUpdateManyWithoutServiceNestedInput
    tickets?: TicketUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutMedecinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accueils?: AccueilUncheckedUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUncheckedUpdateManyWithoutServiceNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type RendezVousUpsertWithWhereUniqueWithoutMedecinInput = {
    where: RendezVousWhereUniqueInput
    update: XOR<RendezVousUpdateWithoutMedecinInput, RendezVousUncheckedUpdateWithoutMedecinInput>
    create: XOR<RendezVousCreateWithoutMedecinInput, RendezVousUncheckedCreateWithoutMedecinInput>
  }

  export type RendezVousUpdateWithWhereUniqueWithoutMedecinInput = {
    where: RendezVousWhereUniqueInput
    data: XOR<RendezVousUpdateWithoutMedecinInput, RendezVousUncheckedUpdateWithoutMedecinInput>
  }

  export type RendezVousUpdateManyWithWhereWithoutMedecinInput = {
    where: RendezVousScalarWhereInput
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyWithoutMedecinInput>
  }

  export type RendezVousScalarWhereInput = {
    AND?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
    OR?: RendezVousScalarWhereInput[]
    NOT?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
    id?: IntFilter<"RendezVous"> | number
    patientId?: IntFilter<"RendezVous"> | number
    medecinId?: IntFilter<"RendezVous"> | number
    serviceId?: IntFilter<"RendezVous"> | number
    creerPar?: EnumCreerParFilter<"RendezVous"> | $Enums.CreerPar
    date?: DateTimeFilter<"RendezVous"> | Date | string
    heure?: StringFilter<"RendezVous"> | string
    motif?: StringNullableFilter<"RendezVous"> | string | null
    statut?: EnumStatutRendezVousFilter<"RendezVous"> | $Enums.StatutRendezVous
    createdAt?: DateTimeFilter<"RendezVous"> | Date | string
    updatedAt?: DateTimeFilter<"RendezVous"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutMedecinInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutMedecinInput, TicketUncheckedUpdateWithoutMedecinInput>
    create: XOR<TicketCreateWithoutMedecinInput, TicketUncheckedCreateWithoutMedecinInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutMedecinInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutMedecinInput, TicketUncheckedUpdateWithoutMedecinInput>
  }

  export type TicketUpdateManyWithWhereWithoutMedecinInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutMedecinInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    patientId?: IntFilter<"Ticket"> | number
    medecinId?: IntNullableFilter<"Ticket"> | number | null
    serviceId?: IntFilter<"Ticket"> | number
    fileAttenteId?: IntFilter<"Ticket"> | number
    numero?: StringFilter<"Ticket"> | string
    montantPaye?: FloatFilter<"Ticket"> | number
    montantRestant?: FloatFilter<"Ticket"> | number
    statut?: EnumStatutTicketFilter<"Ticket"> | $Enums.StatutTicket
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type UserCreateWithoutPatientInput = {
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    accueil?: AccueilCreateNestedOneWithoutUserInput
    medecin?: MedecinCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    accueil?: AccueilUncheckedCreateNestedOneWithoutUserInput
    medecin?: MedecinUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type FileAttenteCreateWithoutPatientInput = {
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutFileAttenteInput
    ticket?: TicketCreateNestedOneWithoutFileAttenteInput
  }

  export type FileAttenteUncheckedCreateWithoutPatientInput = {
    id?: number
    serviceId: number
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutFileAttenteInput
  }

  export type FileAttenteCreateOrConnectWithoutPatientInput = {
    where: FileAttenteWhereUniqueInput
    create: XOR<FileAttenteCreateWithoutPatientInput, FileAttenteUncheckedCreateWithoutPatientInput>
  }

  export type TicketCreateWithoutPatientInput = {
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
    medecin?: MedecinCreateNestedOneWithoutTicketsInput
    service: ServiceCreateNestedOneWithoutTicketsInput
    fileAttente: FileAttenteCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutPatientInput = {
    id?: number
    medecinId?: number | null
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutPatientInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPatientInput, TicketUncheckedCreateWithoutPatientInput>
  }

  export type TicketCreateManyPatientInputEnvelope = {
    data: TicketCreateManyPatientInput | TicketCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type RendezVousCreateWithoutPatientInput = {
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
    medecin: MedecinCreateNestedOneWithoutRendezVousInput
    service: ServiceCreateNestedOneWithoutRendezVousInput
  }

  export type RendezVousUncheckedCreateWithoutPatientInput = {
    id?: number
    medecinId: number
    serviceId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousCreateOrConnectWithoutPatientInput = {
    where: RendezVousWhereUniqueInput
    create: XOR<RendezVousCreateWithoutPatientInput, RendezVousUncheckedCreateWithoutPatientInput>
  }

  export type RendezVousCreateManyPatientInputEnvelope = {
    data: RendezVousCreateManyPatientInput | RendezVousCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutPatientInput = {
    type: $Enums.TypeNotification
    canal?: $Enums.CanalNotification
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutPatientInput = {
    id?: number
    type: $Enums.TypeNotification
    canal?: $Enums.CanalNotification
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutPatientInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPatientInput, NotificationUncheckedCreateWithoutPatientInput>
  }

  export type NotificationCreateManyPatientInputEnvelope = {
    data: NotificationCreateManyPatientInput | NotificationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    accueil?: AccueilUpdateOneWithoutUserNestedInput
    medecin?: MedecinUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    accueil?: AccueilUncheckedUpdateOneWithoutUserNestedInput
    medecin?: MedecinUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FileAttenteUpsertWithoutPatientInput = {
    update: XOR<FileAttenteUpdateWithoutPatientInput, FileAttenteUncheckedUpdateWithoutPatientInput>
    create: XOR<FileAttenteCreateWithoutPatientInput, FileAttenteUncheckedCreateWithoutPatientInput>
    where?: FileAttenteWhereInput
  }

  export type FileAttenteUpdateToOneWithWhereWithoutPatientInput = {
    where?: FileAttenteWhereInput
    data: XOR<FileAttenteUpdateWithoutPatientInput, FileAttenteUncheckedUpdateWithoutPatientInput>
  }

  export type FileAttenteUpdateWithoutPatientInput = {
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutFileAttenteNestedInput
    ticket?: TicketUpdateOneWithoutFileAttenteNestedInput
  }

  export type FileAttenteUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutFileAttenteNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutPatientInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutPatientInput, TicketUncheckedUpdateWithoutPatientInput>
    create: XOR<TicketCreateWithoutPatientInput, TicketUncheckedCreateWithoutPatientInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutPatientInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutPatientInput, TicketUncheckedUpdateWithoutPatientInput>
  }

  export type TicketUpdateManyWithWhereWithoutPatientInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutPatientInput>
  }

  export type RendezVousUpsertWithWhereUniqueWithoutPatientInput = {
    where: RendezVousWhereUniqueInput
    update: XOR<RendezVousUpdateWithoutPatientInput, RendezVousUncheckedUpdateWithoutPatientInput>
    create: XOR<RendezVousCreateWithoutPatientInput, RendezVousUncheckedCreateWithoutPatientInput>
  }

  export type RendezVousUpdateWithWhereUniqueWithoutPatientInput = {
    where: RendezVousWhereUniqueInput
    data: XOR<RendezVousUpdateWithoutPatientInput, RendezVousUncheckedUpdateWithoutPatientInput>
  }

  export type RendezVousUpdateManyWithWhereWithoutPatientInput = {
    where: RendezVousScalarWhereInput
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyWithoutPatientInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutPatientInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPatientInput, NotificationUncheckedUpdateWithoutPatientInput>
    create: XOR<NotificationCreateWithoutPatientInput, NotificationUncheckedCreateWithoutPatientInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPatientInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPatientInput, NotificationUncheckedUpdateWithoutPatientInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPatientInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPatientInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    patientId?: IntFilter<"Notification"> | number
    type?: EnumTypeNotificationFilter<"Notification"> | $Enums.TypeNotification
    canal?: EnumCanalNotificationFilter<"Notification"> | $Enums.CanalNotification
    message?: StringFilter<"Notification"> | string
    lu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type MedecinCreateWithoutServiceInput = {
    specialite: string
    user: UserCreateNestedOneWithoutMedecinInput
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinInput
    tickets?: TicketCreateNestedManyWithoutMedecinInput
  }

  export type MedecinUncheckedCreateWithoutServiceInput = {
    id?: number
    userId: number
    specialite: string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinInput
    tickets?: TicketUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinCreateOrConnectWithoutServiceInput = {
    where: MedecinWhereUniqueInput
    create: XOR<MedecinCreateWithoutServiceInput, MedecinUncheckedCreateWithoutServiceInput>
  }

  export type MedecinCreateManyServiceInputEnvelope = {
    data: MedecinCreateManyServiceInput | MedecinCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AccueilCreateWithoutServiceInput = {
    user: UserCreateNestedOneWithoutAccueilInput
  }

  export type AccueilUncheckedCreateWithoutServiceInput = {
    id?: number
    userId: number
  }

  export type AccueilCreateOrConnectWithoutServiceInput = {
    where: AccueilWhereUniqueInput
    create: XOR<AccueilCreateWithoutServiceInput, AccueilUncheckedCreateWithoutServiceInput>
  }

  export type AccueilCreateManyServiceInputEnvelope = {
    data: AccueilCreateManyServiceInput | AccueilCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type FileAttenteCreateWithoutServiceInput = {
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutFileAttenteInput
    ticket?: TicketCreateNestedOneWithoutFileAttenteInput
  }

  export type FileAttenteUncheckedCreateWithoutServiceInput = {
    id?: number
    patientId: number
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutFileAttenteInput
  }

  export type FileAttenteCreateOrConnectWithoutServiceInput = {
    where: FileAttenteWhereUniqueInput
    create: XOR<FileAttenteCreateWithoutServiceInput, FileAttenteUncheckedCreateWithoutServiceInput>
  }

  export type FileAttenteCreateManyServiceInputEnvelope = {
    data: FileAttenteCreateManyServiceInput | FileAttenteCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutServiceInput = {
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTicketsInput
    medecin?: MedecinCreateNestedOneWithoutTicketsInput
    fileAttente: FileAttenteCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutServiceInput = {
    id?: number
    patientId: number
    medecinId?: number | null
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutServiceInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutServiceInput, TicketUncheckedCreateWithoutServiceInput>
  }

  export type TicketCreateManyServiceInputEnvelope = {
    data: TicketCreateManyServiceInput | TicketCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type RendezVousCreateWithoutServiceInput = {
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutRendezVousInput
    medecin: MedecinCreateNestedOneWithoutRendezVousInput
  }

  export type RendezVousUncheckedCreateWithoutServiceInput = {
    id?: number
    patientId: number
    medecinId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousCreateOrConnectWithoutServiceInput = {
    where: RendezVousWhereUniqueInput
    create: XOR<RendezVousCreateWithoutServiceInput, RendezVousUncheckedCreateWithoutServiceInput>
  }

  export type RendezVousCreateManyServiceInputEnvelope = {
    data: RendezVousCreateManyServiceInput | RendezVousCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type MedecinUpsertWithWhereUniqueWithoutServiceInput = {
    where: MedecinWhereUniqueInput
    update: XOR<MedecinUpdateWithoutServiceInput, MedecinUncheckedUpdateWithoutServiceInput>
    create: XOR<MedecinCreateWithoutServiceInput, MedecinUncheckedCreateWithoutServiceInput>
  }

  export type MedecinUpdateWithWhereUniqueWithoutServiceInput = {
    where: MedecinWhereUniqueInput
    data: XOR<MedecinUpdateWithoutServiceInput, MedecinUncheckedUpdateWithoutServiceInput>
  }

  export type MedecinUpdateManyWithWhereWithoutServiceInput = {
    where: MedecinScalarWhereInput
    data: XOR<MedecinUpdateManyMutationInput, MedecinUncheckedUpdateManyWithoutServiceInput>
  }

  export type MedecinScalarWhereInput = {
    AND?: MedecinScalarWhereInput | MedecinScalarWhereInput[]
    OR?: MedecinScalarWhereInput[]
    NOT?: MedecinScalarWhereInput | MedecinScalarWhereInput[]
    id?: IntFilter<"Medecin"> | number
    userId?: IntFilter<"Medecin"> | number
    specialite?: StringFilter<"Medecin"> | string
    serviceId?: IntFilter<"Medecin"> | number
  }

  export type AccueilUpsertWithWhereUniqueWithoutServiceInput = {
    where: AccueilWhereUniqueInput
    update: XOR<AccueilUpdateWithoutServiceInput, AccueilUncheckedUpdateWithoutServiceInput>
    create: XOR<AccueilCreateWithoutServiceInput, AccueilUncheckedCreateWithoutServiceInput>
  }

  export type AccueilUpdateWithWhereUniqueWithoutServiceInput = {
    where: AccueilWhereUniqueInput
    data: XOR<AccueilUpdateWithoutServiceInput, AccueilUncheckedUpdateWithoutServiceInput>
  }

  export type AccueilUpdateManyWithWhereWithoutServiceInput = {
    where: AccueilScalarWhereInput
    data: XOR<AccueilUpdateManyMutationInput, AccueilUncheckedUpdateManyWithoutServiceInput>
  }

  export type AccueilScalarWhereInput = {
    AND?: AccueilScalarWhereInput | AccueilScalarWhereInput[]
    OR?: AccueilScalarWhereInput[]
    NOT?: AccueilScalarWhereInput | AccueilScalarWhereInput[]
    id?: IntFilter<"Accueil"> | number
    userId?: IntFilter<"Accueil"> | number
    serviceId?: IntNullableFilter<"Accueil"> | number | null
  }

  export type FileAttenteUpsertWithWhereUniqueWithoutServiceInput = {
    where: FileAttenteWhereUniqueInput
    update: XOR<FileAttenteUpdateWithoutServiceInput, FileAttenteUncheckedUpdateWithoutServiceInput>
    create: XOR<FileAttenteCreateWithoutServiceInput, FileAttenteUncheckedCreateWithoutServiceInput>
  }

  export type FileAttenteUpdateWithWhereUniqueWithoutServiceInput = {
    where: FileAttenteWhereUniqueInput
    data: XOR<FileAttenteUpdateWithoutServiceInput, FileAttenteUncheckedUpdateWithoutServiceInput>
  }

  export type FileAttenteUpdateManyWithWhereWithoutServiceInput = {
    where: FileAttenteScalarWhereInput
    data: XOR<FileAttenteUpdateManyMutationInput, FileAttenteUncheckedUpdateManyWithoutServiceInput>
  }

  export type FileAttenteScalarWhereInput = {
    AND?: FileAttenteScalarWhereInput | FileAttenteScalarWhereInput[]
    OR?: FileAttenteScalarWhereInput[]
    NOT?: FileAttenteScalarWhereInput | FileAttenteScalarWhereInput[]
    id?: IntFilter<"FileAttente"> | number
    patientId?: IntFilter<"FileAttente"> | number
    serviceId?: IntFilter<"FileAttente"> | number
    numero?: IntFilter<"FileAttente"> | number
    estPrioritaire?: BoolFilter<"FileAttente"> | boolean
    statut?: EnumStatutFileFilter<"FileAttente"> | $Enums.StatutFile
    heurePrise?: DateTimeFilter<"FileAttente"> | Date | string
    heureValidation?: DateTimeNullableFilter<"FileAttente"> | Date | string | null
    heureExpiration?: DateTimeNullableFilter<"FileAttente"> | Date | string | null
    createdAt?: DateTimeFilter<"FileAttente"> | Date | string
    updatedAt?: DateTimeFilter<"FileAttente"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutServiceInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutServiceInput, TicketUncheckedUpdateWithoutServiceInput>
    create: XOR<TicketCreateWithoutServiceInput, TicketUncheckedCreateWithoutServiceInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutServiceInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutServiceInput, TicketUncheckedUpdateWithoutServiceInput>
  }

  export type TicketUpdateManyWithWhereWithoutServiceInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutServiceInput>
  }

  export type RendezVousUpsertWithWhereUniqueWithoutServiceInput = {
    where: RendezVousWhereUniqueInput
    update: XOR<RendezVousUpdateWithoutServiceInput, RendezVousUncheckedUpdateWithoutServiceInput>
    create: XOR<RendezVousCreateWithoutServiceInput, RendezVousUncheckedCreateWithoutServiceInput>
  }

  export type RendezVousUpdateWithWhereUniqueWithoutServiceInput = {
    where: RendezVousWhereUniqueInput
    data: XOR<RendezVousUpdateWithoutServiceInput, RendezVousUncheckedUpdateWithoutServiceInput>
  }

  export type RendezVousUpdateManyWithWhereWithoutServiceInput = {
    where: RendezVousScalarWhereInput
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyWithoutServiceInput>
  }

  export type PatientCreateWithoutFileAttenteInput = {
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    tickets?: TicketCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousCreateNestedManyWithoutPatientInput
    notifications?: NotificationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutFileAttenteInput = {
    id?: number
    userId: number
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutFileAttenteInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutFileAttenteInput, PatientUncheckedCreateWithoutFileAttenteInput>
  }

  export type ServiceCreateWithoutFileAttenteInput = {
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinCreateNestedManyWithoutServiceInput
    accueils?: AccueilCreateNestedManyWithoutServiceInput
    tickets?: TicketCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutFileAttenteInput = {
    id?: number
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinUncheckedCreateNestedManyWithoutServiceInput
    accueils?: AccueilUncheckedCreateNestedManyWithoutServiceInput
    tickets?: TicketUncheckedCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFileAttenteInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFileAttenteInput, ServiceUncheckedCreateWithoutFileAttenteInput>
  }

  export type TicketCreateWithoutFileAttenteInput = {
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTicketsInput
    medecin?: MedecinCreateNestedOneWithoutTicketsInput
    service: ServiceCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutFileAttenteInput = {
    id?: number
    patientId: number
    medecinId?: number | null
    serviceId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutFileAttenteInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutFileAttenteInput, TicketUncheckedCreateWithoutFileAttenteInput>
  }

  export type PatientUpsertWithoutFileAttenteInput = {
    update: XOR<PatientUpdateWithoutFileAttenteInput, PatientUncheckedUpdateWithoutFileAttenteInput>
    create: XOR<PatientCreateWithoutFileAttenteInput, PatientUncheckedCreateWithoutFileAttenteInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutFileAttenteInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutFileAttenteInput, PatientUncheckedUpdateWithoutFileAttenteInput>
  }

  export type PatientUpdateWithoutFileAttenteInput = {
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    tickets?: TicketUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutFileAttenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ServiceUpsertWithoutFileAttenteInput = {
    update: XOR<ServiceUpdateWithoutFileAttenteInput, ServiceUncheckedUpdateWithoutFileAttenteInput>
    create: XOR<ServiceCreateWithoutFileAttenteInput, ServiceUncheckedCreateWithoutFileAttenteInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutFileAttenteInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutFileAttenteInput, ServiceUncheckedUpdateWithoutFileAttenteInput>
  }

  export type ServiceUpdateWithoutFileAttenteInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUpdateManyWithoutServiceNestedInput
    tickets?: TicketUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFileAttenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUncheckedUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUncheckedUpdateManyWithoutServiceNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type TicketUpsertWithoutFileAttenteInput = {
    update: XOR<TicketUpdateWithoutFileAttenteInput, TicketUncheckedUpdateWithoutFileAttenteInput>
    create: XOR<TicketCreateWithoutFileAttenteInput, TicketUncheckedCreateWithoutFileAttenteInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutFileAttenteInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutFileAttenteInput, TicketUncheckedUpdateWithoutFileAttenteInput>
  }

  export type TicketUpdateWithoutFileAttenteInput = {
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTicketsNestedInput
    medecin?: MedecinUpdateOneWithoutTicketsNestedInput
    service?: ServiceUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutFileAttenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateWithoutTicketsInput = {
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    fileAttente?: FileAttenteCreateNestedOneWithoutPatientInput
    rendezVous?: RendezVousCreateNestedManyWithoutPatientInput
    notifications?: NotificationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutTicketsInput = {
    id?: number
    userId: number
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    fileAttente?: FileAttenteUncheckedCreateNestedOneWithoutPatientInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutTicketsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutTicketsInput, PatientUncheckedCreateWithoutTicketsInput>
  }

  export type MedecinCreateWithoutTicketsInput = {
    specialite: string
    user: UserCreateNestedOneWithoutMedecinInput
    service: ServiceCreateNestedOneWithoutMedecinsInput
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinInput
  }

  export type MedecinUncheckedCreateWithoutTicketsInput = {
    id?: number
    userId: number
    specialite: string
    serviceId: number
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinCreateOrConnectWithoutTicketsInput = {
    where: MedecinWhereUniqueInput
    create: XOR<MedecinCreateWithoutTicketsInput, MedecinUncheckedCreateWithoutTicketsInput>
  }

  export type ServiceCreateWithoutTicketsInput = {
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinCreateNestedManyWithoutServiceInput
    accueils?: AccueilCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutTicketsInput = {
    id?: number
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinUncheckedCreateNestedManyWithoutServiceInput
    accueils?: AccueilUncheckedCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteUncheckedCreateNestedManyWithoutServiceInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutTicketsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutTicketsInput, ServiceUncheckedCreateWithoutTicketsInput>
  }

  export type FileAttenteCreateWithoutTicketInput = {
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutFileAttenteInput
    service: ServiceCreateNestedOneWithoutFileAttenteInput
  }

  export type FileAttenteUncheckedCreateWithoutTicketInput = {
    id?: number
    patientId: number
    serviceId: number
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileAttenteCreateOrConnectWithoutTicketInput = {
    where: FileAttenteWhereUniqueInput
    create: XOR<FileAttenteCreateWithoutTicketInput, FileAttenteUncheckedCreateWithoutTicketInput>
  }

  export type PatientUpsertWithoutTicketsInput = {
    update: XOR<PatientUpdateWithoutTicketsInput, PatientUncheckedUpdateWithoutTicketsInput>
    create: XOR<PatientCreateWithoutTicketsInput, PatientUncheckedCreateWithoutTicketsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutTicketsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutTicketsInput, PatientUncheckedUpdateWithoutTicketsInput>
  }

  export type PatientUpdateWithoutTicketsInput = {
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    fileAttente?: FileAttenteUpdateOneWithoutPatientNestedInput
    rendezVous?: RendezVousUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileAttente?: FileAttenteUncheckedUpdateOneWithoutPatientNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedecinUpsertWithoutTicketsInput = {
    update: XOR<MedecinUpdateWithoutTicketsInput, MedecinUncheckedUpdateWithoutTicketsInput>
    create: XOR<MedecinCreateWithoutTicketsInput, MedecinUncheckedCreateWithoutTicketsInput>
    where?: MedecinWhereInput
  }

  export type MedecinUpdateToOneWithWhereWithoutTicketsInput = {
    where?: MedecinWhereInput
    data: XOR<MedecinUpdateWithoutTicketsInput, MedecinUncheckedUpdateWithoutTicketsInput>
  }

  export type MedecinUpdateWithoutTicketsInput = {
    specialite?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    service?: ServiceUpdateOneRequiredWithoutMedecinsNestedInput
    rendezVous?: RendezVousUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialite?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type ServiceUpsertWithoutTicketsInput = {
    update: XOR<ServiceUpdateWithoutTicketsInput, ServiceUncheckedUpdateWithoutTicketsInput>
    create: XOR<ServiceCreateWithoutTicketsInput, ServiceUncheckedCreateWithoutTicketsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutTicketsInput, ServiceUncheckedUpdateWithoutTicketsInput>
  }

  export type ServiceUpdateWithoutTicketsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUncheckedUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUncheckedUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUncheckedUpdateManyWithoutServiceNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type FileAttenteUpsertWithoutTicketInput = {
    update: XOR<FileAttenteUpdateWithoutTicketInput, FileAttenteUncheckedUpdateWithoutTicketInput>
    create: XOR<FileAttenteCreateWithoutTicketInput, FileAttenteUncheckedCreateWithoutTicketInput>
    where?: FileAttenteWhereInput
  }

  export type FileAttenteUpdateToOneWithWhereWithoutTicketInput = {
    where?: FileAttenteWhereInput
    data: XOR<FileAttenteUpdateWithoutTicketInput, FileAttenteUncheckedUpdateWithoutTicketInput>
  }

  export type FileAttenteUpdateWithoutTicketInput = {
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutFileAttenteNestedInput
    service?: ServiceUpdateOneRequiredWithoutFileAttenteNestedInput
  }

  export type FileAttenteUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateWithoutRendezVousInput = {
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    fileAttente?: FileAttenteCreateNestedOneWithoutPatientInput
    tickets?: TicketCreateNestedManyWithoutPatientInput
    notifications?: NotificationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutRendezVousInput = {
    id?: number
    userId: number
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    fileAttente?: FileAttenteUncheckedCreateNestedOneWithoutPatientInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPatientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutRendezVousInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutRendezVousInput, PatientUncheckedCreateWithoutRendezVousInput>
  }

  export type MedecinCreateWithoutRendezVousInput = {
    specialite: string
    user: UserCreateNestedOneWithoutMedecinInput
    service: ServiceCreateNestedOneWithoutMedecinsInput
    tickets?: TicketCreateNestedManyWithoutMedecinInput
  }

  export type MedecinUncheckedCreateWithoutRendezVousInput = {
    id?: number
    userId: number
    specialite: string
    serviceId: number
    tickets?: TicketUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinCreateOrConnectWithoutRendezVousInput = {
    where: MedecinWhereUniqueInput
    create: XOR<MedecinCreateWithoutRendezVousInput, MedecinUncheckedCreateWithoutRendezVousInput>
  }

  export type ServiceCreateWithoutRendezVousInput = {
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinCreateNestedManyWithoutServiceInput
    accueils?: AccueilCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteCreateNestedManyWithoutServiceInput
    tickets?: TicketCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutRendezVousInput = {
    id?: number
    nom: string
    description?: string | null
    prixTicket?: number
    createdAt?: Date | string
    medecins?: MedecinUncheckedCreateNestedManyWithoutServiceInput
    accueils?: AccueilUncheckedCreateNestedManyWithoutServiceInput
    fileAttente?: FileAttenteUncheckedCreateNestedManyWithoutServiceInput
    tickets?: TicketUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutRendezVousInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutRendezVousInput, ServiceUncheckedCreateWithoutRendezVousInput>
  }

  export type PatientUpsertWithoutRendezVousInput = {
    update: XOR<PatientUpdateWithoutRendezVousInput, PatientUncheckedUpdateWithoutRendezVousInput>
    create: XOR<PatientCreateWithoutRendezVousInput, PatientUncheckedCreateWithoutRendezVousInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutRendezVousInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutRendezVousInput, PatientUncheckedUpdateWithoutRendezVousInput>
  }

  export type PatientUpdateWithoutRendezVousInput = {
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    fileAttente?: FileAttenteUpdateOneWithoutPatientNestedInput
    tickets?: TicketUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutRendezVousInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileAttente?: FileAttenteUncheckedUpdateOneWithoutPatientNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedecinUpsertWithoutRendezVousInput = {
    update: XOR<MedecinUpdateWithoutRendezVousInput, MedecinUncheckedUpdateWithoutRendezVousInput>
    create: XOR<MedecinCreateWithoutRendezVousInput, MedecinUncheckedCreateWithoutRendezVousInput>
    where?: MedecinWhereInput
  }

  export type MedecinUpdateToOneWithWhereWithoutRendezVousInput = {
    where?: MedecinWhereInput
    data: XOR<MedecinUpdateWithoutRendezVousInput, MedecinUncheckedUpdateWithoutRendezVousInput>
  }

  export type MedecinUpdateWithoutRendezVousInput = {
    specialite?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    service?: ServiceUpdateOneRequiredWithoutMedecinsNestedInput
    tickets?: TicketUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinUncheckedUpdateWithoutRendezVousInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialite?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type ServiceUpsertWithoutRendezVousInput = {
    update: XOR<ServiceUpdateWithoutRendezVousInput, ServiceUncheckedUpdateWithoutRendezVousInput>
    create: XOR<ServiceCreateWithoutRendezVousInput, ServiceUncheckedCreateWithoutRendezVousInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutRendezVousInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutRendezVousInput, ServiceUncheckedUpdateWithoutRendezVousInput>
  }

  export type ServiceUpdateWithoutRendezVousInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUpdateManyWithoutServiceNestedInput
    tickets?: TicketUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutRendezVousInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prixTicket?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinUncheckedUpdateManyWithoutServiceNestedInput
    accueils?: AccueilUncheckedUpdateManyWithoutServiceNestedInput
    fileAttente?: FileAttenteUncheckedUpdateManyWithoutServiceNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type PatientCreateWithoutNotificationsInput = {
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    fileAttente?: FileAttenteCreateNestedOneWithoutPatientInput
    tickets?: TicketCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutNotificationsInput = {
    id?: number
    userId: number
    telephone: string
    codePin: string
    age?: number | null
    estComplet?: boolean
    estPrioritaire?: boolean
    estRefere?: boolean
    createdAt?: Date | string
    fileAttente?: FileAttenteUncheckedCreateNestedOneWithoutPatientInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPatientInput
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutNotificationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutNotificationsInput, PatientUncheckedCreateWithoutNotificationsInput>
  }

  export type PatientUpsertWithoutNotificationsInput = {
    update: XOR<PatientUpdateWithoutNotificationsInput, PatientUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PatientCreateWithoutNotificationsInput, PatientUncheckedCreateWithoutNotificationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutNotificationsInput, PatientUncheckedUpdateWithoutNotificationsInput>
  }

  export type PatientUpdateWithoutNotificationsInput = {
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    fileAttente?: FileAttenteUpdateOneWithoutPatientNestedInput
    tickets?: TicketUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    telephone?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    estComplet?: BoolFieldUpdateOperationsInput | boolean
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    estRefere?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileAttente?: FileAttenteUncheckedUpdateOneWithoutPatientNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPatientNestedInput
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type RendezVousCreateManyMedecinInput = {
    id?: number
    patientId: number
    serviceId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyMedecinInput = {
    id?: number
    patientId: number
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousUpdateWithoutMedecinInput = {
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRendezVousNestedInput
    service?: ServiceUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RendezVousUncheckedUpdateWithoutMedecinInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousUncheckedUpdateManyWithoutMedecinInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutMedecinInput = {
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTicketsNestedInput
    service?: ServiceUpdateOneRequiredWithoutTicketsNestedInput
    fileAttente?: FileAttenteUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutMedecinInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutMedecinInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyPatientInput = {
    id?: number
    medecinId?: number | null
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousCreateManyPatientInput = {
    id?: number
    medecinId: number
    serviceId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyPatientInput = {
    id?: number
    type: $Enums.TypeNotification
    canal?: $Enums.CanalNotification
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type TicketUpdateWithoutPatientInput = {
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecin?: MedecinUpdateOneWithoutTicketsNestedInput
    service?: ServiceUpdateOneRequiredWithoutTicketsNestedInput
    fileAttente?: FileAttenteUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medecinId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medecinId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousUpdateWithoutPatientInput = {
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medecin?: MedecinUpdateOneRequiredWithoutRendezVousNestedInput
    service?: ServiceUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RendezVousUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medecinId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medecinId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutPatientInput = {
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    canal?: EnumCanalNotificationFieldUpdateOperationsInput | $Enums.CanalNotification
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    canal?: EnumCanalNotificationFieldUpdateOperationsInput | $Enums.CanalNotification
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    canal?: EnumCanalNotificationFieldUpdateOperationsInput | $Enums.CanalNotification
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedecinCreateManyServiceInput = {
    id?: number
    userId: number
    specialite: string
  }

  export type AccueilCreateManyServiceInput = {
    id?: number
    userId: number
  }

  export type FileAttenteCreateManyServiceInput = {
    id?: number
    patientId: number
    numero: number
    estPrioritaire?: boolean
    statut?: $Enums.StatutFile
    heurePrise?: Date | string
    heureValidation?: Date | string | null
    heureExpiration?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyServiceInput = {
    id?: number
    patientId: number
    medecinId?: number | null
    fileAttenteId: number
    numero: string
    montantPaye: number
    montantRestant?: number
    statut?: $Enums.StatutTicket
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RendezVousCreateManyServiceInput = {
    id?: number
    patientId: number
    medecinId: number
    creerPar: $Enums.CreerPar
    date: Date | string
    heure: string
    motif?: string | null
    statut?: $Enums.StatutRendezVous
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedecinUpdateWithoutServiceInput = {
    specialite?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    rendezVous?: RendezVousUpdateManyWithoutMedecinNestedInput
    tickets?: TicketUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialite?: StringFieldUpdateOperationsInput | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialite?: StringFieldUpdateOperationsInput | string
  }

  export type AccueilUpdateWithoutServiceInput = {
    user?: UserUpdateOneRequiredWithoutAccueilNestedInput
  }

  export type AccueilUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AccueilUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FileAttenteUpdateWithoutServiceInput = {
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutFileAttenteNestedInput
    ticket?: TicketUpdateOneWithoutFileAttenteNestedInput
  }

  export type FileAttenteUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutFileAttenteNestedInput
  }

  export type FileAttenteUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    estPrioritaire?: BoolFieldUpdateOperationsInput | boolean
    statut?: EnumStatutFileFieldUpdateOperationsInput | $Enums.StatutFile
    heurePrise?: DateTimeFieldUpdateOperationsInput | Date | string
    heureValidation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutServiceInput = {
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTicketsNestedInput
    medecin?: MedecinUpdateOneWithoutTicketsNestedInput
    fileAttente?: FileAttenteUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: NullableIntFieldUpdateOperationsInput | number | null
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: NullableIntFieldUpdateOperationsInput | number | null
    fileAttenteId?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    montantPaye?: FloatFieldUpdateOperationsInput | number
    montantRestant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousUpdateWithoutServiceInput = {
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRendezVousNestedInput
    medecin?: MedecinUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RendezVousUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medecinId?: IntFieldUpdateOperationsInput | number
    creerPar?: EnumCreerParFieldUpdateOperationsInput | $Enums.CreerPar
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutRendezVousFieldUpdateOperationsInput | $Enums.StatutRendezVous
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}