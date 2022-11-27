import { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import initializeFirebaseServer from "../../../lib/initFirebaseAdmin";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const loginPayload = req.body.payload;

  const domain = "paperhands.app";

  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_PRIVATE_KEY!,
    "goerli"
  );

  let address;
  try {
    address = await sdk.auth.verify(domain, loginPayload);
  } catch (e) {
    console.log(e);
    res.status(401).send("Unauthorized");
    return;
  }

  const { auth } = initializeFirebaseServer();

  const token = await auth.createCustomToken(address);

  return res.status(200).json({ token });
}
