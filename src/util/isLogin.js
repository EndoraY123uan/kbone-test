import KboneAPI from 'kbone-api'



const login = () => {
    console.log('------login-------')
    const userInfo = KboneAPI.getStorageSync('userInfo')
    console.log('----------', userInfo)
    if (!userInfo) {
        KboneAPI.showModal({
            title: '提示',
            content: '清先登录',
            confirmText：'一键登录',
            showCancel: false,
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }
}

login()
