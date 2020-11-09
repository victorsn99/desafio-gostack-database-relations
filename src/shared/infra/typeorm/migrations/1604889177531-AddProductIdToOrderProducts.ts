import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddProductIdToOrderProducts1604889177531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn( 'order_products', 
          new TableColumn({
              name: 'product_id',
              type: 'uuid',
              isNullable: true,
          })),

          await queryRunner.createForeignKey('order_products', new TableForeignKey({
              name: 'ordersProductsProducts',
              columnNames: ['product_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'products',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
          }));
    }
  
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_products', 'ordersProductsProducts');
        await queryRunner.dropColumn('order_products', 'product_id');
      }
}

