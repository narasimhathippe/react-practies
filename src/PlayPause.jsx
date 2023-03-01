import React,{useState,useRef} from 'react'
import VIDEO from "./video..mp4"
const PlayPause=()=> {
    let [video,setVideo]=useState(VIDEO)
    let [play,setPlay]=useState(false)
    let videoRef=useRef()

    let handleChange=()=>{
        if(!play)
          {
            setPlay(true)
            videoRef.current.play()
    }
    else{
        setPlay(false)
            videoRef.current.pause()
    }
}
  return (
    <div>
        <video src={video} ref={videoRef} onClick={handleChange}></video>
    </div>
  )
}

export default PlayPause