import { Form, FormGroup, Button     } from "react-bootstrap"

const  RegistroPaciente =({RPSubmit}) =>{
const estudios =["Tomografía", "Rayos X", "Ultrasonido"]
    return(
        <div>
            <p>Registro paciente</p>
        <Form onSubmit={RPSubmit}>

        <FormGroup>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Introduce tu nombre" name ="nombre"/>
        <Form.Text className="text-muted">
          No compartiremos tus datos personales
        </Form.Text>
        </FormGroup>

        <FormGroup>
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name = "email" />
        <Form.Text className="text-muted">
          Te enviaremos los datos de tu cita a este correo.
        </Form.Text>
        </FormGroup>

        <FormGroup>
        <Form.Label>Estudio</Form.Label>
        <Form.Select name = "estudio">
        {estudios.map(et =>
            <option>{et}</option>)}
        </Form.Select>
        </FormGroup>

        <Button variant="primary" type="submit">
        Aceptar
      </Button>
      </Form>
        </div>

    )
}
export default RegistroPaciente