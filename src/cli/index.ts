/*
 *  Configures command line argument parsing.
 *  Created On 25 June 2020
 */

import path from 'path'
import fs from 'fs'

import { program } from 'commander'

import login from '../cmd/login/index'

const appData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', '..', '..', 'package.json'), {
        encoding: 'utf-8',
    }),
)

export default async function parse(): Promise<any> {
    program
        .name('hrasvaka-cli')
        .version(`${appData.name} v${appData.version}`, '-v, --version')

    program.command('login').description('Login into hrasvaka').action(login)

    return await program.parseAsync(process.argv)
}
