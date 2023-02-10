import axios from "axios";
import { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Create =()=> {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [checkbox, setcheckbox] = useState(true);
    const postData =()=> {
        axios.post('https://63e5674c34cbbece435f79ae.mockapi.io/users', {
            firstName,
            lastName,
            checkbox
        }).then(
            setfirstName(''),
            setlastName(''),
            setcheckbox(false)
        )
    }
    return(
        <Form className="create-form" onSubmit={(e)=>{e.preventDefault();
        postData(firstName,lastName,checkbox)}}>
            <Form.Field>
                <label>Nombres: </label>
                <input placeholder="Nombre" value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Apellidos: </label>
                <input placeholder="Apellido" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label= 'Acepto los terminos y condiciones..' value={checkbox} onChange={(e) => setcheckbox(e.target.value)}/>
            </Form.Field>
            <Button type="submit">Continuar</Button>
        </Form>
    )
}

export default Create