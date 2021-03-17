import headerLogo from '../images/Vector-logo.svg';


function Header() {
    return (
        <header className="header">
        	<img className="header__logo" src={headerLogo} alt="Место России" />
    	</header>
    );
}

export default Header;