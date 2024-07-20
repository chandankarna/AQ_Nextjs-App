import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'

const Loader = () => {
    const [domloaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true)
    }, []);
  return (
    <div className='screen-loader'>
        <div className="load">
            <div style={{'height':'130px'}}>
                {domloaded && <ReactPlayer width={'130px'} height={'auto'} url={'/loader.mp4'} playing={true} muted={true} playsinline={true} />} 
            </div>
        </div>
    </div>
  )
}

export default Loader