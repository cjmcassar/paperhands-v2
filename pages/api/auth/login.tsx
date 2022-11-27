import { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import initializeFirebaseServer from "../../../lib/initFirebaseAdmin";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const loginPayload = req.body.payload;

  const domain = "localhost:3000";

  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.ADMIN_PRIVATE_KEY!,
    "goerli"
  );

  let address;
  try {
    // Verify the login payload
    address = sdk.auth.verify(domain, loginPayload);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Invalid login payload" });
  }

  const { auth } = initializeFirebaseServer();

  const token = await auth.createCustomToken(address);

  return res.status(200).json({ token });
}
