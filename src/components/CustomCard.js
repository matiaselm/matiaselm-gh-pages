import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from 'styles/styles';
import img from 'styles/images';

const CustomCard = (props) => {
  let localImg = ''
  switch (props.type) {           // Check the type of the project
    case 'kotlin': { localImg = img.kotlin } break;
    case 'javascript': { localImg = img.javascript } break;
    case 'react': { localImg = img.react } break;
    case 'other': { localImg = img.other } break;
    case 'web': { localImg = img.web } break;
    default: { localImg = img.unknown } break;
  }

  return (
    <Card style={styles.card}>
      {props.imgSrc != '' ?
        <Card.Img height="200" variant="top" src={props.imgSrc} style={{ objectFit: 'cover' }} />
        :
        <Card.Img height="200" variant='top' src={localImg} style={{ objectFit: 'cover' }} />
      }
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle style={styles.mutedText}>{props.subtitle}</Card.Subtitle>

        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.projectPage}>View</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
