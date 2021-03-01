import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('instituicoes')
class Instituicao {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    ist_nome: string;

    @Column()
    ist_cidade: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Instituicao };

