import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('alunos')
class Aluno {

    @PrimaryGeneratedColumn('uuid')
    aln_matricula: string;

    @Column()
    aln_nome: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.aln_matricula) {
            this.aln_matricula = uuid();
        }
    }
}

export { Aluno };
