import styles from './Project.module.scss'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Button from 'react-bootstrap/Button'
import CenteredModal from './modal'
import {useState} from 'react'

// import { getAllProjects } from '../lib/projects'

// export async function getStaticProps() {
//     console.log("test")
//     const allProjectsData = getAllProjects()
//     // return {
//     //   props: {
//     //     allPostsData
//     //   }
//     // }
// }

export default function Project({ allProjectsData }) {
    // console.log(allProjectsData)
    const [modalShow, setModalShow] = useState(false)
    const [modalData, setModalData] = useState({})

    return(
        <>
            <CenteredModal
                show={modalShow}
                data={modalData}
                onHide={() => setModalShow(false)}
            />
            <section id="project" className={styles.project}>
                <div className={styles.title}>PROJECTS</div>
                <Row className={styles.card_deck} xs={1} md={2} lg={2}>
                    {allProjectsData.map((project, index) => (
                        <Col className={styles.card_col} key={index}>
                            <Card className={styles.project_card}>
                                <Card.Img variant="top" className={styles.project_image} 
                                    src={"projects/"+project.id+"/"+project.thumbnail}></Card.Img>
                                <div className={styles.card_overlay}>
                                    <div className={styles.card_overlay_text}>
                                        <div className={styles.text_title}>{project.title}</div>
                                        <div className={styles.text_descr}>{project.technology}</div>
                                        {/* <Button href="/"> */}
                                        <a className={styles.learn_more} 
                                            onClick={() => {
                                                        setModalShow(true);
                                                        setModalData(project);
                                                    }}>
                                            Learn More</a>
                                        {/* </Button> */}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                    {/* <Col className={styles.card_col}>
                        <Card className={styles.project_card}>
                            <Card.Img variant="top" className={styles.project_image} src="projects/2/thumb.PNG"></Card.Img>
                            <div className={styles.card_overlay}>
                                <div className={styles.card_overlay_text}>
                                    <div className={styles.text_title}>Event Scheduler</div>
                                    <div className={styles.text_descr}>React JS / Firebase</div>
                                    <Link href="/">
                                        <a className={styles.learn_more}>Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col className={styles.card_col}>
                        <Card className={styles.project_card}>
                            <Card.Img variant="top" className={styles.project_image} src="projects/3/thumb.PNG"></Card.Img>
                            <div className={styles.card_overlay}>
                                <div className={styles.card_overlay_text}>
                                    <div className={styles.text_title}>Train Reservation System</div>
                                    <div className={styles.text_descr}>Python / Flask</div>
                                    <Link href="/">
                                        <a className={styles.learn_more}>Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col className={styles.card_col}>
                        <Card className={styles.project_card}>
                            <Card.Img variant="top" className={styles.project_image} src="projects/1/thumb.PNG"></Card.Img>
                            <div className={styles.card_overlay}>
                                <div className={styles.card_overlay_text}>
                                    <div className={styles.text_title}>Leisure Time</div>
                                    <div className={styles.text_descr}>Python / Flask</div>
                                    <Link href="/">
                                        <a className={styles.learn_more}>Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Col> */}
                </Row>
            </section>
        </>
    )
}