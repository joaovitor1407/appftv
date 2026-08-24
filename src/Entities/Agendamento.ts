import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente.js";
import { Quadra } from "./Quadra.js";

@Entity("agendamentos")
export class Agendamento {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "timestamp" })
  startsAt!: string;

  @Column({ type: "timestamp" })
  endsAt!: string;

  @Column()
  quadraId!: string;

  @Column()
  clienteId!: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.agendamentos, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "clienteId" })
  cliente?: Cliente;

  @ManyToOne(() => Quadra, (quadra) => quadra.agendamentos, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "quadraId" })
  quadra?: Quadra;
}
