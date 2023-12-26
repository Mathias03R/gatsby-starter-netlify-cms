import React from 'react';

function Header(){
    const scrollToLetter = (letter) => {
        const containers = document.querySelectorAll('.person-div');
    
        const targetContainer = [...containers].find(container => {
            const person = container.querySelector('.person-name');
            return person && person.textContent.trim().toUpperCase().startsWith(letter);
        });
        if (targetContainer) {
            targetContainer.scrollIntoView({ behavior: 'smooth', block: "center"});
        }
    };
    return(
        <header id="header">
            <div className="menu" id="container-top-navbar-responsive">
                <nav>
                    <p>
                        <button className="material-icons nav-btn" id="menu-button-responsive">menu</button>
                    </p>
                </nav>
            </div>
            <div className="menu" id="container-top-navbar">
                <nav>
                    <ul id="ul-nav">
                        <li><button onClick={() => scrollToLetter('A')} className="nav-btn">A</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('B')} className="nav-btn">B</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('C')} className="nav-btn">C</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('D')} className="nav-btn">D</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('E')} className="nav-btn">E</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('F')} className="nav-btn">F</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('G')} className="nav-btn">G</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('H')} className="nav-btn">H</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('I')} className="nav-btn">I</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('J')} className="nav-btn">J</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('K')} className="nav-btn">K</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('L')} className="nav-btn">L</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('M')} className="nav-btn">M</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('N')} className="nav-btn">N</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('O')} className="nav-btn">O</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('P')} className="nav-btn">P</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('Q')} className="nav-btn">Q</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('R')} className="nav-btn">R</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('S')} className="nav-btn">S</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('T')} className="nav-btn">T</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('U')} className="nav-btn">U</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('V')} className="nav-btn">V</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('W')} className="nav-btn">W</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('Y')} className="nav-btn">Y</button></li>
                        <span>-</span>
                        <li><button onClick={() => scrollToLetter('Z')} className="nav-btn">Z</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;
