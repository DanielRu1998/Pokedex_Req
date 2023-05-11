import { useSelector } from 'react-redux';

import defaultImage from '../images/default.png';

const Image = () => {
    const { name, image } = useSelector((store) => store.details);

    return (
        <div className="image_only">
            <h2>{name ? name : 'No Image'}</h2>
            {image ? (
                <img src={image}  alt={name} />
            ) : (
                <img src={defaultImage}  alt="nonePokemon"/>
            )}
        </div>
    )
};

export default Image;
