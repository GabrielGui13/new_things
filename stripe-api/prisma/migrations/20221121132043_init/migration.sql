/*
  Warnings:

  - You are about to drop the column `name` on the `calc` table. All the data in the column will be lost.
  - You are about to drop the `sizing_type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dimensioning_type_id` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dpi` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dpi_distance` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ea_radius` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `explosive_atmosphere` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `margin` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_class_id` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spda_height` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spda_id` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `structure_id` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `norm_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calc" DROP COLUMN "name",
ADD COLUMN     "dimensioning_type_id" TEXT NOT NULL,
ADD COLUMN     "dpi" BOOLEAN NOT NULL,
ADD COLUMN     "dpi_distance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ea_radius" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "explosive_atmosphere" BOOLEAN NOT NULL,
ADD COLUMN     "margin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "project_class_id" TEXT NOT NULL,
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "spda_height" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "spda_id" TEXT NOT NULL,
ADD COLUMN     "structure_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "norm_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "sizing_type";

-- CreateTable
CREATE TABLE "dimensioning_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dimensioning_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "norm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "norm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "norm_id" TEXT NOT NULL,
    "sphere_radius" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "project_class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calc_output" (
    "id" TEXT NOT NULL,
    "fic_plan_radius" DOUBLE PRECISION NOT NULL,
    "ae_limit_height" DOUBLE PRECISION NOT NULL,
    "ae_limit_horizontal_distance" DOUBLE PRECISION NOT NULL,
    "spda_calculated_height" DOUBLE PRECISION NOT NULL,
    "fic_plan_height" DOUBLE PRECISION NOT NULL,
    "protected_horizontal_distance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "calc_output_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_norm_id_fkey" FOREIGN KEY ("norm_id") REFERENCES "norm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_class" ADD CONSTRAINT "project_class_norm_id_fkey" FOREIGN KEY ("norm_id") REFERENCES "norm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calc" ADD CONSTRAINT "calc_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calc" ADD CONSTRAINT "calc_structure_id_fkey" FOREIGN KEY ("structure_id") REFERENCES "structure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calc" ADD CONSTRAINT "calc_spda_id_fkey" FOREIGN KEY ("spda_id") REFERENCES "spda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calc" ADD CONSTRAINT "calc_dimensioning_type_id_fkey" FOREIGN KEY ("dimensioning_type_id") REFERENCES "dimensioning_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calc" ADD CONSTRAINT "calc_project_class_id_fkey" FOREIGN KEY ("project_class_id") REFERENCES "project_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
