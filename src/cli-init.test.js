import equal from './private-methods/equal.js';
import throws from './private-methods/throws.js';

/**
 * cli() unit tests.
 * 
 * @typedef {import('./cli-init').default} cliInit
 * 
 * @param   {cliInit}  f  cliInit()
 * @return  {void}
 * @throws  Throws an `Error` if a test fails
 */
export default function cliInitTest(f) {

    // Argument is incorrect type.
    // @ts-expect-error
    throws(()=>f(),
        `Error: cliInit(): argv is type 'undefined' not 'object'`);
    // @ts-expect-error
    throws(()=>f(true),
        `Error: cliInit(): argv is type 'boolean' not 'object'`);
    // @ts-expect-error
    throws(()=>f({}),
        `Error: cliInit(): argv is an object but not an array`);
    // @ts-expect-error
    throws(()=>f(['Ok',123,'yup']),
        `Error: cliInit(): argv[1] is type 'number' not 'string'`);

    // Ok.
    equal(f([]),
            'cliInit(): ');
    equal(f(['Ok','yup']),
            'cliInit(): Ok,yup');
}
