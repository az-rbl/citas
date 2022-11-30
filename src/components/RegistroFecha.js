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
        setDate(e.value);
        console.log(e.value);
        setDisabled(false);
    }
    const onClick =(e)=>{
        let d =date.toDateString() + e.target.hora
        setDate(d);
        console.log(d);
    }


    return(
<div>
    <p>Elige una fecha</p>
    <Calendar onChange={setDate} value={date}/>
    <Form.Select  name="hora" onChange={setTime} >
        {times.map(dt =>
            <option>{dt}</option>)}
    </Form.Select>
    <Button type="submit"onClick={()=>Submit(date, time)}>Aceptar</Button>

    
    
</div>
    );
}
export default RegistroFecha