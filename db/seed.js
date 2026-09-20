import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employeeSeedData = [
    {
      name: "Mark",
      birthday: "2000-04-01",
      salary: 150000,
    },
    {
      name: "Amy",
      birthday: "1998-01-28",
      salary: 125000,
    },
    {
      name: "Mike",
      birthday: "1990-08-05",
      salary: 75000,
    },
    {
      name: "Rose",
      birthday: "2002-09-17",
      salary: 200000,
    },
    {
      name: "Bryan",
      birthday: "1999-01-02",
      salary: 90000,
    },
    {
      name: "Charlie",
      birthday: "2007-03-22",
      salary: 100000,
    },
    {
      name: "Candace",
      birthday: "2000-06-06",
      salary: 98000,
    },
    {
      name: "Josh",
      birthday: "1975-04-14",
      salary: 250000,
    },
    {
      name: "Jamie",
      birthday: "2001-11-14",
      salary: 115000,
    },
    {
      name: "Harold",
      birthday: "2000-12-25",
      salary: 198000,
    },
  ];
  for (const employee of employeeSeedData) {
    await createEmployee(employee);
  }
}
