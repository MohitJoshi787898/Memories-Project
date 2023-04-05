import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Posts from './components/Posts/Posts'
import Auth from './components/Auth/Auth'
import './App.css'
import { useEffect } from "react";
import {search} from "./actions/post";

import { useSelector,useDispatch } from "react-redux"
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));
function App() {
  const dispatch = useDispatch()
  const post =useSelector(state => state.post)


  

  useEffect(() => {
    dispatch(search())
   

  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts post={post} />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
  

  // return (
  //   // <Provider store={store}>

  //     <div>
  //       <Router>

  //   <Navbar/>
  //     <Routes>
  //       <Route path="/" element={<Posts />} />
  //       <Route path="/Auth" element={<Auth />} />
  //     </Routes>
  // </Router>
  
       
  //     </div>
  //   // </Provider>
  // )
}

export default App
