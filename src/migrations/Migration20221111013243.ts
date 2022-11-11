import { Migration } from '@mikro-orm/migrations';

export class Migration20221111013243 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `jobs` add `temp_id` int unsigned null;');
    this.addSql('alter table `jobs` add constraint `jobs_temp_id_foreign` foreign key (`temp_id`) references `temps` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `jobs` add index `jobs_temp_id_index`(`temp_id`);');
  }

  async down(): Promise<void> {
    this.addSql('alter table `jobs` drop foreign key `jobs_temp_id_foreign`;');

    this.addSql('alter table `jobs` drop index `jobs_temp_id_index`;');
    this.addSql('alter table `jobs` drop `temp_id`;');
  }

}
