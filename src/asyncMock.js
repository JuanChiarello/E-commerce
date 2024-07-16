const products = [
    {
        id: '1',
        name: 'Motorola g23',
        price: 3500,
        category: 'celular',
        img: 'https://images.fravega.com/f500/332a2d22382f714d26253b62446af895.png',
        stock: 25,
        description: 'Descripcion de Motorola g23',
    },

    {
        id: '2',
        name: 'Auriculares HyperX',
        price: 150,
        category: 'audio',
        img: 'https://m.media-amazon.com/images/I/41Z3XMuRjhS._AC_.jpg',
        stock: 60,
        description: 'Descripcion de Auriculares HyperX',
    },

    {
        id: '3',
        name: 'Nespresso Essenza',
        price: 250,
        category: 'electrodomestico',
        img: 'https://image.cdn0.buscalibre.com/3603559.__RS360x360__.jpg',
        stock: 40,
        description: 'Descripcion de Nespresso Essenza',
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}