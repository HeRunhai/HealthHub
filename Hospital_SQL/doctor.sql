CREATE DATABASE  IF NOT EXISTS `doctor` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `doctor`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: healthhub_doctor
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
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `name` varchar(25) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `condition_match` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES ('dermatology','Skin, hair, and nail conditions','/static/department/dermatology department.png','Treatable body parts, Skin, Hair, Nails, Scalp'),('ear, nose & throat','Ear, Nose, and Throat Care, Respiratory Health, Head and Neck Surgery','/static/department/ear, nose and throat.png','Sinusitis, Tonsillitis, Ear infections, Hearing loss, Allergies, Deviated septum, Voice disorders, Swallowing disorders, Sleep apnea, Vertigo, Dizziness, Hoarseness, Sore throat, Nasal polyps, Nosebleeds, Tinnitus, Salivary gland disorders, Ear, Nose, Throat, Mouth, Salivary glands'),('emergency department','Urgent Care, Trauma Center, Quick Medical Attention','/static/department/emergency department.png','Chest pain, Stroke, Trauma, Severe bleeding, Head injury, Breathing difficulties, Abdominal pain, Allergic reactions, Poisoning, Seizures, Burns, Fractures, Dislocations, Heart attack, Overdose, Shock, Carbon monoxide poisoning, Severe infections, All body parts and systems'),('gynecology & obstetrics','Women\'s Health, Pregnancy Care, Childbirth','/static/department/gynecology and obstetrics.png','Menstrual disorders, Infertility, Sexually transmitted infections, Pelvic pain, Endometriosis, Polycystic ovary syndrome (PCOS), Menopause, Urinary incontinence, Cervical cancer, Ovarian cancer, Breast cancer, Preeclampsia, Gestational diabetes, Miscarriage, Labor and delivery complications,Female reproductive system, Breasts'),('ophthalmology','Eye Care, Vision Problems, Eye Surgery','/static/department/ophthalmology department.png','Cataracts, Glaucoma, Age-related macular degeneration (AMD), Diabetic retinopathy, Retinal detachment, Corneal diseases, Conjunctivitis, Dry eyes, Eye infections, Strabismus, Amblyopia, Ptosis, Refractive errors, Uveitis, Ocular trauma, Eyes, Eyelids'),('stomatology','Dental Care, Oral Health, Teeth and Gum Diseases','/static/department/stomatology department.png','Tooth decay, Gum disease, Oral cancer, Cleft palate, Malocclusion, Oral infections, Temporomandibular joint (TMJ) disorders, Oral sores, Halitosis, Oral thrush, Bruxism, Oral herpes, Salivary gland disorders, Mouth, Teeth, Gums, Jaw, Salivary glands');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `dno` int NOT NULL,
  `account` varchar(15) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `department` varchar(25) DEFAULT NULL,
  `tab` varchar(15) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `education` varchar(100) DEFAULT NULL,
  `career` varchar(100) DEFAULT NULL,
  `book_price` int DEFAULT NULL,
  PRIMARY KEY (`dno`),
  KEY `FK1_idx` (`account`),
  KEY `FK2_idx` (`department`),
  CONSTRAINT `FK1` FOREIGN KEY (`account`) REFERENCES `user` (`account`),
  CONSTRAINT `FK2` FOREIGN KEY (`department`) REFERENCES `department` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'123','/static/img/Lisa.png','Lisa','Female','emergency department','specialist','Head',NULL,NULL,10),(2,'1234','/static/img/Alan.png','Alan','Male','ear, nose & throat','staff','staff',NULL,NULL,8),(3,'12345','/static/img/Alex.png','Alex','Male','dermatology','Staff','staff',NULL,NULL,8);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `account` varchar(15) NOT NULL,
  `password` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('123','123'),('1234','1234'),('12345','12345');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_arrange`
--

DROP TABLE IF EXISTS `work_arrange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_arrange` (
  `wno` int NOT NULL,
  `dno` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `tab` varchar(15) DEFAULT NULL,
  `department` varchar(25) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(25) DEFAULT NULL,
  `available` int DEFAULT '99',
  `price` int DEFAULT NULL,
  PRIMARY KEY (`wno`),
  KEY `FK3_idx` (`dno`),
  CONSTRAINT `FK3` FOREIGN KEY (`dno`) REFERENCES `doctor` (`dno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_arrange`
--

LOCK TABLES `work_arrange` WRITE;
/*!40000 ALTER TABLE `work_arrange` DISABLE KEYS */;
INSERT INTO `work_arrange` VALUES (1,1,'Lisa','/static/img/Lisa.png','specialist','emergency department','Appointment','2023-05-02','14:00 - 16:00',99,10),(2,1,'Lisa','/static/img/Lisa.png','specialist','emergency department','Appointment','2023-05-03','16:00 - 18:00',99,10),(3,2,'Alan','/static/img/Alan.png','common','ear, nose & throat','Consultation','2023-05-02','14:00 - 16:00',99,8),(4,2,'Alan','/static/img/Alan.png','common','ear, nose & throat','Appointment','2023-05-04','14:00 - 16:00',99,8),(5,3,'Alex','/static/img/Alex.png','common','dermatology','Appointment','2023-05-02','12:00 - 14:00',99,8),(6,3,'Alex','/static/img/Alex.png','common','dermatology','Consultation','2023-05-04','14:00 - 16:00',99,8),(7,1,'Lisa','/static/img/Lisa.png','specialist','emergency department','Appointment','2023-05-02','9:00 - 11:00',99,10),(8,2,'Alan','/static/img/Alan.png','common','ear, nose & throat','Appointment','2023-05-03','9:00 - 11:00',99,8);
/*!40000 ALTER TABLE `work_arrange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'healthhub_doctor'
--

--
-- Dumping routines for database 'healthhub_doctor'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02 21:54:04
