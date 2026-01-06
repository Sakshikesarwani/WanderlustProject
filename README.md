🧳 Wanderlust — Airbnb-style Travel Accommodation Platform
Wanderlust is a full-stack web application inspired by Airbnb where users can explore stays, add listings to wishlist, make bookings and log in via Google or email authentication.
🔗 **Live Website:**  
👉 [Wanderlust Live Demo](https://wanderlustproject-xb48.onrender.com)

✨ Features
✔ User Authentication (Login / Signup / Google OAuth)
✔ Secure Session & Flash Messages
✔ Fully-Functional CRUD Listings
✔ Image Upload using Cloudinary
✔ Advanced Filters & Categories
✔ Wishlist / Save Listings ❤️
✔ Reviews & Ratings
✔ Razorpay Payment Integration 💳
✔ Search Functionality
✔ Responsive UI
✔ Secure .env based secrets

🚀 Tech Stack Used

🔹 Frontend: EJS, HTML, CSS, Bootstrap, JavaScript
🔹 Backend: Node.js, Express.js
🔹 Database: MongoDB Atlas, Mongoose
🔹 Authentication: Passport.js (Local + Google OAuth 2.0)
🔹 Payments: Razorpay Integration (Test Mode)
🔹 Deployment: Render

📂 Project Structure
AIRBNB-CLONE
│
├── controllers
├── init
├── models
├── node_modules
├── public
├── routes
├── utils
├── views
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── schema.js
├── .gitignore
└── .env   (NOT committed — contains secrets)

🔐 Environment Variables
Create a .env file in the root directory:
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
GOOGLE_CALLBACK_URL=your_callback_url
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
MAP_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_url
SECRET=your_session_secret

▶️ Run Locally
git clone <repo-link>
cd WanderlustProject
npm install
node app.js
Visit:http://localhost:8080

📸 Screenshots
<img width="1893" height="881" alt="image" src="https://github.com/user-attachments/assets/610181ed-28ff-4af7-a08d-82f6055cda4c" />
<img width="1895" height="863" alt="image" src="https://github.com/user-attachments/assets/d3fa4573-619f-4181-b95c-fb956a027e97" />
<img width="784" height="589" alt="image" src="https://github.com/user-attachments/assets/8a788bb4-dbbb-4df6-9f55-f4bad569c877" /><img width="1193" height="639" alt="image" src="https://github.com/user-attachments/assets/dcc4d69e-795a-4034-9d76-270992db90e4" />
<img width="1887" height="787" alt="image" src="https://github.com/user-attachments/assets/c56eb1f4-2453-40fb-815d-6399856b159e" />
<img width="1917" height="877" alt="image" src="https://github.com/user-attachments/assets/47258274-6a62-4b6c-b16c-4cfc476ae4af" />

🧠 Learning Highlights

✔ RESTful API design
✔ Secure Authentication
✔ Environment-based config
✔ Clean MVC architecture
✔ Production Deployment

🤝 Contributions
Pull requests are welcome!

📝 License
This project is for learning & portfolio use.



