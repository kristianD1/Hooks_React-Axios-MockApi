import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Update =()=> {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [checkbox, setcheckbox] = useState(false);
    const [id, setID] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        setID(localStorage.getItem('ID'))
        setfirstName(localStorage.getItem('First Name'));
        setlastName(localStorage.getItem('Last Name'));
        setcheckbox(localStorage.getItem('Checkbox value'))
    },[]);

    const updateAPIData= async () => {

        await axios.put(`https://63e5674c34cbbece435f79ae.mockapi.io/users/${id}`,{
            firstName,lastName, checkbox
        }).then(
            navigate('/read')
        )
    }

    
    return(
        <Form className="create-form" onSubmit={(e)=>{e.preventDefault(); updateAPIData()}}>
            <Form.Field>
                <label>Nombres: </label>
                <input placeholder="Nombre" value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Apellidos: </label>
                <input placeholder="Apellido" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label= 'Acepto los terminos y condiciones..' value={checkbox} onChange={(e) => setcheckbox(!checkbox)}/>
            </Form.Field>
            <Button type="submit">Actualizar</Button>
        </Form>
    )
}

export default Update