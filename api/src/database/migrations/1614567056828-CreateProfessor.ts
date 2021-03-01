import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfessor1614567056828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "professores",
                columns: [
                    {
                        name: 'prf_matricula',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'prf_nome',
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
        await queryRunner.dropTable('professores')
    }

}
