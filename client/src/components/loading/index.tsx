import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    return ( 
        <div className='flex  justify-center items-center mt-4'>
        <ClipLoader color='#000' loading={true}/>
        </div>
     );
}
 
export default Loading;