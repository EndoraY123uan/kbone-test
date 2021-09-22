import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import kboneAPI from 'kbone-api'
import './index.css'


const add = 'https://z3.ax1x.com/2021/09/10/hjcnG6.png'

const UndercoverRome = () => {

    const [count, setCount] = useState(3)
    const userInfo = JSON.parse(kboneAPI.getStorageSync('userInfo') || '')
    const [userArr, setUserArr] = useState([{ ...userInfo }])

    window.addEventListener('wxload', (params = 5) => {
        console.log('------llalalal', params)
        setCount(params.count)
    })

    let getUserInfo = 'getUserInfo'

    window[getUserInfo] = (e) => {
        onGetUserInfo(e)
    }

    const eventMap = JSON.stringify({
        getUserInfo: getUserInfo
    })


    useEffect(() => {
        kboneAPI.setNavigationBarTitle({
            title: '房间'
        })
    }, [0])


    const onGetUserInfo = e => {
        // console.log('-------', e.detail)
        if (e.detail.errMsg === "getUserInfo:ok") {
            const info = e.detail.rawData
            const oldInfo = JSON.parse(kboneAPI.getStorageSync('userInfo'))
            if (!oldInfo) {
                kboneAPI.setStorage({
                    key: "userInfo",
                    data: e.detail.rawData
                })
            }
            let newArr = [...userArr]
            newArr.push(oldInfo)
            //  newArr.concat([{ ...oldInfo }])
            console.log('------new-----', newArr)
            setUserArr(newArr)
        } else {
            kboneAPI.showToast({
                title: '请确认授权',
                icon: 'none'
            })
        }
    }


    window.onShareAppMessage = function (data) {
        console.log('----onShareAppMessage----', data)
        // 当页面被转发时会进入这个回调
        // 返回一个对象，作为小程序处理转发的参数，对象内容和小程序页面 onShareAppMessage 回调可返回对象内容基本一致，具体可参考官方文档：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object
        return {
            title: '邀请好友',
            path: '/pages/undercoverRome/index?count=5', // 当前页面，这里的 path 是页面 url，而不是小程序路由
            // path: 'https://test.miniprogram.com/a', // 当前页面的完整 url，同上
            // path: '/b', // 其他页面，同上
            // path: 'https://test.miniprogram.com/b', // 其他页面的完整 url，同上
            // miniprogramPath: `/pages/page2/index?type=share&targeturl=${encodeURIComponent('/b')}`, // 如果需要分享原始小程序页面路由，可传递此参数
        }
    }

    return (
        <div className='room'>
            <div className='title'>
                {userInfo.nickName}创建的房间,共<span className='room-count'>{count}</span>人
            </div>

            <div className='content'>
                {
                    userArr.map((userItem) => {
                        return <div className='avatorContent'>
                            <img className='avator' src={userItem.avatarUrl} />
                        </div>
                    })
                }
                <wx-button open-type="getUserInfo" bindgetuserinfo="bindgetuserinfo" kbone-event-map={eventMap}>
                    <div className='add' >
                        <img className='add-icon' src={add} alt='加入' />
                    </div>
                </wx-button>

            </div>

            <div className='btns'>
                <button className='btn'>
                    开始游戏
                </button>
                <wx-button open-type="share" className='btn share'>
                    邀请好友
                </wx-button>
            </div>

        </div>
    )
}

export default UndercoverRome
