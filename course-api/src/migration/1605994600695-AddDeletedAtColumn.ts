import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDeletedAtColumn1605994600695 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE universities ADD COLUMN "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL;`,
    );

    queryRunner.query(
      `ALTER TABLE campuses ADD COLUMN "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL;`,
    );

    queryRunner.query(
      `ALTER TABLE courses ADD COLUMN "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL;`,
    );

    queryRunner.query(
      `ALTER TABLE offers ADD COLUMN "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE universities DROP COLUMN "deleted_at";`);
    queryRunner.query(`ALTER TABLE campuses DROP COLUMN "deleted_at";`);
    queryRunner.query(`ALTER TABLE courses DROP COLUMN "deleted_at";`);
    queryRunner.query(`ALTER TABLE offers DROP COLUMN "deleted_at";`);
  }
}
