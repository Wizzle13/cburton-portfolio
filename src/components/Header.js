import React, { useState } from 'react';
import Nav from './Nav';

function Header() {
  const [contactSelected, setContactSelected] = useState(false);
    return (
        <header className="flex-row d-flex p-3">
          <h1 class="me-auto p-2">
            <a data-testid="link" href="/">
              <span>Chris Burton</span>
            </a>
          </h1>
          <div class="p-2 align-items-end">
            <Nav>
              contactSelected={contactSelected}
              setContactSelected={setContactSelected}
            </Nav>
          </div>
        </header>
    );
}

export default Header;