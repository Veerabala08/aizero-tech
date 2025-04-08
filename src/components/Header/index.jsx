import { useLocation, Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Image,
} from 'react-bootstrap';
import AILogo from '../../assets/aiz1.png';
import './index.css';
const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar expand="lg" sticky="top" className='Header'>
      <Container className="px-4">
        <Navbar.Brand as={Link} to="/">
          <Image src={AILogo} width={180} alt="AIZero Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavDropdown" />

        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto align-items-left">
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Nav.Link>
            {/* Services Dropdown with Main Link */}
            <div className="d-flex nav-item">
              <Nav.Link
                as={Link}
                to="/services"
                className={`nav-link pe-0 ${isActive('/services') ? 'active' : ''}`}
              >
                Services
              </Nav.Link>
              <NavDropdown
                title={<span className="dropdown-toggle-icon" />}
                id="navbarDropdown"
                className="dropdown-toggle-split p-0"
                align="end"
              >
                <NavDropdown.Item as={Link} to="/services/technology-advisory" active={isActive('/services/technology-advisory')}>
                  Technology Advisory
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/digital-modernization" active={isActive('/services/digital-modernization')}>
                  Digital Modernization
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/infrastructure-management" active={isActive('/services/infrastructure-management')}>
                  Infrastructure Management
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/managed-it-services" active={isActive('/services/managed-it-services')}>
                  Managed IT Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/cloud-consulting-and-migration" active={isActive('/services/cloud-consulting-and-migration')}>
                  Cloud Consulting and Migration
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to="/about" className={isActive('/about') ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
