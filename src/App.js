import "./styles.css";
import Card from "./Components/Card/card";
import jiras from "./data/jiras";
import { Client } from "@notionhq/client";
import { NotionRenderer } from "@notion-render/client";
import React, { useEffect, useState } from "react";

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DB_ID;

const renderer = new NotionRenderer();

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await client.databases.query({
        database_id: databaseId,
      });

      const formatted = response.results.map((page) => {
        const properties = page.properties;
        return {
          nombre: properties.Comunicación?.title[0]?.text?.content || "",
        };
      });

      setItems(formatted);
    }

    fetchData();
  }, []);

  console.log(items);
  return (
    <div className="App">
      <div className="container">
        {jiras.map((jira) => (
          <Card
            com={jira.Com}
            index={jira.nº}
            key={jira.nº}
            accepted={jira.Aceptada}
            deployed={jira.Subida}
            family={jira.Familia}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.nombre} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mt-2">{item.nombre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
