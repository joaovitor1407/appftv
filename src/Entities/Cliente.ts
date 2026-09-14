import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agendamento } from "./Agendamento.js";

@Entity("clientes")
export class Cliente {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  nome!: string;

  @Column({ unique: true, type: "varchar" })
  email!: string;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
  agendamentos!: Agendamento[];
}
