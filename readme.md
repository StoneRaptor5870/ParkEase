<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="nestdotjs" />
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/GraphQL-E434AA?style=for-the-badge&logo=graphql&logoColor=white" alt="graphql" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="prisma" />
    <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">ParkEase</h3>

   <div align="center">
     A modern parking solution application.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)

## <a name="introduction">🤖 Introduction</a>

A cutting-edge SaaS platform that revolutionizes parking management with a seamless and convenient solution. Users can effortlessly find and book available parking slots near their location in real-time. What sets our platform apart is the integrated valet service: a professional valet picks up the user's vehicle, parks it in a secure location, and returns it to the desired spot when needed. With interactive maps and accurate location data powered by Mapbox, users can easily visualize parking options and valet routes. With secure and easy payments powered by Stripe, transactions are processed smoothly, ensuring a hassle-free experience. Say goodbye to the stress of finding parking in busy areas, and enjoy a service that saves time and offers peace of mind.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Monorepo
- Nest.js
- Next.js
- TypeScript
- GraphQL
- Prisma
- Postgres
- Docker
- Threejs
- Stripe
- Mapbox
- Swagger
- Tailwind CSS

## <a name="features">🔋 Features</a>

1. **Monorepo Architecture**
The application is structured in a monorepo format, comprising five key projects:

    Backend: A powerful API built with REST and GraphQL to efficiently serve data and handle complex requests.
    Customer Frontend: A user-friendly interface where customers can search for parking spots, make bookings, and manage their vehicle pick-up/drop-off.
    Valet Frontend: A streamlined interface designed specifically for valets to manage vehicle assignments and optimize the pickup and drop-off process.
    Manager Frontend: A dedicated portal for managers to oversee operations, monitor valet activities, and track garage performance.
    Admin Frontend: A comprehensive dashboard for administrators to manage the system, track transactions, monitor activity, and handle user queries.

2. **Robust Authentication**
Our platform offers secure and seamless user authentication through Nest.js with built-in support for Google OAuth. This ensures that users can quickly sign in with their Google accounts while maintaining top-level security for both customers and admin users.

3. **Modern Home Page**
The home page features a dynamic, immersive 3D car parking scene powered by Three.js, providing users with an engaging visual experience as they explore the platform.

4. **Fully Functional Search Capabilities with Advanced Filtering**
Users can search for parking spots with real-time filtering and sorting options. Advanced filters enable users to narrow down results based on proximity, availability, price, and more, ensuring they find the most convenient spot quickly.

5. **Booking Slot Implementation for Customers' Vehicles**
Our platform allows customers to book parking slots in advance for their vehicles. This feature includes real-time availability updates and reservation management, ensuring a stress-free parking experience.

6. **Mapbox Implementation for Live Garage Locations**
With Mapbox integrated into the platform, users can view live locations of available garages on an interactive map. This allows customers to easily select parking spots and see real-time updates on valet and garage locations.

7. **Stripe Integration for Payments**
Payments are handled seamlessly through Stripe, ensuring secure and reliable transactions. Users can pay for their bookings with ease, using the industry-standard Stripe payment gateway for a smooth checkout experience.

8. **Responsive Design**
The entire platform is fully responsive, ensuring a seamless experience across all devices. Whether customers are accessing the platform from a desktop, tablet, or mobile phone, they can enjoy a smooth and intuitive interface optimized for their screen size.