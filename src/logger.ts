/*
 *  Configures itivrutaha logging module.
 *  Created On 26 June 2020
 */

import itivrutaha from 'itivrutaha'

export default itivrutaha.createNewLogger({
    theme: ':type :message',
})
