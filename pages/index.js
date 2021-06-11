import Head from 'next/head'
import Header from '../components/header'
import { getLanguages } from '../lib/api'

export default function Home({ languages }) {
  return (
    <>
      <Head>
        <title>Зачем это все?</title>
      </Head>

      <body>
        <div class="container">
          <Header languages={languages} />
          <main class="page">
            <div class="main">
              <div class="main__content">
                <h1 class="main__title">Зачем это все?</h1>
                <div class="main__text text">
                  Этот сайт создан для сравнения языков программирования.
                </div>
                <h2 class="main__authors">Авторы</h2>
                <h3 class="author__name">Евгений Лазо</h3>
                <h3 class="author__name">Александр Беспалов</h3>
                <h3 class="author__name">Никита Макарычев</h3>
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  )
}

export async function getStaticProps() {
  const languages = getLanguages()
  return {
    props: {
      languages
    },
  }
}