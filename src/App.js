import { HashRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import Chat from './routes/Chat';
import Chat2 from './routes/Chat2';
import Hashtag from './routes/Hashtag';
import More from './routes/More';
import Navigation from './components/Navigation';

import Profile from './routes/Profile';

function App() {
  return (
    <div>
    <HashRouter>
      <Navigation />
      <Route path="/" exact={ true } component={ Home } />
      <Route path="/chat" component={ Chat } />
      <Route path="/hashtag" component={ Hashtag } />
      <Route path="/more" component={ More } />
      <Route path="/profile" component={ Profile } />
      <Route path="/chat2" component={ Chat2 } />
    </HashRouter>
    </div>
  );
}

export default App;
