import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('voters')
export class voters{
    @PrimaryColumn({ type: 'int' })
    id: number;

    @Column({ type: 'text' })
    name: string;

    @Column({ default: 'false', type: 'text' })
    haveVoted: string;
}