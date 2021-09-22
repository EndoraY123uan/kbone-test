import React,{useEffect} from 'react'
import kboneAPI from 'kbone-api'
import { withRouter } from 'react-router-dom'

import './index.css'
import WhoIsUndercover from '../whiIsUndercover'

const Home = ({ history }) => {

    useEffect(() => {
        kboneAPI.setNavigationBarTitle({
            title:'首页'
        })
    }, [0])

    return (
        <div className='home-container'>
            <WhoIsUndercover/>
            {/* <div>
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
            </button> */}
        </div>
    )
}

export default withRouter(Home)
