This is a backend API server built with Node.js, Express, and Sequelize (with SQL Server/MySQL/PostgreSQL). It supports historical sales data analysis and CRUD operations.

---

## Prerequisites

- Node.js v18.x or higher
- npm v9.x or higher
- Database: SQL Server

## How to use api
GET /api/revenue/2024-01-01/2024-03-31/month
Response body  
{
  "success": true,
  "revenue": [
    {
      "month": "2024-01",
      "totalRevenue": 10500.00
    },
    {
      "month": "2024-02",
      "totalRevenue": 8700.00
    },
    {
      "month": "2024-03",
      "totalRevenue": 9200.00
    }
  ]
}
