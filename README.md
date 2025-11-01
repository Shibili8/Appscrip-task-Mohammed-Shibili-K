# 🛍️ Appscrip Product Listing Task

A **React-based e-commerce product listing page** with sorting, filtering, and responsive design — built for the **Appscrip Frontend Assignment**.

---

## 🚀 Features

### 🧭 Header

* Company logo and navigation links
* Responsive icons (search, wishlist, cart, profile)
* Search functionality with toggle
* Sorting dropdown (“Low to High”, “High to Low”, “Recommended”)
* Displays total product count and “Show/Hide Filters” toggle in one row

### 🧩 Filters

* Two filter sections:

  * **Ideal For:** Men, Women
  * **Category:** All, Clothing, Jewellery, Electronics
* Dynamically filters the product grid
* “Show/Hide Filters” button toggles the sidebar visibility

### 💰 Product Grid

* Fetches product data from [Fake Store API](https://fakestoreapi.com/products)
* Displays product image, name, and price
* Fully responsive grid layout

### 📩 Footer

* Newsletter subscription box
* Contact details and currency info
* Collapsible sections for mobile view:

  * **mettà muse**
  * **Quick Links**
  * **Follow Us**
* Payment icons and copyright
* Modern responsive black theme (Figma-accurate design)

---

## 🏗️ Project Structure

```
appscrip-task/
│
├── public/
│   ├── index.html
│   └── logo192.png
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Filters.js
│   │   ├── ProductGrid.js
│   │   ├── ProductCard.js
│   │   └── Footer.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## 🌍 API Used

All product data is fetched from the public **Fake Store API**:

```
https://fakestoreapi.com/products
```
