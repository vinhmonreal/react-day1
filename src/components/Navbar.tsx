import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


export default function NavigationBar(){
    return (
        <Navbar bg="dark">
            <Container className='navbar'>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="src\images\navbar-icon.png "
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#Cakes" className='cakes'>
                    <h1>Start Order</h1>
                </Navbar.Brand>
                <Navbar.Brand href="#" className='login'>
                    <h1>Sign In</h1>
                </Navbar.Brand>
                <Navbar.Brand href="#register" className='register'>
                    <h1>Sign Up</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>

    )
}