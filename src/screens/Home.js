import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { storePoke } from '../redux/detailSlice';

import Image from "../components/Image";
import Pagination from "../components/Pagination";

import desk from '../images/desk.svg';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pokes, setPokes] = useState([]);
    const [pagination, setPagination] = useState({
        maxItems: 151,
        itemsPerPage: 20,
        itemsPerPageFixed: 20,
        offset: 0,
        page: 0
    });

    const callPokes = async() => {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pagination.itemsPerPage}&offset=${pagination.offset}`);
            const response = await data.json();
            setPokes(response.results);
        } catch (err) {
            console.log('Error to fetch data');
        }
    };

    const handleClickPoke = (name, isOneClick) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((data) => data.json())
            .then((res) => {
                dispatch(storePoke(res));
                if (!isOneClick) navigate('/details');
            }).catch((err) => {
                console.log(`Error Fetching ${name}: ${err}`);
            });
    }

    useEffect(() => {
        callPokes();
        // eslint-disable-next-line
    }, [pagination]);

    return (
        <div>
            <div className="main">
                <div>
                    <img src={desk} alt="logo" style={{width: '30%'}} />
                    {pokes.length > 0 ? (
                        <>
                            {pokes.map((item, idx) => (
                                <div 
                                    key={`${item.name}_${idx}`}
                                    className="item_list"
                                    onClick={() => handleClickPoke(item.name, true)}
                                    onDoubleClick={() => handleClickPoke(item.name, false)}
                                >
                                    {item.name}
                                </div>
                            ))}
                        </>
                    ) : null}
                </div>
                <Image />
            </div>
            <Pagination pagination={pagination} setPagination={setPagination} />
        </div>
    )
};

export default Home;
