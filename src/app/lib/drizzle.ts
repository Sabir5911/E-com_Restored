import { drizzle } from 'drizzle-orm/vercel-postgres';
import { integer,  pgTable,  serial, varchar } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { sql } from '@vercel/postgres';

export const userdetails = pgTable("cartdetails", {
    id: serial('id').primaryKey(),

    user_id: varchar('user_id').notNull(),

    product_id: varchar('product_id'),


    quantity: integer('quantity'),

    product_name: varchar("product_name"),


    product_image: varchar("product_image"),

    product_type: varchar("product_type"),
    product_size:varchar("product_size"),
    price:integer("price"),

})
export type User = InferSelectModel<typeof userdetails>;

export type NewUser=InferInsertModel<typeof userdetails>;

export const db=drizzle(sql)

