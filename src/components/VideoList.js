import React from 'react';
import VideoItem from './VideoItem';


const VideoList=({videos,onVideoSelect})=>{
    const renderedList = videos.map((video)=>{   
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId || video.id.channelId} video={video}/>
    });


    return(
        <div className="ui items" style={{overflowX: 'clip',overflowY: 'scroll',maxHeight: '1000px'}}>{renderedList}</div>
    );
}

export default VideoList;