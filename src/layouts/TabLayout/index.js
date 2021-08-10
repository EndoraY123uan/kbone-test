import React, { useState } from 'react'
import { isIphoneX } from '../../util/platform'

import './index.css'

const TabLayout = ({ children }) => {
    const [currentTab, setCurrentTab] = useState(0)
    console.log('----------',isIphoneX())
    const tabList = [
        {
            id: 1,
            title: '首页',
            icon: 'https://ftp.bmp.ovh/imgs/2021/08/f49e786ef425cc23.png',
            selectIcon: 'https://ftp.bmp.ovh/imgs/2021/08/21b0b5c4c64dfe73.png'
        },
        {
            id: 2,
            title: '我的',
            icon: 'https://ftp.bmp.ovh/imgs/2021/08/b53ec1111537b8f7.png',
            selectIcon: 'https://ftp.bmp.ovh/imgs/2021/08/9f9af55e9f5defa7.png'
        }
    ]

    const handleChangeTab = index => {
        setCurrentTab(index)
    }



    return (
        <div className={'tabLayout'} >
            <div className={'childrenContent'}>
                {children}
            </div>

            <div className={'tabContent'} style={{ paddingBottom: isIphoneX() ? 70 : ''}}>
                {
                    tabList.map((item, index) => {
                        return <div className={'tabItem'} onClick={() => handleChangeTab(index)}>
                            <img className={'tabItemIcon'} src={index === currentTab ? item.selectIcon : item.icon} />
                            <div className={'title'}>
                                {item.title}
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default TabLayout
