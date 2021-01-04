import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import styles from './Modal.module.scss'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CenteredModal(props) {
    const data = props.data
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName={styles.modal}
        >
            <Modal.Header  className={styles.modal_header}>
                {/* <Card.Img variant="top" src={"projects/"+data.id+"/"+data.thumbnail} className={styles.modal_image}></Card.Img> */}
                <Carousel>
                    {data.sub_thumbnails && data.sub_thumbnails.map((thumb, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className={"d-block w-100 "}
                                src={"projects/"+data.id+"/"+thumb}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Header>
            <Modal.Body className={styles.modal_body}>
                <h4 className={styles.modal_title}>{data.title}</h4>
                <p className={styles.modal_descr}>
                    {data.description}
                </p>
                <div>
                    <a className={styles.visit_site_button} href={data.href} target="_blank">
                        Visit Site
                        <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.icon}></FontAwesomeIcon>
                    </a>
                </div>
            </Modal.Body>
            <Modal.Footer className={styles.modal_footer}>
                <Button onClick={props.onHide} className={styles.close_button}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}