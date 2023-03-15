import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vane_passageiros")
export class Aeroporto {
  @PrimaryGeneratedColumn()
  codigoVoo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

}

