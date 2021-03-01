import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTurma1614566650482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "turmas",
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'trm_nome',
                        type: 'varchar',

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
        await queryRunner.dropTable('turmas')
    }

}
