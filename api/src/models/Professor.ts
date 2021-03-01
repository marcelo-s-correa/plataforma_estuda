import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('professores')
class Professor {

    @PrimaryGeneratedColumn('uuid')
    prf_matricula: string;

    @Column()
    prf_nome: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.prf_matricula) {
            this.prf_matricula = uuid();
        }
    }
}

export { Professor }