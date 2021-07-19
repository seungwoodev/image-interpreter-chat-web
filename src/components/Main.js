import React, { useEffect, useState } from 'react';
import Upload_file from './Upload_file';
import { Link } from 'react-router-dom';
 
function Main(props) {
	// App 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
	const isLogin = props.isLogin
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
                <Upload_file /> : 
                    <div>
                        <div>
                            <h2>Main 페이지</h2>
                        </div>
                        <div>
                            <button type='button' onClick={onLogout}>Logout</button>
                        </div>
                        <div>
                            <button type='button' onClick={uploadPage}>uploadPage</button>
                        </div>
                    </div>}
        </div>
    )
}
 
export default Main;