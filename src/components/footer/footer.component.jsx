import './footer.styles.scss';

const Footer = () => (
    <footer className='footer'>
        <ul className='nav'>
            <li className='nav__item'><a href='#link' className='nav__link'>find your dream house</a></li>
            <li className='nav__item'><a href='#link' className='nav__link'>request proposal</a></li>
            <li className='nav__item'><a href='#link' className='nav__link'>download home planner</a></li>
            <li className='nav__item'><a href='#link' className='nav__link'>contact us</a></li>
            <li className='nav__item'><a href='#link' className='nav__link'>submit your property</a></li>
            <li className='nav__item'><a href='#link' className='nav__link'>come work with us!</a></li>
        </ul>
        <p className="copyright">
            &copy; Copyright 2021 by Mohammad Maninang.
        </p>
    </footer>
);

export default Footer;