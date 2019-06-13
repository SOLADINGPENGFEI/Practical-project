import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Cascader } from 'antd';

function UserAdd(props) {
    useEffect(() => {
        console.log(props)
        props.getuserAdd()
    }, [])
    const options = [
        {
            value: '管理员'
        },
        {
            value: '出题者'
        },
        {
            value: '浏览者'
        }
    ];

    function onChange(value) {
        console.log(value);
      }

    return (
        <div className={styles.userAdd}>
            <h2 className={styles.title}>添加用户</h2>
            <div className={styles.center}>
                <div className={styles.box}>
                    <div>
                        <p>添加用户</p>
                        <p>更新用户</p>
                    </div>
                    <div>
                        <input placeholder="请输入用户名"></input>
                    </div>
                    <div>
                        <input placeholder="请输入密码"></input>
                    </div>
                    <div>
                        <Cascader options={options} onChange={onChange} placeholder="浏览者" />
                    </div>
                    <div>
                        <Button type="primary">确定</Button>
                        <div>重置</div>
                    </div>
                </div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
        </div>
    )
}
//props的类型检查
UserAdd.propTypes = {

}
//props的默认值
UserAdd.defaultProps = {

}
const mapStateToProps = state => {
    // console.log("state", state)
    return state.user 
}
const mapDispatchToProps = dispatch => {
    return {
        getuserAdd(payload) {
            dispatch({
                type: 'user/userAdd',
                payload
            })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAdd)