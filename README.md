# 🧹 Falsy Values Remover

A tiny JavaScript utility that removes all **falsy values** from an array.  
Perfect practice for strengthening core JS fundamentals and for simple data cleaning tasks.

---

## ✨ What It Does

This function scans through any given array and returns a **new array containing only truthy values**.

In JavaScript, falsy values are: `false`, `null`, `0`, `"",` `undefined`, `NaN`

---

## 📁 Project Structure
```bash
falsy-values-remover
├── .gitignore
├── MIT LICENSE
├── README.md
└── source.js
```

## Example Usage
```js
let myArray = [
  89.5, 91.4, 12.3, false, 7.8, 100.9, "hegemony", "",
  "", "salty", 51.7, NaN, "Shanzu", 9.8, undefined, false,
  true, true, 0, 0, 5.3,
];

console.log(bouncer(myArray));
// ➡️ [89.5, 91.4, 12.3, 7.8, 100.9, "hegemony", "salty", 51.7, "Shanzu", 9.8, true, true, 5.3]
```
## 📜 License
This project is licensed under the MIT License — see the LICENSE file for details.