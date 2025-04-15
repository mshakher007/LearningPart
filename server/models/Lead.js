const pool = require('../config/db');

class Lead {
  static async create({ name, email, phone, company = null }) {
    const [result] = await pool.execute(
      'INSERT INTO leads (name, email, phone, company) VALUES (?, ?, ?, ?)',
      [name, email, phone, company]
    );
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM leads WHERE id = ?', [id]);
    return rows[0];
  }

  static async findAll() {
    const [rows] = await pool.execute('SELECT * FROM leads ORDER BY created_at DESC');
    return rows;
  }

  static async updateScore(id, score) {
    let status = 'cold';
    if (score > 70) status = 'hot';
    else if (score > 30) status = 'warm';
    
    await pool.execute(
      'UPDATE leads SET score = ?, status = ? WHERE id = ?',
      [score, status, id]
    );
  }
}

module.exports = Lead;
