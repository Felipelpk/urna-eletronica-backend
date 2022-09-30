import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('voutes')
export class voutes{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'text' })
    voterName: string;

    @Column({ type: 'text' })
    snack: string;

    @Column({ type: 'text' })
    drink: string;
}