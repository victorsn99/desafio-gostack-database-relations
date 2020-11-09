import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class customers1604881836615 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'customers',
            columns: [{
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'email',
              type: 'varchar',
              isNullable: false,
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
        await queryRunner.dropTable('customers');
      }

}
