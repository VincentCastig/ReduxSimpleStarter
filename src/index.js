import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
