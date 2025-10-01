# Merchant Management System

A full-stack application for managing merchant information with CRUD operations, built with Django REST Framework and React/Next.js.

## Features

- **Backend**: Django REST Framework with PostgreSQL
- **Frontend**: React/Next.js with Tailwind CSS
- **CRUD Operations**: Create, Read, Update, Delete merchants
- **Validation**: Input validation and error handling
- **Testing**: Unit and integration tests
- **Docker**: Containerized deployment with Docker Compose

## Tech Stack

### Backend

- Python 3.13.5+
- Django 5.2.6+
- Django REST Framework 3.16.1+
- PostgreSQL 18+
- unittest for testing

### Frontend

- React 19.1.0 / Next.js 15.5.4
- Tailwind CSS
- Axios for API calls

## Prerequisites

- Docker and Docker Compose (recommended)
- OR
  - Python 3.13.5+
  - Node.js 22.17.0+
  - PostgreSQL 18+

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

### Backend Variables

```env
# Django
DEBUG=True
SECRET_KEY=
ALLOWED_HOSTS=localhost 127.0.0.1

# Database
DB_NAME=mms_db
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=5432
DATABASE_URL=postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}


# CORS
ALLOWED_ORIGINS=http://localhost:3000 http://localhost:3030
```

### Frontend Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1/
```

## Setup Instructions

### Option 1: Docker Compose (Recommended)

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ebenezeroffei/mms_assessment
   cd mms
   ```

2. **Create environment file**

   ```bash
   cp .env.example .env
   # Edit .env with your configurations
   ```

3. **Build and run containers**

   ```bash
   docker-compose up --build
   ```

4. **Run migrations**

   ```bash
   docker-compose exec mms_be python manage.py migrate
   ```

5. **Create superuser (optional)**

   ```bash
   docker-compose exec mms_be python manage.py createsuperuser
   ```

6. **Access the application**
   - Frontend: http://localhost:3030
   - Django Admin: http://localhost:8000/admin/

### Option 2: Manual Setup

#### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd mms_be
   ```

2. **Create virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure PostgreSQL**

   - Create database: `createdb mms_db`
   - Update `.env` with database credentials

5. **Run migrations**

   ```bash
   python manage.py migrate
   ```

6. **Run tests**

   ```bash
   python manage.py test
   ```

7. **Start development server**
   ```bash
   python manage.py runserver
   ```

#### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd mms_fe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev  # Next.js
   ```

## API Endpoints

### Merchants

| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| GET    | `/api/v1/merchants/`      | List all merchants      |
| POST   | `/api/v1/merchants/`      | Create new merchant     |
| GET    | `/api/v1/merchants/{id}/` | Get merchant details    |
| PUT    | `/api/v1/merchants/{id}/` | Update merchant         |
| PATCH  | `/api/v1/merchants/{id}/` | Partial update merchant |
| DELETE | `/api/v1/merchants/{id}/` | Delete merchant         |

### Merchant Model Fields

```json
{
  "id": "string (auto)",
  "name": "string (required, max 200)",
  "business_registration_number": "string (required, unique, max 200)",
  "email": "string (required, valid email)",
  "phone": "string (required, max 20)",
  "status": "string (Active/Pending/Suspended)",
  "created_at": "datetime (auto)",
  "updated_at": "datetime (auto)"
}
```

## Sample API Requests

### Using cURL

#### List all merchants

```bash
curl -X GET http://localhost:8000/api/v1/merchants/
```

#### Create a new merchant

```bash
curl -X POST http://localhost:8000/api/v1/merchants/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Merchant",
    "business_registration_number": "BRN123456",
    "email": "test@merchant.com",
    "phone": "+233241234567",
    "status": "Active"
  }'
```

#### Get merchant by ID

```bash
curl -X GET http://localhost:8000/api/v1/merchants/872580d4-ba32-46e8-aafc-01e574e05249/
```

#### Update merchant

```bash
curl -X PUT http://localhost:8000/api/v1/merchants/872580d4-ba32-46e8-aafc-01e574e05249/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Merchant",
    "business_registration_number": "BRN123456",
    "email": "updated@merchant.com",
    "phone": "+233241234567",
    "status": "Pending"
  }'
```

#### Delete merchant

```bash
curl -X DELETE http://localhost:8000/api/v1/merchants/872580d4-ba32-46e8-aafc-01e574e05249/
```

### Using Postman

Import the provided `postman_collection.json` file or create requests with:

- **Base URL**: `http://localhost:8000/api/v1/`
- **Headers**: `Content-Type: application/json`
- **Body**: Raw JSON format

## Running Tests

### Backend Tests

```bash
# Using Docker
docker-compose exec mms_be python manage.py test

# Manual setup
cd mms_be
python manage.py test
```

## Production Deployment

### Environment Variables for Production

Update `.env` for production:

```env
DEBUG=False
SECRET_KEY=[PRODUCTION_SECRET_KEY]
ALLOWED_HOSTS=localhost 127.0.0.1
ALLOWED_ORIGINS=http://localhost:3000 http://localhost:3030
DB_NAME=mms_db
DB_USER=postgres
DB_PASSWORD=Postgres.crescue7536
DB_HOST=localhost
DB_PORT=5432
DATABASE_URL=postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
```

### Generate Secret Key

```python
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

### Docker Production Build

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

## Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running
- Verify database credentials in `.env`
- Check `DB_HOST` (use `localhost` for manual setup, `db` for Docker)

### CORS Errors

- Verify `CORS_ALLOWED_ORIGINS` in backend settings
- Ensure frontend URL matches allowed origins

### Port Conflicts

- Change ports in `docker-compose.yml` if 3000 or 8000 are in use

## Support

For issues or questions, please open an issue on the repository.

---

**Submission Date**: October 1st, 2025
**Developer**: Ebenezer Offei Okyere
