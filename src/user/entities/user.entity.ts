import { Column, ObjectID, ObjectIdColumn } from "typeorm";

export class User {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  name: string;
}
