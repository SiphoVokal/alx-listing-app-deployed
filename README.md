# Booking Detail Page - Next.js Project

## Overview
This project implements a **Booking Detail Page** for a listing application, inspired by platforms like Airbnb and Booking.com. Users can enter contact and payment details, review booking information, and confirm reservations. The page is fully responsive and styled with **Tailwind CSS**, following modern UI/UX best practices.

The implementation provides practical experience in component-based architecture, form handling, and dynamic rendering of booking information.

---

## Features
- **Booking Form**: Collects user contact, payment, and billing details with organized input groups.
- **Order Summary**: Dynamically displays booking fees, subtotal, and total cost.
- **Policies**: Includes Cancellation Policy and Ground Rules sections for user guidance.
- **Responsive Layout**: Adapts seamlessly across different screen sizes using Tailwind CSS.
- **Component-Based Architecture**: Clean separation of UI into reusable React components.

---

## Learning Objectives
By completing this project, learners will be able to:
- Implement a **component-based architecture** in a Next.js project.
- Build responsive forms using **Tailwind CSS**.
- Dynamically render booking details in an **Order Summary** component.
- Present clear booking information, cancellation policies, and rules.
- Apply scalable folder structures for maintainable React/Next.js applications.

---

## Key Concepts
- **Component-Based Architecture**: Breaking functionality into reusable React components.
- **Responsive Web Design**: Tailwind utilities for adaptable layouts.
- **Form Layout & Input Grouping**: Organizing inputs for clarity and usability.
- **Dynamic Data Rendering**: Passing booking details as props to components.
- **Pricing Calculation**: Displaying fees, subtotal, and total in a user-friendly format.

---

## Tools & Libraries
- [Next.js](https://nextjs.org/) - React framework for server-side rendering and routing.
- [React](https://reactjs.org/) - Component-based UI development.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling and responsive design.
- [TypeScript](https://www.typescriptlang.org/) - Type safety and enhanced development experience.

---

## Real-World Use Case
This Booking Detail Page mirrors functionality in real-world booking platforms:
- **Input Validation**: Ensures user information is complete before payment.
- **Payment Integration**: Ready for integration with secure payment gateways.
- **Dynamic Booking Summaries**: Fetches and displays accurate booking data.
- **Policy Enforcement**: Communicates rules and cancellation policies clearly.

For example, a customer booking a beach villa on Airbnb reviews property details, confirms stay dates, enters payment information, and agrees to terms—all in one streamlined interface.

---

## Project Structure
/components
├─ BookingForm.tsx
├─ OrderSummary.tsx
├─ Policies.tsx
/pages
├─ booking.tsx
/styles
├─ globals.css
