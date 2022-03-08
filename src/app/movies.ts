export interface Movie {
    id: Number,
    title: String,
    genre: String,
    poster: String,
    background: String,
    overview: String
}

export const movies = [
    {
        id: 1,
        title : 'Spider-Man: No way Home',
        genre: 'Aventura',
        poster: 'https://www.themoviedb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        background: 'https://www.themoviedb.org/t/p/original/uhYpkLSnlOXTQDmNnu1X4MHMt1S.jpg',
        overview: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.'
    },
    {
        id: 2,
        title : 'The Batman',
        genre: 'Accion',
        poster: 'https://www.themoviedb.org/t/p/original/3VFI3zbuNhXzx7dIbYdmvBLekyB.jpg',
        background: 'https://www.themoviedb.org/t/p/original/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg',
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    },
    {
        id: 3,
        title : 'Encanto',
        genre: 'Animacion',
        poster: 'https://www.themoviedb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
        background: 'https://www.themoviedb.org/t/p/original/2Sm3asuwKVNTzgm2nF6hp5mwEfh.jpg',
        overview: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope."

    },
    {
        id: 4,
        title : 'Dune',
        genre: 'Ciencia Ficcion',
        poster: 'https://www.themoviedb.org/t/p/original/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg',
        background: 'https://www.themoviedb.org/t/p/original/guB0jTCIlMB5gJUILzZrxXVMuyJ.jpg',
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    },
    {
        id: 5,
        title : 'Scream',
        genre: 'Terror',
        poster: 'https://www.themoviedb.org/t/p/original/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
        background: 'https://www.themoviedb.org/t/p/original/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg',
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    },
]