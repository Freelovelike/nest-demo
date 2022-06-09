import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class AppEntity {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
