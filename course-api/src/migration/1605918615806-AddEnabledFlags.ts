import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEnabledFlags1605918615806 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE universities ADD COLUMN "enabled" BOOLEAN DEFAULT TRUE;`,
    );

    queryRunner.query(
      `ALTER TABLE campuses ADD COLUMN "enabled" BOOLEAN DEFAULT TRUE;`,
    );

    queryRunner.query(
      `ALTER TABLE courses ADD COLUMN "enabled" BOOLEAN DEFAULT TRUE;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE universities DROP COLUMN "enabled";`);
    queryRunner.query(`ALTER TABLE campuses DROP COLUMN "enabled";`);
    queryRunner.query(`ALTER TABLE courses DROP COLUMN "enabled";`);
  }
}
