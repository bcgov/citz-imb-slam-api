import { MigrationInterface, QueryRunner } from 'typeorm';

export class BaseMigrations1651257423005 implements MigrationInterface {
    name = 'BaseMigrations1651257423005';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "licensees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "modified" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "notes" text, CONSTRAINT "UQ_1de4f2d708eb718e5c4160fe46d" UNIQUE ("email"), CONSTRAINT "PK_c0cad3879f874b089aa2d2b6185" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "software_titles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "modified" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "publisher" character varying NOT NULL, "administrator" character varying NOT NULL, "quantity" integer DEFAULT '0', "renewal" TIMESTAMP, "notes" text, CONSTRAINT "UQ_64687151bbb0ccc045ab74a18de" UNIQUE ("title"), CONSTRAINT "PK_2c87f6d1193b7d8caf9c04f4a82" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "assigned_license" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "modified" TIMESTAMP NOT NULL DEFAULT now(), "softwareId" uuid NOT NULL, "licenseeId" uuid NOT NULL, CONSTRAINT "PK_ef45f06e1bbfa632d981f4bf6ad" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "assigned_license" ADD CONSTRAINT "FK_4bfd3e0d245083633276b5d2912" FOREIGN KEY ("softwareId") REFERENCES "software_titles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "assigned_license" ADD CONSTRAINT "FK_46d1a03874798f59d38a2d9897f" FOREIGN KEY ("licenseeId") REFERENCES "licensees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "assigned_license" DROP CONSTRAINT "FK_46d1a03874798f59d38a2d9897f"`,
        );
        await queryRunner.query(
            `ALTER TABLE "assigned_license" DROP CONSTRAINT "FK_4bfd3e0d245083633276b5d2912"`,
        );
        await queryRunner.query(`DROP TABLE "assigned_license"`);
        await queryRunner.query(`DROP TABLE "software_titles"`);
        await queryRunner.query(`DROP TABLE "licensees"`);
    }
}
