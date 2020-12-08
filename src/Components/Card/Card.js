import React from 'react';
import './Card.css';
const Card = () => {
    return(
        <div className='card'>
                    <div className='imgBox'>
                        <img src='https://images.unsplash.com/photo-1548013146-72479768bada?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80' alt='Taj Mahal'></img>
                    </div>
                    <div className='content'>
                        <h1>Heading</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
        </div>
    );
}

export default Card;