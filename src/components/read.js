import { React } from "react";
import { Table, Button } from "semantic-ui-react";
//
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
    const [APIData, SetAPIData] = useState([]);
    useEffect(()=> {
        axios.get('https://63e5674c34cbbece435f79ae.mockapi.io/users').then((res)=> {
            SetAPIData(res.data)
        })
    }, [])
    const getData = () => {
        axios.get('https://63e5674c34cbbece435f79ae.mockapi.io/users')
        .then((getData) => {
            SetAPIData(getData.data)
        })
    }
    const onDelete = (id) => {
        axios.delete(`https://63e5674c34cbbece435f79ae.mockapi.io/users/${id}`).then(
            (e) => {
                getData(e.data)
            }
        )
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nnombre</Table.HeaderCell>
                        <Table.HeaderCell>lastName</Table.HeaderCell>
                        <Table.HeaderCell>Acces</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) =>{
                        return(
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox? 'checked' : 'Unchecked'}</Table.Cell>
                            <Link to='/update'>
                            <Table.Cell>
                                <Button onClick={()=>setData(data)}>Update</Button>
                            </Table.Cell>
                            </Link>
                            
                            <Table.Cell>
                                <Button onClick={()=>onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                            
                        </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

const setData = (data) => {
    let { id, firstName, lastName, checkbox} = data;
    localStorage.setItem('ID',id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox value', checkbox);

}




export default Read;
