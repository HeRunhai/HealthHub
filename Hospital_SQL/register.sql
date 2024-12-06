CREATE DATABASE  IF NOT EXISTS `register` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `register`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: healthhub_register
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `rno` int NOT NULL AUTO_INCREMENT,
  `pno` int DEFAULT NULL,
  `pname` varchar(30) DEFAULT NULL,
  `pgender` varchar(5) DEFAULT NULL,
  `page` int DEFAULT NULL,
  `dno` int DEFAULT NULL,
  `dname` varchar(45) DEFAULT NULL,
  `department` varchar(25) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `time` varchar(25) DEFAULT NULL,
  `fee` int DEFAULT NULL,
  `createTime` date DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  `diagnosisDescription` varchar(1000) DEFAULT NULL,
  `prescription` varchar(1000) DEFAULT NULL,
  `personalDescription` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`rno`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (1,1,'He Runhai','Male',21,1,'Lisa','stomatology department','Appointment','2023.04.30 14:00 - 16:00',10,'2023-04-05','Waiting',NULL,NULL,NULL),(5,1,'He Runhai','Male',21,1,'Lisa','emergency department','Appointment','2023-04-20 14:00 - 16:00',10,'2023-04-15','Waiting',NULL,NULL,NULL),(14,1,'He Runhai','Male',22,1,'Lisa','emergency department','Appointment','2023-04-30 14:00 - 16:00',10,'2023-04-27','Finished','12345','78974','45645'),(18,1,'He Runhai','Male',22,1,'Lisa','emergency department','Appointment','2023-04-30 16:00 - 18:00',10,'2023-04-27','Waiting',NULL,NULL,NULL),(19,1,'He Runhai','Male',22,2,'Alan','ear, nose & throat','Appointment','2023-05-03 9:00 - 11:00',8,'2023-05-02','Finished','Mild hurt, can fully recovery after serveral terms of medicine treatment','1. XXX2. XXX','Throat hurt'),(21,1,'He Runhai','Male',22,3,'Alex','dermatology','Appointment','2023-05-02 12:00 - 14:00',8,'2023-05-02','Waiting',NULL,NULL,NULL);
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'healthhub_register'
--

--
-- Dumping routines for database 'healthhub_register'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02 21:54:38
