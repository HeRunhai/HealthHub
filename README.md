# HealthHub

HealthHub is an advanced information system designed for hospitals, offering a mobile application for patients and a web application for doctors and hospital administrators. This system aims to streamline and computerize key hospital operations, including patient management, appointment scheduling, doctor–patient interactions, and hospital administration tasks. HealthHub enhances user experience and operational efficiency by utilizing modern technologies such as microservices architecture, front-end and back-end separation, and real-time communication.

## Project Overview

HealthHub builds upon the foundation of the 2021 "Hospital Queuing and Registration System" and introduces significant improvements through iterative development. The system adopts a microservices distributed architecture and leverages technologies like Spring Cloud, Vue.js, and WebSocket for enhanced scalability, maintainability, and real-time interaction capabilities.

The project features:
- A mobile app for patients to manage appointments, consultations, and hospitalization.
- A web app for doctors and administrators to manage schedules, records, and data analytics.
- Comprehensive solutions for appointment registration, online consultations, diagnosis, and doctor scheduling.

## Key Features

### Functional Modules
1. **Patient Information Management**: Efficient handling of patient data and medical history.
2. **Appointment Registration**: Online booking for consultations and hospital visits.
3. **Online Consultations**: Real-time communication between patients and doctors via WebSocket.
4. **Medical Record Management**: Centralized storage and management of patient medical records.
5. **Doctor Scheduling**: Automated management of doctor duty rosters and availability.
6. **Data Review and Analysis**: Insights and analytics for hospital administrators.

### Back-End Enhancements
- **Microservices Architecture**: 
  - **Patient-Service**
  - **Doctor-Service**
  - **Register-Service**
- **Spring Cloud Framework**: Improved scalability and decoupling of services.
- **MyBatis-Plus**: Optimized API interfaces for better performance and maintainability.

### Front-End and Real-Time Interaction
- **WebSocket Technology**: Enables real-time communication for online booking and consultation.
- **Mobile & Web Interfaces**: Intuitive and user-friendly interfaces for patients, doctors, and administrators.

## Technology Stack

### Back-End
- **Programming Languages**: Java
- **Frameworks**: Spring Cloud, MyBatis-Plus
- **Database**: MySQL

### Front-End
- **Programming Languages**: JavaScript, HTML5, Vue.js
- **Development Tools**: IDEA 2020, HBuilder X

## Repository Structure

- **Hospital_End**: Contains the back-end code implemented with a microservices architecture.
- **Hospital_Front**: Includes the code for the mobile app and web application.

## Future Development

HealthHub has been designed with scalability in mind, and future development directions include:
- Integration with wearable health devices for real-time patient monitoring.
- Advanced AI-driven diagnostics and treatment recommendations.
- Enhanced data security and compliance with healthcare regulations.

## Economic Viability

An economic analysis has confirmed the cost-effectiveness of HealthHub, making it a sustainable solution for hospital information management.

## Getting Started

### Prerequisites
- **Java 11+**
- **MySQL 8.0+**
- **Node.js 16+**
- **IDE**: IntelliJ IDEA, HBuilder X

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/healthhub.git
   cd healthhub
2. Set up the back-end services:
   ```bash
   cd Hospital_End
   mvn install
   mvn spring-boot:run
3. Set up the front-end applications:
   ```bash
   cd Hospital_Front
   npm install
   npm run serve
4. Access the system:
Mobile App: Open the app on your device (setup instructions in the mobile app folder).
Web App: Open http://localhost:8080 in your browser.

### Contributors
He Runhai - Project Lead and Developer