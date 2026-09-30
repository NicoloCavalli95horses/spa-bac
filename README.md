# Broken Access Control in Single-Page Applications: A Vulnerable Testbed

A deliberately vulnerable web application designed to demonstrate different forms of **Broken Access Control (BAC)** in Single-Page Applications (SPAs).
The application contains several intentionally introduced vulnerabilities related to access control, including **Insecure Direct Object References (IDOR)**, **HTTP Parameter Tampering**, and **Client-Side Access Control**.

## Vulnerabilities

The application contains examples of the following BAC scenarios:

- **IDOR (Insecure Direct Object Reference)**
  Access to resources is not properly authorized on the server, allowing an unauthorized user to access objects requiring high privileges

- **HTTP Parameter Tampering**  
  Access-control-related parameters sent in HTTP requests can be modified by the client to obtain access to functionality or resources that should not be available

- **Client-Side Access Control**  
  Access-control decisions are partially or entirely enforced by the client-side application. By manipulating client-side state or logic, a user can access functionality that should be restricted.

These vulnerabilities are included deliberately to provide a realistic environment for studying BAC in modern web applications.

## Setup

- `git clone`,
- `npm install` (both in the root folder and within `client/` folder),
- build from the client `npm run build` (static content will be served by nest.js),
- run with `npm run start`
