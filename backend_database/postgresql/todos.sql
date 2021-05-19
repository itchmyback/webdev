-- Created by Vertabelo
-- Last modification

-- tables
--Table: TODOS
CREATE TABLE todos (
    todo_id integer NOT NULL,
    description varchar(100) NOT NULL,
    is_complete boolean NOT NULL DEFAULT false,
    creation_timestamp timestamp NOT NULL now(),
    modified_timestamp timestamp NOT NULL now(),
    user_id integer NOT NULL,
    CONSTRAINT todos_pk PRIMARY KEY (todo_id)
);

CREATE TABLE users (
    user_id serial NOT NULL,
    first_name varchar(50) NULL,
    last_name varchar(50) NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (user_id)
);


-- foreign keys
-- Reference: todos_user
-- what is this todos_user(s)?
ALTER TABLE todos ADD CONSTRAINT todos_users
    FOREIGN KEY (user_id)
    REFERENCES users (user_id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE;

-- End of file

INSERT INTO users (first_name, last_name)
VALUES ('Piyush', 'Mehta');

INSERT INTO todos (description, is_complete, user_id)
VALUES ('Call mom', false, 2);