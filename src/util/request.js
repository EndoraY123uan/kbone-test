import kboneAPI from 'kbone-api'

const APIRoot = 'http://localhost:3000'

const request = (url = '', data = {}) => {
    return new Promise((resolve, reject) => {
        kboneAPI.request({
            url: APIRoot + url,
            data,
            success: (res) => {
                console.log('request-----', res)
                resolve(res)
            },
            fail: (err) => {
                console.log('fail-----')
                reject(err)
            }
        })
    })

}


export default request