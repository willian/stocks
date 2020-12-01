# Stocks

- Trello board: https://trello.com/b/EmVOm52B/stocks
- Vercel Environment: https://mechnims-stocks.vercel.app/

## Development Setup

1. Clone this repository (`git clone git@github.com:willian/stocks.git`)
2. Create a file `.env.local` in the root of the repository you just cloned and the following development keys:

```
SITE=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

AUTH_SECRET=4abffa3737ca3f2b331ba90cbc3f37f87fc0c601e4aaa228e64f6641ae808f9aabfd0966a1a5aeec
JWT_SECRET=ae6887b6b47ed38b0ac7f8da78ac9e2ceab8019536bb2fb25ec3ea57da295ae0959b2f641dd455f3

AUTH0_CLIENT_ID=TobeZ0iKmbxEDspBh9t3DVayU9Ub0nnT
AUTH0_CLIENT_SECRET=QQL5RjGBJXekZENf7BCw8nlA0QDY428mG-f4ai1lpnS2BOBwBvjYweAA9hePg2Vp
AUTH0_DOMAIN=mechanism-stocks.us.auth0.com
GITHUB_CLIENT_ID=c1ed2b5f8e66fac31cb2
GITHUB_CLIENT_SECRET=40d90ac3e681f15262cd83f9ac2f9283488072ff
GOOGLE_CLIENT_ID=1020020647697-6oor06u9v1a8l5ljhm4faji4gsjnhub2.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=AYdkOKoBC40Uc_yb1Fs3Ojpm
TWITTER_CLIENT_ID=qpL5vDsCNFENidmt4MzADcEj6
TWITTER_CLIENT_SECRET=7GEVeefmUiHyIId5FAMn5kCiI8CC7h5YmpS1ENO8F57tWilW0y

DB_TYPE=postgres
DB_HOST=ec2-34-232-24-202.compute-1.amazonaws.com
DB_PORT=5432
DB_USERNAME=hpsxzfnlwbblfl
DB_PASSWORD=19081656dd7883f0cb3742f1320e9edf273d89fa42c75a3472a29b5e7487e478
DB_DATABASE=dbsgtmdqlce86t
```
3. Install dependencies: `yarn install`
4. Boot the development server: `yarn dev`

_* Ideally, these credentials wouldn't be here and would be shared internally with the team_
