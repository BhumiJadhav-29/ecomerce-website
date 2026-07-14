# PickMe Commerce

Modern full-stack e-commerce application using React/Vite and Express/MongoDB.

## Quick start

1. Copy `server/.env.example` to `server/.env` and add MongoDB Atlas, Stripe test, and Cloudinary credentials.
2. Run `npm install` in the root, `client`, and `server` directories.
3. Run `npm run dev` from the root. The storefront is at `http://localhost:5173`; API is at `http://localhost:5000`.

## API

`POST /api/auth/register`, `POST /api/auth/login`, `GET/PATCH /api/users/me`  
`GET/POST /api/products`, `GET/PATCH/DELETE /api/products/:id`  
`GET/POST /api/categories`, `GET/PUT /api/cart`, `GET/PUT /api/wishlist`  
`GET/POST /api/orders`, `PATCH /api/orders/:id/status`, `POST /api/reviews/:productId`  
`POST /api/coupons/validate`, `POST /api/payments/intent`, `GET /api/dashboard`

Protected requests require `Authorization: Bearer <JWT>`. Product mutation, category creation, order status updates, and dashboard access require an `admin` user.

## Deploy

Deploy `client` to Vercel with build command `npm run build` and output `dist`. Deploy `server` to Render with start command `npm start`; configure the environment values from `.env.example` and set `CLIENT_URL` to the deployed frontend domain. MongoDB Atlas network access must allow the Render service.
