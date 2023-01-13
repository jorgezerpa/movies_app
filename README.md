## How to run project Locally?

1. Clone this repository 
```
git clone https://github.com/jorgezerpa/movies_app.git
```

1. Install all dependencies **(preferibly use clean install)**
```
npm ci 
```

1. Go to [The MoviesDatabase](https://rapidapi.com/SAdrian/api/moviesdatabase) API and subscribe to get your API key.

1. create a __.env.local__ file on the root folder and set a variable **NEXT_PUBLIC_MOVIES_DATABASE_KEY** (you found an example of the file on .env.example file on the root folder).
```
NEXT_PUBLIC_MOVIES_DATABASE_KEY= 'Your API Key'
```

1. Run the project with the command:
```
npm run dev
```

1. Open your browser on __http://localhost:3000__


