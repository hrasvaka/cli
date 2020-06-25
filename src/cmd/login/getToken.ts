/*
 *  Logs in the user by getting a token for with the username and password.
 *  Created On 26 June 2020
 */

import axios from 'axios'

import { LoginData } from './ask'
import logger from '../../logger'

export default async function getToken(data: LoginData): Promise<string> {
    // set the default base URL
    axios.defaults.baseURL = data.instance

    try {
        // send the post request
        const login = await axios.post('/auth/login', {
            username: data.username,
            password: data.password,
        })

        if (login.status != 201) {
            logger.error(`Failed to login with status ${login.status}.`, 2)
        } else {
            return login.data.data
        }
    } catch (e) {
        // handle the failed login attempt
        if (e.response.status == 401) {
            logger.error('Username or password is incorrect.', 2)
        } else {
            logger.error(`Failed to login with status ${e.response.status}.`, 2)
        }
    }
}
