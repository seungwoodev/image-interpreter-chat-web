import React from 'react'
import Icon from '@ant-design/icons';
import './Footer.css';
function Footer() {
    return (
        <div class='footer'style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem',
            backgroundColor: '#34495e', color: 'white'

        }}>
            <p> UniChat  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer