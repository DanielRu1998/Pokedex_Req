import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const Details = () => {
    const { name, image, moves, abilities } = useSelector((store) => store.details);

    return (
        <div className="details">
            <div className="body">
                <div className="card">
                    <div className="card_header">
                        <h3>{name}</h3>
                        <img src={image} alt={name}/>
                    </div>
                    <div className="card_body">
                        <div className='abilities'>
                            <h2>Abilities</h2>
                            {abilities.length > 0 ? (
                                <div className="box">
                                    {abilities.map(({ability}, idx) => (
                                        <div
                                            className="item"
                                            key={`${ability.name}_${idx}`}
                                        >
                                            {ability.name}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        <hr />
                        <div className='moves'>
                            <h2>Moves</h2>
                            {moves.length > 0 ? (
                                <div className="box">
                                    {moves.map(({move}, idx) => (
                                        <div
                                            className="item"
                                            key={`${move.name}_${idx}`}
                                        >
                                            {move.name}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div style={{ margin: '1rem' }}>
                    <Link
                        to={'/'}
                        style={{
                            border: '1px solid black',
                            textDecoration: 'none',
                            padding: '1rem',
                            borderRadius: '1rem',
                            fontWeight: '700',
                            color: 'black'
                        }}
                    >
                        🏠 Home
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Details;
