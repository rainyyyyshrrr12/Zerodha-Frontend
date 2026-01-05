import React from 'react';
function Awards() {
    return ( 
        <div className="container p-5 mb-5">
            <div className='row text-center'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'  />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>We are the largest stock broker in India with over 10 million clients.
                    We have been awarded the best stock broker in India for 5 consecutive years.</p>
                    <ul>
                        <li>
                            <p>Do better with money</p>
                        </li>
                
                         <li>
                            <p>Customer-first always</p>
                        </li>
                         <li>
                            <p>No spam or gimmicks</p>
                        </li>
    
                    </ul>
                    <img src='media/pressLogos.png' style={{width:"90%"}}/>
                </div>
                </div>
                </div>
     );
}

export default Awards;