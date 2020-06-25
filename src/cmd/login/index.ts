/*
 *  Logs in the user.
 *  Created On 26 June 2020
 */

import ask from './ask'
import getToken from './getToken'
import save from './save'
import logger from '../../logger'

export default async function login(): Promise<void> {
    // ask the user the credentials
    const answers = await ask()

    // generate a token
    const token = await getToken(answers)

    // store both token and credentials in keytar!
    await save(answers, token)

    logger.success('You have been successfully logged in.')
}
