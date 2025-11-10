# 🧾 Technical Log – Graph Visualization Module (JavaScript with Jest)

**Date:** 10-11-2025  
**Engineer:** Jesús Martínez  

---

## 🧩 Overview

This document summarizes the testing and coverage process for the **BookingMx Graph Visualization Module**, developed in **JavaScript** and tested with **Jest**.

The purpose of the module is to represent nearby cities and the distances between them, enabling BookingMx to suggest alternative destinations near the customer’s main booking city.

---

## ⚙️ Test Environment

| Component | Version / Tool |
|------------|----------------|
| **Node.js** | 20.11.1 |
| **Runtime Environment** | Windows 10 |
| **Testing Framework** | Jest 29.x |
| **Coverage Tool** | Jest Built‑in Coverage Reporter |
| **Package Manager** | npm 10.x |

---

## 🧪 Test Summary

| Metric | Result |
|--------|---------|
| **Total Test Cases** | 12 |
| **Passed Tests** | 12 |
| **Failed Tests** | 0 |
| **Code Coverage** | 92 % Statements / 85 % Branches / 100 % Functions / 94.7 % Lines |
| **Build Result** | SUCCESS ✅ |

---

## 🧠 Test Scenarios

**Main functionalities covered:**
1. Add cities and create graph connections.  
2. Retrieve nearby cities successfully.  
3. Suggest alternative destinations within a distance threshold.  
4. Handle invalid or empty city names.  
5. Validate that distances must be positive.  
6. Manage non‑existent cities and invalid graph queries.  
7. Exception handling in all possible branches (`throw` statements).  
8. Cross‑validation between two connected cities.

---

## 🐛 Issues Found and Solutions

| Issue | Cause | Solution |
|--------|-------|-----------|
| **No tests detected by Jest** | File was named `graph.text.js` instead of `graph.test.js`. | Renamed the file to match Jest’s pattern. |
| **Module import error `(Cannot find module '../src/graph')`** | Wrong relative path inside test file due to folder structure. | Adjusted to `require('../graph')` according to directory level. |
| **Coverage below 90 %** | Missing branches for edge cases and double‑error conditions. | Added tests for invalid parameters (`null`, negative distance, non‑existent city). |
| **Graph error handling untested** | Some exceptions weren’t triggered. | Added specific tests that intentionally throw errors to achieve 92 % coverage. |

---

## 📊 Coverage Results

Final results after all test iterations:

| Metric | Coverage |
|--------|-----------|
| **Statements** | 92 % |
| **Branches** | 85 % |
| **Functions** | 100 % |
| **Lines** | 94.7 % |

**Coverage Sources:**  
Automatic Jest HTML Report generated in:  
`coverage/lcov-report/index.html`

---

## 💡 Lessons Learned

- Jest configurations depend heavily on correct file naming and path resolution.  
- Achieving 90 % + coverage requires intentionally testing both valid and error branches.  
- Coverage visualization (HTML report) is a valuable learning tool to identify untested conditions.  
- Maintaining the same testing rigor for both Java and JavaScript modules improves overall reliability at BookingMx.

---

## ✅ Conclusion

All unit tests for the **Graph Visualization Module** passed successfully, and total coverage surpassed the 90 % requirement.  
This testing process strengthened understanding of JS unit testing and ensured that the graph logic is robust against invalid or missing data.

---

**Test Engineer:**  
🧑‍💻 Jesús Martínez