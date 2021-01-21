import HomeBox from '../home-box/home-box.component';

import homes from '../../data/homes';

import './section-homes.styles.scss';

const SectionHomes = () => (
    <section className='homes'>
        {homes.map(({ id, ...otherProps }) => (
            <HomeBox key={id} id={id} {...otherProps} />
        ))};
    </section>
);

export default SectionHomes;