const Sequelize = require("sequelize");



 sequelize = new Sequelize("jobify", "Amine", "Amine@2022", {
  host: "141.95.109.28",
  dialect: "mysql",
  operatorsAlias: false
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


// var event = sequelize.define("event", {
//   eventID: {
//     type: Sequelize.DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   eventName : Sequelize.DataTypes.STRING,
//   location: Sequelize.DataTypes.STRING,
//   date_time: Sequelize.DataTypes.STRING,
//   nbrWaiter: Sequelize.DataTypes.STRING,
//   nbrChef: Sequelize.DataTypes.STRING,
//   nbrCleaningWorker: Sequelize.DataTypes.STRING,
//   duration: Sequelize.DataTypes.INTEGER,
//   dailyPay: Sequelize.DataTypes.STRING,
//   nbWorkers : Sequelize.DataTypes.STRING,
//   imageUri : Sequelize.DataTypes.STRING,
//   companyId : Sequelize.DataTypes.STRING
  
// });

// var company = sequelize.define("company", {
//   companyId: {
//     type: Sequelize.DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   Bussinessfield: Sequelize.DataTypes.STRING,
//   label: Sequelize.DataTypes.STRING,
//   Email: Sequelize.DataTypes.STRING,
//   phoneNumber: Sequelize.DataTypes.INTEGER,
//   imageUrl: Sequelize.DataTypes.STRING,
//   passWord : Sequelize.DataTypes.STRING
  
// });

// var worker = sequelize.define("worker", {
//   workerId: {
//     type: Sequelize.DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   firstName: Sequelize.DataTypes.STRING,
//   LastName: Sequelize.DataTypes.STRING,
//   Email: Sequelize.DataTypes.STRING,
//   phoneNumber: Sequelize.DataTypes.INTEGER,
//   imageUrl: Sequelize.DataTypes.STRING,
//   CVUrl : Sequelize.DataTypes.STRING,
//   availibility : Sequelize.DataTypes.STRING,
//   password : Sequelize.DataTypes.STRING,
//   avgRating: Sequelize.DataTypes.INTEGER,
  
// });










// var feedback = sequelize.define("feedback", {
//   rate : Sequelize.DataTypes.INTEGER,
//   text : Sequelize.DataTypes.STRING
// })



// var hiringOffer = sequelize.define("hiringOffer", {
//   from_day : Sequelize.DataTypes.DATE,
//   duration_days : Sequelize.DataTypes.INTEGER,
//   dailyPayement : Sequelize.DataTypes.INTEGER,
//   validation : Sequelize.DataTypes.INTEGER 
// })


// var subscription = sequelize.define("subscription", {
//   validation : Sequelize.DataTypes.INTEGER 
// })

// var accepted_Profile = sequelize.define("accepted_Profile", {
//   date : Sequelize.DataTypes.DATE 
// })





// ///////////////////////accpted profiles realation ///////////////////

// event.belongsToMany(worker , {through : accepted_Profile})
// worker.belongsToMany(event , {through : accepted_Profile})



// ///////////////////// subscription realation///////////////////////////////////////

// company.belongsToMany(worker , {through : subscription})
// worker.belongsToMany(company , {through : subscription})


// ///////////////////////// HIRING OFFER REALATION //////////////////////////////////////////
// hiringOffer.belongsTo(company)
// hiringOffer.belongsTo(worker)
// hiringOffer.belongsTo(event)

// //////////////// feed BACK REALATION ///////////////////////////
// company.belongsToMany(worker , {through : feedback})
// worker.belongsToMany(company , {through : feedback})
// event.belongsTo(company)



// sequelize.sync({force:true})

module.exports =sequelize;
global.sequelize = sequelize ;

