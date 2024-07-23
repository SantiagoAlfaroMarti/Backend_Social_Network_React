import mongoose from "mongoose";
import "dotenv/config";
import User from "../../entities/users/user.model.js";
import bcrypt from "bcrypt";

export const userSeeder = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {});

		const users = [
			{
				_id: "65edc858352c4f2a5cf087ba",
  				email: "morena@morena.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "admin",
			},
			{
				_id: "71gdc860352c4f2a5cf087bc",
				email: "maria@maria.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "72hedc861352c4f2a5cf087bd",
				email: "pedro@pedro.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "73iedc862352c4f2a5cf087be",
				email: "luis@luis.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087bb",
				email: "ana@ana.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "74jedc863352c4f2a5cf087bf",
				email: "carla@carla.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "75kedc864352c4f2a5cf087c0",
				email: "jorge@jorge.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "76ledc865352c4f2a5cf087c1",
				email: "carmen@carmen.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "78nedc867352c4f2a5cf087c3",
				email: "javier@javier.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			  },
			  {
				_id: "79oedc868352c4f2a5cf087c4",
				email: "laura@laura.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			  }
		];

		await User.insertMany(users);

		console.log("============================");
		console.log("Users seeder executed successfully");
		console.log("============================");
	} catch (error) {
		console.log("============================");
		console.log("Error seeding users:", error);
		console.log("============================");
	} finally {
		await mongoose.connection.close()
	}
}
export default userSeeder