# Minhaz Alam Jisan — Personal Data & BI Portfolio

[![Live on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)
[![GitHub](https://img.shields.io/badge/GitHub-Zisanminhaz-181717?logo=github&logoColor=white)](https://github.com/Zisanminhaz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-minhazjisan-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/minhazjisan)
[![CGPA](https://img.shields.io/badge/DIU_CSE_CGPA-3.69-0284c7)](#)

A modern, responsive, and high-performance personal portfolio website engineered for **Minhaz Alam Jisan** (CSE Graduate, Data & BI Analyst, MIS Specialist).

Built with vanilla HTML5, CSS3, and JavaScript with glassmorphism, responsive navigation, dark/light theme switching, and direct integrations with 5 production open-source analytics repositories and 3 peer-reviewed research papers.

---

## 🌟 Featured Open-Source Repositories

| Project | Tech Stack | Key Metrics | Repository |
|---|---|---|---|
| **Retail MIS Analytics Dashboard** | Power BI • DAX • Star Schema | 12 Stores • 212K Rows • ৳200.1M Sales | [retail-mis-dashboard-powerbi](https://github.com/Zisanminhaz/retail-mis-dashboard-powerbi) |
| **Store Sales & Employee Performance Tracker** | Excel • Power Query • XLOOKUP | 48K Rows • ৳190.4M Sales • 8 Showrooms | [store-sales-employee-tracker-excel](https://github.com/Zisanminhaz/store-sales-employee-tracker-excel) |
| **E-Commerce Sales & Customer Insights** | Power BI • Python • DAX | 530K Transactions • £10.64M Revenue | [ecommerce-sales-customer-insights-powerbi](https://github.com/Zisanminhaz/ecommerce-sales-customer-insights-powerbi) |
| **COVID-19 Global Epidemiological Dashboard** | Power BI • Johns Hopkins Data • DAX | 187 Countries • 49K Rows • 16.48M Cases | [-Covid19-global-dashboard-Powerbi](https://github.com/Zisanminhaz/-Covid19-global-dashboard-Powerbi) |
| **Olist E-Commerce MIS** | MySQL 8.0+ • Stored Procedures • ETL | 1.55M Rows • 10 Core Tables • R$ 15.74M GMV | [olist-ecommerce-mis-sql](https://github.com/Zisanminhaz/olist-ecommerce-mis-sql) |

---

## 🔬 Peer-Reviewed Academic Research

1. **Explainable Hybrid InceptionV3-Vision Transformer Framework for Mango Leaf Disease Classification Using LIME and Grad-CAM**  
   *IEEE QPAIN 2025* • [IEEE Xplore #11546122](https://ieeexplore.ieee.org/document/11546122)
2. **Lightweight Convolutional Networks and Explainable AI for Real-Time and Interpretable Tea Leaf Disease Detection**  
   *IDAA 2024* • [ResearchGate Publication](http://researchgate.net/publication/399191646_Lightweight_Convolutional_Networks_and_Explainable_AI_for_Real-Time_and_Interpretable_Tea_Leaf_Disease_Detection)
3. **Performance Comparison of Machine Learning and Ensemble Models for Breast Cancer Diagnosis**  
   *APCIT 2024* • [IEEE Xplore #11411169](https://ieeexplore.ieee.org/abstract/document/11411169)

---

## 📜 Professional Credentials (IBM / Coursera)

- **Data Visualization and Dashboards with Excel and Cognos** — IBM ([Verify W6T14HS2665F](https://www.coursera.org/account/accomplishments/verify/W6T14HS2665F))
- **Excel Basics for Data Analysis** — IBM ([Verify COYRPNESZ4C4](https://www.coursera.org/account/accomplishments/verify/COYRPNESZ4C4))
- **Introduction to Data Analytics** — IBM ([Verify PTNA1TVJ3TX7](https://www.coursera.org/account/accomplishments/certificate/PTNA1TVJ3TX7))
- *Part of the ongoing IBM Data Analyst Professional Certificate specialization (2026).*

---

## 📁 Repository Structure

```
Portfolio/
├── index.html        # Main single-page application & all showcase sections
├── style.css         # Modern design system, themes, and glassmorphic UI
├── script.js         # Interactive tabs, filters, modals, and event handling
├── README.md         # Documentation & deployment guide
└── assets/           # Visual screenshots and documentation assets
    ├── covid-dashboard/
    ├── ecommerce-insights/
    ├── excel-tracker/
    ├── retail-mis/
    └── images/
```

---

## ⚡ Deploying to Vercel

### Option 1: Automatic Deployment via Git (Recommended)
1. Push this repository to GitHub: `https://github.com/Zisanminhaz/Portfolio`.
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** ➔ **"Project"**.
4. Select `Zisanminhaz/Portfolio` from the list.
5. Keep default settings (Framework Preset: **Other**, Root Directory: `./`).
6. Click **Deploy**. Vercel will instantly generate a live production HTTPS URL (e.g., `https://portfolio-zisanminhaz.vercel.app`).
7. Every subsequent git push to `main` will automatically trigger a new deployment.

### Option 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 💻 Local Development

Run with Python's built-in server:
```bash
python -m http.server 5500
```
Then visit `http://localhost:5500`.
