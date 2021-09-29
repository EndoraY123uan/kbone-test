import React, { useState, useRef, useEffect } from 'react'
import kboneAPI from 'kbone-api'
import request from '@util/request'
import './index.css'

const WhoIsUndercover = () => {

    const [currentStepValue, setCurrentStepValue] = useState(5)

    const undercoverRef = useRef(null)


    let change = 'change'
    let getUserInfo = 'getUserInfo'

    window[change] = (e) => {
        stepChange(e)
    }
    window[getUserInfo] = (e) => {
        onGetUserInfo(e)
    }
    const eventMap = JSON.stringify({
        change: change,
        getUserInfo: getUserInfo
    })

    useEffect(() => {
        undercoverRef.current.currentStepValue = currentStepValue
        kboneAPI.setNavigationBarTitle({
            title: '创建房间'
        })
    }, [0])


    const onGetUserInfo = e => {
        if (e.detail.errMsg === "getUserInfo:ok") {
            const info = e.detail.rawData
            const oldInfo = kboneAPI.getStorageSync('userInfo')
            !oldInfo && kboneAPI.setStorage({
                key: "userInfo",
                data: e.detail.rawData
            })

            handleCreateRoom()
        } else {
            kboneAPI.showToast({
                title: '请确认授权',
                icon: 'none'
            })
        }
    }


    const stepChange = e => {
        undercoverRef.current.currentStepValue = e.detail.value
        setCurrentStepValue(e.detail.value)
    }


    const handleCreateRoom = () => {
        const path = '/undercoverRome/pages/undercoverRome/index'
        request('/').then((res) => {
            console.log('--------/------')
        })

        // kboneAPI.navigateTo({
        //     url: `${path}?count=${undercoverRef.current.currentStepValue}`
        // })
        // kboneAPI.navigateTo({
        //     url: `${path}?count=${currentStepValue}`
        // })
    }


    window.onShareAppMessage = function (data) {
        console.log('----- share-----', data)
        // 当页面被转发时会进入这个回调
        // 返回一个对象，作为小程序处理转发的参数，对象内容和小程序页面 onShareAppMessage 回调可返回对象内容基本一致，具体可参考官方文档：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object
        return {
            title: 'hahhahahhahah',
            path: '/a', // 当前页面，这里的 path 是页面 url，而不是小程序路由
            // path: 'https://test.miniprogram.com/a', // 当前页面的完整 url，同上
            // path: '/b', // 其他页面，同上
            // path: 'https://test.miniprogram.com/b', // 其他页面的完整 url，同上
            // miniprogramPath: `/pages/page2/index?type=share&targeturl=${encodeURIComponent('/b')}`, // 如果需要分享原始小程序页面路由，可传递此参数
        }
    }


    return (
        <div className='undercover' ref={undercoverRef}>
            <div className='gameCount'>
                <span>
                    参与人数：
                </span>
                <span className='count'>
                    {currentStepValue}
                </span>
                人

            </div>
            <div className='slider'>
                <wx-slider value={currentStepValue} min={3} max={10} step={1} kbone-event-map={eventMap} />
            </div>

            <div className='start-btn'>
                <wx-button open-type="getUserInfo" bindgetuserinfo="bindgetuserinfo" kbone-event-map={eventMap} >
                    创建房间
                </wx-button>
            </div>

        </div>
    )
}

export default WhoIsUndercover
