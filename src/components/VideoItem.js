import React from 'react';
import './VideoItem.css';

const VideoItem=({video,onVideoSelect})=>{

    var relDate = video.snippet.publishedAt.slice(0,10);


    return (
            <div onClick={()=>onVideoSelect(video)} className="item" style={{padding: '10px',cursor: 'pointer'}}>
                <div className="image">
                    <img src={video.snippet.thumbnails.medium.url} alt=""/>
                </div>
                <div className="content" id="whiteText">
                    <a className="header" style={{color: 'white'}} href="/">{video.snippet.title}</a>
                    <div className="meta">
                        <span>Released on {relDate}</span>
                    </div>
                </div>
            </div>
    );
}

export default VideoItem;
