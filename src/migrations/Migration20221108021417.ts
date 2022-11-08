import { Migration } from '@mikro-orm/migrations';

export class Migration20221108021417 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `jobs` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `start_date` datetime not null, `end_date` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `temps` (`id` int unsigned not null auto_increment primary key, `first_name` varchar(255) not null, `last_name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `jobs`;');

    this.addSql('drop table if exists `temps`;');
  }

}
