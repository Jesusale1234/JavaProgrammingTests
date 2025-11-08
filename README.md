# 📘 BookingMx – Reservations Module Unit Testing

## 🧩 Overview

This repository contains the **unit tests** for the *Reservations Module* of **BookingMx**, a hotel management web platform of the seventh challenge related to Java and JavaScript programming procedures.
The tests were implemented in **Java (17)** using **JUnit 5** and **JaCoCo** to ensure high code quality and maintain a minimum of **90% test coverage**.
> This sprint applies lessons learned from a failed production release due to missing tests and documentation, reinforcing the importance of both for future developments.

---
## ⚙️ Technologies and Tools

| Tool / Technology | Purpose |
|------------------|----------|
| **Java 17**       | Main programming language |
| **JUnit 5**       | Unit testing framework |
| **Maven**         | Build automation & dependency management |
| **JaCoCo**        | Code coverage reporting |
| **Git / GitHub**  | Version control and repository hosting |

---

## 🏗️ Project Structure
```
bookingmx-reservations-tests/
│
├── src/
│ ├── main/
│ │ └── java/com/bookingmx/reservations/ReservationService.java
│ │ └── java/com/bookingmx/reservations/exceptions/ReservationException.java
│ └── test/
│ └── java/com/bookingmx/reservations/ReservationServiceTest.java
│
├── pom.xml
├── TEST_LOG.md
└── README.md
```

Each unit test validates essential functionality such as:  
creating, editing, canceling, and querying reservations — covering both **positive** and **negative** test cases.

---

## 🧠 Functionalities Tested

| Category | Description |
|----------|-------------|
| ✅ **Create Reservation** | Ensures successful creation for valid customer and reservation ID. |
| ⚠️ **Duplicate ID Handling** | Verifies an exception is thrown when attempting to reuse an existing ID. |
| ✏️ **Edit Reservation** | Confirms that reservation data can be updated. |
| ❌ **Cancel Reservation** | Ensures a reservation can be successfully cancelled. |
| 🚫 **Error Scenarios** | Validates proper exception handling for missing or invalid inputs. |
| 🔍 **Get Reservation** | Returns customer name or `null` when not found. |

---

## 🧪 How to Run Tests and View Coverage

### 1️⃣ Run unit tests

```
mvn clean test
```
### 2️⃣ Generate coverage report
```
mvn jacoco:report
```

### 3️⃣ View the coverage results
Open the following file in your browser:
```
target/site/jacoco/index.html
```

---

## 📊 Test Results

<img width="2560" height="296" alt="image" src="https://github.com/user-attachments/assets/997778fc-0373-4b70-bd18-c85b86c0913f" />  
  
  
| Metric                    | Result |
|--------------------------|--------|
| Total Tests Executed     | 9     |
| Successful Tests         | 9     |
| Failed Tests             | 0      |
| Total Coverage (JaCoCo)  | **92 %** ✔️ |
| Build Result             | ✅ SUCCESS |

---

## 🧾 Test Log Summary

Detailed documentation is available in the file:

#### TEST_LOG.md

It includes:

- Issues found during development
- Solutions implemented
- Lessons learned for continuous improvement

---

## 🧱 Lessons Learned

- Lack of tests in prior releases caused failures in production.
- Proper documentation and unit testing significantly increase software reliability.
- Maintaining **90% or more** coverage helps ensure confidence in code quality.
- Tools like **JUnit 5** and **JaCoCo** streamline testing and coverage analysis.

---

## 👩‍💻 Authors

| Name | Role |
|------|------|
| Jesús Martínez  | Contributor – Reservations Module & Unit Tests |

---

## 📚 License

This project is part of an educational exercise for **BookingMx** to make the seventh challenge of the Bécalos In-Mexico Backend Program.  
It is intended for academic and demonstration purposes only.

