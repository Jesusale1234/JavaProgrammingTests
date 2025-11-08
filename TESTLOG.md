# 🧾 Test Log and Coverage Report

**Date:** 2024‑09‑16  
**Engineer:** Jesús Martínez  

---

## 🧩 Overview

This document summarizes the testing process, issues encountered, and results obtained for the **BookingMx Reservations Module**.  
Unit tests were implemented using **JUnit 5** and coverage analysis was performed using **JaCoCo**.

---

## ⚙️ Test Environment

| Component | Version / Tool |
|------------|----------------|
| **Java JDK** | 17 |
| **Build Tool** | Apache Maven 3.9+ |
| **Testing Framework** | JUnit 5 |
| **Coverage Tool** | JaCoCo 0.8.11 |
| **Operating System** | Windows 10 |

---

## 🧪 Test Summary

| Metric | Result |
|--------|---------|
| **Total Test Cases** | 9 |
| **Passed Tests** | 9 |
| **Failed Tests** | 0 |
| **Code Coverage (JaCoCo)** | 92 % ✔️ *(Goal ≥ 90 % achieved)* |
| **Build Result** | SUCCESS ✅ |

---

## 🧠 Test Cases Covered

1. Create a reservation successfully.  
2. Fail when the reservation ID already exists.  
3. Edit an existing reservation.  
4. Fail when editing a non‑existent reservation.  
5. Cancel an existing reservation.  
6. Fail when canceling a non‑existent reservation.  
7. Fail when the customer name is `null`.  
8. Fail when the customer name is empty or blank.  
9. Return `null` when retrieving a non‑existent reservation.  

---

## 🐛 Issues Found and Solutions

| Issue | Cause | Solution |
|--------|-------|-----------|
| **Compilation error – Lambda expressions not supported in –source 7** | Maven was compiling as Java 7. | Updated `maven-compiler-plugin` to use `<source>17</source>` and `<target>17</target>`. |
| **Uncovered branches lowering coverage below 90 %** | Missing tests for some conditional branches (e.g., `null` and empty strings). | Added new test cases to force all branches and exception paths. |

---

## 📊 Coverage Results

After adding additional test cases, the **overall coverage** reached **92 %**, exceeding the minimum requirement of 90 %.  
The *ReservationService* class achieved 94 %, while *ReservationException* reached 100 %.

---

## 🧱 Lessons Learned

- Always configure the compiler to use the proper JDK version to prevent compatibility issues.  
- Validate both **positive** and **negative** paths to achieve high coverage.  
- Keep documentation updated to facilitate future maintenance.  
- Continuous testing ensures **production stability** and reduces debugging time.

---

## ✅ Conclusion

All planned unit tests were executed successfully.  
Coverage goals were met (≥ 90 %), and robustness of the *Reservations Module* was confirmed through multiple scenarios and exception handling.

The unit testing process strengthened understanding of testing best practices and highlighted the importance of combining **automation, documentation, and continuous improvement** in software projects.

---

**Test Engineer:**  
🧑‍💻 Jesús Martínez  - Software Developer