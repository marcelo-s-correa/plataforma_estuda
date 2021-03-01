import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAluno1614564106988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "alunos",
                columns: [
                    {
                        name: 'aln_matricula',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'aln_nome',
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
        await queryRunner.dropTable('alunos')
    }

}
