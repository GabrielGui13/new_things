-- AlterTable
ALTER TABLE "calc" ADD COLUMN     "structure_distance" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "calc_output" ALTER COLUMN "fic_plan_radius" DROP NOT NULL,
ALTER COLUMN "ae_limit_height" DROP NOT NULL,
ALTER COLUMN "ae_limit_horizontal_distance" DROP NOT NULL,
ALTER COLUMN "fic_plan_height" DROP NOT NULL;
