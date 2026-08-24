import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agendamento } from "./Agendamento.js";
import { Quadra } from "./Quadra.js";

@Entity("clientes")
export class Cliente {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  nome!: string;

  @Column({ unique: true })
  contato!: string;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
  agendamentos!: Agendamento[];
}
