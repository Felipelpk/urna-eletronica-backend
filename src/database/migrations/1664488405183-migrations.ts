import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1664488405183 implements MigrationInterface {
    name = 'migrations1664488405183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "voutes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "voterName" text NOT NULL, "snack" text NOT NULL, "drink" text NOT NULL, CONSTRAINT "PK_693b2480ef6e22640c31fc8da1b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "voutes"`);
    }

}
