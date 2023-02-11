import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
	.object({
		PAYLOAD_SECRET: z.string().default(""),
		MONGODB_URI: z.string().default(""),
		PAYLOAD_SERVER_URL: z.string().default("http://localhost:3000"),
	})
	.parse(process.env);
