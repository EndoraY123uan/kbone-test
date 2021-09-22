import React, { useEffect } from 'react'
import kboneAPI from 'kbone-api'


const Mine = () => {
    useEffect(() => {
        kboneAPI.setNavigationBarTitle({
            title: '我的'
        })
    }, [0])
    return (
        <div>
            这是我的
        </div>
    )
}

export default Mine
