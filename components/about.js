import styles from './About.module.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

export default function About() {
    const techs = ['Java', 'Python', 'C#', 'JavaScript', 'Flask', 'NodeJS', 'React', 'Vue', 'HTML & CSS', 'Tensorflow', 'Docker']
    return(
        <>
            <section id="about" className={styles.about}>
                <div className={styles.title}>ABOUT</div>
                <Container>
                    <Row xs={1} md={2} lg={2}>
                        <Col md={4} lg={4} className={"d-flex justify-content-center " + styles.about_img_col}>
                            <Card.Img src="/profile.jpeg" className={styles.about_img}>
                            </Card.Img>
                        </Col>
                        <Col md={8} lg={8} className={styles.about_descr_col}>
                            <p className={styles.about_descr}>
                                Hi! I’m <span>Vincent</span>, a recent computer science graduate from the 
                                <span>{' '}<a href="https://www.uq.edu.au/" target="_blank">University of Queensland</a>.</span> <br/> <br/>
                                I am currently looking for a job as a <span>software engineer.</span> Most of my
                                experiences are in <span>web development</span>, but recently I also started to take interest in
                                <span>machine learning.</span> <br/> <br/>
                                This is my <span>portfolio</span> website, created to showcase my current and future works. 
                                I plan to do more <span>exciting projects</span> to improve my skills. <br/> <br/>
                                Some of the technolgies I’ve been using:
                            </p>
                            <div>
                                {techs.map((item, index) => (
                                    <>
                                        <Badge pill className={styles.tech_badges} key={index}>{item}</Badge>{' '}
                                    </>
                                ))}
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}