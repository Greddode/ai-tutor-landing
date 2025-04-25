# AI Tutor Landing Page

This is a modern web application built with Next.js that serves as a landing page and platform for an AI tutoring service. The application includes user authentication, a dashboard, payment processing, and various interactive features.

## 🚀 Technologies Used

This project uses a modern tech stack:

- **Next.js 15** - A React framework for building web applications
- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - A typed superset of JavaScript
- **Tailwind CSS** - A utility-first CSS framework
- **Prisma** - A modern database toolkit
- **NextAuth.js** - Authentication solution for Next.js
- **Stripe** - Payment processing
- **Radix UI** - Unstyled, accessible components for building high‑quality design systems
- **Zod** - TypeScript-first schema validation

## 📁 Project Structure

The project is organized into several key directories:

- `/app` - Contains the main application code
  - `/api` - API routes for backend functionality
  - `/dashboard` - User dashboard interface
  - `/login` - User authentication pages
  - `/signup` - User registration pages
  - `/checkout` - Payment processing pages
  - `/support` - Customer support pages
  - `/settings` - User settings pages
- `/components` - Reusable UI components
- `/lib` - Utility functions and shared code
- `/prisma` - Database schema and migrations
- `/public` - Static assets like images
- `/styles` - Global styles and CSS configurations
- `/types` - TypeScript type definitions
- `/hooks` - Custom React hooks

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm package manager
- A database (PostgreSQL recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone [[repository-url]](https://github.com/Greddode/ai-tutor-landing.git)
   cd ai-tutor-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="your-database-url"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 🎨 Features

- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Authentication**: Secure user login and registration
- **Dashboard**: User-friendly interface for managing tutoring sessions
- **Payment Processing**: Integrated Stripe for secure payments
- **Responsive Design**: Works on all device sizes
- **Type Safety**: Full TypeScript support
- **Database**: Prisma ORM for database management
- **API Routes**: Server-side functionality with Next.js API routes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- The open-source community for the wonderful tools and libraries
- All contributors who have helped improve this project 
