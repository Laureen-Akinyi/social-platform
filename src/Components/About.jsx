import React from 'react'
import { OpenNav } from './OpenNav'

const About = () => {
  return (
      <main className='About'>
        <OpenNav />
          <h2>About</h2>
          <p style={{ marginTop: "1rem" }}>This a blog application that serves both open blogs and premium blogs.</p>
      </main>
  )
}

export default About