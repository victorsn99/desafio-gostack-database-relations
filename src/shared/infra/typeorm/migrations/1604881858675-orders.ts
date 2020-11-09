import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class orders1604881858675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'orders',
            columns: [{
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
          })
        );
      }
  
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
      }

}
