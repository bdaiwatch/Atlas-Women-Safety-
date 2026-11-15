CREATE TABLE `issued_certificates` (
  `id` int AUTO_INCREMENT NOT NULL,
  `certificateId` varchar(40) NOT NULL,
  `learnerId` int,
  `learnerName` varchar(255) NOT NULL,
  `courseTitle` varchar(255) NOT NULL,
  `completionDate` timestamp NOT NULL,
  `issuedAt` timestamp NOT NULL DEFAULT (now()),
  `verificationUrl` text,
  `status` enum('VALID','REVOKED') NOT NULL DEFAULT 'VALID',
  `revokedAt` timestamp,
  `revokedBy` int,
  `revocationReason` text,
  CONSTRAINT `issued_certificates_id` PRIMARY KEY(`id`),
  CONSTRAINT `issued_certificates_certificateId_unique` UNIQUE(`certificateId`)
);
--> statement-breakpoint
