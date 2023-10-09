import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users } from '../../data';

const Details = () => {
    const parameters = useParams();//E um Hook pois tem o inicio com use

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const { id } = parameters; //{ id:123, text:'texto'}
       //find percorre para achar a condicao
        const result = users.find((element) => element.id === id);
        //result = { id: 123, image:{src:'',alt:''}, name:'', description:''}
        
        if (!result) {
            setUser(null);
            return;
        }
        setUser(result);
        //result = { image:{src:'',alt:''}, name:'', description:''}
    }, [parameters]);

    return (
        <div>
            <h1>Detalhes</h1>
            {user === undefined && (
                <div>
                    <p>Carregando...</p>
                </div>
            )}
            {user === null && (
                <div>
                    <p>Usuário não encontrado.</p>
                </div>
            )}
            {user && (
                <div>
                    <img alt={user.image.alt} src={user.image.src} width="250px" height="auto" />
                    <h2>{user.name}</h2>
                    <p>{user.description}</p>
                </div>
            )}
            <Link to='/'>Voltar</Link>
        </div>
    );
};

export default Details;