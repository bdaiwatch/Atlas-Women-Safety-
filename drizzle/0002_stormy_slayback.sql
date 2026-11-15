CREATE TABLE `club_activities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clubId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`activityDate` timestamp,
	`attendanceCount` int,
	`reportNotes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `club_activities_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `club_memberships` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clubId` int NOT NULL,
	`memberCode` varchar(64) NOT NULL,
	`memberType` enum('Student Leader','Teacher Adviser','Staff') NOT NULL,
	`status` enum('Pending','Active','Removed') NOT NULL DEFAULT 'Pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `club_memberships_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `clubs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`schoolId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`status` enum('Draft','Active','Paused') NOT NULL DEFAULT 'Draft',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `clubs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `professional_credentials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`professionalId` int NOT NULL,
	`credentialType` varchar(160) NOT NULL,
	`verificationSource` text,
	`status` enum('Pending','Checked','Rejected') NOT NULL DEFAULT 'Pending',
	`notes` text,
	CONSTRAINT `professional_credentials_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `professionals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(180) NOT NULL,
	`designation` varchar(180),
	`organisation` varchar(255),
	`expertise` text,
	`geographicCoverage` varchar(255),
	`languages` varchar(255),
	`officialContact` text,
	`consentToPublish` boolean NOT NULL DEFAULT false,
	`status` enum('Pending Verification','Verified Expert','Institutional Representative','Suspended') NOT NULL DEFAULT 'Pending Verification',
	`isSample` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `professionals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `school_staff` (
	`id` int AUTO_INCREMENT NOT NULL,
	`schoolId` int NOT NULL,
	`name` varchar(180) NOT NULL,
	`role` varchar(120) NOT NULL,
	`email` varchar(320) NOT NULL,
	`approvalStatus` enum('Pending','Approved','Suspended') NOT NULL DEFAULT 'Pending',
	CONSTRAINT `school_staff_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `schools` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`address` text NOT NULL,
	`division` varchar(80),
	`district` varchar(80),
	`contactEmail` varchar(320) NOT NULL,
	`contactPhone` varchar(40),
	`approvalStatus` enum('Pending Approval','Verified School','Suspended') NOT NULL DEFAULT 'Pending Approval',
	`safeguardingContact` varchar(180),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `schools_id` PRIMARY KEY(`id`)
);
