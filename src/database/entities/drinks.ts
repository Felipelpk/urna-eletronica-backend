import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('drinks')
export class drinks{
    @PrimaryColumn({ type: 'int' })
    id: number;

    @Column({ type: 'text' })
    name: string;
}