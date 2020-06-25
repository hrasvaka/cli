//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  [absolute github repo url]
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  Entry executable file for hrasvaka's cli.
//                       |

import keytar from 'keytar'

import parse from './cli/index'

async function main(): Promise<void> {
    const parsed = await parse()
}

main()
