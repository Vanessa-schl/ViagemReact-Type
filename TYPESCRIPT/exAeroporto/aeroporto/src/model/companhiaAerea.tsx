import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vane_companhiaAerea")
export class CompanhiaAerea{
    @PrimaryGeneratedColumn()
    codigoCompanhia: number;

    @Column({type: "varchar2", nullable: false})
    nomeCompanhia: string;

    @Column({type: "varchar2", nullable: false})
    nomeAeroporto: string;
}