import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import Form from 'react-bootstrap/Form';


const RegistroFecha =({Submit})=>{
    const [date, setDate] = useState(new Date());
    const [disabled, setDisabled] =useState(true);
    const  times = ["10:30", "11:00", "11:30"];
    const [time, setTime] = useState("")

    const onChange =(e) =>{
        setDate(e.date)
        setDisabled(false)
    }
    return(
<div>
    <p>Elige una fecha</p>
    <Calendar onChange={onChange} value={date}/>
    <Form.Select disabled={disabled} name="hora" >
        {times.map(dt =>
            <option>{dt}</option>)}
    </Form.Select>
    <Button onClick={()=>Submit(date)}>Aceptar</Button>

    
    
</div>
    );
}
export default RegistroFecha