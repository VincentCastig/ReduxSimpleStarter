import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
const API_KEY = 'AIzaSyDxl90QCpVnsqlcaZ6ArUA_5OoodZCTILk';
// import App from './components/app';
// import reducers from './reducers';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards'); 
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 900);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
