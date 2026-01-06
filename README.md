# 🧳 Wanderlust


Wanderlust is a full-stack web application inspired by Airbnb where users can explore stays, add listings to wishlist, make bookings and log in via Google or email authentication.
🔗 **Live Website:**  
👉 [Wanderlust Live Demo](https://wanderlustproject-xb48.onrender.com)



## 🚀 Tech Stack Used

- **Frontend:** EJS, HTML, CSS, Bootstrap, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas, Mongoose  
- **Authentication:** Passport.js (Local + Google OAuth 2.0)  
- **Payments:** Razorpay Integration (Test Mode)  
- **Deployment:** Render

## ✨ Features  

- ✔️ User Authentication (Email + Google Login)  
- ✔️ Explore & Search Property Listings  
- ✔️ Category-wise Filtering  
- ✔️ Wishlist System  
- ✔️ Reviews & Ratings  
- ✔️ Booking System with Razorpay  
- ✔️ Secure Sessions & Flash Messages  
- ✔️ Fully Responsive UI  

## 📂 Project Structure  

WanderlustProject/
│
├── controllers/
├── init/
├── models/
├── node_modules/
├── public/
├── routes/
├── utils/
├── views/
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── schema.js
├── .gitignore
└── .env   (NOT committed — contains secrets)

# 🔐 Environment Variables
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

# 📸 Screenshots

<img width="1887" height="875" alt="image" src="https://github.com/user-attachments/assets/ba983365-983f-46eb-8ae4-bd33668d61e2" />
<img width="1891" height="861" alt="image" src="https://github.com/user-attachments/assets/c8c3f4a0-592a-4b99-810c-ad321b32c537" />
<img width="1888" height="852" alt="image" src="https://github.com/user-attachments/assets/3d103c63-001f-47b9-a046-e6ee44a53e89" />
<img width="1882" height="857" alt="image" src="https://github.com/user-attachments/assets/5cfb7ce5-7602-4359-861e-7be8fb966c45" />
<img width="1912" height="872" alt="image" src="https://github.com/user-attachments/assets/6e6312f5-0ac0-48ab-b810-a043e8bcc482" />
<img width="1895" height="869" alt="image" src="https://github.com/user-attachments/assets/dddc02f4-f30f-4ca2-ace6-e5279f2d102b" />
<img width="1897" height="875" alt="image" src="https://github.com/user-attachments/assets/3c1ea7aa-230b-4643-be3f-0a40653a7772" />

# 🧠 Learning Highlights

✔ RESTful API design
✔ Secure Authentication
✔ Environment-based config
✔ Clean MVC architecture
✔ Production Deployment

# 🤝 Contributions

Pull requests are welcome!

# 📝 License

This project is for learning & portfolio use.








