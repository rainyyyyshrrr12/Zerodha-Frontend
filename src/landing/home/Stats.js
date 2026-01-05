import React from 'react';
function Stats() {
    return (  
        <div className="container p-3 ">
            <div className='row '>
                <div className='col-6 p-5'>
                    <h1>Trust with confidence</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <h3>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>
                    <h3>The Zerodha universe</h3>
                    <p className='text-muted'>We are building a financial ecosystem that helps you invest, trade, learn, and grow your wealth.</p>

                </div>
                <div className='col-6 p-5'>
                    <img src='media/ecosystem.png' alt='Stats' style={{width:"95%"}}/>
                    <div className='text-center mt-5'>
                        <a href=''>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                         <a href=''>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Stats;
