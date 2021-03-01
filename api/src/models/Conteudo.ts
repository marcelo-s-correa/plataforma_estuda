import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('conteudos')
class Conteudo {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    cnt_nome: string;

    @Column()
    cnt_descricao: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Conteudo };
