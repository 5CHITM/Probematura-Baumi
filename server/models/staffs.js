const db = require('../db');

const getStaffs = async () => {
  const { rows } = await db.query('select * from staff;');
  return rows;
};

const addStaff = async (body) => {
  const staffs = await getStaffs();
  const maxId = Math.max(...staffs.map((staff) => staff.staff_id)) + 1;
  const { rows } = await db.query('insert into staff values ($1, $2, $3, $4, $5)', [maxId, body.name, body.image, body.phone, body.office]);
  return rows;
};

module.exports = { getStaffs, addStaff };
