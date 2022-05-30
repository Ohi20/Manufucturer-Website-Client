import React from 'react';
import Footer from '../Shared/Footer';

const NotFound = () => {
    return (
        <div>
            <div className='mt-10'>
            <h2 className='text-center font-bold text-red-700 mb-10 text-xl'>Not Found</h2>
            <div>
            <div class="mockup-code">
  <pre data-prefix=">" class="text-red-500 font-bold text-xl"><code>The Page You Are Looking For Is Not Found</code></pre>
  <pre data-prefix="*" class="text-gray-100 font-bold text-xl"><code>404</code></pre> 
  <pre data-prefix="?" class="text-warning font-bold text-xl"><code>Please try a different Route</code></pre> 
  <pre data-prefix="!" class="text-green-500 font-bold text-xl"><code>Provide the link carefully</code></pre>
</div>
            </div>
            
        </div>

        <div className='text-center mt-8 mb-5'>
            <h2 className='text-green-500 font-bold mb-5'>Click Here For Fun</h2>
        <label class="swap swap-flip text-9xl">
  
  
  <input type="checkbox" />
  
  <div class="swap-on">😈</div>
  <div class="swap-off">😇</div>
</label>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default NotFound;