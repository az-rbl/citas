import { Form, Button , Row, Col} from "react-bootstrap"


const Home = ({Submit}) => {

    return(
        <Row>
            <Col>
        <Button onClick={Submit}>Nueva Cita</Button>
        </Col>
        <Col>
        <Form>
            <Form.Group>
        <Form.Control type="text" placeholder="Folio de cita" />
            <Form.Text/>
            <Button>Consultar cita</Button>
            </Form.Group>
        </Form>
        </Col>
       
        </Row>
    );
}
export default Home;