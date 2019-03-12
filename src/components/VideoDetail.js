import React from 'react';
import './VideoDetail.css'

const VideoDetail = ({video})=>{


    if(video){

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;



        return(
            <div>
                <div className="ui embed">
                   <iframe src={videoSrc}></iframe> 
                </div>
                <div className="ui segment content " id="offgrey">
                    <div className="ui header" style={{color: 'white'}}>{video.snippet.title}</div>
                    <div className="ui description" style={{color: 'grey'}}>{video.snippet.description}</div>
                </div>
            </div>
        );
    }
    else{
        return <div></div>;
    }
}

export default VideoDetail;