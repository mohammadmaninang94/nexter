import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <img src='img/logo.png' alt='Nexter Logo' className='header__logo' />
        <h3 className='heading-3'>Your own home:</h3>
        <h1 className='heading-1'>The ultimate personal freedom</h1>
        <button type='button' className='btn header__btn'>View our properties</button>
        <div className='header__seenon-text'>Seen on</div>
        <figure className='header__seenon-list'>
            <img src='img/logo-bbc.png' alt='Logo BBC' className='header__seenon-img' />
            <img src='img/logo-forbes.png' alt='Logo Forbes' className='header__seenon-img' />
            <img src='img/logo-techcrunch.png' alt='Logo TechCrunch' className='header__seenon-img' />
            <img src='img/logo-bi.png' alt='Logo Business Insider' className='header__seenon-img' />
        </figure>
    </header>
);

export default Header;