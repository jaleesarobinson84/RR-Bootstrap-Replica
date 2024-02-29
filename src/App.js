import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {useState, useRef} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import StoreList from './components/StoreListing';
import Image from 'react-bootstrap/Image'



function App() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="App">
      <Image src="https://www.istockphoto.com/photo/multi-colored-vegetables-and-spices-frame-on-black-slate-background-overhead-view-gm1272587212-374810493?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-food-backgrounds&utm_medium=affiliate&utm_source=unsplash&utm_term=free+food+backgrounds%3A%3A%3A" fluid />;
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png" alt="Instacart Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Welcome to Virtual Shopping!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>

      <StoreList /> {/* Render the StoreList component here */}

    </div>
  );
}

export default App;
