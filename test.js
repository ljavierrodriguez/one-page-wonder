const header = {
    title: 'One Page Wonder',
    subtitle: 'Will Rock Your Socks Off',
    action: {
        text: 'Learn More',
        link: '/#'
    }
}

const { title, subtitle, action: { text, link } } = header;

function prueba({ title, subtitle, action: { text, link } }){
    console.log(`${title} ${subtitle} ${link}`)
}

prueba(header)