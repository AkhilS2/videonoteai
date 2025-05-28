# VideoNoteAI

A full-stack application for video note-taking with AI capabilities.

## Project Structure

- `frontend/` - Next.js application with React and TypeScript
- `backend/` - Django REST API server

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:3000

## Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The backend API will be available at http://localhost:8000

## Development

- Frontend: Next.js 14 with React and TypeScript
- Backend: Django 5.0 with Django REST Framework
- Database: SQLite (development) / PostgreSQL (production)

## Features

- Modern, responsive UI
- RESTful API architecture
- Type-safe development with TypeScript
- Secure authentication system
- API documentation with Swagger/OpenAPI