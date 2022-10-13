import React from 'react'
import { Card } from 'react-bootstrap';
import Style from './style.module.scss';

const Launch = (props) => {
    return (
        <Card>
            <Card.Header>
                {props.name}
            </Card.Header>
            <Card.Body>
                <div className={Style.imageWrapper}>
                    <img src={props.links.patch.large} alt={props.name} className={Style.image} />
                </div>
            </Card.Body>
            <Card.Footer className={Style.details}>
                {props.details ?? props.name}
            </Card.Footer>
        </Card>
    )
}

export default Launch