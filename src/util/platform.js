import Kbone from 'kbone-api'

export const isIphoneX = () => {

    let flag = false

    if (process.env.isMiniprogram) {
        const info = Kbone.getSystemInfoSync()
        // console.log('-----info-----', info, info.screenHeight)
        if (info.system.startsWith('iOS') && info.screenHeight >= 812) {
            flag = true
        }
    }


    if (!process.env.isMiniprogram) {
        const h5Info = window.navigator.userAgent
        // console.log('--------h5--------', h5Info)
        const isIOS = !!h5Info.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isIOS && screen.height >= 812) {
            flag = true
        }
    }

    return flag

}