import { Column, PrimaryGeneratedColumn, BeforeUpdate } from "typeorm";
import { SoftDelete } from "./soft.delete";

export abstract class Common extends SoftDelete {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    public id: number;

    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "ts_created",
    })
    public ts_created: Date;

    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "ts_last_modified",
    })
    public ts_last_modified: Date;

    @BeforeUpdate()
    public addLastModified() {
        this.ts_last_modified = new Date();
    }
}
