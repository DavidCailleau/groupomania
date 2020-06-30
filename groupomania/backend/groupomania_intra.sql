-- MySQL dump 10.13  Distrib 5.7.20, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania_intra
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `article_name` varchar(30) NOT NULL,
  `article_image_url` varchar(200) NOT NULL,
  `article_description` text NOT NULL,
  `article_price` smallint(5) unsigned NOT NULL,
  `user_id` smallint(5) unsigned NOT NULL,
  `email_contact` varchar(200) NOT NULL,
  `article_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_userArticle_id` (`user_id`),
  CONSTRAINT `fk_userArticle_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'VTT Mountain Bike','http://localhost:3000/images/mountain-bike-1149074_640.jpg1593425958058.jpg','VTT Mountain Bike acheté neuf à 400 euros. A peine servi (juste une saison). Super affaire à saisir d\'urgence !',120,4,'visage.michael@groupomania.com','2020-06-29 12:19:18'),(2,'Console PS2','http://localhost:3000/images/playstation.jpg1593426584292.jpg','Playstation 2 toujours en état de fonctionnement avec 2 manettes. Je fournis 5 jeux avec la console (Resident Evil 4, GTA San Andreas, Gran Turismo 2, God of wars 1 & 2, Tekken 4) ',70,3,'mazet.clement@groupomania.com','2020-06-29 12:29:44'),(3,'Appareil Photo Canon','http://localhost:3000/images/photo-431119_640.jpg1593427128220.jpg','Appareil photo professionnel en excellent état. Acheté à 800€, il y a presque 4 ans. Tous les accessoires sont présents, ainsi qu\'une sacoche.',175,6,'diaz.paola@groupomania.com','2020-06-29 12:38:48');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentaires`
--

DROP TABLE IF EXISTS `commentaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commentaires` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` smallint(5) unsigned NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `message_id` mediumint(7) unsigned NOT NULL,
  `commentaire` text NOT NULL,
  `date_commentaire` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `ind_date_commentaire` (`date_commentaire`),
  KEY `fk_userCommentaire_id` (`user_id`),
  KEY `fk_messageCommentaire_id` (`message_id`),
  CONSTRAINT `fk_messageCommentaire_id` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_userCommentaire_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaires`
--

LOCK TABLES `commentaires` WRITE;
/*!40000 ALTER TABLE `commentaires` DISABLE KEYS */;
INSERT INTO `commentaires` VALUES (3,4,'Michael','Visage',2,'Super idée !! Merci !','2020-06-29 12:14:08'),(4,4,'Michael','Visage',4,'Super ! Je vais de ce pas poster ma première annonce.','2020-06-29 12:15:30'),(5,3,'Clément','Mazet',2,'Bonjour à tous. Ravi d\'être ici. Merci pour ce bel outil mis à notre disposition.','2020-06-29 12:23:30'),(6,3,'Clément','Mazet',3,'Encore merci !','2020-06-29 12:24:54'),(7,5,'Florent','Lelievre',5,'Belle salle et très moderne. Bravo !','2020-06-29 12:40:59'),(8,5,'Florent','Lelievre',2,'Génial !','2020-06-29 12:42:06'),(14,6,'Paola','Diaz',2,'Bravo pour cette belle réalisation !','2020-06-29 12:45:35');
/*!40000 ALTER TABLE `commentaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `date_post` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` smallint(5) unsigned NOT NULL,
  `message` text NOT NULL,
  `Message_image_url` varchar(200) DEFAULT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `title` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ind_date_post` (`date_post`),
  KEY `fk_userMessage_id` (`user_id`),
  CONSTRAINT `fk_userMessage_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (2,'2020-06-29 12:04:10',2,'Cher(e)s collaborateurs Groupomania,\n\nSuite aux résultats de l\'enquête du bien-être au travail, nous avons pris en considération vos craintes, vos doutes et vos motifs d\'insatisfaction. L\'ambiance au travail était le point qui ressortait le plus de l\'enquête, suivi du partage entre les différents départements. L\'amélioration de ces 2 sujets est devenue notre priorité. C\'est pourquoi nous sommes fiers de vous annoncer la mise en place de votre réseau social d\'entreprise : Groupomania Intranet. Avec votre Intranet vous pourrez communiquer et partager avec vos collègues du groupe de façon moderne et ludique.\nNous avons hâte d\'avoir vos retours sur ce beau projet conçu pour vous !','http://localhost:3000/images/logo3.png1593425050886.png','David','Cailleau','Bienvenue sur Groupomania Intranet'),(3,'2020-06-29 12:08:23',2,'Sur Groupomania Intranet, vous avez accès à l\'IntraNetwork qui est un forum de discussion. Echanger avec vos collègues, partager vos moments de vies ou vos réussites professionnelles ou poser une question.','http://localhost:3000/images/network-min.jpg1593425303735.jpg','David','Cailleau','IntraNetwork'),(4,'2020-06-29 12:11:58',2,'Sur Groupomania Intranet, vous avez également accès à l\'IntraMarket qui vous permettra de passer une petite annonce au sein du groupe pour vendre vos objets dont vous voulez vous séparer. Les éventuels acheteurs pourront alors vous contacter par mail. N\'hésitez pas !','http://localhost:3000/images/market-min.jpg1593425518550.jpg','David','Cailleau','IntraMarket'),(5,'2020-06-29 12:34:43',6,'Une bonne nouvelle n\'arrivant jamais seule, je vous annonce l\'ouverture d\'une nouvelle salle de réunion. Elle est située au bureau 304 (3ème étage) du siège. Pour la réserver, merci de suivre la procédure habituelle.\nBien cordialement','http://localhost:3000/images/salle.jpg1593426883001.jpg','Paola','Diaz','Nouvelle salle de réunion');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` binary(80) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'basic',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'David','Cailleau','cailleau.david@groupomania.com','$2b$10$ZErbpX4xYG5epWMljyqrsuQhuQ0qa30taxhHc4ibNfQQTQEkdZbwW\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','admin'),(3,'Clément','Mazet','mazet.clement@groupomania.com','$2b$10$VJOHrFogXaovf8MYuAhkyeMEMvDFDMOtL1YyXS0IYXOP.x/sXokJy\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','basic'),(4,'Michael','Visage','visage.michael@groupomania.com','$2b$10$E3rDzXvohSK4lnUdEkqdAODsZniUbA/pHJfToIDNPVSrD2M68nwze\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','basic'),(5,'Florent','Lelievre','lelievre.florent@groupomania.com','$2b$10$vWCjtVfSwJ3H3auly0G.OuPlagjdhxpPfaAV6v/1EHmE5RfI1e8w6\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','basic'),(6,'Paola','Diaz','diaz.paola@groupomania.com','$2b$10$gYsBNlk1bZn6NkT9KeSrzupsseqAady5WdbtJ/UFoXfrR9JMgPEku\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','basic');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-30 14:45:56
