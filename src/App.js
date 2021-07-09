import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom' 

import StreamList from './components/streams/StreamList'
import StreamShow from './components/streams/StreamShow'
import StreamCreate from './components/streams/StreamCreate'
import StreamEdit from './components/streams/StreamEdit'
import StreamDelete from './components/streams/StreamDelete'
import Header from './components/Header'

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={StreamList} />
        <Route path='/streams/show' component={StreamShow} />
        <Route path='/streams/create' component={StreamCreate} />
        <Route path='/streams/edit' component={StreamEdit} />
        <Route path='/streams/delete' component={StreamDelete} />
      </BrowserRouter>
    </div>
  );
}

export default App;
