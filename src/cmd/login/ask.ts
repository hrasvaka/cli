/*
 *  Ask the user the information required to login the user.
 *  Created On 26 June 2020
 */

import inquirer from 'inquirer'

export interface LoginData {
    instance: string
    username: string
    password: string
}

export default async function ask(): Promise<LoginData> {
    return await inquirer.prompt([
        {
            name: 'instance',
            type: 'input',
            message: 'What is the instance URL?',
        },
        {
            name: 'username',
            type: 'input',
            message: 'What is your username?',
        },
        {
            name: 'password',
            type: 'password',
            message: 'What is the password?',
        },
    ])
}
