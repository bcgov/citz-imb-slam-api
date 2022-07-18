import { MigrationInterface, QueryRunner } from 'typeorm';

export class SoftwareRefactor1657819940609 implements MigrationInterface {
    name = 'SoftwareRefactor1657819940609';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "publisher" DROP NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "publisher" SET DEFAULT ''`,
        );
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "administrator" DROP NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "administrator" SET DEFAULT ''`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "administrator" DROP DEFAULT`,
        );
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "administrator" SET NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "publisher" DROP DEFAULT`,
        );
        await queryRunner.query(
            `ALTER TABLE "software_titles" ALTER COLUMN "publisher" SET NOT NULL`,
        );
    }
}
