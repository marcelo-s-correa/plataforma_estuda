import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('administradores')
class Administrador {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    adm_nome: string;

    @Column()
    adm_email: string;

    @Column()
    adm_senha: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: number;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Administrador }