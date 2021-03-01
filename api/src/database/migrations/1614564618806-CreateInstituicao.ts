import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInstituicao1614564618806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "instituicoes",
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'ist_nome',
                        type: 'varchar',

                    },
                    {
                        name: 'ist_cidade',
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
        await queryRunner.dropTable('instituicoes')
    }

}
