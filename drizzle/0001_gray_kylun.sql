CREATE TABLE `audit_logs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`actorId` int,
	`action` varchar(120) NOT NULL,
	`entityType` varchar(80) NOT NULL,
	`entityId` int,
	`details` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `audit_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `organisation_contacts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`organisationId` int NOT NULL,
	`phone` varchar(40),
	`email` varchar(320),
	`website` text,
	`address` text,
	CONSTRAINT `organisation_contacts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `organisation_services` (
	`id` int AUTO_INCREMENT NOT NULL,
	`organisationId` int NOT NULL,
	`category` varchar(160) NOT NULL,
	`eligibility` text,
	CONSTRAINT `organisation_services_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `organisation_verifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`organisationId` int NOT NULL,
	`verificationMethod` varchar(120) NOT NULL,
	`sourceUrl` text NOT NULL,
	`officerId` int,
	`verifiedAt` timestamp NOT NULL DEFAULT (now()),
	`expiresAt` timestamp,
	`notes` text,
	CONSTRAINT `organisation_verifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `organisations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(160) NOT NULL,
	`description` text,
	`organisationType` varchar(120),
	`division` varchar(80),
	`district` varchar(80),
	`serviceMode` enum('Online','In-person','Both'),
	`languages` varchar(255),
	`status` enum('Verified','Directly Confirmed','Pending Verification','Verification Expired','Suspended','Sample') NOT NULL DEFAULT 'Pending Verification',
	`isSample` boolean NOT NULL DEFAULT true,
	`sourceUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `organisations_id` PRIMARY KEY(`id`),
	CONSTRAINT `organisations_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `resources` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`titleBn` varchar(255),
	`slug` varchar(160) NOT NULL,
	`topic` varchar(160) NOT NULL,
	`body` text,
	`bodyBn` text,
	`reviewStatus` enum('Draft','Reviewed','Archived') NOT NULL DEFAULT 'Draft',
	`isPublished` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `resources_id` PRIMARY KEY(`id`),
	CONSTRAINT `resources_slug_unique` UNIQUE(`slug`)
);
