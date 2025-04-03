-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ServiceRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyName" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT,
    "website" TEXT,
    "projectName" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "projectObjective" TEXT NOT NULL,
    "targetAudience" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "operatingSystems" TEXT NOT NULL,
    "devices" TEXT NOT NULL,
    "projectScope" TEXT NOT NULL,
    "essentialFeatures" TEXT NOT NULL,
    "externalServices" TEXT NOT NULL,
    "authenticationMethods" TEXT NOT NULL,
    "userManagement" TEXT NOT NULL,
    "multiLanguage" BOOLEAN NOT NULL DEFAULT false,
    "accessibility" BOOLEAN NOT NULL DEFAULT false,
    "customizationOptions" TEXT NOT NULL,
    "specificModules" TEXT NOT NULL,
    "visualStyle" TEXT NOT NULL,
    "visualReferences" TEXT NOT NULL,
    "colorSchemes" TEXT NOT NULL,
    "customizationLevel" TEXT NOT NULL,
    "interactionsAnimations" TEXT NOT NULL,
    "preferredTech" TEXT NOT NULL,
    "systemIntegration" TEXT NOT NULL,
    "dataStorage" TEXT NOT NULL,
    "preferredDatabase" TEXT NOT NULL,
    "scalability" TEXT NOT NULL,
    "securityMeasures" TEXT NOT NULL,
    "updateFrequency" TEXT NOT NULL,
    "postLaunchSupport" TEXT NOT NULL,
    "trainingNeeds" TEXT NOT NULL,
    "documentation" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "criticalDates" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "nda" BOOLEAN NOT NULL DEFAULT false,
    "intellectualProperty" TEXT NOT NULL,
    "legalCompliance" TEXT NOT NULL,
    "additionalComments" TEXT NOT NULL,
    "restrictions" TEXT NOT NULL,
    "existingDocumentation" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
