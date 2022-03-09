export interface Movie {
    id: Number,
    title: String,
    genre: String,
    poster: String,
    background: String,
    overview: String,
    rating: Number,
    trailer: String
}

export const movies = [
    {
        id: 1,
        title : 'Spider-Man: No way Home',
        genre: 'Aventura',
        poster: 'https://www.themoviedb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        background: 'https://www.themoviedb.org/t/p/original/uhYpkLSnlOXTQDmNnu1X4MHMt1S.jpg',
        overview: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.', 
        rating: 8.3, 
        trailer: 'https://youtu.be/JfVOs4VSpmA'  
    },
    {
        id: 2,
        title : 'The Batman',
        genre: 'Accion',
        poster: 'https://www.themoviedb.org/t/p/original/3VFI3zbuNhXzx7dIbYdmvBLekyB.jpg',
        background: 'https://www.themoviedb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg',
        overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.', 
        rating: 8.1, 
        trailer: 'https://youtu.be/NLOp_6uPccQ'

    },
    {
        id: 3,
        title : 'Encanto',
        genre: 'Animacion',
        poster: 'https://www.themoviedb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
        background: 'https://www.themoviedb.org/t/p/original/2Sm3asuwKVNTzgm2nF6hp5mwEfh.jpg',
        overview: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.", 
        rating: 7.7, 
        trailer: 'https://youtu.be/togmdDHG3Pw'

    },
    {
        id: 4,
        title : 'Dune',
        genre: 'Ciencia Ficcion',
        poster: 'https://www.themoviedb.org/t/p/original/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg',
        background: 'https://www.themoviedb.org/t/p/original/guB0jTCIlMB5gJUILzZrxXVMuyJ.jpg',
        overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.", 
        rating: 7.9, 
        trailer: 'https://youtu.be/w0HgHet0sxg'

    },
    {
        id: 5,
        title : 'Scream',
        genre: 'Terror',
        poster: 'https://www.themoviedb.org/t/p/original/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
        background: 'https://www.themoviedb.org/t/p/original/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg',
        overview: 'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.', 
        rating: 6.5,
        trailer: 'https://youtu.be/nRwLyKIBNU8'

    },
]