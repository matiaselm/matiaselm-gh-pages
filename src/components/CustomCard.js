import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from 'styles/styles';

const CustomCard = (props) => {
    return (<Card style={styles.card}>
        <Card.Img variant='top' src={props.imgSrc}></Card.Img>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle style={styles.mutedText}>{props.subtitle}</Card.Subtitle>

            <Card.Text>{props.text}</Card.Text>
            <Card.Link href={props.projectPage}>View</Card.Link>
        </Card.Body>
    </Card>)
}

export default CustomCard;