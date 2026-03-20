/*
  Warnings:

  - You are about to drop the column `codeTemporaire` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `dateNaissance` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `priorite` on the `Patient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telephone]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telephone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serviceId` to the `Medecin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Medecin` ADD COLUMN `serviceId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `codeTemporaire`,
    DROP COLUMN `dateNaissance`,
    DROP COLUMN `priorite`,
    ADD COLUMN `age` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `estComplet` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `estPrioritaire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `estRefere` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `telephone` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `telephone` VARCHAR(191) NULL,
    MODIFY `nom` VARCHAR(191) NULL,
    MODIFY `prenom` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `prixTicket` DOUBLE NOT NULL DEFAULT 5000,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Service_nom_key`(`nom`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FileAttente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,
    `numero` INTEGER NOT NULL,
    `estPrioritaire` BOOLEAN NOT NULL DEFAULT false,
    `statut` ENUM('EN_ATTENTE', 'VALIDE', 'EN_COURS', 'TERMINE', 'ANNULE') NOT NULL DEFAULT 'EN_ATTENTE',
    `heurePrise` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `heureValidation` DATETIME(3) NULL,
    `heureExpiration` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FileAttente_patientId_key`(`patientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `medecinId` INTEGER NULL,
    `serviceId` INTEGER NOT NULL,
    `fileAttenteId` INTEGER NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `montantPaye` DOUBLE NOT NULL,
    `montantRestant` DOUBLE NOT NULL DEFAULT 0,
    `statut` ENUM('EN_ATTENTE', 'EN_COURS', 'TERMINE', 'ANNULE') NOT NULL DEFAULT 'EN_ATTENTE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Ticket_fileAttenteId_key`(`fileAttenteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RendezVous` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `medecinId` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,
    `creerPar` ENUM('MEDECIN', 'ACCUEIL') NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `heure` VARCHAR(191) NOT NULL,
    `motif` VARCHAR(191) NULL,
    `statut` ENUM('PLANIFIE', 'CONFIRME', 'ANNULE') NOT NULL DEFAULT 'PLANIFIE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `type` ENUM('INSCRIPTION', 'RENDEZ_VOUS', 'PATIENT_REFERE', 'URGENCE') NOT NULL,
    `canal` ENUM('SMS', 'IN_APP') NOT NULL DEFAULT 'IN_APP',
    `message` VARCHAR(191) NOT NULL,
    `lu` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Patient_telephone_key` ON `Patient`(`telephone`);

-- CreateIndex
CREATE UNIQUE INDEX `User_telephone_key` ON `User`(`telephone`);

-- AddForeignKey
ALTER TABLE `Accueil` ADD CONSTRAINT `Accueil_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medecin` ADD CONSTRAINT `Medecin_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileAttente` ADD CONSTRAINT `FileAttente_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileAttente` ADD CONSTRAINT `FileAttente_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_medecinId_fkey` FOREIGN KEY (`medecinId`) REFERENCES `Medecin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_fileAttenteId_fkey` FOREIGN KEY (`fileAttenteId`) REFERENCES `FileAttente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RendezVous` ADD CONSTRAINT `RendezVous_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RendezVous` ADD CONSTRAINT `RendezVous_medecinId_fkey` FOREIGN KEY (`medecinId`) REFERENCES `Medecin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RendezVous` ADD CONSTRAINT `RendezVous_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
