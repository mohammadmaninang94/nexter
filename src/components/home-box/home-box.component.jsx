import './home-box.styles.scss';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

const HomeBox = ({ id, src, name, country, rooms, area, price }) => (
    <div className='home'>
        <figure className='home__img-box'>
            <img src={src} alt={`House ${id}`} className='home__img' />
            <figcaption className='home__name'>{name}</figcaption>
        </figure>
        <svg className="home__like">
            <use xlinkHref={`img/sprite.svg#icon-heart-full`}></use>
        </svg>
        <div className='home__location'>
            <svg className="home__icon">
                <use xlinkHref={`img/sprite.svg#icon-map-pin`}></use>
            </svg>
            <span>{country}</span>
        </div>
        <div className='home__rooms'>
            <svg className="home__icon">
                <use xlinkHref={`img/sprite.svg#icon-profile-male`}></use>
            </svg>
            <span>{rooms} rooms</span></div>
        <div className='home__area'>
            <svg className="home__icon">
                <use xlinkHref={`img/sprite.svg#icon-expand`}></use>
            </svg>
            <span>{area} m<sup>2</sup></span>
        </div>
        <div className='home__price'>
            <svg className="home__icon">
                <use xlinkHref={`img/sprite.svg#icon-key`}></use>
            </svg>
            <span>{currencyFormatter.format(price)}</span>
        </div>
        <button type='button' className='btn home__button'>Contact realtor</button>
    </div>
);

export default HomeBox;