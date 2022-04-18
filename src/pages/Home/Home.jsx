import React from 'react'
import Card from '../../components/Card/Card'
import SignUp from '../../components/SignUp/SignUp'
import HomeWraper from './HomeWrapper'

function Home() {
  return (
    <HomeWraper>
      <h2>Create flashcards and make your study a lot easier and funnier!</h2>
      <section>
        <SignUp />
        <Card />
      </section>
    </HomeWraper>
  )
}

export default Home