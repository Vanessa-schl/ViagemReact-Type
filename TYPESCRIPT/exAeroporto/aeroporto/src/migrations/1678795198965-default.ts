import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678795198965 implements MigrationInterface {
    name = 'default1678795198965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vane_passageiros" MODIFY "codigoVoo" number  `);
        await queryRunner.query(`ALTER TABLE "vane_passageiros" ADD CONSTRAINT "PK_01f2497e7e56bb372f58a651f19" PRIMARY KEY ("codigoVoo")`);
        await queryRunner.query(`ALTER TABLE "vane_passageiros" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "vane_passageiros" ADD "nome" varchar2(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vane_passageiros" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "vane_passageiros" ADD "nome" nvarchar2(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vane_passageiros" DROP CONSTRAINT "PK_01f2497e7e56bb372f58a651f19"`);
        await queryRunner.query(`ALTER TABLE "vane_passageiros" MODIFY "codigoVoo" number  `);
    }

}
