import { Form, FormGroup, Button     } from "react-bootstrap"
const  Registro_paciente =() =>{
    return(
        <div>
            <p>Registro paciente</p>
        <Form>

        <FormGroup>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Introduce tu nombre" />
        <Form.Text className="text-muted">
          No compartiremos tus datos personales
        </Form.Text>
        </FormGroup>

        <FormGroup>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Te enviaremos los datos de tu cita a este correo.
        </Form.Text>
        </FormGroup>

        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
        </div>

    )
}
export default Registro_paciente