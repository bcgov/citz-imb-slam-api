import { MigrationInterface, QueryRunner } from 'typeorm';

export class adminUsers1654023676305 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        //github authorization
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('SDToews', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('aideninbcgov', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('akroon3r', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('lbenso', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('WRLloyd', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('John-Dion', 'Admin');",
        );

        // keycloak authorization
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('Scott Toews', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('Aiden In', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('Adam Kroon', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('Laura Benson', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('Will Lloyd', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('John Dion', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('Dylan Barkowsky', 'Admin');",
        );
        await queryRunner.query(
            "INSERT INTO users (username, role) VALUES ('Matthew Sielecki', 'Admin');",
        );
    }
    //SELECT * FROM users;
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'SDToews';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'aideninbcgov';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'akroon3r';",
        );
        await queryRunner.query("DELETE FROM users WHERE username = 'lbenso';");
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'WRLloyd';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'John-Dion';",
        );

        // keycloak authorization
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'Scott Toews';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'Aiden In';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'Adam Kroon';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'Laura Benson';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'Will Lloyd';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'John Dion';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'Matthew Sielecki';",
        );
        await queryRunner.query(
            "DELETE FROM users WHERE username = 'Dylan Barkowsky';",
        );
    }
}
