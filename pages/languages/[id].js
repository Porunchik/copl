import Head from 'next/head'
import Header from '../../components/header'
import { getLanguages } from '../../lib/api'

function Language({ languages, language }) {
    return (
        <>
            <Head>
                <title>{language.name}</title>
            </Head>

            <body>
                <div class="container">
                    <Header languages={languages} />
                    <main class="page">
                        <div class="language">
                            <div class="language__content">
                                <h1 class="language__title">{language.name}</h1>
                                <div class="language__text text">
                                    {language.description}
                                </div>
                                <h2 class="language__examples__heading">Примеры кода</h2>
                                {language.codeExamples.map((codeExample) =>
                                    <div class="language__example">
                                        <h3 class="language__example__name">{codeExample.name}</h3>
                                        <div class="language__example__code">
                                            <pre>{codeExample.code}</pre>
                                        </div>
                                    </div>
                                )}
                                <h2 class="language__demand__heading">Востребованность</h2>
                                <div class="language__demand__text text">
                                    {language.demand}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    )
}

export async function getStaticProps({ params }) {
    const languages = getLanguages()
    const language = languages.find(language => language.id == params.id)
    return {
        props: {
            languages,
            language
        },
    }
}

export async function getStaticPaths() {
    const languages = getLanguages()
    const paths = languages.map((language) => ({
        params: { id: language.id },
    }))
    return { paths, fallback: false }
}

export default Language