const db = require("../utils/databaseUtil");

module.exports = class home {
  constructor(houseName, price, location, rating, photourl,description,id) {
    this.houseName = houseName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photourl = photourl;
    this.description = description;
    this.id = id; 
  }

  save() {
  const safeDescription = (this.description !== undefined) ? this.description : null;

  if(this.id){
    return db.execute('UPDATE homes SET houseName=?,price=?,location=?,rating=?,photourl=?,description=? WHERE id=?',
    [this.houseName, this.price, this.location, this.rating, this.photourl, safeDescription,this.id]);
  }
  else{
    // Agar description undefined hai, toh direct JS null (SQL NULL) pass ho jayega
    // Aur agar khali textarea hai to string pass ho jayegi
  
    return db.execute(
      'INSERT INTO homes (houseName, price, location, rating, photourl, description) VALUES (?, ?, ?, ?, ?, ?)',
      [this.houseName, this.price, this.location, this.rating, this.photourl, safeDescription]
    );
  }

  }

  static fetchAll() {
    return db.execute('SELECT * FROM homes');
  }

  static findById(homeId,) {
    return db.execute('SELECT * FROM homes WHERE id=?', [homeId]);
  }

  static deleteById(homeId) {
    return db.execute('DELETE FROM homes WHERE id=?', [homeId]);
  }
}