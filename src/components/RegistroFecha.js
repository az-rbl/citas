import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import Form from 'react-bootstrap/Form';


const RegistroFecha =({Submit})=>{
    const [date, setDate] = useState(new Date());
    const [disabled, setDisabled] =useState(true);
    const  dates = ["10:30", "11:00", "11:30"]
    const onChange =(e) =>{
        setDate(e.date)
        setDisabled(false)
    }
    return(
<div>
    <Form onSubmit={Submit}>
    <p>Elige una fecha</p>
    <Calendar name = "fecha" onChange={onChange} value={date}/>
    <p>Elige una hora</p>
    <Form.Select disabled={disabled} name="hora">
        {dates.map(dt =>
            <option>{dt}</option>)}
    </Form.Select>
    <Button variant="primary" type="submit" value ={date}>
        Aceptar
      </Button>
    </Form>
    
    
</div>
    );
}
export default RegistroFecha