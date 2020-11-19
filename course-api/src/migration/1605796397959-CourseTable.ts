import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CourseTable1605796397959 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'level', type: 'varchar', isNullable: false },
          { name: 'shift', type: 'varchar', isNullable: false },
          { name: 'kind', type: 'varchar', isNullable: false },
          { name: 'campus_id', type: 'int4', isNullable: false },
        ],
      }),
      false,
    );

    await queryRunner.createForeignKey(
      'courses',
      new TableForeignKey({
        columnNames: ['campus_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campuses',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE courses`);
  }
}
