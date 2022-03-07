export interface Movie {
    id: Number,
    title: String,
    genre: String,
    poster: String,
    background: String
}

export const movies = [
    {
        id: 1,
        title : 'Spider-Man: No way Home',
        genre: 'Aventura',
        poster: 'https://www.themoviedb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        background: 'https://www.themoviedb.org/t/p/original/uhYpkLSnlOXTQDmNnu1X4MHMt1S.jpg'
    },
    {
        id: 2,
        title : 'The Batman',
        genre: 'Accion',
        poster: 'https://www.themoviedb.org/t/p/original/3VFI3zbuNhXzx7dIbYdmvBLekyB.jpg',
        background: 'https://www.themoviedb.org/t/p/original/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg'

    },
    {
        id: 3,
        title : 'Encanto',
        genre: 'Animacion',
        poster: 'https://www.themoviedb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
        background: 'https://www.themoviedb.org/t/p/original/2Sm3asuwKVNTzgm2nF6hp5mwEfh.jpg'

    },
    {
        id: 4,
        title : 'Dune',
        genre: 'Ciencia Ficcion',
        poster: 'https://www.themoviedb.org/t/p/original/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg',
        background: 'https://www.themoviedb.org/t/p/original/guB0jTCIlMB5gJUILzZrxXVMuyJ.jpg'

    },
    {
        id: 5,
        title : 'Scream',
        genre: 'Terror',
        poster: 'https://www.themoviedb.org/t/p/original/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
        background: 'https://www.themoviedb.org/t/p/original/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg'

    },
]