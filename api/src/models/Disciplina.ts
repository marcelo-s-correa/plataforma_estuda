import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('disciplinas')
class Disciplina {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    dsc_nome: string;

    @Column()
    dsc_descricao: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Disciplina };
