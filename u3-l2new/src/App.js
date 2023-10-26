import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import ListOfBooks from './components/ListOfBooks'
import CommentList from './components/CommentArea'

import fantasy from './fantasy/fantasy.json'
import CommentArea from './components/CommentArea'
import addComment from './components/AddComment'
function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <CommentArea> 
          <CommentList/>
          <addComment/>
        </CommentArea>
       
        <ListOfBooks books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
