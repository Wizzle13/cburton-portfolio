import React, { useState } from 'react';
import Nav from './Nav';

function Header() {
  const [contactSelected, setContactSelected] = useState(false);
    return (
        <header className="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
              <span>Chris Burton</span>
            </a>
          </h2>
          <Nav>
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          </Nav>
        </header>
    );
}

export default Header;