const db = require('../db');

const getEstates = async () => {
  const { rows } = await db.query(
    'select e.id, e.title, e.image, e.postcode, e.bedrooms, e.bathrooms, e.preis, c.name, c.country, s.name, s.image as staffImage, s.phone, s.office from estates e join cities c on c.city_id = e.city_id join staff s on e.staff_id = s.staff_id;',
  );
  return rows;
};

const deleteEstate = async (id) => {
  const { rows } = await db.query('delete from estates where id = 1 returning id, title;', [id]);
  return rows;
};

module.exports = { getEstates, deleteEstate };
