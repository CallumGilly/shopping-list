-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2021 at 11:47 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping-list`
--

-- --------------------------------------------------------

--
-- Table structure for table `first-list`
--

CREATE TABLE `first-list` (
  `id` int(5) UNSIGNED NOT NULL,
  `name` varchar(254) NOT NULL,
  `quantity` int(5) NOT NULL,
  `price` decimal(16,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `first-list`
--

INSERT INTO `first-list` (`id`, `name`, `quantity`, `price`) VALUES
(1, 'TestItem0', 4, '3.00'),
(2, 'TestItem1', 2, '2.99'),
(3, 'TestItem2', 20, '2.50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `first-list`
--
ALTER TABLE `first-list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `first-list`
--
ALTER TABLE `first-list`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
