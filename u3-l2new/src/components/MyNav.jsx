import { Navbar, Nav } from 'react-bootstrap'

const MyNav = () => (
  <Navbar bg="warning" variant="warning">
    <Navbar.Brand href="#home" className='ms-3'>FantasyLibrary</Navbar.Brand>
    <Nav className="ms-auto me-3">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#browse">Browse</Nav.Link>
    </Nav>
  </Navbar>
)

export default MyNav
