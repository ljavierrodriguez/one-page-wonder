import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import SectionRight from './components/SectionRight'
import SectionLeft from './components/SectionLeft'

const App = () => {

    const [state, setState] = useState({
        header: {
            title: 'One Page Wonder',
            subtitle: 'Will Rock Your Socks Off',
            action: {
                text: 'Learn More',
                link: '/#scroll'
            }
        },
        sections: [
            { id: 1, title: 'For those about to rock...', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.', img: '/assets/img/01.jpg' },
            { id: 2, title: 'We salute you!', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.', img: '/assets/img/02.jpg' },
            { id: 3, title: 'Let there be rock!', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.', img: '/assets/img/03.jpg' },
        ]
    })

    return (
        <>
            {/* <!-- Navigation--> */}
            <Navbar />
            {/* <!-- Header--> */}
            <Header header={state.header} />
            {/* <!-- Content section --> */}
            {
                state.sections.map((section, index) => {
                    if (index % 2 === 0){
                        return <SectionRight {...section} key={index} />
                    } else {
                        return <SectionLeft {...section} key={index}/>
                    }
                })
            }
            {/* <!-- Footer--> */}
            <Footer />
        </>
    )
}

export default App