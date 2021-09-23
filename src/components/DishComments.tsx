import { Container, Row, Col, ListGroup } from "react-bootstrap"
import MenuDishes from './Types/Dishes'

interface selectedDish {
    selectedPasta: MenuDishes | null
}

const DishComments = ({ selectedPasta }: selectedDish) => (
    <Container>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
                <ListGroup>
                    {
                        selectedPasta ? selectedPasta.comments.map(c => (
                            <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                        )) : <p>Click on a dish to read its comments</p>
                    }
                </ListGroup>
            </Col>
        </Row>
    </Container>
)

export default DishComments