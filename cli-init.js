/**
 * https://www.npmjs.com/package/cli-init
 * @version 0.0.1
 * @license Copyright (c) 2023 0bdx <0@0bdx.com> (0bdx.com)
 * SPDX-License-Identifier: MIT
 */
/**
 * The main starter for 0dbx's initialisation cli app.
 *
 * @param   {string[]}  argv
 *     Raw command-line arguments, typically Node.js's `process.argv`
 *
 * @return  {string}
 *     Returns the short message appended to "cliInit(): " [TODO change this]
 */
function cliInit(argv) {
    const ep = 'Error: cliInit():'; // error prefix
    if (typeof argv !== 'object') throw Error(`${ep
        } argv is type '${typeof argv}' not 'object'`);
    if (!Array.isArray(argv)) throw Error(`${ep
        } argv is an object but not an array`);
    argv.map((a, i) => {
        if (typeof a !== 'string') throw Error(`${ep
            } argv[${i}] is type '${typeof a}' not 'string'`);
    });

    return `cliInit(): ${argv}`;
}

export { cliInit };
