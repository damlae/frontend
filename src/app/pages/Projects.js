import React from 'react'
import { ProjectList, NavBar, Footer } from '../components/'
import styled from 'styled-components'

const MinHeight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Projects = () => {
  return (
    <MinHeight>
      <div>
        <NavBar />
        <div style={{ marginLeft: '50px', marginRight: '50px' }}>
            <ProjectList />
        </div>
      </div>
      <Footer />
    </MinHeight>
  )
}

export default Projects
