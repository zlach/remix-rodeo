import { useEffect } from "react";
import GameBoard from "~/components/GameBoard";
import { json, MetaFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { dbConnect } from "db.server";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Boggle Game" },
    { name: "description", content: "Play Boggle online!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const db = await dbConnect();

  const users = await db.all("SELECT * FROM users");
  await db.close();
  return json({ users });
};

export default function BoggleGame() {
  const { users } = useLoaderData<typeof loader>();

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="boggle-game">
      <h1>Boggle Game</h1>
      <GameBoard />
    </div>
  );
}
