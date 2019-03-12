import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state={videos: [], selectedVideo: null};
    
    
    onTermSubmit= async (term)=>{
        const response = await youtube.get(
            '/search',{
                params: {
                    q: term
                }
            }
        );

        this.setState({videos: response.data.items});
        this.setState({selectedVideo: response.data.items[0]});
    }

    onVideoSelect = (video)=>{
        this.setState({selectedVideo: video});
    }


    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmitForm={this.onTermSubmit}/>
                <VideoDetail className="two wide column" video={this.state.selectedVideo}/>
		<div style={{overflowY: 'scroll' , height: '500px',marginTop:'10px'}}>
                	<VideoList className="two wide column" videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
		</div>            
	</div>);
    }
}

export default App;
