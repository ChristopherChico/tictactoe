-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2024 at 09:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tiki_taki_tow_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `players_info_tbl`
--

CREATE TABLE `players_info_tbl` (
  `player_ID` int(11) NOT NULL,
  `Last_Name` varchar(256) NOT NULL,
  `First_Name` varchar(256) NOT NULL,
  `Username` varchar(256) NOT NULL,
  `Password` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `players_info_tbl`
--

INSERT INTO `players_info_tbl` (`player_ID`, `Last_Name`, `First_Name`, `Username`, `Password`) VALUES
(1, 'Dela Cruz', 'Juan', 'juanD', '$2y$10$kjuHoqImYMHEHVMytOpA4OgeySGgAOqe3Te5o5bLknpYvmetd9jQm'),
(2, 'Juana', 'Mary', 'maria_hiwaga', '$2y$10$AYEasxSX8ps.710Xz6GP.OwzaxF4/.HU2vuTDxvPN2zgCVJHYL4XK');

-- --------------------------------------------------------

--
-- Table structure for table `scoreboard_ai_tbl`
--

CREATE TABLE `scoreboard_ai_tbl` (
  `match_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Opponent_name` varchar(255) NOT NULL,
  `Match_date_history` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `players_info_tbl`
--
ALTER TABLE `players_info_tbl`
  ADD PRIMARY KEY (`player_ID`);

--
-- Indexes for table `scoreboard_ai_tbl`
--
ALTER TABLE `scoreboard_ai_tbl`
  ADD PRIMARY KEY (`match_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `players_info_tbl`
--
ALTER TABLE `players_info_tbl`
  MODIFY `player_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `scoreboard_ai_tbl`
--
ALTER TABLE `scoreboard_ai_tbl`
  MODIFY `match_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
