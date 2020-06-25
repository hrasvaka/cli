/*
 *  This file will save the credentials and token in the keytar.
 *  Created On 26 June 2020
 */

import keytar from 'keytar'

import { LoginData } from './ask'

export default async function save(
    credentials: LoginData,
    token: string,
): Promise<void> {
    await keytar.setPassword(
        'hrasvaka-passwords',
        credentials.username,
        credentials.password,
    )

    await keytar.setPassword('hrasvaka-tokens', credentials.username, token)
}
