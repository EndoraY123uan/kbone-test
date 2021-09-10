import React from 'react'
import kboneAPI from 'kbone-api'
import { withRouter } from 'react-router-dom'

import './index.css'

const Home = ({ history }) => {
    return (
        <div className='home-container'>
            <div>
            这是首页这是首页
            </div>
            
            <button className='btn' onClick={() => {
                if (process.env.isMiniprogram) {
                    kboneAPI.navigateTo({
                        url: '/pages/test/index',
                    });
                } else {
                    history.push('/test')
                }

            }}>
                点我跳转
            </button>
        </div>
    )
}

export default withRouter(Home)
