-- DropForeignKey
ALTER TABLE "calc_output" DROP CONSTRAINT "calc_output_calc_id_fkey";

-- AddForeignKey
ALTER TABLE "calc_output" ADD CONSTRAINT "calc_output_calc_id_fkey" FOREIGN KEY ("calc_id") REFERENCES "calc"("id") ON DELETE CASCADE ON UPDATE CASCADE;
