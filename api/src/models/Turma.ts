import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('turmas')
class Turma {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    trm_nome: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Turma };
