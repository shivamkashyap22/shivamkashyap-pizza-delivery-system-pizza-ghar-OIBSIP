# shivamkashyap-pizza-delivery-system-pizza-ghar-OIBSIP

**Pizza Ghar** 🍕 is a full-stack pizza delivery web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This project was developed by **Shivam Kashyap** as part of the **OIBSIP internship**.

---

## 🔥 Key Features

- 🔐 User and Admin Authentication (JWT-based)
- 🍕 Customize pizzas with base, sauce, cheese, and veggies
- 📦 Admin Inventory Management
- 🛒 Place Orders and Track Status
- 💳 Razorpay Payment Gateway (Test Mode)
- 🧾 Order History for Users
- 📧 Email Notifications using Nodemailer
- 🖥️ Admin Dashboard for full control

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, Redux Toolkit
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB (Atlas)
- **Auth & Security:** JWT, bcryptjs
- **Email:** Nodemailer
- **Payment:** Razorpay

---

## 🚀 How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/shivamkashyap22/shivamkashyap-pizza-delivery-system-pizza-ghar-OIBSIP.git
cd shivamkashyap-pizza-delivery-system-pizza-ghar-OIBSIP

2. Install Dependencies

# Backend
npm install

# Frontend
cd client
npm install
cd ..

3. Configure Environment Variables

Create a .env file in the root folder:

NODE_ENV=development
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
SENDER_EMAIL=your_email@example.com
SENDER_PASSWORD=your_email_password
SUPERADMIN_EMAIL=admin@example.com
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Create another .env file in the client folder:

VITE_SERVER_URL=http://localhost:5000
VITE_CLIENT_URL=http://localhost:3000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

4. Run the App

# Start both client and server
npm run dev

    Frontend: http://localhost:3000

    Backend API: http://localhost:5000

🙋 About the Developer

Shivam Kashyap
 OIBSIP Intern
GitHub: shivamkashyap22
📄 License

This project is licensed under the MIT License.
