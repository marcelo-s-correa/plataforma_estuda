import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateConteudo1614566422055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "conteudos",
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'cnt_nome',
                        type: 'varchar',

                    },
                    {
                        name: 'cnt_descricao',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'Timestamp',
                    }
                ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('conteudos')
    }

}
