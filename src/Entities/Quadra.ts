import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agendamento } from "./Agendamento.js";

@Entity("quadras")
export class Quadra {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column()
  nome!: string;
  @Column()
  tipo!: string;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.quadra)
  agendamentos!: Agendamento[];
}
