-- CreateTable
CREATE TABLE "Company" (
    "companyID" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("companyID")
);

-- CreateTable
CREATE TABLE "Department" (
    "departmentID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("departmentID")
);

-- CreateTable
CREATE TABLE "Employee" (
    "employee" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee")
);

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("departmentID") ON DELETE RESTRICT ON UPDATE CASCADE;
