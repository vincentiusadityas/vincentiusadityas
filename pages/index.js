import styles from '../styles/Index.module.css'

import React, {useState} from 'react'
import Layout from '../components/layout'
import Home from '../components/home'
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'

import { getAllProjects } from '../lib/projects'

export async function getStaticProps() {
    // console.log("test")
    const allProjectsData = getAllProjects()
    return {
      props: {
        allProjectsData
      }
    }
}

export default function LandingPage({ allProjectsData }) {

  return (
    <Layout>
      <div className={styles.styled_content}>
          <Home></Home>
          <Project allProjectsData={allProjectsData}></Project>
          <About></About>
          <Contact></Contact>
      </div>
    </Layout>
  )
}
