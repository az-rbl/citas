import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import Form from 'react-bootstrap/Form';


const Registro_fecha =()=>{
    const [date, setDate] = useState(new Date());
    const [disabled, setDisabled] =useState(true);
    const  dates = ["10:30", "11:00", "11:30"]
    const onChange =(e) =>{
        setDate(e.date)
        setDisabled(false)
    }
    return(
<div>
    
    <p>Elige una fecha</p>
    <Calendar onChange={onChange} value={date}/>
    <p>Elige una hora</p>
    <Form.Select disabled={disabled}>
        {dates.map(dt =>
            <option>{dt}</option>)}
    </Form.Select>
    
    
</div>
    );
}
export default Registro_fecha