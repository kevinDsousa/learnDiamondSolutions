import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1691792042379 implements MigrationInterface {
  public async up(_queryRunner: QueryRunner): Promise<void> {
    await _queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "name" To "course"`,
    );
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {
    await _queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "course" To "name"`,
    );
  }
}
