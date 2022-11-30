import { Button } from "react-bootstrap";
const Cita =({Submit,email,estudio,fecha,hora,folio}) =>{
    return(
        <div>
            <h2>Tu cita ha sido exitosamente  programada</h2>
            <p>Estudio:{estudio}</p>
            <p>Fecha:{fecha}</p>
            <p>Hora:{hora}</p>
            <p>Folio:{folio}</p>
            <p>Esta información fué enviada a tu correo electrónico:{email}</p>
            <Button onClick={Submit}>Inicio</Button>
        </div>
    );
}
export default Cita;