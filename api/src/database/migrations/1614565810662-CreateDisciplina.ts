import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDisciplina1614565810662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "disciplinas",
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'dsc_nome',
                        type: 'varchar',

                    },
                    {
                        name: 'dsc_descricao',
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
        await queryRunner.dropTable('disciplinas')
    }

}
