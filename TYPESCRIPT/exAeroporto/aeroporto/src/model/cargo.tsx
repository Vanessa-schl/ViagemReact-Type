import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vane_cargos')
export class Cargo{
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({type: 'varchar2'})
    nome: string;

    @Column({type: 'varchar2', nullable: true})
    descricao: string;
}