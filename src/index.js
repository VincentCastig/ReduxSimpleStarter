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
      videos: []
    }
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
