import { useState, useEffect } from "react";
import { Alert, Spinner, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText } from "reactstrap";
import axios from "axios";
import { API } from "../configuration/api";
import { useParams } from "react-router-dom";

const PostList = props => {
    const posty = [];
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);

        axios.get(API + "posts")

            .then(response => {
                if (Array.isArray(response.data)) {
                    setData(response.data);
                    setError(false);
                }
                else {
                    setData(null);
                    setError(false);
                }
                console.log(data);
            })
            .catch(error => {
                setError(true);
                setData(null);
            })
            .then(() => {
                setIsLoading(false);
            })
    },[]);
    if (error) {
        if (error.response) {
            return <Alert color="danger">There was an error ({error.response.status}).</Alert>
        }
        else {
            return <Alert color="danger">There was an unknown error.</Alert>
        }

    }
    else if (isLoading) {
        return <Spinner color="success" />
    }
    else if (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            posty.push(
                <Card>
                    <CardBody className="my-4 py-4">
                        <CardTitle tag="h2">{data[i].name}</CardTitle>
                        <CardSubtitle tag="h2">{data[i].content}</CardSubtitle>

                    </CardBody>
                </Card>
            )

        }
        return (

            posty
        );
    }
    else if (data === null && error === false) {
        return <Alert color="info">There is no posts</Alert>
    }
    else {
        return <Spinner color="primary" />;
    }
}

export default PostList;