import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import styles from './Modal.module.scss'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faDiscord } from '@fortawesome/free-brands-svg-icons'
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
                    {data.href && data.href.web?
                        <a className={styles.visit_site_button} href={data.href.web} target="_blank">
                            Visit Site
                        <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.icon} size={"sm"}></FontAwesomeIcon>
                        </a>
                    :<></>
                    }
                    {data.href && data.href.discord?
                        <a className={styles.visit_site_button} href={data.href.web} target="_blank">
                            Check the Bot
                        <FontAwesomeIcon icon={faDiscord} className={styles.icon} size={"sm"}></FontAwesomeIcon>
                        </a>
                    :<></>
                    }
                    {data.href && data.href.gitlab?
                        <a className={styles.visit_site_button} href={data.href.gitlab} target="_blank">
                            See Source Code
                        <FontAwesomeIcon icon={faGitlab} className={styles.icon} size={"sm"}></FontAwesomeIcon>
                        </a>
                    :<></>
                    }
                    {data.href && data.href.github?
                        <a className={styles.visit_site_button} href={data.href.github} target="_blank">
                            See Source Code
                        <FontAwesomeIcon icon={faGithub} className={styles.icon} size={"sm"}></FontAwesomeIcon>
                        </a>
                    :<></>
                    }
                </div>
            </Modal.Body>
            <Modal.Footer className={styles.modal_footer}>
                <Button onClick={props.onHide} className={styles.close_button}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}