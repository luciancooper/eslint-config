module.exports = {
    rules: {
        // typescript plugin rules - best practices

        // require that member overloads be consecutive
        '@typescript-eslint/adjacent-overload-signatures': 2,
        // requires @ts-<directive> comments have a description
        '@typescript-eslint/ban-ts-comment': [2, {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': false,
        }],
        // bans specific types from being used
        '@typescript-eslint/ban-types': 2,
        // ensures that literals on classes are exposed in a consistent style
        '@typescript-eslint/class-literal-property-style': [2, 'getters'],
        // enforces consistent usage of type assertions
        '@typescript-eslint/consistent-type-assertions': [2, {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter', // dont really get this
        }],
        // enforces using a particular method signature syntax.
        '@typescript-eslint/method-signature-style': 2,
        // disallow the delete operator with computed key expressions
        '@typescript-eslint/no-dynamic-delete': 2,
        // disallow the declaration of empty interfaces
        '@typescript-eslint/no-empty-interface': [2, {
            allowSingleExtends: false, // default: false
        }],
        // disallow usage of the `any` type
        '@typescript-eslint/no-explicit-any': 0, // too strict, disabling
        // forbids the use of classes as namespaces
        '@typescript-eslint/no-extraneous-class': [2, {
            allowWithDecorator: true,
        }],
        // disallow usage of the implicit `any` type in catch clauses
        '@typescript-eslint/no-implicit-any-catch': 0, // annoying in js
        // disallows explicit type declarations for vars or params initialized to a primitive
        '@typescript-eslint/no-inferrable-types': 2,
        // disallows usage of `void` type outside of generic or return types
        '@typescript-eslint/no-invalid-void-type': 2,
        // enforce valid definition of `new` and `constructor`
        '@typescript-eslint/no-misused-new': 2,
        // disallow the use of custom TypeScript modules and namespaces
        '@typescript-eslint/no-namespace': 2,
        // disallows invocation of `require()`
        '@typescript-eslint/no-require-imports': 0, // annoying in js
        // disallow aliasing `this`
        '@typescript-eslint/no-this-alias': [2, {
            allowDestructuring: true,
        }],
        // disallows unnecessary constraints on generic types
        '@typescript-eslint/no-unnecessary-type-constraint': 2,
        // disallows the use of require statements except in import statements
        '@typescript-eslint/no-var-requires': 0, // annoying in js
        // prefer usage of `as const` over literal type
        '@typescript-eslint/prefer-as-const': 2,
        // prefer initializing each enums member value
        '@typescript-eslint/prefer-enum-initializers': 0,
        // use function types instead of interfaces with call signatures
        '@typescript-eslint/prefer-function-type': 2,
        // require that all enum members be literal values to prevent unintended enum member name shadow issues
        '@typescript-eslint/prefer-literal-enum-member': 2,
        // require use of `namespace` over `module` to declare custom TS modules
        '@typescript-eslint/prefer-namespace-keyword': 2,
        // prefer using concise optional chain expressions instead of chained logical ands
        '@typescript-eslint/prefer-optional-chain': 2,
        // recommends using `@ts-expect-error` over `@ts-ignore`
        '@typescript-eslint/prefer-ts-expect-error': 2,
        // sets preference for ES6-style import declarations over triple slash directives
        '@typescript-eslint/triple-slash-reference': [2, {
            path: 'never',
            types: 'never',
            lib: 'never',
        }],
        // disallows awaiting a value that is not a Thenable (requires type info)
        '@typescript-eslint/await-thenable': 2,
        // call `.toString()` only on objects that provide useful information when stringified (requires type info)
        '@typescript-eslint/no-base-to-string': 2,
        // requires expressions of type void to appear in statement position (requires type info)
        '@typescript-eslint/no-confusing-void-expression': [2, {
            ignoreArrowShorthand: false,
            ignoreVoidOperator: true,
        }],
        // requires Promise-like values to be handled appropriately (requires type info)
        '@typescript-eslint/no-floating-promises': 0,
        // disallow iterating over array indexes with a for-in loop (requires type info)
        '@typescript-eslint/no-for-in-array': 2,
        // avoid using promises in places not designed to handle them (requires type info)
        '@typescript-eslint/no-misused-promises': [2, {
            checksConditionals: true,
            checksVoidReturn: false,
        }],
        // prevents conditionals where the type is always truthy or always falsy (requires type info)
        '@typescript-eslint/no-unnecessary-condition': 0,
        // warns when a namespace qualifier is unnecessary (requires type info)
        '@typescript-eslint/no-unnecessary-qualifier': 2,
        // enforces that type arguments will not be used if not required (requires type info)
        '@typescript-eslint/no-unnecessary-type-arguments': 2,
        // warns if a type assertion does not change the type of an expression (requires type info)
        '@typescript-eslint/no-unnecessary-type-assertion': 2,
        // prefers a non-null assertion over explicit type cast when possible (requires type info)
        '@typescript-eslint/non-nullable-type-assertion-style': 2,
        // enforce `includes` method over `indexOf` method (requires type info)
        '@typescript-eslint/prefer-includes': 2,
        // enforce the usage of the nullish coalescing operator instead of logical chaining (requires type info)
        '@typescript-eslint/prefer-nullish-coalescing': 0, // enabled in `ts` overrides - not ready to enforce in `js`
        // requires private members be `readonly` if never modified outside the constructor (requires type info)
        '@typescript-eslint/prefer-readonly': 2,
        // prefer using type parameter when calling `Array#reduce` instead of casting (requires type info)
        '@typescript-eslint/prefer-reduce-type-parameter': 2,
        // use `RegExp#exec` over `String#match` if no global flag is provided (requires type info)
        '@typescript-eslint/prefer-regexp-exec': 2,
        // enforce the use of String's `startsWith` & `endsWith` over equivalent methods (requires type info)
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        // requires any function or method that returns a Promise to be marked async (requires type info)
        '@typescript-eslint/promise-function-async': 0,
        // requires `Array#sort` calls to always provide a `compareFunction` (requires type info)
        '@typescript-eslint/require-array-sort-compare': 0,
        // when adding two variables, operands must both be of type number or of type string (requires type info)
        '@typescript-eslint/restrict-plus-operands': 0, // enabled in `ts` overrides
        // enforce template literal expressions to be of string type (requires type info)
        '@typescript-eslint/restrict-template-expressions': [2, {
            allowNumber: true,
            allowBoolean: true,
            allowAny: true,
            allowNullish: true,
        }],
        // restricts the types allowed in boolean expressions (requires type info)
        '@typescript-eslint/strict-boolean-expressions': 0,
        // exhaustiveness checking in switch with union type (requires type info)
        '@typescript-eslint/switch-exhaustiveness-check': 2,
        // enforces unbound methods are called with their expected scope (requires type info)
        '@typescript-eslint/unbound-method': 0,

        // typescript plugin rules - stylistic issues

        // requires using either `T[]` or `Array<T>` for arrays
        '@typescript-eslint/array-type': [2, {
            default: 'array',
        }],
        // bans // tslint:<rule-flag> comments from being used
        '@typescript-eslint/ban-tslint-comment': 2,
        // enforce the use of the record type
        '@typescript-eslint/consistent-indexed-object-style': [2, 'record'],
        // enforce use of `interface` over `type`
        '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
        // enforces consistent usage of type imports
        '@typescript-eslint/consistent-type-imports': 0,
        // Require explicit return types on functions and class methods
        '@typescript-eslint/explicit-function-return-type': 0, // enabling this in `ts` overrides
        // Require explicit accessibility modifiers on class properties and methods
        '@typescript-eslint/explicit-member-accessibility': 0,
        // require explicit return and argument types on exported functions' and classes' public class methods
        '@typescript-eslint/explicit-module-boundary-types': 0,
        // require a specific member delimiter style for interfaces and type literals
        '@typescript-eslint/member-delimiter-style': [2, {
            multiline: {
                delimiter: 'none', // none, semi, comma
                // requireLast: true,
            },
            singleline: {
                delimiter: 'comma', // semi, comma
                requireLast: false,
            },
            multilineDetection: 'brackets', // brackets | last-member
        }],
        // require a consistent member declaration order
        '@typescript-eslint/member-ordering': [2, {
            default: [
                // index signature
                'signature',
                // fields
                'static-field',
                'decorated-field',
                'instance-field',
                'abstract-field',
                'field',
                // constructors
                'constructor',
                // methods
                'static-method',
                'decorated-method',
                'instance-method',
                'abstract-method',
                'method',
            ],
        }],
        // disallow non-null assertion in locations that may be confusing
        '@typescript-eslint/no-confusing-non-null-assertion': 2,
        // disallow extra non-null assertion
        '@typescript-eslint/no-extra-non-null-assertion': 2,
        // disallows non-null assertions using the `!` postfix operator
        '@typescript-eslint/no-non-null-assertion': 0,
        // disallow the use of parameter properties in class constructors
        '@typescript-eslint/no-parameter-properties': 0,
        // disallow the use of type aliases
        '@typescript-eslint/no-type-alias': [2, {
            allowAliases: 'in-unions-and-intersections',
            allowCallbacks: 'always',
            allowConditionalTypes: 'always',
            allowConstructors: 'always',
            allowLiterals: 'always',
            allowMappedTypes: 'always',
            allowTupleTypes: 'always',
        }],
        // prefer a ‘for-of’ loop wherever possible
        '@typescript-eslint/prefer-for-of': 0,
        // enforces that members of a type union/intersection are sorted alphabetically
        '@typescript-eslint/sort-type-union-intersection-members': 0, // not enabling - seems excessive
        // require consistent spacing around type annotations
        '@typescript-eslint/type-annotation-spacing': 2,
        // requires type annotations to exist
        '@typescript-eslint/typedef': 0,
        // flags unnecessary equality comparisons against boolean literals (requires type info)
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,

        // typescript plugin rules - variables

        // warns if any two overloads could be unified into one
        '@typescript-eslint/unified-signatures': 2,
        // enforces naming conventions for everything across a codebase (requires type info)
        '@typescript-eslint/naming-convention': 0,

        // typescript plugin rules - possible errors

        // disallows using a non-null assertion after an optional chain expression
        '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
        // disallows calling an function with an any type value (requires type info)
        '@typescript-eslint/no-unsafe-argument': 0, // enable when errors are more strongly typed
        // disallows assigning any to variables and properties (requires type info)
        '@typescript-eslint/no-unsafe-assignment': 0, // enabled in `ts` overrides
        // disallows calling an any type value (requires type info)
        '@typescript-eslint/no-unsafe-call': 0, // enabled in `ts` overrides
        // disallows member access on any typed variables (requires type info)
        '@typescript-eslint/no-unsafe-member-access': 0, // enabled in `ts` overrides
        // disallows returning any from a function (requires type info)
        '@typescript-eslint/no-unsafe-return': 0, // enabled in `ts` overrides
        // requires that function parameters be typed as readonly (requires type info)
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
    },
};