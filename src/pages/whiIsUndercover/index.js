import React, { useState, useRef, useEffect } from 'react'
import kboneAPI from 'kbone-api'
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
        kboneAPI.navigateTo({
            url: `/pages/undercoverRome/index?count=${undercoverRef.current.currentStepValue}`
        })
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
