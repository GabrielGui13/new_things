-- AlterTable
ALTER TABLE "plans" ALTER COLUMN "external_id" SET DEFAULT E'default-plan-${uuid()}';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "external_id" SET DEFAULT E'default-user-${uuid()}';
