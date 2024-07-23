import mongoose from "mongoose";
import "dotenv/config";
import User from "../../entities/users/user.model.js";
import bcrypt from "bcrypt";

export const userSeeder = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {});

		const users = [
			{
				_id: "65edc858352c4f2a5cf087c1",
  				email: "morena@morena.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "admin",
			},
			{
				_id: "65edc858352c4f2a5cf087c2",
				email: "maria@maria.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087c3",
				email: "pedro@pedro.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087c4",
				email: "luis@luis.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087c5",
				email: "ana@ana.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087c6",
				email: "carla@carla.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087c7",
				email: "jorge@jorge.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087c8",
				email: "carmen@carmen.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087c9",
				email: "javier@javier.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
				role: "user",
			},
			{
				_id: "65edc858352c4f2a5cf087ca",
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