import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div class="social-container" id="iconLink">
                <ul className="flex-row">
                    <li>
                        <a class="btn" href="https://github.com/Wizzle13" target="new">
                            <i class="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a class="btn" href="https://www.linkedin.com/in/christopher-burton-aba9651b9/" target="new">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
                
                
            </div>
        </footer>
    )
}

export default Footer;