import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('snacks')
export class snacks{
    @PrimaryColumn({ type: 'int' })
    id: number;

    @Column({ type: 'text' })
    name: string;
}