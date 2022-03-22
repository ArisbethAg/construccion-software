-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 15, 2022 at 05:21 AM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `LABORATORIOS`
--

-- --------------------------------------------------------

--
-- Table structure for table `AUTOR`
--

CREATE TABLE `AUTOR` (
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `AUTOR`
--

INSERT INTO `AUTOR` (`nombre`, `apellido`) VALUES
('Jandy', 'Nelson'),
('Julio', 'Cortázar'),
('Rick', 'Riordan');

-- --------------------------------------------------------

--
-- Table structure for table `LIBRO`
--

CREATE TABLE `LIBRO` (
  `titulo` varchar(30) NOT NULL,
  `numPaginas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `LIBRO`
--

INSERT INTO `LIBRO` (`titulo`, `numPaginas`) VALUES
('Fangirl', 512),
('Rayuela', 632);

-- --------------------------------------------------------

--
-- Table structure for table `USUARIO`
--

CREATE TABLE `USUARIO` (
  `nombre` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AUTOR`
--
ALTER TABLE `AUTOR`
  ADD PRIMARY KEY (`nombre`);

--
-- Indexes for table `LIBRO`
--
ALTER TABLE `LIBRO`
  ADD PRIMARY KEY (`titulo`);

--
-- Indexes for table `USUARIO`
--
ALTER TABLE `USUARIO`
  ADD PRIMARY KEY (`username`);