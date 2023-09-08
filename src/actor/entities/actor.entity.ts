import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    actor_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    last_update: Date;
}
