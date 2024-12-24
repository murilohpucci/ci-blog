<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateNodesTable extends Migration
{
    protected $DBGroup = 'default';

    public function up()
    {
        $this->db->disableForeignKeyChecks();
        $this->forge->addField([
            'id' => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'title' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
            ],
            'image' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'null'       => true,
            ],
            'summary' => [
                'type'       => 'TEXT',
                'null'       => true,
            ],
            'content' => [
                'type'       => 'TEXT',
                'null'       => true,
            ],
            'published' => [
                'type'       => 'TINYINT',
                'constraint' => 1,
                'default'    => 0,
            ],
            'user_id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'deleted_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);

        $this->forge->addKey('id', true);
        $this->forge->addForeignKey('user_id', 'users', 'id', fkName: 'nodes_userid_fk');
        $this->forge->createTable('nodes');
        $this->db->enableForeignKeyChecks();
    }

    public function down()
    {
        $this->forge->dropForeignKey('nodes', 'nodes_userid_fk');
        $this->forge->dropTable('nodes', true);
    }
}
