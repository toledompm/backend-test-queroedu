import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class OfferTable1605800802210 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'offers',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'full_price', type: 'float', isNullable: false },
          { name: 'price_with_discount', type: 'float', isNullable: false },
          { name: 'discount_percentage', type: 'float', isNullable: false },
          { name: 'start_date', type: 'date', isNullable: false },
          { name: 'enrollment_semester', type: 'varchar', isNullable: false },
          { name: 'enabled', type: 'boolean', isNullable: false },
          { name: 'course_id', type: 'int4', isNullable: false },
        ],
      }),
      false,
    );

    await queryRunner.createForeignKey(
      'offers',
      new TableForeignKey({
        columnNames: ['course_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'courses',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE offers`);
  }
}
