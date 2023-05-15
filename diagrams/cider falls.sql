CREATE TABLE `guests` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `areaId` int
);

CREATE TABLE `areas` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `services` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `serviceLog` (
  `id` int PRIMARY KEY,
  `areaId` int,
  `serviceId` int
);

ALTER TABLE `guests` ADD FOREIGN KEY (`areaId`) REFERENCES `areas` (`id`);

ALTER TABLE `serviceLog` ADD FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`);

ALTER TABLE `serviceLog` ADD FOREIGN KEY (`areaId`) REFERENCES `areas` (`id`);
