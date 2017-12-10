module.exports = function(knex, config) {
  var childQueries = config.child_tables.map(table => knex(table).select())
  return Promise
    .all([
      knex(config.main_table).select(),
      ...childQueries
    ])
    .then(data => {
      // console.log('data', data);
      let [ ones, twos ] = data;
      ones.forEach(one => {
        one[config.alias] = [];
        twos.map(two => {
          if(one[fr_key] === two.id) one[config.alias].push(two);
          delete one[fr_key];
        });
      });
      return ones;

    });
};
