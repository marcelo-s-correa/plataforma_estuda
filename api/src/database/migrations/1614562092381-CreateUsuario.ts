import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsuario1614562092381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "administradores",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'adm_nome',
                        type: 'varchar',
                    },
                    {
                        name: 'adm_email',
                        type: 'varchar',
                    },
                    {
                        name: 'adm_senha',
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
        await queryRunner.dropTable('administradores')
    }

}
