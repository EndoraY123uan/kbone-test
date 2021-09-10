import React, { useState, FC } from 'react'
import { withRouter } from 'react-router-dom'
import kbone from 'kbone-api'
import { isIphoneX } from '../../util/platform'

import './index.css'
import Home from '../../pages/home'
import Mine from '../../pages/mine'
import { Route } from 'react-router-dom'

const TabLayout = ({ children, history }) => {
    const [currentTab, setCurrentTab] = useState(0)
    const tabList = [
        {
            id: 1,
            title: '首页',
            icon: 'https://ftp.bmp.ovh/imgs/2021/08/f49e786ef425cc23.png',
            // icon: 'https://img0.baidu.com/it/u=1689178061,3688740446&fm=11&fmt=auto&gp=0.jpg',
            //  selectIcon: 'https://img0.baidu.com/it/u=1689178061,3688740446&fm=11&fmt=auto&gp=0.jpg',
            selectIcon: 'https://ftp.bmp.ovh/imgs/2021/08/21b0b5c4c64dfe73.png',
            path: '/index/home'
        },
        {
            id: 2,
            title: '我的',
            icon: 'https://ftp.bmp.ovh/imgs/2021/08/b53ec1111537b8f7.png',
            selectIcon: 'https://ftp.bmp.ovh/imgs/2021/08/9f9af55e9f5defa7.png',
            path: '/index/mine'
        }
    ]

    const handleChangeTab = index => {
        setCurrentTab(index)
        history.replace(tabList[index].path)
        //  kbone.navigateTo('')
    }



    return (
        <div className={'tabLayout'} >
            <Route path='/index/home' component={Home} />
            <Route path='/index/mine' component={Mine} />
            <div className={'childrenContent'}>
                {children}
            </div>

            <div className={'tabContent'} style={{ paddingBottom: isIphoneX() ? 70 : '' }}>
                {
                    tabList.map((item, index) => {
                        return <div className={'tabItem'} onClick={() => handleChangeTab(index)}>
                            <div className='imgIcon'>
                                <img className={'tabItemIcon'} src={index === currentTab ? item.selectIcon : item.icon} alt='图片' />
                            </div>

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

export default withRouter(TabLayout)
