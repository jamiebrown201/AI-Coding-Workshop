# User Fixture Anonymization Notes

- All names are randomly generated using faker.js
- Email addresses use example.com to ensure they can never resolve
- Regions are limited to broad geography buckets (no city level detail)
- `createdAt` timestamps are shifted by at least 18 months from any real data
