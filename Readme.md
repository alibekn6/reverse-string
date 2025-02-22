# 🔄 Reverse String App

A simple full-stack project where the **backend (FastAPI)** is used **only for reversing text**, imitating a real backend service.  
The **frontend (Next.js)** interacts with the backend by sending text input and displaying the reversed result.  
(⚠️ Probably server is working too slow !)
 **Deployed on:**  
-  **Server:** [Render](https://reverse-string.onrender.com)  /reverse/?stringToReverse=some
-  **Frontend:** [Vercel](https://reverse-string-plum.vercel.app)  

---

## 🛠 Tech Stack

| **Category**  | **Technology** |
|--------------|--------------|
| 🎯 Backend  | Python, FastAPI |
| 🎨 Frontend | Next.js, React, Tailwind CSS |
| 🌎 Deployment | Render (backend), Vercel (frontend) |

---

## ⚡ Quick Start

1️⃣ Clone the repo:  
```bash
git clone https://github.com/yourusername/reverse-string.git

# server
cd reverse-string
pip install -r requirements.txt
uvicorn main:app --reload

# client

cd client
npm install
npm run dev
