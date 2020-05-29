/*
 *  Renames the resulting executable in a proper format.
 *  Created On 30 May 2020
 */

const fs = require('fs')
const path = require('path')

const appData = require('../package.json')

async function main() {
    // rename the files accordingly
    const executables = path.join(process.cwd(), 'dist', 'packages')

    await fs.promises.rename(
        path.join(executables, 'cli-linux'),
        path.join(executables, `hrasvaka-cli-v${appData.version}-linux`),
    )
    await fs.promises.rename(
        path.join(executables, 'cli-macos'),
        path.join(executables, `hrasvaka-cli-v${appData.version}-darwin`),
    )
    await fs.promises.rename(
        path.join(executables, 'cli-win.exe'),
        path.join(executables, `hrasvaka-cli-v${appData.version}-windows.exe`),
    )
}

main()
