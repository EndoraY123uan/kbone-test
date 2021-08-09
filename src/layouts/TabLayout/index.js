import React from 'react'

import './index.css'

const TabLayout = ({ children }) => {

    const tabList = [
        {
            id: 1,
            title: '首页',
            icon: '../../assets/home.png',
            selectIcon: 'https://637752.freep.cn/637752/%E8%B0%81%E6%98%AF%E5%8D%A7%E5%BA%95/%E9%A6%96%E9%A1%B5.png'

        },
        {
            id: 2,
            title: '我的',
            icon: 'https://637752.freep.cn/637752/%E8%B0%81%E6%98%AF%E5%8D%A7%E5%BA%95/%E6%88%91%E7%9A%84%20(1).png',
            selectIcon: 'https://637752.freep.cn/637752/%E8%B0%81%E6%98%AF%E5%8D%A7%E5%BA%95/%E6%88%91%E7%9A%84.png'
        }
    ]

    return (
        <div className={'tabLayout'}>
            <div className={'childrenContent'}>
                {children}
            </div>

            <div className={'tabContent'}>
                {
                    tabList.map(item => {
                        return <div className={'tabItem'}>
                            <img className={'tabItemIcon'} src={item.icon} />
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default TabLayout
