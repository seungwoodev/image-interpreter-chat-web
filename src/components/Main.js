import React, { useEffect, useState } from 'react';
import Upload_file from './Upload_file';
import './css/Main.css' 
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
 
function Main(props) {
	// App 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
	const isLogin = props.isLogin
    const [userId, setUserId] = useState(sessionStorage.getItem('user_id'))

    const [uploadClicked, setUploadClicked] = useState(false)
    
    const onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        // App 으로 이동(새로고침)
        document.location.href = '/'
    }

    const uploadPage = () => {
        console.log('uploadPage clicked');
        setUploadClicked(true);
        // this.props.history.replace(path, state);
        // document.location.href = '/user_info'
    }
 
    return(
        <div>
            {uploadClicked ? 
                <Upload_file userId = {userId}/> : 
                    <div class="maindiv">
                        <div class="mb-2">
                            <Button variant="primary" size="lg" onClick={onLogout}>Logout
                            </Button>{' '}
                            <Button variant="secondary" size="lg" onClick={uploadPage}>
                                Upload Image
                                </Button>
                                </div>
                    </div>}
        </div>
    )
}
 
export default Main;