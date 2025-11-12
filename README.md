# 📘 BookingMx – Reservations Module Unit Testing

## 🧩 Overview

This repository includes the **unit tests** for two major modules of the *BookingMx* platform, developed as part of the **Seventh Challenge (Java and JavaScript Programming Procedures)**.

1. **Sprint 1 – Reservations Module (Java + JUnit 5 + JaCoCo)**  
   Focused on testing core reservation functionalities to ensure proper creation, modification, and cancellation processes.

2. **Sprint 2 – Graph Visualization Module (JavaScript + Jest)**  
   Implements and tests a graph representing nearby cities and distances related to a customer’s reservation destination, supporting BookingMx’s new visualization feature.

> Both sprints aim to strengthen testing practices and documentation discipline following previous production issues caused by insufficient test coverage.

---

## ⚙️ Technologies and Tools

| Tool / Technology | Purpose |
|------------------|----------|
| **Java 17**       | Main programming language |
| **JUnit 5**       | Unit testing framework |
| **Maven**         | Build automation & dependency management |
| **JaCoCo**        | Code coverage reporting |
| **JavaScript (Node.js 20)**  | Runtime for the graph visualization module |
| **Jest 29.x** | JavaScript unit testing and coverage |
| **npm 10.x** | JavaScript package management |
| **Git / GitHub**  | Version control and repository hosting |

---

## 🏗️ Project Structure
```
bookingmx-unit-tests/
│
│ ├── src/
│ │ ├── main/java/com/bookingmx/reservations/ReservationService.java
│ │ ├── main/java/com/bookingmx/reservations/exceptions/ReservationException.java
│ │ └── test/java/com/bookingmx/reservations/ReservationServiceTest.java
| │ ├── src/graph.js
│ | ├── tests/graph.test.js
│ ├── pom.xml
│ ├── TEST_LOG.md
│ └── (JaCoCo reports)
│ ├── coverage/lcov-report/index.html
│ ├── TEST_LOG_JS.md
│
└── README.md
```

Each unit test validates essential functionality such as:  
creating, editing, canceling, and querying reservations — covering both **positive** and **negative** test cases.

---

## 🧠 Functionalities Tested

### 🟦 Sprint 1 – Reservations Module (Java)

| Category | Description |
|-----------|--------------|
| ✅ **Create Reservation** | Ensures successful creation for valid customer and ID. |
| ⚠️ **Duplicate ID Handling** | Verifies exceptions on reuse of an existing ID. |
| ✏️ **Edit Reservation** | Confirms updates to existing reservations. |
| ❌ **Cancel Reservation** | Ensures correct cancellation process. |
| 🚫 **Error Scenarios** | Handles invalid and missing data. |
| 🔍 **Get Reservation** | Retrieves the correct data or `null` if absent. |

---

### 🟨 Sprint 2 – Graph Visualization Module (JavaScript)

| Category | Description |
|-----------|--------------|
| 🏙️ **Add Cities** | Adds city nodes to the graph. |
| 🌉 **Create Connections** | Establishes distances between two cities. |
| 🔎 **Get Nearby Cities** | Lists connected destinations. |
| 🧭 **Suggest Alternatives** | Suggests cities within a given radius of the destination. |
| 🚫 **Error Handling** | Validates city names, null data, and invalid distances. |
| ⚖️ **Connections in both ways** | Ensures connections work both ways (A→B, B→A). |

---


## 🧪 How to Run Tests and View Coverage
## ▶️ Sprint 1 – Java (Reservation Module)

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

## ▶️ Sprint 2 – JavaScript (Jest Tests)
Install dependencies:
```
npm install
```
Run tests and generate coverage:
```
npm test
```

📂 Open coverage report:
coverage/lcov-report/index.html

## 📊 Sprint 1: JaCoCo Test Results

<img width="2560" height="296" alt="image" src="https://github.com/user-attachments/assets/997778fc-0373-4b70-bd18-c85b86c0913f" />  
  
  
| Metric                    | Result |
|--------------------------|--------|
| Total Tests Executed     | 9     |
| Successful Tests         | 9     |
| Failed Tests             | 0      |
| Total Coverage (JaCoCo)  | **92 %** ✔️ |
| Build Result             | ✅ SUCCESS |

---

## 🟨 Sprint 2: Visualization Module (Jest)
### ✅ Test Execution Output
  
<img width="816" height="324" alt="Captura de pantalla 2025-11-10 113813" src="https://github.com/user-attachments/assets/df5cd1dc-a26c-4f54-8819-bc941aa9ca6d" />


📊 Coverage Report (96 % Statements / 90 % Branches / 100 % Functions)
  
<img width="1918" height="410" alt="Captura de pantalla 2025-11-10 113950" src="https://github.com/user-attachments/assets/7b99dfce-6f80-4726-90d8-aeca6f600784" />


| Metric                    | Result |
|--------------------------|--------|
| Statements     | **96%**  ✅   |
| Branches         | **90%**  ✅   |
| Functions             | **100%** ✅  |
| Lines  | **94.73 %** ✅ |
| Tests Run             | 12 |
| Passed | 12 ✅ |
| Failed | 0  |

---

## 🧾 Test Log Summary

| Sprint                   | Log File | Description |
|--------------------------|--------|---------------|
| 1 – Reservations (Java)  | **TEST_LOG.md** | Issues, solutions, and coverage results (JaCoCo). |
| 2 – Graph Visualization (JS) | **TEST_LOG_JS.md** | Technical reflections and coverage metrics (Jest). |

---

## 📚 Code Documentation and Comments
Both modules follow standardized documentation practices:

| Standard                   | Language | Description |
|--------------------------|--------|---------------|
| Javadoc  | **Java (Module 1)** | Documented methods and exceptions for ReservationService and ReservationException. |
| JSDoc | **JavaScript (Module 2)** | Documented all major functions in graph.js (addCity, addConnection, getNearbyCities, suggestAlternatives). |

Example – Javadoc (Java)
```
/**
 * Cancels an existing reservation.
 * @param id reservation ID
 * @return true if the operation was successful
 * @throws ReservationException if the reservation does not exist
 */
public boolean cancelReservation(int id) throws ReservationException { ... }
```

Example – JSDoc (JavaScript)
```
/**
 * Suggests alternative destinations within a given maximum distance.
 * @param {string} city - The city name to start from.
 * @param {number} maxDistance - The maximum distance in kilometers.
 * @returns {string[]} List of nearby city names within the limit.
 * @throws {Error} If the city is not found.
 */
suggestAlternatives(city, maxDistance) { ... }
```
---

## 🧱 Lessons Learned

- Testing in both Java and JavaScript environments reinforces QA skills.
- Proper coverage and documentation prevent regressions and ensure stable releases.
- Testing error branches (exceptions, invalid inputs) is essential for robustness.
- Tools like JUnit 5 + JaCoCo and Jest complement each other for full‑stack validation.
- Consistent folder structures and documentation simplify team collaboration within BookingMx.

---

## 👩‍💻 Authors

| Name | Role |
|------|------|
| Jesús Martínez  | Contributor – Reservations Module, JavaScript Module, & Unit Tests |

---


## 📚 License

This project is part of an educational exercise for **BookingMx** to make the seventh challenge of the Bécalos In-Mexico Backend Program.  
It is intended for academic and demonstration purposes only.
