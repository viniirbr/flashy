import React from 'react'
import Card from '../../components/Card/index'
import SignUp from '../../components/SignUp/index'
import HomeWraper from './HomeWrapper'

function Home() {
  return (
    <HomeWraper>
      <h2>Create <span>flashcards</span> and make your study a lot easier and funnier!</h2>
      <section>
        <SignUp />
        <Card />
      </section>
    </HomeWraper>
  )
}

export default Home