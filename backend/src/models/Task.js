const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://ecotask:ecotask@db:5432/ecotask'
});

class Task {
  static async create(taskData) {
    const { title, description, responsible, deadline, priority } = taskData;
    const query = `
      INSERT INTO tasks (title, description, responsible, deadline, priority, carbon_footprint)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const values = [title, description, responsible, deadline, priority, 0.5]; // Valeur par défaut pour le bilan carbone
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async getAll() {
    const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getById(id) {
    const query = 'SELECT * FROM tasks WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async update(id, taskData) {
    const { title, description, responsible, deadline, priority } = taskData;
    const query = `
      UPDATE tasks
      SET title = $1, description = $2, responsible = $3, deadline = $4, priority = $5
      WHERE id = $6
      RETURNING *
    `;
    const values = [title, description, responsible, deadline, priority, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = Task; 