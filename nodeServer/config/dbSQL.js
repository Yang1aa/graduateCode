const QUERY_SQL = `select * from stores`;
const QUERY_SQL_INVENTORY = `select * from inventory`;
const INSERT_SQL = `INSERT INTO t_user SET ?`;
const UPDATE_SQL = `UPDATE t_user SET username=? WHERE id=?`;
const DELETE_SQL = `DELETE FROM t_user WHERE id=?`;

module.exports = { QUERY_SQL, INSERT_SQL, UPDATE_SQL, DELETE_SQL, QUERY_SQL_INVENTORY };