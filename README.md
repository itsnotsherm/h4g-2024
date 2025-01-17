# Pokémon-Themed Minimart and Voucher System for Muhammadiyah Welfare Home

## Introduction
The **Muhammadiyah Welfare Home (MWH)** is dedicated to providing care and support for boys residing on its campus, fostering a nurturing environment to help them thrive. As part of the **Hack for Good 2025** initiative, this project introduces a **Pokémon-themed web-based Minimart and Voucher System** to empower residents and streamline operational workflows.

The Pokémon theme is designed to cater to the younger generation, making the system more engaging and interactive. From Pokémon-inspired item designs to playful interfaces, this system aims to delight users while achieving its functional goals.

## Key Features

### For Residents (Beneficiaries):
- **User-Friendly Dashboard:** Residents can view their voucher balances, transaction history, and available products.
- **Product Purchase:** Trade vouchers for products in the minimart, or preorder out-of-stock products.
- **Secure Login:** Login using email and password. Password may be reset via email.

### For Admins:
- **Manage Users:** View, suspend, or reset passwords for residents.
- **Voucher Management:** Approve/reject voucher-related tasks.
- **Product Requests:** Approve/reject requests and monitor inventory.
- **Inventory Tracking:** Update stock levels with detailed audit logs.
- **Reporting:** Generate summaries of requests and inventory for operational insights.

## Installation
1. Clone the repo

   ```
   git clone https://github.com/itsnotsherm/h4g-2025.git
   ```

2. Install npm packages

   ```
   npm install
   ```

3. Change git remote url to avoid accidental pushes to base project

   ```
   git remote set-url origin github_username/repo_name
   git remote -v 
   ```

## Usage for residents
1. **Signup**

   Residents can sign up by providing their name, email, password, and mobile number.
   Upon successfully signing up, residents can log in to view and manage their accounts.

2. **Login**

   Residents can log in using registered credentials to access the Pokémon-themed dashboard, where they can view their voucher balance and transaction history, as well as purchase products in the minimart or preorder out-of-stock products.

3. **Password Reset**

   In case of a forgotten password, residents can request a reset link, which will be sent to their registered email.

## Usage for admin
1. **Access Admin Panel**

   Logging in with admin credentials grants access to the management dashboard.

2. **Manage Users**

   Admin can view registered users, and suspend users or reset user passwords when necessary.

3. **Monitor Transactions**

   - Product requests and voucher tasks can be approved or rejected.
   - Reports can be generated to analyse trends and inventory usage.

4. **Update Inventory**

   Product details and quantities can be updated to maintain accurate stock levels.

## Development Notes

### Backend
The backend leverages Supabase, an open-source backend platform that combines the power of PostgreSQL with real-time updates and seamless scalability. Key highlights include:

- **🚀 Scalability:**

  Designed to handle a growing user base and future expansions effortlessly, ensuring the system can adapt to evolving needs.

- **🔄 Real-Time Updates:**

  Enjoy instant synchronization of data across the application, providing users with a smooth and dynamic experience.

- **🔒 Security:**

  Implements robust role-based permissions and secure authentication, safeguarding sensitive user and system data.

- **🗂️ Comprehensive Database Schema:**

    - `users`: Manage user accounts, roles, and authentication.
    - `vouchers`: Track user voucher balances.
    - `transactions`: Record purchase histories and voucher usage.
    - `inventory`: Monitor minimart product availability.
    - `preorders`: Manage requests for out-of-stock items.

Supabase ensures a reliable and modern backend foundation, enhancing both performance and user experience.

### Frontend
The frontend is crafted with **React**, paired with **Material-UI** for a sleek, modern, and fully responsive interface.

- **🎨 Engaging Pokémon Theme:**
  Designed to captivate younger users with vibrant Pokémon-inspired visuals and playful interactions.

- **📱 Responsive Design:**
  Ensures seamless usability across devices, from desktops to mobile phones.

- **⚡ Dynamic Interface:**
  Provides a user-friendly experience with real-time feedback and intuitive navigation.

The Pokémon-themed design not only adds a fun and interactive touch, but also enhances user engagement and accessibility for all ages.
