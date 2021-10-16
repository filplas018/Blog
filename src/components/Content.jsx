import {Container} from "reactstrap";
const Content = props => {
    return (
        <Container className="p-2 main-content">
        {props.children}
        </Container>
    );
}

export default Content;